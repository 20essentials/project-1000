import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'prattprattpratt';
const userId = '';
const prefixUrl = '';
const followers = 43_832_893;
const followed = 50;
const profileDescription = `God first. Grateful to be here.`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Safe to say this video isn’t illegal anymore, because how has it been 5 years since @avengers Endgame was released?! Crazy looking back at that time with some of the greatest cast and crew makes me so thankful to be part of the Avengers universe!`, /*1*/
  `Everything you see is evidence. `, /*2*/
  `That’s a WRAP, on The Terminal List Season 2 production. From South Africa, to North America, to Morocco, the cast and crew pushed the limits to bring book 2, TRUE BELIEVER to life!
`, /*3*/
  `Things are heating up on the set of Terminal List Season 2 🔥`, /*4*/
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

export const prattprattpratt_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const prattprattpratt_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const prattprattpratt_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const prattprattpratt_array_of_posts = [
  ...prattprattpratt_images,
  ...prattprattpratt_videos
];
