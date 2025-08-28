import { useUserCreator } from '@/store/useUserCreator';
import { generateTotalNum } from '@/utils/functions';
import { ArrowLeft } from '@/components/pages/ProfileCreator/ArrowLeft';
import { Logout } from '@/components/pages/Profile/Logout';
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
        <NumFollowed followedCount={generateTotalNum(numOfFollowed)} />
        <NumFollowers followersCount={followers} />
        <article className='tab-data'>
          <p className='num'>{generateTotalNum(theTotalLikes)}</p>
          <p className='desc'>Likes</p>
        </article>
      </aside>
      <ArrowLeft className='arrow-left' />
      <Logout />

      <NavVideosOrSaved slideHorizontalRef={slideHorizontalRef} />
    </aside>
  );
}
