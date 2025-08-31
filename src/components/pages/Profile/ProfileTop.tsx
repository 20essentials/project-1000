import { useUserCreator } from '@/store/useUserCreator';
import { formatTotalNum } from '@/utils/functions/formatTotalNum';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';
import { Logout } from '@/components/pages/Profile/Logout';
import { THERE_IS_E2E } from 'astro:env/client';
import { NavVideosOrSaved } from '@/components/pages/Profile/NavVideosOrSaved';
import { NumFollowed } from '@/components/pages/ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowed';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { NumFollowers } from '@/components/pages/ProfileCreator/ProfileAndProfileCreatorCommonComponents/NumFollowers';
import { useUserCreatedPosts } from '@/store/useUserCreatedPosts';

export function ProfileTop({
  slideHorizontalRef
}: {
  slideHorizontalRef: React.RefObject<HTMLElement | null>;
}) {
  const commonProps = useUserCreator(state => state.commonProps);
  const { profileImageSrc, username, followers } = commonProps;
  const arrayOfFollowedAccounts = useFollowedAccount(
    state => state.arrayOfFollowedAccounts
  );
  const { length: numOfFollowed } = arrayOfFollowedAccounts;

  const arrayOfCreatedPostOfTheUser = useUserCreatedPosts(
    state => state.arrayOfCreatedPostOfTheUser
  );
  const theTotalLikes = arrayOfCreatedPostOfTheUser.reduce(
    (total, obj) => total + obj.hearts,
    0
  );
  return (
    <aside className='profile-creator-top'>
      <img className='profile-of-the-user' src={profileImageSrc} alt={username} />
      <p className='name-of-the-user'>@{username}</p>
      <aside className='container-data-user'>
        <NumFollowed followedCount={formatTotalNum(numOfFollowed)} />
        <NumFollowers followersCount={followers} />
        <article className='tab-data'>
          <p className='num'>{formatTotalNum(theTotalLikes)}</p>
          <p className='desc'>Likes</p>
        </article>
      </aside>
      <ArrowLeft className='arrow-left' />

      { !THERE_IS_E2E && <Logout />}

      <NavVideosOrSaved slideHorizontalRef={slideHorizontalRef} />
    </aside>
  );
}
