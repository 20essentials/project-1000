import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const ariel_commonProps = generateExactlyCommonProps({
  userId: '98bf11e8-30e9-4b96-b2be-c08b9d577538',
  username: 'ariel',
  profileImageSrc: 'https://20essentials.github.io/project-000-940/assets/j4.avif',
  following: false,
  followers: 4_720,
  totalLikes: 380_715,
  followed: 51,
  profileDescription: 'Maths'
});

const PREFIX = 'https://dominicnikolai.github.io/project-211/assets/ariel/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['math', 'science', 'fyp', 'calculus', 'algebra'],
    description: `Calculate`,
    idPost: `${ariel_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    tags: ['chemistry', 'quantum', 'thermodynamics', 'biochemistry'],
    videoSrc: 'v2.mp4',
    description: `Química `,
    idPost: `${ariel_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['engineering', 'university', 'fyp', 'math'],
    description: `Asignaturas`,
    idPost: `${ariel_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['math', 'science', 'fyp'],
    description: `Sin(x)`,
    idPost: `${ariel_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  }
];

export const ariel_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
