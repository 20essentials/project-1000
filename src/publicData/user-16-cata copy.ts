import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix

export const cata_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'cata',
  profileImageSrc: '',
  following: false,
  followers: 28_720,
  totalLikes: 848_720,
  followed: 1368,
  profileDescription: 'Estudia en Italia'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description:
      '¿Cuáles son los requisitos para entrar a una universidad italiana en pregrado?',
    isLiked: false,
    idPost: `${cata_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Espero poder vivir muchas vidas en esta vida`,
    isLiked: false,
    idPost: `${cata_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Opinión personal! Según yo este es el lugar más hermoso de Italia. Esto no quiere decir que el resto de los lugares son horribles jajaja al contrario!`,
    isLiked: false,
    idPost: `${cata_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Espero que les sirva. Cuánto cuesta estudiar en una universidad italiana?`,
    isLiked: false,
    idPost: `${cata_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `How Much?`,
    isLiked: false,
    idPost: `${cata_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Estudiar en otro idioma no es fácil!`,
    isLiked: false,
    idPost: `${cata_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Que trajes más hermosos vi en el carnaval de Verona! Me encanta cuando la gente se reune y mucha gente estaba de buen humor. ♥️♥️`,
    isLiked: false,
    idPost: `${cata_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Università in Italia! Abbastanza impegnativo`,
    isLiked: false,
    idPost: `${cata_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Yo estoy haciendo la universidad en Italia en italiano (algunas carreras se pueden realizar en inglés) y aunque es dificil creo que se puede!`,
    isLiked: false,
    idPost: `${cata_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  }
];

export const cata_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
