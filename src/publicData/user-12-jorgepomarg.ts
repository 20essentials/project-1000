import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const jorgepomarg_commonProps = generateExactlyCommonProps({
  userId: 'ff2abc15-2b8f-47ce-9894-19f8b329a2a4',
  username: 'jorgepomarg',
  profileImageSrc: 'https://20essentials.github.io/project-000-940/assets/j1.avif',
  following: false,
  followers: 15_200,
  totalLikes: 639_720,
  followed: 109,
  profileDescription: '😅'
});

const PREFIX = 'https://dominicnikolai.github.io/project-198/assets/jorgepomarg/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['senate', 'ai', 'future'],
    description: ` El día de ayer Elon Musk, Bill Gates, Mark Zuckerberg y multitud de gigantes tecnológicos se reunieron a puerta cerrada con el Senado de Estados Unidos para discutir el futuro de la Inteligencia Artificial y su regulación`,
    isLiked: false,
    idPost: `${jorgepomarg_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['cripto', 'bitcoin', "fyp"],
    description: `🚁🚁🚁`,
    isLiked: false,
    idPost: `${jorgepomarg_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['profit', 'gananacia'],
    description: `✨🌴`,
    isLiked: false,
    idPost: `${jorgepomarg_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['nft', 'simpson'],
    description: `En el último episodio de Los Simpson Convierten a Bart en un NFT, presentándole crypto a muchas personas.`,
    isLiked: false,
    idPost: `${jorgepomarg_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['eclipse', 'anillo de fuego'],
    description: `Así luce el efecto "Anillo de Fuego", provocado durante el eclipse anular de Sol, sobre Nevada, en Estados Unidos.`,
    isLiked: false,
    idPost: `${jorgepomarg_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['rayban', 'meta'],
    description: `Probaron los nuevos Ray-Ban de Meta, que pueden conectarse y transmitir directamente a Instagram.`,
    isLiked: false,
    idPost: `${jorgepomarg_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    tags: ['tormenta', 'tornado'],
    description: `Tres cazadores de tormentas encuentran un tornado y no pueden escapar a tiempo.`,
    isLiked: false,
    idPost: `${jorgepomarg_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['tullipan', 'mineria'],
    description: `El calor generado en la minería de bitcoins se utiliza en el cultivo de tulipanes en los Países Bajos.`,
    isLiked: false,
    idPost: `${jorgepomarg_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
];

export const jorgepomarg_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
