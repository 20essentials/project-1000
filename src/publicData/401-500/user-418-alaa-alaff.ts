import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'alaa_alaff';
const userId = 'a9d21582-a7a1-44ba-9fe2-a0699ec887e2';
const prefixUrl = 'https://dominicnikolai.github.io/project-352/assets/alaa-alaff/';
const followers = 84_832;
const followed = 170;
const profileDescription = `👨🏻‍💻 Software Engineer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#frontend #development #webdeveloper #cssanimation #javascript #javascripts #csstricks #cssanimation #htmlcss`, /*1*/
  `#frontend #css #html #htmlcss #csstricks #frontenddevelopment #frontenddeveloper`, /*2*/
  `#frontend #webdeveloper #developer #frontenddev #frontenddeveloper`, /*3*/
  `css #csstricks #cssflexbox #htmlcss #frontend #webdevelopers`, /*4*/
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

export const alaa_alaff_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const alaa_alaff_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const alaa_alaff_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const alaa_alaff_array_of_posts = [
  ...alaa_alaff_images,
  ...alaa_alaff_videos
];
