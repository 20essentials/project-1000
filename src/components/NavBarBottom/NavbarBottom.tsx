import '@/components/NavBarBottom/NavbarBottom.css';

import { HomeButton } from '@/components/NavBarBottom/HomeButton';
import { SearchButton } from '@/components/NavBarBottom/SearchButton';
import { UploadButton } from '@/components/NavBarBottom/UploadButton';
import { InboxButton } from '@/components/NavBarBottom/InboxButton';
import { ProfileButton } from '@/components/NavBarBottom/ProfileButton';
import { useCurrentPage } from '@/store/useCurrentPage';
import { IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { useLimitOfPost } from '@/store/useLimitOfPosts';

export function NavbarBottom() {
  const currenPage = useCurrentPage(state => state.currenPage);
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const limit = useLimitOfPost(state => state.limit);
  const resetLimit = useLimitOfPost(state => state.resetLimit);

  function handleCurrentPage(currenPage: number) {
    setCurrentPage(currenPage);
  }

  function hanleGoToHome() {
    setCurrentPage(IS_ACTIVE_BUTTON.HOME);
    if (limit > 3) {
      resetLimit();
    }
  }

  const homeClass = `logo-home ${
    currenPage === IS_ACTIVE_BUTTON.HOME ? 'btn-active' : ''
  }`;
  const searchClass = `logo-search ${
    currenPage === IS_ACTIVE_BUTTON.SEARCH ||
    currenPage === IS_ACTIVE_BUTTON.PROFILE_CREATOR ||
    currenPage === IS_ACTIVE_BUTTON.CREATOR_POSTS
      ? 'btn-active'
      : ''
  }`;
  const uploadClass = `logo-upload ${
    currenPage === IS_ACTIVE_BUTTON.UPLOAD ? 'btn-active' : ''
  }`;
  const inboxClass = `logo-inbox ${
    currenPage === IS_ACTIVE_BUTTON.INBOX ? 'btn-active' : ''
  }`;
  const profileClass = `logo-profile ${
    currenPage === IS_ACTIVE_BUTTON.PROFILE ? 'btn-active' : ''
  }`;

  return (
    <article className='navbar-bottom'>
      <aside className='wrapper-logo'>
        <HomeButton
          className={homeClass}
          onClick={() => handleCurrentPage(IS_ACTIVE_BUTTON.HOME)}
        />
        <span>Home</span>
      </aside>
      <aside className='wrapper-logo wrapper-search'>
        <SearchButton
          className={searchClass}
          onClick={() => handleCurrentPage(IS_ACTIVE_BUTTON.SEARCH)}
        />
        <span>Search</span>
      </aside>
      <aside className='wrapper-logo'>
        <UploadButton
          className={uploadClass}
          onClick={() => handleCurrentPage(IS_ACTIVE_BUTTON.UPLOAD)}
        />
      </aside>
      <aside className='wrapper-logo wrapper-inbox'>
        <InboxButton
          className={inboxClass}
          onClick={() => handleCurrentPage(IS_ACTIVE_BUTTON.INBOX)}
        />
        <span>Inbox</span>
      </aside>
      <aside className='wrapper-logo'>
        <ProfileButton
          className={profileClass}
          onClick={() => handleCurrentPage(IS_ACTIVE_BUTTON.PROFILE)}
        />
        <span>Profile</span>
      </aside>
    </article>
  );
}
