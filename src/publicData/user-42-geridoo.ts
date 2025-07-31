import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const geridoo_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'geridoo',
  profileImageSrc: '',
  following: false,
  followers: 30_423,
  followed: 50,
  profileDescription: 'Story'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `el genio Diaz #juandiaz #captaintsubasa #captaintsubasaedit #supercampeones #supercampeones💪🏼⚽️⚽️ #oliverybenji #fyp #fypシ #foryoupage`,
    idPost: `${geridoo_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `#juandiaz #captaintsubasa #captaintsubasaedit #supercampeones #supercampeones💪🏼⚽️⚽️ #oliverybenji #fyp #fypシ #foryoupage #maradona`,
    idPost: `${geridoo_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Japon vs Argentina (Mundial sub16) #juandiaz #supercampeones #supercampeones💪🏼⚽️⚽️ #captaintsubasa #captaintsubasaedit #oliverybenji #fyp #fypシ`,
    idPost: `${geridoo_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `#aomine #aominedaiki #kagami #kagamitaiga #kurokonobasket #tetsuyakuroko #seirin #basketball #1vs1 #aominevskagami #fyp #fypシ #foryoupage`,
    idPost: `${geridoo_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  }
];

export const geridoo_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
