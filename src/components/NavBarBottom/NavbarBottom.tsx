import '@/components/NavBarBottom/NavbarBottom.css';

import { HomeButton } from '@/components/NavBarBottom/HomeButton';
import { SearchButton } from '@/components/NavBarBottom/SearchButton';
import { UploadButton } from '@/components/NavBarBottom/UploadButton';
import { InboxButton } from '@/components/NavBarBottom/InboxButton';
import { ProfileButton } from '@/components/NavBarBottom/ProfileButton';

export function NavbarBottom() {
  return (
    <article className='navbar-bottom'>
      <aside className='wrapper-logo'>
        <HomeButton className='logo-home' />
        <span>Home</span>
      </aside>
      <aside className='wrapper-logo search'>
        <SearchButton className='logo-search' />
        <span>Search</span>
      </aside>
      <aside className='wrapper-logo'>
        <UploadButton className='logo-upload' />
      </aside>
      <aside className='wrapper-logo inbox'>
        <InboxButton className='logo-inbox' />
        <span>Inbox</span>
      </aside>
      <aside className='wrapper-logo'>
        <ProfileButton className='logo-profile' />
        <span>Profile</span>
      </aside>
    </article>
  );
}
