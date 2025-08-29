import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'daily_cardistry';
const userId = '69e78c7a-b5eb-4bb2-9772-ae2250461f81';
const prefixUrl = 'https://dominicnikolai.github.io/project-295/assets/daily-cardistry/';
const followers = 133_792;
const followed = 87;
const profileDescription = 'Cards';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🌱 #cardistry #playingcards #magictrick #shuffle #sleightofhand #magician #cardistrylife #viral #reels`, /*1*/
  ` #cardistry #playingcards #magictrick #shuffle #sleightofhand #magician #cardistrylife #viral #reels`, /*2*/
  `Uno #cardistry #playingcards #magictrick #shuffle #sleightofhand #magician #cardistrylife #viral #reels`, /*3*/
  `Focus deck #cardistry #playingcards #magictrick #shuffle #sleightofhand #magician #cardistrylife #viral #reels`, /*4*/
  `🌱 #cardistry #playingcards #magictrick #shuffle #sleightofhand #magician #cardistrylife #viral #reels`, /*5*/
  `?? #cardistry #playingcards #magictrick #shuffle #sleightofhand #magician #cardistrylife #viral #reels`, /*6*/
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

export const daily_cardistry_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const daily_cardistry_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const daily_cardistry_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const daily_cardistry_array_of_posts = [
  ...daily_cardistry_images,
  ...daily_cardistry_videos
];
