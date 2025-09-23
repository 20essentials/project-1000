import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'romanlohace';
const userId = '54e8e16d-2e0c-4441-b1e9-5bb16f45d3b8';
const prefixUrl = 'https://dominicnikolai.github.io/project-340/assets/romanlohace/';
const followers = 939_832;
const followed = 50;
const profileDescription = `Para más datos geniales sígueme!!!
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#china #foodie #restaurante #tutorial #tips #trucos #emprendedores #emprendimiento #foodies`, /*1*/
  `Recetas nuevas infinitas!!! 🤯`, /*2*/
  `Así puedes planear tus espacios!!! 😎👏🏻 #tutorial #tips #trucos #páginasweb #diseñosdeinteriores #hogar`, /*3*/
  `#comic #ia #ai #tutorial #trucos #tips #storyboard #dibujo`, /*4*/
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

export const romanlohace_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const romanlohace_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const romanlohace_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const romanlohace_array_of_posts = [
  ...romanlohace_images,
  ...romanlohace_videos
];
