import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const gianco123_commonProps = generateExactlyCommonProps({
  userId: '16b103bf-167d-4d2f-8451-52cdd3fc1295',
  username: 'gianco123',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-227/assets/gianco123/p3rfil.avif',
  following: false,
  followers: 604_320,
  followed: 30,
  profileDescription: 'Moda y cuidado personal ✨'
});

const PREFIX = 'https://dominicnikolai.github.io/project-227/assets/gianco123/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Descuentos en Ilahui`,
    idPost: `${gianco123_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `SEBASTIAN LORENTE 521 EL TAMBO #huancayo #peru`,
    idPost: `${gianco123_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `#huancayo`,
    idPost: `${gianco123_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `#huancayo #peru`,
    idPost: `${gianco123_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `#huancayo #peru #junin`,
    idPost: `${gianco123_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `¿Ustedes se harían un bolso así? #peru #bolsoperuano #mechecorrea`,
    idPost: `${gianco123_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `#huancayo #peru #junin`,
    idPost: `${gianco123_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Cachina core: #peru #vintage #ropavintage #secondhand`,
    idPost: `${gianco123_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Jr abancay 387- Huancayo #huancayo #peru #junin #restaurante
`,
    idPost: `${gianco123_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `La Cachina de los domingos . #huancayo #peru #junin #secondhand`,
    idPost: `${gianco123_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  }
];

export const gianco123_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
