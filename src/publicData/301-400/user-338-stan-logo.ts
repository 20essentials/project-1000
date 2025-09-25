import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'stan_logo';
const userId = '';
const prefixUrl = '';
const followers = 126_832;
const followed = 50;
const profileDescription = `⌛️ 4 Yrs Exp`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Logo design for a cocktail bar Visual mix of a martini glass and vinyl — perfect harmony of sound & taste #logo #graphicdesign #logodesinger #logoinspirations`, /*1*/
  `#logo #graphicdesign #logodesinger #logoinspirations`, /*2*/
  ` #logoidea #logoinspirations #logo #logodesinger #graphicdesign`, /*3*/
  `#logo #graphicdesign #logodesinger #logoinspirations #streetwear`, /*4*/
  ` #logo #graphicdesign #logodesinger #logoinspirations`, /*5*/
  ` #logo #graphicdesign #logoinspirations`, /*6*/
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

export const stan_logo_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const stan_logo_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const stan_logo_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const stan_logo_array_of_posts = [
  ...stan_logo_images,
  ...stan_logo_videos
];
