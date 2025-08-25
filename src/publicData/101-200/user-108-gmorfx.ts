import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gmorfx';
const userId = '';
const prefixUrl = '';
const followers = 55_720;
const followed = 243;
const profileDescription = '3D Visual Narratives ';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Freedom fizzes in every drop 🍉 . . . #3d #blender3d #art #cgi #3dart #b3d #maxonc4d #c4d`, /*1*/
  `My pc after rendering this chaos 💀 . #gmorfx #graphicmorphx #blender3d #art #3d #cgi #b3d`, /*2*/
  ` #gmorfx #graphicmorphx #blender3d #art #3d #cgi #product #b3d`, /*3*/
  `#blender3d #art #3d #cgi #3dart #b3d #behindthescenes #digitalart`, /*4*/
  `#blender3d #art #3d #3dart #cgi #blender #b3d #digitalart #behindthescene`, /*5*/
  `#art #blender3d #3d #cgi #3dart #blender #embergen #b3d #behindthescene`, /*6*/
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

export const gmorfx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gmorfx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gmorfx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gmorfx_array_of_posts = [
  ...gmorfx_images,
  ...gmorfx_videos
];
