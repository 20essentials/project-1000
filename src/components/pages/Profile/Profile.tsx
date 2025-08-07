import '@/components/pages/Profile/Profile.css';

import { GridOfUserSavedPosts } from '@/components/pages/Profile/GridOfUserSavedPosts';
import { GridOfUserLikedPosts } from './GridOfUserLikedPosts';
import { GridOfUserCreatedPosts } from './GridOfUserCreatedPosts';
import { ProfileTop } from './ProfileTop';
import { GridOfUserRepostPosts } from './GridOfUserRepostPosts';
import { useRef } from 'react';

export function Profile() {
  const slideHorizontalRef = useRef<HTMLElement | null>(null);

  return (
    <article className='profile-user-original'>
      <ProfileTop
        slideHorizontalRef={slideHorizontalRef}
      />
      <section
        className='slider-of-grid-of-posts-bottom scroll-x'
        ref={slideHorizontalRef}
      >
        <GridOfUserCreatedPosts />
        <GridOfUserSavedPosts />
        <GridOfUserLikedPosts />
        <GridOfUserRepostPosts />
      </section>
    </article>
  );
}
