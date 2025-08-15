import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const mr_rombus_commonProps = generateExactlyCommonProps({
  userId: '9bfed983-4c2d-4c0a-af65-c407d28a6ea9',
  username: 'mr_rombus',
  profileImageSrc:
    'https://20essentials.github.io/project-000-940/assets/j5.avif',
  following: false,
  followers: 238_320,
  totalLikes: 580_238,
  followed: 50,
  profileDescription: 'SuperCars!'
});

const PREFIX = 'https://dominicnikolai.github.io/project-202/assets/mr-rombus/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: 'The New Lamborghini Revuelto!!',
    idPost: `${mr_rombus_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Ferrari SF90 Spider!!`,
    idPost: `${mr_rombus_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Mercedes Benz GLB 220 4-Matic Full Review 💯`,
    idPost: `${mr_rombus_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Ferrari 330 P4 Lover 😱🔥`,
    idPost: `${mr_rombus_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `HiPhi X Chinese Gullwing Luxury SUV!!`,
    idPost: `${mr_rombus_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `TSR-S ZENVO WING IN ACTION!!`,
    idPost: `${mr_rombus_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Aston Martin Valour Sound Check`,
    idPost: `${mr_rombus_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Check Out this Gorgeous Ferrari Daytona SP3 |`,
    idPost: `${mr_rombus_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Inside the Luxurious Mercedes Maybach S580 😎💯`,
    idPost: `${mr_rombus_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `White Lamborghini Revuelto 🤍👍💯`,
    idPost: `${mr_rombus_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `The Bestest Door Close - Koenigsegg 👍🖤`,
    idPost: `${mr_rombus_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `Check Out Koenigsegg Jesko Transformation `,
    idPost: `${mr_rombus_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `Check Out this Murdered Out Pagani Huayra Roadster `,
    idPost: `${mr_rombus_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: `REZVANI VENGEANCE ASMR!!😎`,
    idPost: `${mr_rombus_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `BLACK SVJ in Rain 🖤🌧️`,
    idPost: `${mr_rombus_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    description: `Check Out this Breathtaking Ferrari Enzo`,
    idPost: `${mr_rombus_commonProps.userId}-e8023a99-ae84-46f0-9f6f-133d9cf5b741`
  },
  {
    type: 'video',
    videoSrc: 'v17.mp4',
    description: `2023 Lamborghini Huracan STO on the DYNO!`,
    idPost: `${mr_rombus_commonProps.userId}-53b20bf6-9713-4530-aee7-e0b96ba95280`
  },
  {
    type: 'video',
    videoSrc: 'v18.mp4',
    description: `Check Out this Menacing Porsche 992 GT3RS`,
    idPost: `${mr_rombus_commonProps.userId}-27c1569a-7950-48dc-9384-079e46448ba5`
  },
  {
    type: 'video',
    videoSrc: 'v19.mp4',
    description: `Huracan Performante The Natural Aspirated V10!!`,
    idPost: `${mr_rombus_commonProps.userId}-8d9b86b2-4f3c-46b3-be0c-4157fecc9ae6`
  },
  {
    type: 'video',
    videoSrc: 'v20.mp4',
    description: `Check Out 1 of 1 Bugatti Chiron Super Sport`,
    idPost: `${mr_rombus_commonProps.userId}-b8dee4fb-3715-4c10-a916-419d81ea91f4`
  }
];

export const mr_rombus_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
