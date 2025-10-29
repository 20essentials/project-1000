import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kevinacevedo_dev';
const userId = 'ecb2bded-4d2b-4359-a066-dbd83f373f0a';
const prefixUrl = 'https://dominicnikolai.github.io/project-375/assets/k3vinacevedo-dev/';
const followers = 61_832;
const followed = 322;
const profileDescription = `Dev life, algo de humor y proyectos dev`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `ya no lo dejan ser feliz a uno 😡 #homeoffice #programming #fyp #trabajoremoto
`, /*1*/
  `Mi herramienta favorita para enviar correos en mis proyectos, se llama Resend, que tal?

ig: kevinacevedo.dev

#softwaredevelopment #programming #resend #fyp #coding #transactionalemail #email`, /*2*/
  `Ya conocían este recurso de componentes para react tan poderoso? 🤯 Reactbits.dev
`, /*3*/
  `Ranqueando librerías de autenticación para el 2025 ig: kevinacevedo.dev #softwaredevelopment #programming #coding #fyp #betterauth #authjs #supabase`, /*4*/
  `Cómo hacer transiciones entre dark y light mode en tu páginas web fácilmente, cómo lo ven? lo usarían en sus proyectos? #fyp #coding #programacion #nextjs #programming #website #shadcn #projectportfolio #tailwind #softwaredevelopment #darktheme`, /*5*/
  `#softwaredevelopment #fyp #coding #programacion #nextjs #programming #SEO #webdesign #website #shadcn #projectportfolio #framermotion #gsap #tailwind`, /*6*/
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

export const kevinacevedo_dev_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kevinacevedo_dev_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kevinacevedo_dev_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kevinacevedo_dev_array_of_posts = [
  ...kevinacevedo_dev_images,
  ...kevinacevedo_dev_videos
];
