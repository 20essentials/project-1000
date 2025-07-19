import '@/components/pages/Profile/Profile.css';
import { useUserCreator } from '@/store/useUserCreator';
import { generateTotalNum } from '@/utils/functions';
import { GridPosts } from '@/components/pages/ProfileCreator/GridPosts';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';
import { Logout } from './Logout';
import { NavVideosOrSaved } from './NavVideosOrSaved';
import { GridOfUserSavedPosts } from './GridOfUserSavedPosts';

import { NumFollowed } from '../ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowed';

export function Profile() {
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const showSavedPosts = useUserCreator(state => state.showSavedPosts);

  const {
    profileImageSrc,
    username,
    followed,
    followers,
    totalLikes,
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
          <NumFollowed followedCount={generateTotalNum(followed)} />
          <article className='tab-data'>
            <p className='num'>{generateTotalNum(followers)}</p>
            <p className='desc'>Followers</p>
          </article>
          <article className='tab-data'>
            <p className='num'>{generateTotalNum(totalLikes)}</p>
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
