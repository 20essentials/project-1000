import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const arthur_commonProps = generateExactlyCommonProps({
  userId: '5bcd3ce9-5bff-46b8-894e-bd3936dbc470',
  username: 'arthur',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-224/assets/arthur/p3rfil.avif',
  following: false,
  followers: 105_430,
  followed: 571,
  profileDescription: '🇫🇷'
});

const PREFIX = 'https://dominicnikolai.github.io/project-224/assets/arthur/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `welcome to ep 5 #monaco #billionaire #millionaire #luxe #luxury #rich`,
    idPost: `${arthur_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `are you in the mafia ? #charlesleclerc #monaco #luxurylifestyle`,
    idPost: `${arthur_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `non mais il fait le malin GMK #humor #automotive #automobile #monaco #gmk #aberrant #libertywalk #ferrari #pourtoi`,
    idPost: `${arthur_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Queen 👑 #monaco #billionaire #millionaire #luxe #luxurylifestyle #rich #oldmoney`,
    idPost: `${arthur_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `pov : you live in monaco ✌️ #gmk #monaco #fyp #ferrari #lamborghini #charlesleclerc`,
    idPost: `${arthur_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `from monaco to skiing #porsche #992 #monaco`,
    idPost: `${arthur_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `monaco 🔥#luxury #luxurylife #lifestyle #monaco #millionaire #billionaire #style`,
    idPost: `${arthur_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `dogs hate bulls #lamborghini #automotive #luxembourg #carporn #fyp`,
    idPost: `${arthur_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `#14 Fernando alonso #monaco #monacogp #alonso #fernandoalonso #formula1 #f1edit`,
    idPost: `${arthur_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `X #Jules 🏎#ferrari#tmtrustmaster#luxe#ferrari#scuderiaferrari#retromobile#monza#gp`,
    idPost: `${arthur_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `mack and flash mcqueen 🔥#cars #flashmcqueen #mack #fyp #viral #truck`,
    idPost: `${arthur_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `too long 😩#monaco #billionaire #millionaire #luxe #luxury #rich #luxurylifestyle`,
    idPost: `${arthur_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  }
];

export const arthur_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
