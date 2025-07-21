import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const milan_cars_commonProps = generateExactlyCommonProps({
  userId: 'a5c08c2a-3a93-41f2-ae54-1957d80dfaf7',
  username: 'milan_cars',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-207/assets/mil4n-c4rs/p3rfil.avif',
  following: false,
  followers: 63_720,
  totalLikes: 4_320_729,
  followed: 120,
  profileDescription: '🏎️'
});

const PREFIX = 'https://dominicnikolai.github.io/project-207/assets/mil4n-c4rs/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Nigth`,
    idPost: `${milan_cars_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Speechless `,
    idPost: `${milan_cars_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Real`,
    idPost: `${milan_cars_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Nubia`,
    idPost: `${milan_cars_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Fry`,
    idPost: `${milan_cars_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Rander`,
    idPost: `${milan_cars_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Bugatti`,
    idPost: `${milan_cars_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `CarWeek`,
    idPost: `${milan_cars_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `1.5 million Ford GT Heritage 😍`,
    idPost: `${milan_cars_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `Aventador`,
    idPost: `${milan_cars_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `f40`,
    idPost: `${milan_cars_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `Koenigsegg agera ML in Milan 👻`,
    idPost: `${milan_cars_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  }
];

export const milan_cars_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
