import '@/components/pages/Profile/Profile.css';

import { GridOfUserSavedPosts } from '@/components/pages/Profile/GridOfUserSavedPosts';
import { GridOfUserLikedPosts } from '@/components/pages/Profile/GridOfUserLikedPosts';
import { GridOfUserCreatedPosts } from '@/components/pages/Profile/GridOfUserCreatedPosts';
import { ProfileTop } from '@/components/pages/Profile/ProfileTop';
import { GridOfUserRepostPosts } from '@/components/pages/Profile/GridOfUserRepostPosts';
import { useEffect, useRef } from 'react';
import {
  existTheseQueryParams,
  updateURLsearchParams
} from '@/hooks/useUpdateUrlParamsPostVideoOrImage';

/* This is the same User */
export function Profile() {
  const slideHorizontalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const notExistSearchQueryParam = !existTheseQueryParams({
      arrayOfQueryParams: ['profile']
    });
    if (notExistSearchQueryParam) {
      updateURLsearchParams({ arrayOfQueryParamsToSet: [['profile', 'view']] });
    }
  }, []);

  return (
    <article className='profile-user-original'>
      <ProfileTop slideHorizontalRef={slideHorizontalRef} />
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
