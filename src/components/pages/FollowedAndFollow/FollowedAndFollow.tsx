import type {
  arrayOfPosts,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import '@/components/pages/FollowedAndFollow/FollowedAndFollow.css';
import { ArrowLeft } from '../ProfileCreator/ArrowLeft';
import { useCurrentUser } from '@/store/useCurrentUser';
import { baseUrl } from '@/utils/functions';
import { useUserCreator } from '@/store/useUserCreator';
import { useFollowedAccount, type userId } from '@/store/useFollowedAccount';
import { useMemo, useRef, useState } from 'react';
import { NavFollowedAndFollow } from '@/components/pages/FollowedAndFollow/NavFollowedAndFollow';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { ListOfUsers } from '@/components/pages/FollowedAndFollow/ListOfUser';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];
const NUM_OF_ROW_THAT_RENDER_MORE_ROWS = 9;
const urlFirework = baseUrl('/assets/firework.gif');
const MAXIMUM_FOLLOWERS_OR_FOLLOWED = 20_000;

export function FollowedAndFollow() {
  const commonProps = useUserCreator(state => state.commonProps);
  const username = commonProps.username;
  const user = useCurrentUser(state => state.user);
  const theIdOfTheUserThaisYou = user?.id;
  const theUserIsInItsSameProfile = username === user?.username;
  const getArrayOfFollowedAccounts = useFollowedAccount(
    state => state.getArrayOfFollowedAccounts
  );

  function updateFollowedAccountsIds(arrayOfIds: userId[]) {
    setArrayOfFollowedAccountsIds(arrayOfIds);
  }

  const [arrayOfFollowedAccountsIds, setArrayOfFollowedAccountsIds] = useState(
    () => {
      return getArrayOfFollowedAccounts();
    }
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
  const totalFollowedOfTheUser =
    commonProps.followed > MAXIMUM_FOLLOWERS_OR_FOLLOWED
      ? MAXIMUM_FOLLOWERS_OR_FOLLOWED
      : commonProps.followed;
  const totalFollowersOfTheUser =
    commonProps.followers > MAXIMUM_FOLLOWERS_OR_FOLLOWED
      ? MAXIMUM_FOLLOWERS_OR_FOLLOWED
      : commonProps.followers;

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

  const followedSection = useRef<HTMLElement | null>(null);
  const followersSection = useRef<HTMLElement | null>(null);

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
          <ListOfUsers
            arrayOFAccounts={arrayOfFollowedAccounts}
            limit={limit}
            updateLimit={updateLimit}
            theUserIsInItsSameProfile={theUserIsInItsSameProfile}
            theIdOfTheUserThaisYou={theIdOfTheUserThaisYou ?? ''}
            NUM_OF_ROW_THAT_RENDER_MORE_ROWS={NUM_OF_ROW_THAT_RENDER_MORE_ROWS}
          />
        </section>
        <section
          className='contenedor-of-rows followers-section-bottom'
          ref={followersSection}
        >
          <ListOfUsers
            arrayOFAccounts={arrayOfFollowers}
            limit={limit}
            updateFollowedAccountsIds={updateFollowedAccountsIds}
            updateLimit={updateLimit}
            theUserIsInItsSameProfile={theUserIsInItsSameProfile}
            theIdOfTheUserThaisYou={theIdOfTheUserThaisYou ?? ''}
            NUM_OF_ROW_THAT_RENDER_MORE_ROWS={NUM_OF_ROW_THAT_RENDER_MORE_ROWS}
          />
        </section>
      </section>

      <NavFollowedAndFollow
        followedSection={followedSection}
        followersSection={followersSection}
      />
    </article>
  );
}
