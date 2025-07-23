import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const mr_robot_commonProps = generateExactlyCommonProps({
  userId: 'cff79c90-0788-4b5f-832c-0c31287d364a',
  username: 'mr_robot',
  profileImageSrc: 'https://dominicnikolai.github.io/project-212/assets/mr-robot/mr-robot/p3rfil.avif',
  following: false,
  followers: 180_720,
  totalLikes: 720_720,
  followed: 32,
  profileDescription: '🤖'
});

const PREFIX = 'https://dominicnikolai.github.io/project-212/assets/mr-robot/mr-robot/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['hackers', 'mr_robot'],
    description: `Spoiler: Isn't about hackers`,
    idPost: `${mr_robot_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['mr_robot', 'tyrell_wellick', 'patrick_bateman'],
    description: `Tyrell Wellick and Patrick Bateman are the same person`,
    idPost: `${mr_robot_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['mr_robot', 'elliot_alderson', 'rami_malek'],
    description: `Elliot`,
    idPost: `${mr_robot_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['mr_robot', 'social_anxiety'],
    description: `deep`,
    idPost: `${mr_robot_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `🎭`,
    tags: ['mr_robot', 'fsociety', 'fight_club'],
    idPost: `${mr_robot_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Sam Esmail’s Masterpiece`,
    tags: ['mr_robot', 'elliot_alderson', 'rami_malek'],
    idPost: `${mr_robot_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `real`,
    tags: ['mr_robot', 'fsociety', 'fyp'],
    idPost: `${mr_robot_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Mr Robot`,
    tags: ['mr_robot', 'elliot_alderson', 'loneliness'],
    idPost: `${mr_robot_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `mindset`,
    tags: ['mr_robot', 'rami_malek', 'foryoupage'],
    idPost: `${mr_robot_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `#mrrobot`,
    tags: ['mr_robot', 'fsociety', 'fyp'],
    idPost: `${mr_robot_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `i miss this show`,
    tags: ['mr_robot', 'xyzbca', 'prime'],
    idPost: `${mr_robot_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `Where is my mind`,
    tags: ['mr_robot', 'elliot_alderson', 'rami_malek'],
    idPost: `${mr_robot_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `Mr. Robot is a psychological thriller television series that follows Elliot Alderson, a brilliant but mentally unstable cybersecurity engineer and hacker who is recruited by a mysterious anarchist known as Mr. Robot to join an underground hacker group called fsociety. Set against a backdrop of corporate greed and digital surveillance, the series explores themes of identity, mental illness, power, and the fragile line between reality and delusion. With its gripping narrative, unreliable narrator, and bold social commentary, Mr. Robot challenges viewers to question the world around them and the systems they blindly trust.`,
    tags: ['h4cker', 'cybersecurity', 'elliot_alderson'],
    idPost: `${mr_robot_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: `What if Mr. Robot was shot vertically?`,
    tags: ['mr_robot', 'expand', 'head'],
    idPost: `${mr_robot_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `Everything in its right place`,
    tags: ['mrrobotedit', 'ramimalek', 'radiohead'],
    idPost: `${mr_robot_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    description: `greatest show oat`,
    tags: ['foryou', 'elliotaldersonedit', 'edit'],
    idPost: `${mr_robot_commonProps.userId}-e8023a99-ae84-46f0-9f6f-133d9cf5b741`
  }
];

export const mr_robot_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
