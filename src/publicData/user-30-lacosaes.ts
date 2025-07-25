import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const lacosaes_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'lacosaes',
  profileImageSrc: '',
  following: false,
  followers: 291_720,
  followed: 143,
  profileDescription: 'Te cuento algo.'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Perdón, me aloqué al final. Tomen agua. Compren mi libro. Va estar con descuento hasta fin de año 🙌🏻 Me escriben y se los envío a cualquier lugar del país. Lqm.`,
    idPost: `${lacosaes_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `El ambiente adecuado inspira. Joshua Bell viene al Teatro Sucre a celebrar sus 138 años con lo clásico más clásico.`,
    idPost: `${lacosaes_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Carros Eléctricos`,
    idPost: `${lacosaes_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `La Musica`,
    idPost: `${lacosaes_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Consuman arte. Entradas a la Fiesta Escénica de Quito en el Teatro Sucre`,
    idPost: `${lacosaes_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Capa de Ozono`,
    idPost: `${lacosaes_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `El Castellano`,
    idPost: `${lacosaes_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Verdades bonitas pa la buena vibra.`,
    idPost: `${lacosaes_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `¿Por qué hay maldad?`,
    idPost: `${lacosaes_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `El Botox y La Vida`,
    idPost: `${lacosaes_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `¿Qué extrañas de tu niñez? #lacosaes #juanozambrano #loquelagentedice #cdmx`,
    idPost: `${lacosaes_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `Grande el pollo 🐥`,
    idPost: `${lacosaes_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `¿Cuánto dura tu vida? #lacosaes #juanozambrano #datorandomdeldia #vida #LoDescubriEnTikTok`,
    idPost: `${lacosaes_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'video',
    videoSrc: 'v14.mp4',
    description: `Ta raro. #lacosaes #juanozambrano #datorandomdeldia #LoDescubriEnTikTok #documental`,
    idPost: `${lacosaes_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `Con cuidado. #datorandomdeldia #LoDescubriEnTikTok #lacosaes #juanozambrano #payless #balenciaga #`,
    idPost: `${lacosaes_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'video',
    videoSrc: 'v16.mp4',
    description: `Quién se acuerda del final? #lacosaes #millivanilli #LoDescubriEnTikTok #juanozambrano #datorandomdeldia`,
    idPost: `${lacosaes_commonProps.userId}-e8023a99-ae84-46f0-9f6f-133d9cf5b741`
  },
  {
    type: 'video',
    videoSrc: 'v17.mp4',
    description: `Bonit@s. #datorandomdeldia #lacosaes #juanozambrano #gibson #belleza #redessociales`,
    idPost: `${lacosaes_commonProps.userId}-53b20bf6-9713-4530-aee7-e0b96ba95280`
  },
  {
    type: 'video',
    videoSrc: 'v18.mp4',
    description: `Habla, primo. #lacosaes #juanozambrano #datorandomdeldia #primo`,
    idPost: `${lacosaes_commonProps.userId}-27c1569a-7950-48dc-9384-079e46448ba5`
  },
  {
    type: 'video',
    videoSrc: 'v19.mp4',
    description: `¿Tienes gatos? #lacosaes #datorandomdeldia #juanozambrano #gatos #gatosdetiktok`,
    idPost: `${lacosaes_commonProps.userId}-8d9b86b2-4f3c-46b3-be0c-4157fecc9ae6`
  },
  {
    type: 'video',
    videoSrc: 'v20.mp4',
    description: `¿Te acuerdas? #lacosaes #juanozambrano #datorandomdeldia #memoria #cdmx #datos`,
    idPost: `${lacosaes_commonProps.userId}-b8dee4fb-3715-4c10-a916-419d81ea91f4`
  },
  {
    type: 'video',
    videoSrc: 'v21.mp4',
    description: `Volví. Sigo sin computador. …Pero con libro nuevo eeeh! #lacosaes #datorandomdeldia #aliens #alien #hormigas`,
    idPost: `${lacosaes_commonProps.userId}-e679dcf6-c5e8-438d-a20a-dd510bc95ce4`
  },
  {
    type: 'video',
    videoSrc: 'v22.mp4',
    description: `¿Qué usan? #lacosaes #datorandomdeldia #apple #juanozambrano #demanda
`,
    idPost: `${lacosaes_commonProps.userId}-62f0e35a-72b6-4458-b1fd-ac75c669e006`
  },
  {
    type: 'video',
    videoSrc: 'v23.mp4',
    description: `Control de Armas. #lacosaes #datorandomdeldia #datos #juanozambrano #control 

`,
    idPost: `${lacosaes_commonProps.userId}-65dcf70e-ac9b-4859-a722-f77250bffe346`
  },
  {
    type: 'video',
    videoSrc: 'v24.mp4',
    description: `Cuestionen todo. #lacosaes #datorandomdeldia #wright #hermanos #vuelo #juanozambrano #datos

`,
    idPost: `${lacosaes_commonProps.userId}-448222a9-36e2-42ab-b810-d683c7ea84eb`
  },
  {
    type: 'video',
    videoSrc: 'v25.mp4',
    description: `Comparar`,
    idPost: `${lacosaes_commonProps.userId}-448222a9-36e2-42ab-b810-d683c7ea84eb`
  },
  {
    type: 'video',
    videoSrc: 'v26.mp4',
    description: `Muchas cosas brillan. #datorandomdeldia #lacosaes #juanozambrano #datoscuriosos #diamantes`,
    idPost: `${lacosaes_commonProps.userId}-f1bda842-758c-42dc-80d2-0ec5c830ec3e`
  },
  {
    type: 'video',
    videoSrc: 'v27.mp4',
    description: `Qué será. #lacosaes #datorandomdeldia #juanozambrano #sasaki #vida`,
    idPost: `${lacosaes_commonProps.userId}-3b31e6b2-5a7d-4fa0-b489-4d5adf2e24ce`
  },
  {
    type: 'video',
    videoSrc: 'v28.mp4',
    description: `Sorpresa al final 🐥 #datorandomdeldia #lacosaes #alanturing #estaeslahistoria #juanozambrano`,
    idPost: `${lacosaes_commonProps.userId}-2a0a7353-7ef3-465e-8c4f-d54e65b3a2a7`
  },
  {
    type: 'video',
    videoSrc: 'v29.mp4',
    description: `Somos malos jefes. #lacosaes #datorandomdeldia #juanozambrano #datoscuriosos #evolucion`,
    idPost: `${lacosaes_commonProps.userId}-ad0c1e12-e9e4-4a69-ae4e-bc5a69aa7ae1`
  },
  {
    type: 'video',
    videoSrc: 'v30.mp4',
    description: `Volví con el mejor animal de todos. #datorandomdeldia #lacosaes #perros #juanozambrano #olfato`,
    idPost: `${lacosaes_commonProps.userId}-c78b4df1-7649-45ff-9202-f73ed77e27d7`
  },
  {
    type: 'video',
    videoSrc: 'v31.mp4',
    description: `Qué tóxico. #lacosaes #datorandomdeldia #toxico #juanozambrano`,
    idPost: `${lacosaes_commonProps.userId}-920e1ef5-bdd1-4d9f-8414-86d55ec26479`
  },
  {
    type: 'video',
    videoSrc: 'v32.mp4',
    description: `Reflexiones pots San Valentín. #datorandomdeldia #lacosaes #besos #besarse #kiss #amor #humor #juanozambrano`,
    idPost: `${lacosaes_commonProps.userId}-8f238e94-3e33-4b9a-9096-d54aafdf8120`
  },
  {
    type: 'video',
    videoSrc: 'v33.mp4',
    description: `El perreo suxcio es evolución. #datorandomdeldia #lacosaes #musica #clive #wearing #memoria`,
    idPost: `${lacosaes_commonProps.userId}-d9ff9e53-4c12-4d2b-a5c1-3cc0cf9be2ae`
  },
  {
    type: 'video',
    videoSrc: 'v34.mp4',
    description: `Like si te acuerdas del niño chocolate. #datorandomdeldia #lacosaes #musica #ciclista`,
    idPost: `${lacosaes_commonProps.userId}-c0d51d45-cc95-41b5-891b-3e94fbc0f566`
  },
  {
    type: 'video',
    videoSrc: 'v35.mp4',
    description: `Va de nuevo. #datorandomdeldia #datocurioso #lacosaes #raymond #loewy`,
    idPost: `${lacosaes_commonProps.userId}-b9b84c6e-0577-4ef1-b80e-9b334cdd6db6`
  },
  {
    type: 'video',
    videoSrc: 'v36.mp4',
    description: `Eleleytimes. #datorandomdeldia #lacosaes #flaming #hot #richard #montanez`,
    idPost: `${lacosaes_commonProps.userId}-8c3e88aa-8dbf-4e3e-a772-20fcfcefb3b3`
  },
  {
    type: 'video',
    videoSrc: 'v37.mp4',
    description: `Aplica pa todo. #datorandomdeldia #lacosaes #jim #carrey #jimcarrey #pt`,
    idPost: `${lacosaes_commonProps.userId}-b05e8a77-0df7-4f9b-8104-0cbf4c7763e4`
  },
  {
    type: 'video',
    videoSrc: 'v38.mp4',
    description: `Antes todo duraba más. #datorandomdeldia #lacosaes #foco #bombilla #apple`,
    idPost: `${lacosaes_commonProps.userId}-1efcce62-ecae-4a3c-a5d7-d774755e739f`
  },
  {
    type: 'video',
    videoSrc: 'v39.mp4',
    description: `Feliz cumple. #datorandomdeldia #lacosaes #talentotiktok #aprendeentiktok #cumpleaños`,
    idPost: `${lacosaes_commonProps.userId}-154d84b3-82aa-4cf6-8186-dac4b14a14c9`
  },
  {
    type: 'video',
    videoSrc: 'v40.mp4',
    description: `Ahora lo sabes. #datorandomdeldia #talentotiktok #aprendeentiktok #lacosaes #genes #familia`,
    idPost: `${lacosaes_commonProps.userId}-f835e8f0-57ea-41d0-bb67-7bd9cc69a315`
  },
  {
    type: 'video',
    videoSrc: 'v41.mp4',
    description: `El buen doppelganger. #datorandomdeldia #talentotiktok #aprendeentiktok #lacosaes #doppelgänger`,
    idPost: `${lacosaes_commonProps.userId}-cafc92e6-9bc6-4d0f-83ec-88cc6cbecfc4`
  },
  {
    type: 'video',
    videoSrc: 'v42.mp4',
    description: `Xmen. #datorandomdeldia #datocurioso #lacosaes #aprendeentiktok #talentotiktok #evolucion #palmar`,
    idPost: `${lacosaes_commonProps.userId}-fdd5198b-2bd7-4194-8d4b-75db296dc14e`
  },
  {
    type: 'video',
    videoSrc: 'v43.mp4',
    description: `Agradezcan, niños. #datorandomdeldia #lacosaes #talentotiktok #aprendeentiktok #donnapenner #penner #anestesia`,
    idPost: `${lacosaes_commonProps.userId}-a7cbfd4f-7293-4b99-a255-813a7407dc15`
  },
  {
    type: 'video',
    videoSrc: 'v44.mp4',
    description: `Chayanne se llama Elmer. #datorandomdeldia #datocurioso #talentotiktok #aprendeentiktok #lacosaes #filosofia #wikipedia`,
    idPost: `${lacosaes_commonProps.userId}-28a3d0e4-4e1c-41a7-80e4-d2386b3b0906`
  },
  {
    type: 'video',
    videoSrc: 'v45.mp4',
    description: `Suerte`,
    idPost: `${lacosaes_commonProps.userId}-6260eae4-1638-4d89-8508-fbd91f27c812`
  },
  {
    type: 'video',
    videoSrc: 'v46.mp4',
    description: `Sonreir`,
    idPost: `${lacosaes_commonProps.userId}-ff80ea0d-0a9b-4fd3-b8a1-5dc9bd726cc0`
  },
  {
    type: 'video',
    videoSrc: 'v47.mp4',
    description: `Todos son buenos hasta que les da hambre. #datorandomdeldia #datocurioso #lacosaes #aprendeentiktok #ardilla #zorro`,
    idPost: `${lacosaes_commonProps.userId}-64c8f23a-052c-4fd1-9a00-8c4fe77bfc41`
  },
  {
    type: 'video',
    videoSrc: 'v48.mp4',
    description: `Orcas`,
    idPost: `${lacosaes_commonProps.userId}-16b858b0-40b5-48d5-9932-f2142a03d5d7`
  },
  {
    type: 'video',
    videoSrc: 'v49.mp4',
    description: `Qué canción te pone así? `,
    idPost: `${lacosaes_commonProps.userId}-e49bbca6-d9c2-45c9-9428-0b91fa5ef8ed`
  },
  {
    type: 'video',
    videoSrc: 'v50.mp4',
    description: `De aquí a la luna. #datorandomdeldia #datos #lacosaes #datocurioso #aprendeentiktok #luna #tierra`,
    idPost: `${lacosaes_commonProps.userId}-6a1f654d-544a-468f-855e-50377b22eceeb`
  }
];

export const lacosaes_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
