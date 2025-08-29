import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mirrorsbysam';
const userId = '7d7cb0db-a5c1-4cc3-b0c1-39719d08e01c';
const prefixUrl = 'https://dominicnikolai.github.io/project-297/assets/mirrorsbysam/';
const followers = 152_720;
const followed = 50;
const profileDescription = 'Espejos hechos a la medida';
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` #paint #decoration #espejos #espejospersonalizados #mirrorsbysam`, /*1*/
  ` #mirrors #art #artdeco #paint #decoration #espejos #espejospersonalizados #mirrorsbysam`, /*2*/
  `Qué lindo verse; equivocarse y corregirse `, /*3*/
  `Mostrando mis espejos hasta que se hagan virales dia 1⏳ #mirrors #art #artdeco #paint #decoration #espejos #espejospersonalizados #mirrorsbysam`, /*4*/
  `Uniéndonos al trend😂📦🚚 #holyairball #holyfknairball #mirrorsbysam`, /*5*/
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

export const mirrorsbysam_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mirrorsbysam_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mirrorsbysam_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mirrorsbysam_array_of_posts = [
  ...mirrorsbysam_images,
  ...mirrorsbysam_videos
];
