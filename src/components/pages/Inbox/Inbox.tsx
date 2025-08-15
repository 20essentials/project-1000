import '@/components/pages/Inbox/Inbox.css';
import type { postComonProps } from '@/components/pages/SliderPosts/types.d.ts';
import '@/components/pages/FollowedAndFollow/FollowedAndFollow.css';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';
import { useCurrentUser } from '@/store/useCurrentUser';
import { baseUrl, getRandomNumber } from '@/utils/functions';
import { useUserCreator } from '@/store/useUserCreator';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { useMemo, useRef, useState } from 'react';
import { ArrayOfNavbarStories } from '@/components/pages/Inbox/ArrayOfNavbarStories';
import { ListOfUsers } from '@/components/pages/FollowedAndFollow/ListOfUser';
import { FOLLOWED, FOR_YOU } from '@/publicData/functions/getData';
import { useSwipeXHeaderStories } from '@/hooks/useSwipeXHeaderStories';
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];
const NUM_OF_ROW_THAT_RENDER_MORE_ROWS = 9;
const urlFirework = baseUrl('/assets/tik-tok-animated-logo.gif');
const infoImg = baseUrl('/assets/info.svg');

export function Inbox() {
  const commonProps = useUserCreator(state => state.commonProps);
  const getArrayOfFollowedAccounts = useFollowedAccount(
    state => state.getArrayOfFollowedAccounts
  );
  const [arrayOfFollowedAccounts, setArrayOfFollowedAccount] = useState(() => {
    return getArrayOfFollowedAccounts();
  });
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

  const arrayOfNavBarHistories = useMemo(() => {
    return flattenedArrayOfAllPosts
      .toSorted(() => Math.random() - 0.5)
      .slice(0, 20)
      .map(currentUser => {
        const user = ALL_POSTS.find(el => el[0].userId === currentUser.userId);
        if (user) {
          const posts = user[1];
          const randomIndex = getRandomNumber(0, posts.length - 1);
          return {
            ...currentUser,
            story: posts[randomIndex]
          };
        }

        return currentUser;
      });
  }, []);

  const navBarOFStories = useRef<HTMLElement | null>(null);

  useSwipeXHeaderStories({
    classNameOfSlides: '.history-container',
    classNameOfTrigger: '.navbar-of-histories-inner',
    containerOfImagesRef: navBarOFStories
  });

  return (
    <article className='inbox-container'>
      <header className='section-top'>
        <ArrowLeft className='arrow-left' />
        <h3 className='titulin'>Inbox</h3>
        <img src={urlFirework} alt='tik-tok-logo' className='firework' />
      </header>

      <section className='section-bottom'>
        <aside className='navbar-of-histories' ref={navBarOFStories}>
          <aside className='navbar-of-histories-inner'>
            <ArrayOfNavbarStories
              arrayOfNavBarHistories={arrayOfNavBarHistories}
            />
          </aside>
        </aside>

        <aside className='recommended-accounts'>
          Recommended accounts{' '}
          <img className='info-logo' src={infoImg} alt='Info Img' />
        </aside>

        <section className='contenedor-of-rows' ref={followersSection}>
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
