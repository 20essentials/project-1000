import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const manuel_villa_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'manuel_villa',
  profileImageSrc: '',
  following: false,
  followers: 89_720,
  followed: 23,
  profileDescription:
    'No me importa perder contra otros, pero no puedo perder ante mí mismo'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Al fin un edit god de este song`,
    idPost: `${manuel_villa_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Ya nos dio permiso mamá. #edits #gym #gymbro`,
    idPost: `${manuel_villa_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Se sabe🤝🏼`,
    idPost: `${manuel_villa_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  }
];

export const manuel_villa_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
