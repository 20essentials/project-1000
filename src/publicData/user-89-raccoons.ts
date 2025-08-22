import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'raccoons';
const userId = 'cc7332f8-caf2-4c1b-892c-73c540620383';
const prefixUrl = 'https://dominicnikolai.github.io/project-280/assets/raccoons/';
const followers = 348_720;
const followed = 653;
const profileDescription = '🦝';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `¡Salta SALTA‼️ 🦝✨ #mapache #raccoon #Seúl #café #kpop #viaje #Corea`, /*1*/
  `Cuando eres demasiado tierno… ❤️🦝 #mapache #raccoon #Seúl #date #café #viaje`, /*2*/
  `Evento de masajes ❤️🐾 ¡mapache feliz! #raccoon #perritos #Seúl #Corea`, /*3*/
  `Nuestro mapache en la TV 📺🦝✨ #raccoon #Seúl #viaje #café`, /*4*/
  `Lugar popular en Seongsu 🌆✨ #Seúl #Corea #viaje`, /*5*/
  `Zona de Kondae, muy visitada 🏙️☕`, /*6*/
  `Un día más de paz con mapaches 🦝💕 #Seúl #viaje #café #paseo`, /*7*/
  `#mapache 🦝`, /*8*/
  `¡Le gustan los gatos también! 🐱❤️🦝 #mapache #catlover #Seúl`, /*9*/ 
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

export const raccoons_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const raccoons_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const raccoons_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const raccoons_array_of_posts = [
  ...raccoons_images,
  ...raccoons_videos
];
