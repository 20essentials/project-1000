import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'girlchill_naturelovers';
const userId = '86beb7ee-23e1-45e3-ad60-7f41faa25a92';
const prefixUrl = 'https://dominicnikolai.github.io/project-313/assets/girlchill-naturelovers/';
const followers = 374_720;
const followed = 50;
const profileDescription = 'Enjoy beautiful moments of nature';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `This is so magical. It's so beautiful ✨😊 #nature #naturelovers #naturephotography`, /*1*/
  `Tag someone special ✨😊 #nature #naturelovers #naturephotography`, /*2*/
  `This is so magical. It’s so beautiful ✨😊 #nature #naturelovers #naturephotography`, /*3*/
  `Tag someone special ✨😊 #nature #naturelovers #naturephotography`, /*4*/
  `Nature is so beautiful. It’s so wonderful ✨😊 #nature #naturelovers #naturephotography`, /*5*/
  `Nature is so beautiful. It's so wonderful ✨😊 #nature #naturelovers #naturephotography`, /*6*/
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

export const girlchill_naturelovers_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const girlchill_naturelovers_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const girlchill_naturelovers_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const girlchill_naturelovers_array_of_posts = [
  ...girlchill_naturelovers_images,
  ...girlchill_naturelovers_videos
];
