import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

/*
  falsta: userid, profilesrc, prefix
*/

export const marshall_jassan_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'marshall_jassan',
  profileImageSrc: '',
  following: false,
  followers: 6198,
  totalLikes: 147_300,
  followed: 104,
  profileDescription: 'Hola, hablo sobre ciencia en videos 🪐'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['aerospace', 'science'],
    description: `Hola, hablo sobre ciencia en videos 🪐`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['SpaceX', 'Rockets'],
    description: `SpaceX Launch 🚀`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['space', 'jameswebb'],
    description: `SMACS 0723 por el James Webb HAA ES HERMOSO ya quiero ver las demas mañana 💫`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `PARTES DE UN COHETE SONDA 🚀 `
    
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['aviation', 'aerospace'],
    description: `Sistemas de control primarios ✈️  `
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['telescopio', 'moon'],
    description: `Ya has visto antes por telescopio? Qué te gusta o gustaría observar?`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    tags: ['rocket', 'cohete'],
    description: `This is so cool!! 🚀 `
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['astronaut', 'space'],
    description: `Me quedé con ganas de ponermelo y llevármelo a mi casa 😬`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    tags: ['rocket', 'cool'],
    description: `Comenzaré a subir estos proyectos por aquí 🚀`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    tags: ['aerospace', 'carlsagan'],
    description: `The Little Voyager ya tiene marcas de guerra 🚀`
  },
];

export const marshall_jassan_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
