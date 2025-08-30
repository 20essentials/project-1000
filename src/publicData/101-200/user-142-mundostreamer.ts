import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mundo_streamer';
const userId = '';
const prefixUrl = '';
const followers = 127_720;
const followed = 322;
const profileDescription = '🌏 | Los mejores clips / Best clips';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Speed shockeado con el Lamborghini más pequeño y exclusivo del mundo 😭💀 #ishowspeedclips #tour`, /*1*/
  `Speed realmente llevaba todo este tiempo fingiendo que era malo en el fútbol 🤯🤯 #ishowspeedclips`, /*2*/
  `Un puente colapsó debido al gran numero de personas que quería ver a Speed 💀💀 #ishowspeedclips`, /*3*/
  `Speed en shock tras colapsar toda Finlandi con su presencia 🤯 *el final 😭😭* #ishowspeedclips`, /*4*/
  `Speed se da cuenta de lo famoso que es tras tener que HUIR de Turquía en moto 💀 #ishowspeedclips`, /*5*/
  `Speed se convierte oficialmente en el influencer más rápido del mundo tras derrotar 2 veces a Daniel Labelle 😳😳😳#ishowspeedclips`, /*6*/
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

export const mundo_streamer_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mundo_streamer_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mundo_streamer_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mundo_streamer_array_of_posts = [
  ...mundo_streamer_images,
  ...mundo_streamer_videos
];
