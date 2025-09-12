import '@/components/NavBarBottom/NavbarBottom.css';

import { HomeButton } from '@/components/NavBarBottom/HomeButton';
import { SearchButton } from '@/components/NavBarBottom/SearchButton';
import { UploadButton } from '@/components/NavBarBottom/UploadButton';
import { InboxButton } from '@/components/NavBarBottom/InboxButton';
import { ProfileButton } from '@/components/NavBarBottom/ProfileButton';
import { useCurrentPage } from '@/store/useCurrentPage';
import { IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { removeAllParamsOfUrl } from '@/hooks/useUpdateUrlParamsPostVideoOrImage';

export function NavbarBottom() {
  const currenPage = useCurrentPage(state => state.currenPage);
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);

  function handleCurrentPage(currenPage: number) {
    removeAllParamsOfUrl();
    setCurrentPage(currenPage);
  }

  function goToUserProfile() {
    handleCurrentPage(IS_ACTIVE_BUTTON.PROFILE);
  }

  const homeClass = `logo-home ${
    currenPage === IS_ACTIVE_BUTTON.HOME ? 'btn-active' : ''
  }`;

  const searchClass = `logo-search ${
    currenPage === IS_ACTIVE_BUTTON.SEARCH ||
    currenPage === IS_ACTIVE_BUTTON.PROFILE_CREATOR
      ? 'btn-active'
      : ''
  }`;

  const uploadClass = `logo-upload ${
    currenPage === IS_ACTIVE_BUTTON.UPLOAD ? 'btn-active' : ''
  }`;
  const inboxClass = `logo-inbox ${
    currenPage === IS_ACTIVE_BUTTON.INBOX || currenPage === IS_ACTIVE_BUTTON.STORY
      ? 'btn-active'
      : ''
  }`;
  const profileClass = `logo-profile ${
    currenPage === IS_ACTIVE_BUTTON.PROFILE ||
    currenPage === IS_ACTIVE_BUTTON.CREATOR_POSTS ||
    currenPage === IS_ACTIVE_BUTTON.FOLLOWED_AND_FOLLOW_CONTAINER
      ? 'btn-active'
      : ''
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
      <aside className='wrapper-logo wrapper-upload-logo'>
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
      <ProfileButton className={profileClass} onClick={goToUserProfile} />
    </article>
  );
}
