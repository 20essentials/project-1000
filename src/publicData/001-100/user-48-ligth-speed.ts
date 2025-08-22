import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const ligthspeed_commonProps = generateExactlyCommonProps({
  userId: 'b868575d-2f39-4105-b77f-53a33be02032 ',
  username: 'ligthspeed',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-237/assets/lightsp3ed/p3rfil.avif',
  following: false,
  followers: 255_000,
  followed: 132,
  profileDescription: 'Stage 2 Ninja H2 GSXR-1000'
});

const PREFIX = 'https://dominicnikolai.github.io/project-237/assets/lightsp3ed/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Ultimate dream bike 😍🙌🏼 #Motorcycle #biker #BikeLife #superbike #sportbike #supersport #hypersport #Kawasaki⁣⁣⁣⁣⁣⁣ #H2 #H2R #ninjah2`,
    idPost: `${ligthspeed_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Perfect lines and curves 😍😮‍💨 #Motorcycle #biker #BikeLife #superbike #sportbike #supersport #hypersport #Kawasaki⁣⁣⁣⁣⁣⁣ #H2 #H2R #ninjah2`,
    idPost: `${ligthspeed_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `The pilot about to do a top speed run! 🛩️😈🔥 #Motorcycle #biker #BikeLife #superbike #sportbike #supersport #hypersport #Kawasaki⁣⁣⁣⁣⁣⁣ #H2 #H2R #ninjah2`,
    idPost: `${ligthspeed_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `The vibes are immaculate 😮‍💨👌🏼 #Motorcycle #biker #BikeLife #superbike #sportbike #supersport #hypersport #Kawasaki⁣⁣⁣⁣⁣⁣ #H2 #H2R #ninjah2`,
    idPost: `${ligthspeed_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Night time menace 😈🔥 #Motorcycle #biker #BikeLife #superbike #sportbike #supersport #hypersport #Kawasaki⁣⁣⁣⁣⁣⁣ #H2 #H2R #ninjah2`,
    idPost: `${ligthspeed_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Paint like a perfect mirror 😮‍💨👌🏼 #Motorcycle #biker #BikeLife #superbike #sportbike #supersport #hypersport #Kawasaki⁣⁣⁣⁣⁣⁣ #H2 #H2R #ninjah2`,
    idPost: `${ligthspeed_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `#superbike #sportbike #supersport`,
    idPost: `${ligthspeed_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `#Motorcycle #biker #BikeLife`,
    idPost: `${ligthspeed_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `If we being real 😈👑 🎥  #hypersport #Kawasaki⁣⁣⁣⁣⁣⁣ #H2 #H2R #ninjah2`,
    idPost: `${ligthspeed_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  }
];

export const ligthspeed_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
