import '@/components/pages/Profile/Profile.css';

import { GridOfUserSavedPosts } from '@/components/pages/Profile/GridOfUserSavedPosts';
import { GridOfUserLikedPosts } from '@/components/pages/Profile/GridOfUserLikedPosts';
import { GridOfUserCreatedPosts } from '@/components/pages/Profile/GridOfUserCreatedPosts';
import { ProfileTop } from '@/components/pages/Profile/ProfileTop';
import { GridOfUserRepostPosts } from '@/components/pages/Profile/GridOfUserRepostPosts';
import { useRef } from 'react';

/* This is the same User */
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
