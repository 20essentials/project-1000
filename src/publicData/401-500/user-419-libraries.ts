import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'libraries';
const userId = '';
const prefixUrl = '';
const followers = 572_832;
const followed = 473;
const profileDescription = `Creativity`;
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
  `#moment #today`, /*1*/
  `#moment #today`, /*2*/
  `#moment #today`, /*3*/
  `#moment #today`, /*4*/
  `#moment #today`, /*5*/
  `#moment #today`, /*6*/
  `#moment #today`, /*7*/
  `#moment #today`, /*8*/
  `#moment #today`, /*9*/
  `#moment #today`, /*10*/
  `#moment #today`, /*11*/
  `#moment #today`, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
]

export const libraries_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription,
});

const libraries_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const libraries_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const libraries_array_of_posts = [
  ...libraries_images,
  ...libraries_videos
];
