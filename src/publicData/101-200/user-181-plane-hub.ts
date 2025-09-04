import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'plane_hub';
const userId = '';
const prefixUrl = '';
const followers = 82_720;
const followed = 50;
const profileDescription = 'Plane world';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Airbus A320 Neo #aviation #aviationlovers #avgeek #plane #airport #airport #foryou #airport #foryou #boeing #explore #view #heaven`, /*1*/
  `#aviation #aviationlovers #avgeek #airport #airport #plane`, /*2*/
  ` #aviation #aviationlovers #avgeek ##airport #plane #explore`, /*3*/
  `#aviation #aviationlovers #avgeek #airport #avgeek #airport #foryou #plane #explore`, /*4*/
  `A320 Neo #aviation #aviationlovers #avgeek #airport #plane #view`, /*5*/
  `guess the plane #aviation #aviationlovers #avgeek #foryou #plane`, /*6*/
  `C-17 #aviation #aviationlovers #avgeek #airport #plane`, /*7*/
  `the largest plane in the world #aviation #aviationlovers #avgeek #foryou #airport #foryou #view`, /*8*/
  `Airbus A320 Neo #avgeek #p#airport #avgeek #airport #plane`, /*9*/ 
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

export const plane_hub_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const plane_hub_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const plane_hub_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const plane_hub_array_of_posts = [
  ...plane_hub_images,
  ...plane_hub_videos
];
