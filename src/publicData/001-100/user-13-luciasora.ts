import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';


export const lucia_sora_commonProps = generateExactlyCommonProps({
  userId: 'de20eace-ee08-4433-a9fc-1706a8b44c4a',
  username: 'lucia_sora',
  profileImageSrc: 'https://dominicnikolai.github.io/project-199/assets/luci4sora/foto-de-perfil.avif',
  following: false,
  followers: 46_320,
  totalLikes: 2_872_520,
  followed: 209,
  profileDescription: 'storyteller from Madrid'
});

const PREFIX = 'https://dominicnikolai.github.io/project-199/assets/luci4sora/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['aesthetic', 'people', 'for you'],
    idPost: `${lucia_sora_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['parati', 'human', 'being'],
    description: `dos siempre es mejor ⭐`,
    idPost: `${lucia_sora_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['people', 'life'],
    description: `una noche cualquiera en Madrid`,
    idPost: `${lucia_sora_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['camera', 'cotidiano'],
    description: `pedacitos de enero`,
    idPost: `${lucia_sora_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['fyp', 'fire'],
    description: `y millones de historias`,
    idPost: `${lucia_sora_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['agra', 'india'],
    description: `no podía parar de mirarlo`,
    idPost: `${lucia_sora_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    tags: ['instanbul', 'turkey'],
    description: `frames de Turquía ❤️‍🩹`,
    idPost: `${lucia_sora_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    tags: ['cats', 'turkey'],
    description: `tu ciudad si te gustan los gatos 🥹`,
    idPost: `${lucia_sora_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    tags: ['amigos', 'friends'],
    description: `lucky 🫂 `,
    idPost: `${lucia_sora_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    tags: ['observe', 'humanbeing'],
    description: `mi pasatiempos favorito 🥹❤️‍🩹`,
    idPost: `${lucia_sora_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    tags: ['for you', 'others'],
    description: `the story of an intersection 👁️`,
    idPost: `${lucia_sora_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    tags: ['ikea', 'decoration'],
    description: `mis favoritas 🪔`,
    idPost: `${lucia_sora_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    tags: ['age', 'future'],
    description: `pov: yo cuando sea mayor 🤳🏾`,
    idPost: `${lucia_sora_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    tags: ['for you', 'photography'],
    description: `un paseo por la playa `,
    idPost: `${lucia_sora_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    tags: ['littlemoments', 'gallery'],
    description: `life lately: 🫂✨🎨🕯️🌚💐`,
    idPost: `${lucia_sora_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    tags: ['trend', 'egypt'],
    description: `un sueño 🥹🇪🇬`,
    idPost: `${lucia_sora_commonProps.userId}-06e0d09a-ce99-462f-a68f-c001c807e579`
  },
  {
    type: 'video',
    videoSrc: 'v17.mp4',
    tags: ['people', 'budapest'],
    description: `life in Budapest ❤️‍🩹`,
    idPost: `${lucia_sora_commonProps.userId}-7a0d13d8-517d-4ff7-9372-142bf1ae6045`
  },
  {
    type: 'video',
    videoSrc: 'v18.mp4',
    tags: ['surf', 'sunset'],
    description: `este momento >>>`,
    idPost: `${lucia_sora_commonProps.userId}-cec8a88b-91f0-46a0-ab5a-094da972304a`
  },

  {
    type: 'video',
    videoSrc: 'v19.mp4',
    tags: ['couple', 'humans'],
    description: ``,
    idPost: `${lucia_sora_commonProps.userId}-3e29fab2-7ec8-4571-a15d-06cbef44a4bf`
  },
  {
    type: 'video',
    videoSrc: 'v20.mp4',
    tags: ['paris', 'chill'],
    description: `Night in Paris ✨`,
    idPost: `${lucia_sora_commonProps.userId}-826f773e-7982-40ec-966d-cda889d3a435`
  },
  {
    type: 'video',
    videoSrc: 'v21.mp4',
    tags: ['paris', 'seemless'],
    description: `Tell me you are in Paris without telling me you are in Paris 🥐`,
    idPost: `${lucia_sora_commonProps.userId}-89ba10c1-efdf-4af5-9431-450405567e1d`
  },
  {
    type: 'video',
    videoSrc: 'v22.mp4',
    tags: ['Madrid', 'books'],
    description: `Nice`,
    idPost: `${lucia_sora_commonProps.userId}-aa5ac775-62cb-437d-9101-1e9e4586ff86`
  },
  {
    type: 'video',
    videoSrc: 'v23.mp4',
    tags: ['album', 'cover'],
    description: `Los míos 🌚`,
    idPost: `${lucia_sora_commonProps.userId}-4fc0d25d-a498-49db-b61c-07e85b893de8`
  },
  {
    type: 'video',
    videoSrc: 'v24.mp4',
    tags: ['sunday', 'bek'],
    description: `lazy sunday 😴`,
    idPost: `${lucia_sora_commonProps.userId}-e63f8604-a798-464e-8851-1770fba3e414`
  },
  {
    type: 'video',
    videoSrc: 'v25.mp4',
    tags: ['travels', 'friends'],
    description: `Granada siempre es buena idea 🤍🫂🎨`,
    idPost: `${lucia_sora_commonProps.userId}-2eaa49a1-15f1-4b56-9e71-9e9e93d63399`
  },
  {
    type: 'video',
    videoSrc: 'v26.mp4',
    tags: ['azores', 'camp'],
    description: ``,
    idPost: `${lucia_sora_commonProps.userId}-121093a3-fb07-4d72-8c21-99e07fdf723b`
  },
  {
    type: 'video',
    videoSrc: 'v27.mp4',
    tags: ['fauna', 'flora'],
    description: `Llueve en San Miguel 💚 `,
    idPost: `${lucia_sora_commonProps.userId}-dd729e6f-54c0-4d7b-9fdf-d6a0589d187d`
  },
  {
    type: 'video',
    videoSrc: 'v28.mp4',
    tags: ['another', 'day'],
    description: `Nothing`,
    idPost: `${lucia_sora_commonProps.userId}-7173e305-7c68-4bf1-890c-82a933cff866`
  },
];

export const lucia_sora_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
