import '@/components/pages/Inbox/Inbox.css';

import type {
  arrayOfPosts,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import '@/components/pages/FollowedAndFollow/FollowedAndFollow.css';
import { ArrowLeft } from '../ProfileCreator/ArrowLeft';
import { useCurrentUser } from '@/store/useCurrentUser';
import { baseUrl } from '@/utils/functions';
import { useUserCreator } from '@/store/useUserCreator';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { useRef, useState } from 'react';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { ListOfUsers } from '@/components/pages/FollowedAndFollow/ListOfUser';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];
const NUM_OF_ROW_THAT_RENDER_MORE_ROWS = 9;
const urlFirework = baseUrl('/assets/tik-tok-animated-logo.gif');
const infoImg = baseUrl('/assets/info.svg');
const MAX_LENGTH_OF_USERNAME = 10;

export function Inbox() {
  const commonProps = useUserCreator(state => state.commonProps);
  const getArrayOfFollowedAccounts = useFollowedAccount(
    state => state.getArrayOfFollowedAccounts
  );
  const [arrayOfFollowedAccounts, setArrayOfFollowedAccount] = useState(() => {
    return getArrayOfFollowedAccounts();
  })
  const username = commonProps.username;
  const user = useCurrentUser(state => state.user);
  const theIdOfTheUserThaisYou = user?.id;
  const theUserIsInItsSameProfile = username === user?.username;
  const [limit, setLImit] = useState(10);

  function updateLimit() {
    setLImit(prev => prev + NUM_OF_ROW_THAT_RENDER_MORE_ROWS);
  }

  const flattenedArrayOfAllPosts = ALL_POSTS.map(el => el[0]);
  const flattenedArrayOfAllPostsCommonProps = flattenedArrayOfAllPosts
    .filter(el => el.userId !== commonProps.userId)
    .filter(el => !arrayOfFollowedAccounts.includes(el.userId));

  const { length: LENGTH_ACCOUNTS_AVAILABLE } =
    flattenedArrayOfAllPostsCommonProps;

  let arrayOfReccomendedAccounts: postComonProps[] = Array.from(
    { length: LENGTH_ACCOUNTS_AVAILABLE },
    (_, i) => {
      const index = i % flattenedArrayOfAllPostsCommonProps.length;
      return flattenedArrayOfAllPostsCommonProps[index];
    }
  ).toReversed();

  const followersSection = useRef<HTMLElement | null>(null);

  const arrayOfNavBarHistories = flattenedArrayOfAllPosts
    .toSorted(() => Math.random() - 0.5)
    .slice(0, 20);

  return (
    <article className='inbox-container'>
      <header className='section-top'>
        <ArrowLeft className='arrow-left' />
        <h3 className='titulin'>Inbox</h3>
        <img src={urlFirework} alt='tik-tok-logo' className='firework' />
      </header>

      <section className='section-bottom'>
        <section className='contenedor-of-rows' ref={followersSection}>
          <aside className='navbar-of-histories'>
            {arrayOfNavBarHistories.map(
              ({ profileImageSrc, userId, username }) => {
                return (
                  <aside className='history-container'>
                    <article className='history-container-circle'>
                      <img
                        className='history-container-circle-inner'
                        src={profileImageSrc}
                        alt={`Image Profile of ${username}}`}
                      />
                    </article>
                    <article className='history-container-description'>
                      {username.length >= MAX_LENGTH_OF_USERNAME
                        ? `${username.slice(0, MAX_LENGTH_OF_USERNAME - 3)}...`
                        : `${username.slice(0, MAX_LENGTH_OF_USERNAME)}`.padEnd(MAX_LENGTH_OF_USERNAME, '.')}
                    </article>
                  </aside>
                );
              }
            )}
          </aside>

          <aside className='recommended-accounts'>
            Recommended accounts{' '}
            <img className='info-logo' src={infoImg} alt='Info Img' />
          </aside>

          <ListOfUsers
            arrayOFAccounts={arrayOfReccomendedAccounts}
            limit={limit}
            updateLimit={updateLimit}
            theUserIsInItsSameProfile={theUserIsInItsSameProfile}
            theIdOfTheUserThaisYou={theIdOfTheUserThaisYou ?? ''}
            NUM_OF_ROW_THAT_RENDER_MORE_ROWS={NUM_OF_ROW_THAT_RENDER_MORE_ROWS}
          />
        </section>
      </section>
    </article>
  );
}
