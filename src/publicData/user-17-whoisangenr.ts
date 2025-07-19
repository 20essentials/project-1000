import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const whoisangenr_commonProps = generateExactlyCommonProps({
  userId: '98469e0a-576a-4ddc-938e-3909549142ab',
  username: 'whoisangenr',
  profileImageSrc: 'https://dominicnikolai.github.io/project-204/assets/whoisangenr/p3rfil.avif',
  following: false,
  followers: 28_720,
  totalLikes: 848_720,
  followed: 1368,
  profileDescription: 'Estudia en Italia'
});

const PREFIX = 'https://dominicnikolai.github.io/project-204/assets/whoisangenr/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['math', 'fyp'],
    description: 'Integral',
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['triangle', 'physics'],
    description: `△`,
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['mathematics', 'world'],
    description: `X`,
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `f(x)`,
    tags: ['fyp', 'maths'],
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['radiohead', 'cover'],
    description: `No Surprise - Radiohead`,
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['airplane', 'flight', 'travel', 'fyp'],
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    tags: ['flight', 'travel'],
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['airport', 'viral', 'airplane'],
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `Live or Dead`,
    isLiked: false,
    idPost: `${whoisangenr_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  }
];

export const whoisangenr_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
