import '@/components/pages/FollowedAndFollow/FollowedAndFollow.css';
import { ArrowLeft } from '../ProfileCreator/ArrowLeft';
// import { Logout } from '../Profile/Logout';
import { useCurrentUser } from '@/store/useCurrentUser';
import { baseUrl } from '@/utils/functions';
import { useUserCreator } from '@/store/useUserCreator';
const urlFirework = baseUrl('/assets/firework.gif');

//New
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import type {
  arrayOfPosts,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { FollowButton } from '../ProfileCreator/FollowButton';
import { useRef, useState } from 'react';
import { useFollowedContainer } from '@/hooks/useFollowedContainer';
import { RowUser } from './RowUser';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];
const NUM_OF_ROW_THAT_RENDER_MORE_ROWS = 9;

export function FollowedAndFollow() {
  const commonProps = useUserCreator(state => state.commonProps);
  const username = commonProps.username;
  const user = useCurrentUser(state => state.user);
  const theUserIsInItsSameProfile = username === user?.username;
  const arrayOfFollowedAccountsIds = useFollowedAccount(
    state => state.arrayOfFollowedAccounts
  );
  const existThisUserInFollowed = useFollowedAccount(
    state => state.existThisUserInFollowed
  );

  const theCurrentUserFollowThisAccount = existThisUserInFollowed({
    userId: commonProps.userId
  });
  const thecurrentUser = {
    profileImageSrc: user?.imageUrl,
    username: user?.username,
    userId: user?.id
  };
  const totalFollowedOfTheUser = commonProps.followed;
  const totalFollowersOfTheUser = commonProps.followers;
  const [limit, setLImit] = useState(10);

  function updateLimit() {
    setLImit(prev => prev + NUM_OF_ROW_THAT_RENDER_MORE_ROWS);
  }

  const flattenedArrayOfAllPostsCommonProps = ALL_POSTS.map(el => el[0]).filter(
    el => el.userId !== commonProps.userId
  );
  let arrayOfRandomRandomFollowed: postComonProps[] = Array.from(
    { length: totalFollowedOfTheUser },
    (_, i) => {
      const index = i % flattenedArrayOfAllPostsCommonProps.length;
      return flattenedArrayOfAllPostsCommonProps[index];
    }
  );

  let arrayOfFollowedAccounts = theUserIsInItsSameProfile
    ? ALL_POSTS.filter(el =>
        arrayOfFollowedAccountsIds.includes(el[0].userId)
      ).map(el => el[0])
    : arrayOfRandomRandomFollowed;

  // let arrayOfFollowers: postComonProps[] = flattenedArrayOfAllPostsCommonProps
  //   .slice(0, totalFollowersOfTheUser)
  //   .concat(
  //     theCurrentUserFollowThisAccount ? [thecurrentUser as postComonProps] : []
  //   )
  //   .toReversed();

  let arrayOfFollowers: postComonProps[] = Array.from(
    { length: totalFollowersOfTheUser },
    (_, i) => {
      const index = i % flattenedArrayOfAllPostsCommonProps.length;
      if (i === totalFollowersOfTheUser - 1 && theCurrentUserFollowThisAccount) {
        return thecurrentUser as postComonProps;
      }
      return flattenedArrayOfAllPostsCommonProps[index];
    }
  ).toReversed();

  //con los followed es diferente
  //Pero con los following es igual tanto para un creator aleatorio y el mismo usuario.
  //En UserProfile se puede ir a un perfil solo con el Id

  const followedSection = useRef<HTMLElement | null>(null);
  const followersSection = useRef<HTMLElement | null>(null);

  const { showFollowed, showFollowers } = useFollowedContainer({
    followedSection,
    followersSection
  });

  return (
    <article className='followed-and-follow-container'>
      <header className='section-top'>
        <ArrowLeft className='arrow-left' />
        <h3 className='titulin'>{username}</h3>
        <img src={urlFirework} alt='firework' className='firework' />
      </header>

      <section className='section-bottom'>
        <section
          className='contenedor-of-rows followed-section-bottom'
          ref={followedSection}
        >
          {arrayOfFollowedAccounts.slice(0, limit).map((el, index) => {
            const { profileImageSrc, userId, username } = el;
            const thisRowRenderMorePosts =
              (index + 1) % NUM_OF_ROW_THAT_RENDER_MORE_ROWS === 0;
            return (
              <RowUser
                index={`${userId}-${index}`}
                key={`${userId}-${index}`}
                profileImageSrc={profileImageSrc}
                userId={userId}
                i={index}
                username={username}
                thisRowRenderMorePosts={thisRowRenderMorePosts}
                updateLimit={updateLimit}
              />
            );
          })}
        </section>
        <section
          className='contenedor-of-rows followers-section-bottom'
          ref={followersSection}
        >
          {arrayOfFollowers.slice(0, limit).map((el, index) => {
            const { profileImageSrc, userId, username } = el;
            const thisRowRenderMorePosts =
              (index + 1) % NUM_OF_ROW_THAT_RENDER_MORE_ROWS === 0;
            return (
              <RowUser
                index={`${userId}-${index}`}
                i={index}
                key={`${userId}-${index}`}
                profileImageSrc={profileImageSrc}
                userId={userId}
                username={username}
                thisRowRenderMorePosts={thisRowRenderMorePosts}
                updateLimit={updateLimit}
              />
            );
          })}
        </section>
      </section>

      <section className='section-nav'>
        <button onClick={showFollowed} className={`followed navi`}>
          Followed
        </button>
        <button onClick={showFollowers} className={`follower navi`}>
          Followers
        </button>
      </section>
    </article>
  );
}
