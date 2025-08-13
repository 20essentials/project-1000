import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mr_lamborghini';
const userId = '459047e6-abb8-481e-bc67-3d7cd1ac9980';
const prefixUrl = 'https://dominicnikolai.github.io/project-144/assets/mr-l4mborghini/';
const followers = 73_000;
const followed = 832;
const profileDescription =  '🔥';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 9;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}foto-perfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Lamborghini Huracan Evo Grigio Lynx`, /*1*/
  `Lamborghini Aventador RDS LP700-4`, /*2*/
  `Lamborghini Huracan Evo Blue Nethuns`, /*3*/
  `Lamborghini Huracan Evo RWD Arancio Borealis`, /*4*/
  `Aventador S Roadster Nero Pegaso`, /*5*/
  `Lamborghini Urus Grigio Nimbus`, /*6*/
  `Lamborghini Huracan Evo Giallo Horus`, /*7*/
  `Lamborghini Huracan Evo Nero Helene`, /*8*/
  `Bentley Continental GTC W12 Camel`, /*9*/
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

export const mr_lamborghini_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mr_lamborghini_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mr_lamborghini_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mr_lamborghini_array_of_posts = [
  ...mr_lamborghini_images,
  ...mr_lamborghini_videos
];
