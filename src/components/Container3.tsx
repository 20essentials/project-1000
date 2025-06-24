import '@/styles/Container3.css';
import { baseUrl } from '@/utils/functions';
import { SliderPosts } from '@/components/pages/SliderPosts/SliderPosts';
import { Search } from '@/components/pages/Search/Search';
import { Upload } from '@/components/pages/Upload/Upload';
import { Inbox } from '@/components/pages/Inbox/Inbox';
import { Profile } from '@/components/pages/Profile/Profile';
import { NavbarBottom } from '@/components/NavBarBottom/NavbarBottom';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';

export function Container3() {
  const currenPage = useCurrentPage(state => state.currenPage);

  return (
    <article className='Container3 inner-content'>
      {IS_ACTIVE_BUTTON.HOME === currenPage && <SliderPosts />}
      {IS_ACTIVE_BUTTON.SEARCH === currenPage && <Search />}
      {IS_ACTIVE_BUTTON.UPLOAD === currenPage && <Upload />}
      {IS_ACTIVE_BUTTON.INBOX === currenPage && <Inbox />}
      {IS_ACTIVE_BUTTON.PROFILE === currenPage && <Profile />}
      <NavbarBottom />
    </article>
  );
}
