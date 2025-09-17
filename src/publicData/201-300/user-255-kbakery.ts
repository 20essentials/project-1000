import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kbakery';
const userId = '863095df-4c47-4f02-a14f-4491ca00f692';
const prefixUrl = 'https://dominicnikolai.github.io/project-327/assets/kbakery/';
const followers = 672_720;
const followed = 50;
const profileDescription = `Torte personalizzate`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#cakedesign #sweettable #cakedecorating #weddingcake #cupcakes #imperia`, /*1*/
  `#cakedesign #cakedecorating #sweettable #weddingcake #cupcakes #imperia #tortesumisura #tortapersonalizzata`, /*2*/
  `🍁🍂 Autumn cake 🍁🍂 #cakedesign #cakedecorating #weddingcake #sweettable #cupcakes #cakeart #tortapersonalizzata #tortesumisura #autumncake`, /*3*/
  `Questo design è sempre di moda`, /*4*/
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

export const kbakery_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kbakery_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kbakery_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kbakery_array_of_posts = [
  ...kbakery_images,
  ...kbakery_videos
];
