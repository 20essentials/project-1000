import '@/components/pages/Profile/Profile.css';

import { GridOfUserSavedPosts } from '@/components/pages/Profile/GridOfUserSavedPosts';
import { GridOfUserLikedPosts } from './GridOfUserLikedPosts';
import { GridOfUserCreatedPosts } from './GridOfUserCreatedPosts';
import { ProfileTop } from './ProfileTop';

export function Profile() {
  return (
    <article className='profile-user-original'>
      <ProfileTop />
      <section className='slider-of-grid-of-posts-bottom scroll-x'>
        <GridOfUserCreatedPosts />
        <GridOfUserSavedPosts />
        <GridOfUserLikedPosts />
        <GridOfUserCreatedPosts />
      </section>
    </article>
  );
}
