import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix

export const elcodigobravo_commonProps = generateExactlyCommonProps({
  userId: '7ed13043-f16e-4bb8-a797-591654fe0574',
  username: 'elcodigobravo',
  profileImageSrc: 'https://dominicnikolai.github.io/project-201/assets/elcodigobravo/foto-de-p3rfil.avif',
  following: false,
  followers: 53_520,
  totalLikes: 470_891,
  followed: 0,
  profileDescription: 'Hacks para la Web'
});

const PREFIX = 'https://dominicnikolai.github.io/project-201/assets/elcodigobravo/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['figma', 'frontend', 'design'],
    description: 'No veo la complicación con este botón, ustedes?',
    idPost: `${elcodigobravo_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['CSS', 'netflix', 'design'],
    description: `Netflix Intro`,
    idPost: `${elcodigobravo_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['frontend', 'webdeveloper'],
    description: `Combinar texto con video en menos de un minuto.`,
    idPost: `${elcodigobravo_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['art', 'css'],
    description: `Eric Cartman`,
    idPost: `${elcodigobravo_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['naruto', 'sharingan'],
    description: `Ojos que persiguen el movimiento`,
    idPost: `${elcodigobravo_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['harry', 'css'],
    description: `Hogwarts Legacy`,
    idPost: `${elcodigobravo_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    tags: ['javascript', 'web'],
    description: `Diseño web`,
    idPost: `${elcodigobravo_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['projectos', 'practice'],
    description: `¿Te interesa el diseño web?`,
    idPost: `${elcodigobravo_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    tags: ['css', 'backgrounds'],
    description: `Fondo dinámico  `,
    idPost: `${elcodigobravo_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    tags: ['animation', 'css'],
    description: `Fugas Light`,
    idPost: `${elcodigobravo_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    tags: ['creative', 'art'],
    description: `Superman`,
    idPost: `${elcodigobravo_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    tags: ['text', 'h2'],
    description: `Texto Animado`,
    idPost: `${elcodigobravo_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    tags: ['square', '3d'],
    description: `Cubo Animado`,
    idPost: `${elcodigobravo_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    tags: ['tips', 'css'],
    description: `Vegetta`,
    idPost: `${elcodigobravo_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    tags: ['littlemoments', 'gallery'],
    description: `Kyle`,
    idPost: `${elcodigobravo_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  }
];

export const elcodigobravo_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
