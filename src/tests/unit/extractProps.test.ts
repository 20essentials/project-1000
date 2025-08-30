import { describe, it, expect } from 'vitest';
import {
  getCommonpropsFromProps,
  getPostpropsFromProps,
  commonPropsKeys,
  postPropsKeys
} from '@/utils/functions/extractProps';
import type { FullPost } from '@/components/pages/SliderPosts/types.d.ts';

describe('getCommonpropsFromProps', () => {
  it('returns only common props from a full post', () => {
    const post: FullPost = {
      // postComonProps
      userId: 'user123',
      username: 'john_doe',
      profileImageSrc: 'avatar.jpg',
      following: true,
      followers: 100,
      totalLikes: 500,
      followed: 1,
      profileDescription: 'Bio here',
      // postProps
      videoSrc: 'video.mp4',
      arrayImages: ['img1.jpg', 'img2.jpg'],
      description: 'Hello world',
      tags: ['fun', 'coding'],
      dateOfPublication: '2025-08-30',
      totalViewsOfThePost: 1000,
      hearts: 50,
      comments: 10,
      saved: 5,
      shared: 3,
      isSaved: false,
      isLiked: true,
      idPost: 'post123'
    };

    const result = getCommonpropsFromProps(post);

    expect(Object.keys(result).sort()).toEqual(commonPropsKeys.sort());

    commonPropsKeys.forEach((key) => {
      expect(result[key]).toBe(post[key]);
    });
  });
});

describe('getPostpropsFromProps', () => {
  it('returns only post props from a full post', () => {
    const post: FullPost = {
      // postComonProps
      userId: 'user123',
      username: 'john_doe',
      profileImageSrc: 'avatar.jpg',
      following: true,
      followers: 100,
      totalLikes: 500,
      followed: 1,
      profileDescription: 'Bio here',
      // postProps
      videoSrc: 'video.mp4',
      arrayImages: ['img1.jpg', 'img2.jpg'],
      description: 'Hello world',
      tags: ['fun', 'coding'],
      dateOfPublication: '2025-08-30',
      totalViewsOfThePost: 1000,
      hearts: 50,
      comments: 10,
      saved: 5,
      shared: 3,
      isSaved: false,
      isLiked: true,
      idPost: 'post123'
    };

    const result = getPostpropsFromProps(post);

    expect(Object.keys(result).sort()).toEqual(postPropsKeys.sort());

    postPropsKeys.forEach((key) => {
      expect(result[key]).toBe(post[key]);
    });
  });
});
