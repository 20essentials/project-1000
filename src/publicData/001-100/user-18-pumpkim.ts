import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const pumpkim_commonProps = generateExactlyCommonProps({
  userId: '3250bb8e-af5b-4e72-9a8e-7e4737f0c138',
  username: 'pumpkim',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-205/assets/pumpkim/p3rfil.avif',
  following: false,
  followers: 2350,
  totalLikes: 192_320,
  followed: 245,
  profileDescription: '🎅'
});

const PREFIX = 'https://dominicnikolai.github.io/project-205/assets/pumpkim/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `vibe codingg 🩷 with rocket ai <3`,
    idPost: `${pumpkim_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `SheCodes ✨`,
    idPost: `${pumpkim_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `another portfolio done! 😘🩷`,
    idPost: `${pumpkim_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `wifi driver who ps`,
    idPost: `${pumpkim_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `study with me 👩🏻‍💻`,
    idPost: `${pumpkim_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `still learning, open for suggestions and tips!! `,
    idPost: `${pumpkim_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  }
];

export const pumpkim_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
