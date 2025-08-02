import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const mycelium_mirrors_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'mycelium_mirrors',
  profileImageSrc: '',
  following: false,
  followers: 372_320,
  followed: 720,
  profileDescription: 'Explore the art of kaleidoscopes'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Let's take a visit over to the visual world of pislices . Lots of great visuals to check out with your kaleidoscope. #kaleidoscope #visualart #psychedelicart`,
    idPost: `${mycelium_mirrors_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Let's blast off with rune.l0rd visuals. Take a look with your kaleidoscope. #visualart #psychedelicart #lasercutting`,
    idPost: `${mycelium_mirrors_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Visiting the visual works by ponderancemusic . Come take a look with your kaleidoscope.`,
    idPost: `${mycelium_mirrors_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Let's look at tanyamiai infinite eyeballs thru one of my latest pieces.`,
    idPost: `${mycelium_mirrors_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Have you ever seen Euler's disk? It's the extreme version of spinning a coin on a table. (Pronounced oilers disk) Product link in profile. #trippyart #psychedelic #visualart`,
    idPost: `${mycelium_mirrors_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Peering through kaleidoscope visuals. Come take all look for yourself and give them a follow. #musicvisuals #psychedelic
`,
    idPost: `${mycelium_mirrors_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Very cool visuals. Mathematical works of art.`,
    idPost: `${mycelium_mirrors_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Taking the kaleidoscope for a spin with protobacillus visuals. Check their reels out. They have lots of great visuals.`,
    idPost: `${mycelium_mirrors_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Let's blast off with ponderancemusic sound reactive visuals and their unique audio mashups. Give them a follow and be sure to check out their Sound cloud link in their profile. #kaleidoscope #edm #dubstep #dupsmash #bass #trippyart`,
    idPost: `${mycelium_mirrors_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `Let's have some fun looking daemonlindenmayer slick visuals and beats with your scope. Give them a follow and enjoy.`,
    idPost: `${mycelium_mirrors_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  }
];

export const mycelium_mirrors_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
