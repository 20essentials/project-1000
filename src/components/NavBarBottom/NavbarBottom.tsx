import '@/components/NavBarBottom/NavbarBottom.css';

import { HomeButton } from '@/components/NavBarBottom/HomeButton';
import { SearchButton } from '@/components/NavBarBottom/SearchButton';
import { UploadButton } from '@/components/NavBarBottom/UploadButton';
import { InboxButton } from '@/components/NavBarBottom/InboxButton';
import { ProfileButton } from '@/components/NavBarBottom/ProfileButton';
import { useCurrentPage } from '@/store/useCurrentPage';
import { IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';

export function NavbarBottom() {
  const currenPage = useCurrentPage(state => state.currenPage);
  
  const homeClass = `logo-home ${
    currenPage === IS_ACTIVE_BUTTON.HOME ? 'btn-active' : ''
  }`;
  const searchClass = `logo-search ${
    currenPage === IS_ACTIVE_BUTTON.SEARCH ? 'btn-active' : ''
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
        <HomeButton className={homeClass} />
        <span>Home</span>
      </aside>
      <aside className='wrapper-logo wrapper-search'>
        <SearchButton className={searchClass} />
        <span>Search</span>
      </aside>
      <aside className='wrapper-logo'>
        <UploadButton className={uploadClass} />
      </aside>
      <aside className='wrapper-logo wrapper-inbox'>
        <InboxButton className={inboxClass} />
        <span>Inbox</span>
      </aside>
      <aside className='wrapper-logo'>
        <ProfileButton className={profileClass} />
        <span>Profile</span>
      </aside>
    </article>
  );
}
