import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

/*
  falta: userid, profilesrc, prefix
*/

export const marshall_jassan_commonProps = generateExactlyCommonProps({
  userId: '83cdb1f4-dee1-462b-bfe1-617be369a910',
  username: 'marshall_jassan',
  profileImageSrc:
    'https://20essentials.github.io/project-000-940/assets/j3.avif',
  following: false,
  followers: 6198,
  totalLikes: 147_300,
  followed: 104,
  profileDescription: 'Hola, hablo sobre ciencia en videos 🪐'
});

const PREFIX =
  'https://dominicnikolai.github.io/project-196/assets/m4rshall-j4ssan/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['aerospace', 'science'],
    description: `Hola, hablo sobre ciencia en videos 🪐`,
    isLiked: false,
    idPost: `${marshall_jassan_commonProps.userId}-4a7a3a5f-c3f1-43ef-9f1b-c3a4df9e8f45`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['SpaceX', 'Rockets'],
    description: `SpaceX Launch 🚀`,
    isLiked: false,
    idPost: `${marshall_jassan_commonProps.userId}-aabf31c8-6dd3-4dc5-9e30-2a9307f15b60`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['space', 'jameswebb'],
    description: `SMACS 0723 por el James Webb HAA ES HERMOSO ya quiero ver las demas mañana 💫`,
    idPost: `${marshall_jassan_commonProps.userId}-1954a8c9-5b6c-404b-a9a3-420486e50dbe`,
    isLiked: false
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `PARTES DE UN COHETE SONDA 🚀 `,
    idPost: `${marshall_jassan_commonProps.userId}-5ce3fcde-e0fd-44b4-93f6-6a6b880b16b1`,
    isLiked: false
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['aviation', 'aerospace'],
    description: `Sistemas de control primarios ✈️  `,
    idPost: `${marshall_jassan_commonProps.userId}-93b3a3a1-1d63-41ef-800f-01cb508376c4`,
    isLiked: false
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['telescopio', 'moon'],
    description: `Ya has visto antes por telescopio? Qué te gusta o gustaría observar?`,
    idPost: `${marshall_jassan_commonProps.userId}-63ad3ea9-c361-4f88-b7b3-0a2e139d4231`,
    isLiked: false
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    tags: ['rocket', 'cohete'],
    description: `This is so cool!! 🚀 `,
    idPost: `${marshall_jassan_commonProps.userId}-d1ce50b6-79cb-4ef8-89f6-722ff06237c3`,
    isLiked: false
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['astronaut', 'space'],
    description: `Me quedé con ganas de ponermelo y llevármelo a mi casa 😬`,
    idPost: `${marshall_jassan_commonProps.userId}-d3f6df3d-12b1-4e8e-902a-2a22bc5d5432`,
    isLiked: false
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    tags: ['rocket', 'cool'],
    description: `Comenzaré a subir estos proyectos por aquí 🚀`,
    idPost: `${marshall_jassan_commonProps.userId}-e51907e6-3e7f-4f76-b62f-cf8611f86f70`,
    isLiked: false
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    tags: ['aerospace', 'carlsagan'],
    description: `The Little Voyager ya tiene marcas de guerra 🚀`,
    idPost: `${marshall_jassan_commonProps.userId}-2fd2bdf2-4732-45fc-90f1-7e78867c2a56`,
    isLiked: false
  }
];

export const marshall_jassan_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
