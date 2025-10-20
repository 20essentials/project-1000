import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pilotmadeleine';
const userId = 'f0d978f3-66b4-4857-9b73-03876c2c9ffb';
const prefixUrl = 'https://dominicnikolai.github.io/project-367/assets/pilotmadeleine/';
const followers = 1_532_832;
const followed = 127;
const profileDescription = `Germany 🇩🇪 Malta 🇲🇹 USA 🇺🇸`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `The most surreal experience ever 😨🤩 (Save this for inspo) 🤍 #sphere #vegassphere #bachelorettetrip #bachelorette #lasvegas #lasvegastraveltips`, /*1*/
  `#rainbow #daytimefireworks #wedding #lakecomo #lakecomowedding #villabalbiano #firstkiss`, /*2*/
  `#borabora #marriageadvice #couplegoals`, /*3*/
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

export const pilotmadeleine_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pilotmadeleine_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pilotmadeleine_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pilotmadeleine_array_of_posts = [
  ...pilotmadeleine_images,
  ...pilotmadeleine_videos
];
