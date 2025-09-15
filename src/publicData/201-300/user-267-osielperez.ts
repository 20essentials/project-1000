import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'osielperez';
const userId = '';
const prefixUrl = '';
const followers = 58_720;
const followed = 50;
const profileDescription = `Full Stack Developer | Entrepreneur`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Un cliente me pidió desarrollarle un Software para Administrar Salones de Eventos y cobranza, espero este satisfecho. Laravel & Vue #soyprogramador #softwareengineer #sistemas #codinglife`, /*1*/
  `#Meme #sistemas #codinglife #soyprogramador #softwareengineer`, /*2*/
  `#Meme #sistemas #softwareengineer`, /*3*/
  `Yo todas las mañanas mativandome para ponerme a Programar.`, /*4*/
  `#Meme #codinglife #sistemas #soyprogramador`, /*5*/
  `#codinglife #sistemas #softwareengineer #soyprogramador #Meme`, /*6*/
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

export const osielperez_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const osielperez_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const osielperez_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const osielperez_array_of_posts = [
  ...osielperez_images,
  ...osielperez_videos
];
