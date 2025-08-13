import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'juixxe';
const userId = '';
const prefixUrl = '';
const followers = 2_173_322;
const followed = 321;
const profileDescription = 'Echándole Ganas Foundation ';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 9;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Están listos para el jale?`, /*1*/
  `Saben cómo volar? 🤔`, /*2*/
  `#street`, /*3*/
  `Sin miedo al éxito. `, /*4*/
  `“Esto cayó del cielo” 🥹`, /*5*/
  `Es la primera vez que voy a ver un partido`, /*6*/
  `Mejor que un día de trabajo 🥹`, /*7*/
  `El pan de cada día!`, /*8*/
  `Neta? Neta. ❤️`, /*9*/ 
  
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

export const juixxe_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const juixxe_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const juixxe_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const juixxe_array_of_posts = [...juixxe_images, ...juixxe_videos];
