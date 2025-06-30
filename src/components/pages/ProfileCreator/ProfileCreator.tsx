import '@/components/pages/ProfileCreator/ProfileCreator.css';
import { useUserCreator } from '@/store/useUserCreator';
import { FollowButton } from './FollowButton';
import { generateTotalNum } from '@/utils/functions';
import { GridPosts } from './GridPosts';

export function ProfileCreator() {
  const setCommonProps = useUserCreator(state => state.setCommonProps);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);

  const {
    profileImageSrc,
    username,
    followed,
    followers,
    totalLikes,
    profileDescription
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
      </aside>


      <GridPosts arrayOfPosts={arrayOfPosts}/>
    </article>
  );
}
