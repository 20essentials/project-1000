import '@/components/pages/ProfileCreator/ProfileCreator.css';
import { useUserCreator } from '@/store/useUserCreator';
import { FollowButton } from '@/components/pages/ProfileCreator/FollowButton';
import { generateTotalNum } from '@/utils/functions';
import { GridPosts } from '@/components/pages/ProfileCreator/GridPosts';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';
import { NumFollowed } from '@/components/pages/ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowed';
import { NumFollowers } from '@/components/pages/ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowers';

export function ProfileCreator() {
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const theTotalLikes = arrayOfPosts.reduce(
    (total, obj) => total + obj.hearts,
    0
  );

  const {
    profileImageSrc,
    username,
    followed,
    followers,
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
          <NumFollowed followedCount={generateTotalNum(followed)} />
          <NumFollowers followersCount={generateTotalNum(followers)} />
          <article className='tab-data'>
            <p className='num'>{generateTotalNum(theTotalLikes)}</p>
            <p className='desc'>Likes</p>
          </article>
        </aside>
        <FollowButton userId={userId} />
        <p className='description'>{profileDescription}</p>
        <ArrowLeft className='arrow-left' />
      </aside>

      <GridPosts arrayOfPosts={arrayOfPosts} commonProps={commonProps} />
    </article>
  );
}
