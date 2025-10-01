import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'sizon95';
const userId = '';
const prefixUrl = '';
const followers = 36_832;
const followed = 50;
const profileDescription = `The one and only omnitrix app that you need`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Real Aliens app is almost ready for Wear OS. What's your favorite Ben 10 game? #ben10 #omnitrix #app #cartoon #ben10omniverse #ben10alienforce #nostalgia`, /*1*/
  `Real Aliens Master Control #ben10 #omnitrix #cartoon #app #ben10alienforce #nostalgia #cosplay #ben10omniverse #carnitrix #chaquetrix`, /*2*/
  `Real Aliens App Available on PlayStore #ben10 #cartoon #playstore #omnitrix #cosplay #carnitrix #chaquetrix`, /*3*/
  `App name: Real Aliens 4.9⭐️ Available on Play Store #ben10 #omnitrix #cartoon #app #ben10omniverse #ben10alienforce #cosplay #heatblast`, /*4*/
  `#ben10 #omnitrix #cartoon #app #ben10omniverse #ben10alienforce #cosplay #heatblast`, /*5*/
  `Walking home, best travel alien ? #ben10 #omnitrix #app #cartoon #ben10omniverse #ben10alienforce #nostalgia`, /*6*/
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

export const sizon95_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const sizon95_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const sizon95_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const sizon95_array_of_posts = [
  ...sizon95_images,
  ...sizon95_videos
];
