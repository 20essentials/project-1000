import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'aplasticplant';
const userId = '58bc4a0d-b6ee-4bf1-b606-f98576cc2bfe';
const prefixUrl = 'https://dominicnikolai.github.io/project-351/assets/aplasticplant/';
const followers = 666_893;
const followed = 149;
const profileDescription = `when you feel useless just remember you breathe out carbon dioxide for plants`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 12;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
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
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  `artwork made on microsoft paint by khwampa`, /*1*/
  `artwork made on microsoft paint by khwampa`, /*2*/
  `artwork made on microsoft paint by khwampa`, /*3*/
  `artwork made on microsoft paint by khwampa`, /*4*/
  `artwork made on microsoft paint by khwampa`, /*5*/
  `artwork made on microsoft paint by khwampa`, /*6*/
  `artwork made on microsoft paint by khwampa`, /*7*/
  `artwork made on microsoft paint by khwampa`, /*8*/
  `artwork made on microsoft paint by khwampa`, /*9*/
  `artwork made on microsoft paint by khwampa`, /*10*/
  `artwork made on microsoft paint by khwampa`, /*11*/
  `artwork made on microsoft paint by khwampa`, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
]

export const aplasticplant_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const aplasticplant_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const aplasticplant_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const aplasticplant_array_of_posts = [
  ...aplasticplant_images,
  ...aplasticplant_videos
];
