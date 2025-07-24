import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const pongamoslo_a_prueba_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'pongamoslo_a_prueba',
  profileImageSrc: '',
  following: false,
  followers: 46_720_321,
  followed: 982,
  profileDescription: 'Aquí está todo lo que pongo a prueba'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Puse a prueba el proyector de galaxias`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Pongo a prueba los videos más virales para decirles si son verdad o mentira 
`,
    tags: ['verdadomentira', 'curioso', 'conejos'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Es tan genial como se ve? o es un engaño?`,
    tags: ['verdadomentira', 'curioso', '3D'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Puse a prueba el famoso mini proyector`,
    tags: ['verdadomentira', 'curioso', 'proyector'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Hice la fuente infinita, o fuente de agua de movimiento perpetuo
`,
    tags: ['verdadomentira', 'curioso', 'agua'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Haz que tus playeras brillen en la oscuridad, con ingredientes caseros `,
    tags: ['pongamosloaprueba', 'verdadomentira', 'curiosidades'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Probe este máquina rebana papás `,
    tags: ['pongamosloaprueba', 'verdadomentira', 'curiosidades'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Probé este cepillo eléctrico que desenreda el pelo súper fácil y rápido.
`,
    tags: ['pongamosloaprueba', 'verdadomentira', 'curiosidades'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Puse a prueba la súper aspiradora de agua , es tan buena como dicen?
`,
    tags: ['pongamosloaprueba', 'verdadomentira', 'curiosidades'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `Crema que oculta tatuajes `,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `Puse a prueba 2 inventos geniales para abrir tus refrescos `,
    tags: ['pongamosloaprueba', 'verdadomentira', 'curiosidades'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `Puse a prueba 3 inventos geniales navideños
`,
    tags: ['pongamosloaprueba', 'navidad', 'curiosidades'],
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `Puse a prueba este invento para ensartar el hilo en la aguja #pongamosloaprueba #inventos #gadget
`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: `técnica para sacarse si te amarran #verdadomentira #pongamosloaprueba #lifehack`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `Cerradura inteligente`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    description: `3 inventos super novedosos par dar masajes ¿funcionara? #pongamosloaprueba #masaje #masjes
`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-e8023a99-ae84-46f0-9f6f-133d9cf5b741`
  },
  {
    type: 'video',
    videoSrc: 'v17.mp4',
    description: `Puse a prueba la máquina 360 para cortar el pelo cortito y parejo de manera fácil y rápido.`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-53b20bf6-9713-4530-aee7-e0b96ba95280`
  },
  {
    type: 'video',
    videoSrc: 'v18.mp4',
    description: `la pijama en la que puedes dibujar y se borra #verdadomentira #pijama`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-27c1569a-7950-48dc-9384-079e46448ba5`
  },
  {
    type: 'video',
    videoSrc: 'v19.mp4',
    description: `Puse a prueba el hacha pala de supervivencia #camping #invento #acampar #gadget`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-8d9b86b2-4f3c-46b3-be0c-4157fecc9ae6`
  },
  {
    type: 'video',
    videoSrc: 'v20.mp4',
    description: `esta chamarra reflejante cambios de color¿será verdad? #chamarra #verdadomentira`,
    idPost: `${pongamoslo_a_prueba_commonProps.userId}-b8dee4fb-3715-4c10-a916-419d81ea91f4`
  }
];

export const pongamoslo_a_prueba_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
