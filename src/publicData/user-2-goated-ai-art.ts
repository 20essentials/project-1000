import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const goated_ai_art_commonProps = generateExactlyCommonProps({
  userId: 'b5a8904a-310a-4757-808c-3e5ca8b9609d',
  username: 'goated_ai_art',
  profileImageSrc: '',
  following: false,
  followers: 150_000,
  totalLikes: 3_532_720,
  followed: 223,
  profileDescription: 'Art With IA'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'image',
    arrayImages: ['f1.avif']
  }
];

export const goated_ai_art_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
