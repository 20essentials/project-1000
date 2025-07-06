import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

// Thanks to: https://www.tiktok.com/@qbitlab

export const qbitlab_commonProps = generateExactlyCommonProps({
  userId: '0b9709cb-4a26-4393-9293-68da9e5ef909',
  username: 'qbitlab',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-189/assets/qb1tlab/foto-de-perfil.avif',
  following: false,
  followers: 41_800,
  totalLikes: 350_720,
  followed: 3,
  profileDescription: 'Simulaciones físicas usando métodos computacionales.'
});

const PREFIX = 'https://dominicnikolai.github.io/project-189/assets/qb1tlab/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['Fisica', 'Computacional', 'Caos'],
    description: `Atractor Doble de Leipnik-Newton`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['Matemáticas', 'Ciencias', 'Simulación'],
    description: `Decaimiento Radiactivo Estocástico`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['Ecuaciones', 'Ciencias', 'Simulación'],
    description: `Superficie Paramétrica con forma de rosa`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['Onda', 'Ciencias'],
    description: `Ecuación de onda 2D`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Atractor de Rössler`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Smooth Life: una generalización al juego de la vida.`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Oscilador de Duffing`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Oscilador armónico cuántico`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Ecuaciones diferenciales ordinarias`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: 'Atractor de Clifford'
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `Variación de parámetros en el Atractor Peter de Jong`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: 'Efecto Beat'
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `El Juego de la vida`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: 'Interpolación Polinómica'
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `Atractor del Circuito de Chua`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    description: 'Átomo de Hidrógeno'
  },
  {
    type: 'video',
    videoSrc: 'v17.mp4',
    description: 'Atractor de Halvorsen:'
  },
  {
    type: 'video',
    videoSrc: 'v18.mp4',
    description: 'Atractor de Thomas'
  },
  {
    type: 'video',
    videoSrc: 'v19.mp4',
    description: 'Atractor de Chen'
  },
  {
    type: 'video',
    videoSrc: 'v20.mp4',
    description: 'Attractor de Aizawa'
  }
];

export const qbitlab_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
