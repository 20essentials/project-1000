import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'wild_drishti';
const userId = '';
const prefixUrl = '';
const followers = 182_720;
const followed = 58;
const profileDescription = '💌🌿🔮🌼 diario visual';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `el número de hormigas contra un solo individuo de sapo de caña (Rhinella horribilis) puede ser muy notoria, pero estos amigos pueden llegar a consumir una buena cantidad de bichos en una noche. tan solo vemos a un individuo, ¿pero y si consideramos a los que no logramos observar? gran favor nos hacen al ser increíbles controladores de poblaciones 🐸 por ello, y por su simple valor intrínseco de existir, son sumamente relevantes en la naturaleza 💛 #nature #amphibians #amphibian #wildlife #wildlifephotography #herping #naturaleza #anfibios #anfibiosdeméxico`, /*1*/
  `apreciar a la tierra es venir a vivir la experiencia del ser ❤️‍🩹 #nature #thoughtoftheday #journaling #awareness #naturaleza #natureinspired #consciousness #natureheals #earthlandscape #perú #colombia`, /*2*/
  `amar a todas los seres vivos observar el arte de su hábitat aprender del ecosistema deleitarse por la naturaleza la vida no sería igual sin la consciencia para la observación 💚 #wildlifephotography #wildlife #natureinspired #nature #naturephotography #biodiversity #animals #naturaleza #faunasilvestre #biology`, /*3*/
  `querida tierra: hoy es el día específico para recordar tu valor, para que en un futuro no sea necesario conmemorarlo y simplemente sea parte de nuestra educación y cultura. lo siento por no poder hacer más por ti a como quisiera, perdón por todo el tiempo que me ha llevado aprender a cuidarte (y que sigo aprendiendo), gracias por dejarme conocerte con respeto y compasión y darme un hogar habitable, te amo, hoy y siempre 🤍 #earthday #diadelatierra #journal #journaling #nature #natureinspired #honoponopono #thoughtoftheday #naturaleza #naturalezamexico #biology`, /*4*/
  `Oceano Pacífico 💙☀️🌴 ✨ quizá no pueda cambiar el mundo, pero si el pedacito que me toca ✨`, /*5*/
  `Mother nature is always speaking. She speaks in a language understood within the peaceful mind of the sincere observer 🤍`, /*6*/
  ``, /*7*/
  ``, /*8*/
  ``, /*9*/ 
  ``, /*10*/
  ``, /*11*/
  ``, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  ``, /*1*/
  ``, /*2*/
  ``, /*3*/
  ``, /*4*/
  ``, /*5*/
  ``, /*6*/
  ``, /*7*/
  ``, /*8*/
  ``, /*9*/
  ``, /*10*/
  ``, /*11*/
  ``, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
]

export const wild_drishti_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const wild_drishti_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const wild_drishti_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const wild_drishti_array_of_posts = [
  ...wild_drishti_images,
  ...wild_drishti_videos
];
