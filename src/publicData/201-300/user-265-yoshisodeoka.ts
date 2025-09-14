import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'yoshisodeoka';
const userId = '';
const prefixUrl = '';
const followers = 32_720_322;
const followed = 22;
const profileDescription = `1:61 ━⬤━━━━ 8:03`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#mathart`, /*1*/
  `#mathart`, /*2*/
  `#mathart`, /*3*/
  `#mathart`, /*4*/
  `#mathart`, /*5*/
  `#mathart`, /*6*/
  `#mathart`, /*7*/
  `#mathart`, /*8*/
  `#mathart`, /*9*/ 
  `#mathart`, /*10*/
  `#mathart`, /*11*/
  `#mathart`, /*12*/
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

export const yoshisodeoka_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const yoshisodeoka_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const yoshisodeoka_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const yoshisodeoka_array_of_posts = [
  ...yoshisodeoka_images,
  ...yoshisodeoka_videos
];
