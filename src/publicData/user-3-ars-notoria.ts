import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

/*
  falta:

  https://www.tiktok.com/@ars..notoria

  profileImageSrc
  PREFIX

*/

export const ars_notoria_commonProps = generateExactlyCommonProps({
  userId: 'c2828638-e41c-48c8-ad20-4c20b6c4853a',
  username: 'ars_notoria',
  profileImageSrc: '',
  following: false,
  followers: 69_800,
  totalLikes: 530_320,
  followed: 249,
  profileDescription: '🔥Aprende matemáticas mientras vez TikToks🔥'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Como aprender las identidades recíprocas (trigonometría)`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Resolviendo ejercicio sobre Tensiones (Física I)`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `PARTE 1. ¿Aún no sabes cómo derivar?`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `PARTE 2. ¿Aún no sabes cómo derivar?`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `¿Aún no sabes cómo integrar?`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `PRIMERA PARTE🔥Integrales Definidas🔥`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `SEGUNDA PARTE🔥Integrales Definidas🔥`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `TERCERA PARTE🔥Integrales Definidas🔥`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `🔥 INTEGRACION CON CAMBIO DE VARIABLE 🔥`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `Tercer caso🔥 Integrales con cambio de variable 🔥`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `🔥Última parte de las integrales con cambio de variable 🔥`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `⚡🔥Método para resolver integrales por partes de una forma más fácil ⚡🔥`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `🔥⚡Reglas de derivación 🔥⚡`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
  },
];

export const ars_notoria_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
