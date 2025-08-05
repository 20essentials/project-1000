import '@/components/pages/Profile/Profile.css';
import { useUserCreator } from '@/store/useUserCreator';
import { generateTotalNum } from '@/utils/functions';
import { GridPosts } from '@/components/pages/ProfileCreator/GridPosts';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';
import { Logout } from '@/components/pages/Profile/Logout';
import { NavVideosOrSaved } from '@/components/pages/Profile/NavVideosOrSaved';
import { GridOfUserSavedPosts } from '@/components/pages/Profile/GridOfUserSavedPosts';
import { NumFollowed } from '@/components/pages/ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowed';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { NumFollowers } from '@/components/pages/ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowers';
import { useEffect } from 'react';

export function Profile() {
  //This is the same User
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const showSavedPosts = useUserCreator(state => state.showSavedPosts);
  const arrayOfFollowedAccounts = useFollowedAccount(
    state => state.arrayOfFollowedAccounts
  );
  const { length: numOfFollowed } = arrayOfFollowedAccounts;
  const theTotalLikes = arrayOfPosts.reduce(
    (total, obj) => total + obj.hearts,
    0
  );

  const { profileImageSrc, username, followers } = commonProps;


  return (
    <article className='profile-user-original'>
      <aside className='profile-creator-top'>
        <img
          className='profile-of-the-user'
          src={profileImageSrc}
          alt={username}
        />
        <p className='name-of-the-user'>@{username}</p>
        <aside className='container-data-user'>
          <NumFollowed followedCount={generateTotalNum(numOfFollowed)} />
          <NumFollowers followersCount={generateTotalNum(followers)} />
          <article className='tab-data'>
            <p className='num'>{generateTotalNum(theTotalLikes)}</p>
            <p className='desc'>Likes</p>
          </article>
        </aside>
        <ArrowLeft className='arrow-left' />
        <Logout />
        <NavVideosOrSaved />
      </aside>
      {showSavedPosts ? (
        <GridOfUserSavedPosts />
      ) : (
        <GridPosts arrayOfPosts={arrayOfPosts} commonProps={commonProps} />
      )}
    </article>
  );
}
