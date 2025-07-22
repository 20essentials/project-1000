import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const javier_santaolalla_commonProps = generateExactlyCommonProps({
  userId: '6fdf899a-16d5-43bd-848c-181ba4518dae',
  username: 'javier_santaolalla',
  profileImageSrc:
    'https://backend.starmus.com/uploads/person/659_1730721200.jpg',
  following: false,
  followers: 4_800_720,
  totalLikes: 220_720_222,
  followed: 95,
  profileDescription: 'The World...'
});

const PREFIX =
  'https://dominicnikolai.github.io/project-210/assets/j4vier-s4ntaolalla/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['aprendeentiktok', 'cienciaentiktok'],
    description: `Distancia cosmica`,
    idPost: `${javier_santaolalla_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['física', 'relatividad'],
    description: `Gravedad y relatividad`,
    idPost: `${javier_santaolalla_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['arte', 'ciencia'],
    description: `Profundidad`,
    idPost: `${javier_santaolalla_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Cosmos`,
    tags: ['universe', 'ciencia'],
    idPost: `${javier_santaolalla_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Oro`,
    tags: ['oro', 'alquimia'],
    idPost: `${javier_santaolalla_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['moon', 'luna'],
    description: `Albedo`,
    idPost: `${javier_santaolalla_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Energia`,
    tags: ['world', 'inicio'],
    idPost: `${javier_santaolalla_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['orbita', 'jupiter'],
    description: `El fin del inicio`,
    idPost: `${javier_santaolalla_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Existencia`,
    tags: ['caos', 'vida'],
    idPost: `${javier_santaolalla_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `Leonardo Davinci`,
    tags: ['arte', 'ciencia'],
    idPost: `${javier_santaolalla_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `Venus`,
    idPost: `${javier_santaolalla_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `Agujero Negro`,
    idPost: `${javier_santaolalla_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `Pares`,
    tags: ['materia', 'antimateria'],
    idPost: `${javier_santaolalla_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: `Starship`,
    tags: ['spacex', 'starlink'],
    idPost: `${javier_santaolalla_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `Big Bang`,
    idPost: `${javier_santaolalla_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    description: `Einstein`,
    tags: ['relatividad', 'ciencia'],
    idPost: `${javier_santaolalla_commonProps.userId}-e8023a99-ae84-46f0-9f6f-133d9cf5b741`
  },
  {
    type: 'video',
    videoSrc: 'v17.mp4',
    description: `Tiempo`,
    idPost: `${javier_santaolalla_commonProps.userId}-53b20bf6-9713-4530-aee7-e0b96ba95280`
  },
  {
    type: 'video',
    videoSrc: 'v18.mp4',
    tags: ['antropia', 'hawkings'],
    description: `Antropia y el universo`,
    idPost: `${javier_santaolalla_commonProps.userId}-27c1569a-7950-48dc-9384-079e46448ba5`
  },
  {
    type: 'video',
    videoSrc: 'v19.mp4',
    description: `Universo`,
    idPost: `${javier_santaolalla_commonProps.userId}-8d9b86b2-4f3c-46b3-be0c-4157fecc9ae6`
  },
  {
    type: 'video',
    videoSrc: 'v20.mp4',
    tags: ['fin', 'vida', 'girar'],
    description: `Giramos alrededor...`,
    idPost: `${javier_santaolalla_commonProps.userId}-b8dee4fb-3715-4c10-a916-419d81ea91f4`
  }
];

export const javier_santaolalla_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
