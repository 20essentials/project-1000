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

export function Inbox() {
  const commonProps = useUserCreator(state => state.commonProps);
  const username = commonProps.username;
  const user = useCurrentUser(state => state.user);
  const theIdOfTheUserThaisYou = user?.id;
  const theUserIsInItsSameProfile = username === user?.username;

  const totalFollowersOfTheUser = commonProps.followers;
  const [limit, setLImit] = useState(10);

  function updateLimit() {
    setLImit(prev => prev + NUM_OF_ROW_THAT_RENDER_MORE_ROWS);
  }

  const flattenedArrayOfAllPostsCommonProps = ALL_POSTS.map(el => el[0]).filter(
    el => el.userId !== commonProps.userId
  );

  let arrayOfFollowers: postComonProps[] = Array.from(
    { length: totalFollowersOfTheUser },
    (_, i) => {
      const index = i % flattenedArrayOfAllPostsCommonProps.length;
      return flattenedArrayOfAllPostsCommonProps[index];
    }
  ).toReversed();

  const followersSection = useRef<HTMLElement | null>(null);

  return (
    <article className='inbox-container'>
      <header className='section-top'>
        <ArrowLeft className='arrow-left' />
        <h3 className='titulin'>Inbox</h3>
        <img src={urlFirework} alt='tik-tok-logo' className='firework' />
      </header>

      <section className='section-bottom'>
        <section className='contenedor-of-rows' ref={followersSection}>
          <ListOfUsers
            arrayOFAccounts={arrayOfFollowers}
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
