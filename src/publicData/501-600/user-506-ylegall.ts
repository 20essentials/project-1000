import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ylegall';
const userId = '';
const prefixUrl = '';
const followers = 47_832;
const followed = 892;
const profileDescription = `code based art`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#art #loop #generativeart`, /*1*/
  `#art #loop #generativeart`, /*2*/
  `Extruder: test with perspective projection and infinite scroll of the HP XY vector font. The custom segment renderer can handle half a million+ instances with rounded caps (18 triangles each) updated/regenerated for each frame on my old Intel MacBook… Not bad! #realtime #webgl #textmode`, /*3*/
  `Nice, this is rad🔥`, /*4*/
  `A more polished looping render exploring the hypnotic effect of twisting ribbons. #art #houdini #loop #trippy`, /*5*/
  `Abstract #space #art #loop. Made with #houdini`, /*6*/
  `Bouncing #neon rays. Fun experiments with 2D reflections and global illumination in #houdini.
#art #digitalart #motiongraphics`, /*7*/
  `#art #design #digitalart`, /*8*/
  `#art #design #digitalart`, /*9*/ 
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

export const ylegall_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ylegall_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ylegall_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ylegall_array_of_posts = [
  ...ylegall_images,
  ...ylegall_videos
];
