import '@/components/pages/ProfileCreator/ProfileCreator.css';
import { useUserCreator } from '@/store/useUserCreator';
import { FollowButton } from '@/components/pages/ProfileCreator/FollowButton';
import { generateTotalNum } from '@/utils/functions';
import { GridPosts } from '@/components/pages/ProfileCreator/GridPosts';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';

export function ProfileCreator() {
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);

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
    <article className='profile-creator'>
      <aside className='profile-creator-top'>
        <img
          className='profile-of-the-user'
          src={profileImageSrc}
          alt={username}
        />
        <p className='name-of-the-user'>@{username}</p>
        <aside className='container-data-user'>
          <article className='tab-data'>
            <p className='num'>{generateTotalNum(followed)}</p>
            <p className='desc'>Followed</p>
          </article>
          <article className='tab-data'>
            <p className='num'>{generateTotalNum(followers)}</p>
            <p className='desc'>Followers</p>
          </article>
          <article className='tab-data'>
            <p className='num'>{generateTotalNum(totalLikes)}</p>
            <p className='desc'>Likes</p>
          </article>
        </aside>
        <FollowButton />
        <p className='description'>{profileDescription}</p>
        <ArrowLeft className='arrow-left' />
      </aside>

      <GridPosts arrayOfPosts={arrayOfPosts} commonProps={commonProps} />
    </article>
  );
}
