import '@/components/pages/ProfileCreator/ProfileCreator.css';
import { useUserCreator } from '@/store/useUserCreator';
import { FollowButton } from '@/components/pages/ProfileCreator/FollowButton';
import { formatTotalNum } from '@/utils/functions/formatTotalNum';
import { GridPosts } from '@/components/pages/ProfileCreator/GridPosts';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';
import { NumFollowed } from '@/components/pages/ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowed';
import { NumFollowers } from '@/components/pages/ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowers';
import { useCleanUrlIfThisComponentsIsUnmount } from '@/hooks/useCleanUrlIfThisComponentsIsUnmount';
import { updateURLsearchParams } from '@/hooks/useUpdateUrlParamsPostVideoOrImage';
import { useEffect } from 'react';
import { ShareLinkAndCircle } from './ShareLinkAndCircle';

export function ProfileCreator() {
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const theTotalLikes = arrayOfPosts.reduce(
    (total, obj) => total + obj.hearts,
    0
  );

  useEffect(() => {
    updateURLsearchParams({ arrayOfQueryParamsToSet: [['userId', userId]] });
  }, []);

  const {
    profileImageSrc,
    username,
    followed,
    followers,
    profileDescription,
    userId
  } = commonProps;

  useCleanUrlIfThisComponentsIsUnmount({
    arrayOfQueryParamsToDelete: ['userId']
  });

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
          <NumFollowed followedCount={formatTotalNum(followed)} />
          <NumFollowers followersCount={followers} />
          <article className='tab-data'>
            <p className='num'>{formatTotalNum(theTotalLikes)}</p>
            <p className='desc'>Likes</p>
          </article>
        </aside>
        <FollowButton userId={userId} />
        {profileDescription && (
          <p className='description'>{profileDescription}</p>
        )}
        <ArrowLeft className='arrow-left' />

        <ShareLinkAndCircle />
      </aside>

      <GridPosts arrayOfPosts={arrayOfPosts} />
    </article>
  );
}
