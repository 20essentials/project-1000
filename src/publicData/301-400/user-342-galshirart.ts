import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'galshirart';
const userId = '';
const prefixUrl = '';
const followers = 667_322;
const followed = 50;
const profileDescription = `Brand designer based in Tel Aviv`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Logo design for Vetric 💎 Vetric (vetric.io) is a platform for real-time, accurate, and secure data collection. Diamonds, like data, are hidden and hard to collect, therefore they hold a precious value. The diamond-shaped logo represents Vetric’s focus on perfection. Through clarity and transparency, it symbolizes their refined product and obsession for quality, security, and excellence. #logo #logodesinger #branding #brandidentity #logomark`, /*1*/
  `#logo #brandidentity #branding #motiongraphics #logodesign`, /*2*/
  `#logodesinger #branding #brandidentitydesign #art #motiondesign #graphic`, /*3*/
  `#logodesigner #logo #logodesign #branding #motiongraphics #design #brandidentity`, /*4*/
  `Hello world. We’re Headroom.

`, /*5*/
  `#logo #logodesign #branding #design #motiondesign #animation`, /*6*/
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

export const galshirart_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const galshirart_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const galshirart_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const galshirart_array_of_posts = [
  ...galshirart_images,
  ...galshirart_videos
];
