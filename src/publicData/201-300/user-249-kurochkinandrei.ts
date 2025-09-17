import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kurochkinandrei';
const userId = '67ecba5d-c9a1-42f4-99cc-a1f23dc9d34a';
const prefixUrl = 'https://dominicnikolai.github.io/project-325/assets/kurochkinandrei/';
const followers = 1_111_789;
const followed = 50;
const profileDescription = `Разрываю шаблоны и стереотипы`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Chill`, /*1*/
  `#вязайнер #harmony #knitters #knitting #вязание #smile #курдиганище #кардиганище`, /*2*/
  `😍😍😍😍😍`, /*3*/
  ` Какое предложение интересное 😁`, /*4*/
  `Если вы автора видео, напишите пожалуйста для отметки 🤝`, /*5*/
  `🔥🔥🔥`, /*6*/
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

export const kurochkinandrei_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kurochkinandrei_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kurochkinandrei_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kurochkinandrei_array_of_posts = [
  ...kurochkinandrei_images,
  ...kurochkinandrei_videos
];
