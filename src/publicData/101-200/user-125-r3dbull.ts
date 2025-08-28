import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'redbull';
const userId = '';
const prefixUrl = '';
const followers = 17_720_820;
const followed = 122;
const profileDescription = 'watch the World Of Red Bull';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` #redbull #givesyouwiiings #energydrink #motorbike #motorsports`, /*1*/
  `#redbull #givesyouwiiings #energydrink #skate #longboarding #skateboarding #cameraman`, /*2*/
  `#redbull #givesyouwiiings #energydrink`, /*3*/
  ` #redbull #givesyouwiiings #energydrink #skydive #skysurf #grind #worldfirst #baybridge #prada`, /*4*/
  `fearless in the forest 🌲 🚲: #redbull #givesyouwiiings #energydrink #bike #mtb`, /*5*/
  `#redbull #givesyouwiiings #energydrink #aerialsports #skydiving #fireworks`, /*6*/
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

export const redbull_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const redbull_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const redbull_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const redbull_array_of_posts = [
  ...redbull_images,
  ...redbull_videos
];
