import '@/styles/phone.css';
import { Layer1 } from './Layer1';
import { Layer0 } from '@/components/Layer0';
import type { User } from '@clerk/astro/server';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useEffect } from 'react';
import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { useNcontainer, CONTAINER_IS } from '@/store/useNcontainer';
import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import { getUser } from '@/db/User';

export function Phone({ user }: { user: User | null }) {
  const setUser = useCurrentUser(state => state.setUser);
  const setPage = useCurrentPage(state => state.setCurrentPage);
  const setContainerNum = useNcontainer(state => state.setContainerNum);
  const setSavePostsOfTheUser = useUserSavedPosts(
    state => state.setSavePostsOfTheUser
  );

  useEffect(() => {
    if (user) {
      setUser(user);
      setPage(IS_ACTIVE_BUTTON.HOME);
      setContainerNum(CONTAINER_IS.INTRO_PAGE);
    }
  }, [user]);

  return (
    <main className='phone'>
      <Layer0 />
      <Layer1 />
    </main>
  );
}
