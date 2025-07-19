import '@/styles/Container3.css';
import { SliderPosts } from '@/components/pages/SliderPosts/SliderPosts';
import { Search } from '@/components/pages/Search/Search';
import { Upload } from '@/components/pages/Upload/Upload';
import { Inbox } from '@/components/pages/Inbox/Inbox';
import { Profile } from '@/components/pages/Profile/Profile';
import { ProfileCreator } from '@/components/pages/ProfileCreator/ProfileCreator';
import { NavbarBottom } from '@/components/NavBarBottom/NavbarBottom';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { SliderPostsOfSingleUser } from './pages/SliderPosts/SliderPostsOfSingleUser';
import { Login } from '@/components/pages/Login/Login';
import { useCurrentUser } from '@/store/useCurrentUser';
import { FollowedAndFollow } from '@/components/pages/FollowedAndFollow/FollowedAndFollow';

export function Container3() {
  const user = useCurrentUser(state => state.user);
  const currenPage = useCurrentPage(state => state.currenPage);

  return (
    <article className='Container3 inner-content'>
      {IS_ACTIVE_BUTTON.FOLLOWED_AND_FOLLOW_CONTAINER === currenPage && (
        <FollowedAndFollow />
      )}
      {(IS_ACTIVE_BUTTON.LOGIN_PAGE === currenPage || !user) && <Login />}
      {IS_ACTIVE_BUTTON.HOME === currenPage && <SliderPosts />}
      {IS_ACTIVE_BUTTON.SEARCH === currenPage && <Search />}
      {IS_ACTIVE_BUTTON.UPLOAD === currenPage && <Upload />}
      {IS_ACTIVE_BUTTON.INBOX === currenPage && <Inbox />}
      {IS_ACTIVE_BUTTON.PROFILE === currenPage && <Profile />}
      {IS_ACTIVE_BUTTON.PROFILE_CREATOR === currenPage && <ProfileCreator />}
      {IS_ACTIVE_BUTTON.CREATOR_POSTS === currenPage && (
        <SliderPostsOfSingleUser />
      )}
      {/* *********************THIS MUST BE ALWAYS AT THE END  */}
      {IS_ACTIVE_BUTTON.LOGIN_PAGE !== currenPage && <NavbarBottom />}
    </article>
  );
}
