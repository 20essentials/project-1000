import '@/components/pages/Profile/Profile.css';
import { useUserCreator } from '@/store/useUserCreator';
import { generateTotalNum } from '@/utils/functions';
import { GridPosts } from '@/components/pages/ProfileCreator/GridPosts';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';
import { Logout } from './Logout';
import { NavVideosOrSaved } from './NavVideosOrSaved';
import { GridOfUserSavedPosts } from './GridOfUserSavedPosts';

import { NumFollowed } from '../ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowed';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { NumFollowers } from '../ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowers';

export function Profile() {
  //This is the same User
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const showSavedPosts = useUserCreator(state => state.showSavedPosts);
  const arrayOfFollowedAccounts = useFollowedAccount(
    state => state.arrayOfFollowedAccounts
  );
  const { length: numOfFollowed } = arrayOfFollowedAccounts;
  const theTotalLikes = arrayOfPosts.reduce((total, obj) => total + obj.hearts, 0 )

  const {
    profileImageSrc,
    username,
    // followed,
    followers,
    // totalLikes,
    profileDescription,
    userId
  } = commonProps;

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
          <NumFollowers followersCount={generateTotalNum(followers)}/>
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
