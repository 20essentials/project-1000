import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'eyes3iii';
const userId = '';
const prefixUrl = '';
const followers = 33_832;
const followed = 42;
const profileDescription = `👁️👁️👁️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Working on some 3D trees for my websire using threeJS and leaning on instances and instanced buffer attributes to keep it all running smooth!! . #threejs #creativecoding #webGL #3dwebsite #webdesign #reactJS #3Dartist #r3f #javascript #3dDesigner #interactivewebsite #blender3D #coding`, /*1*/
  `#threejs #creativecoding #webGL #3dwebsite #interactivewebsite #webdesign #reactJS #3Ddesign #r3f #javascript #blender3D #3Dartist #coding`, /*2*/
  `My workflow for building 3D websites using threeJS . #threeJS #3dwebsite #creativecoding #reactjs #websitedesign #3dart #webGL #blender3d #3Ddesign`, /*3*/
  `Deep diving into compute shaders to add some 3D interactive grass to a new webaite build #3dwebsite #threeJS #creativecoding #interactivewebsite #b3d #webGL`, /*4*/
  `#3dwebsite #threeJS #creativecoding #interactivewebsite #webGL #reactJS #3Ddesign #r3f #b3d #javascript #websitedesign #blender3d`, /*5*/
  `#3dwebsite #threeJS #creativecoding #interactivewebsite #b3d`, /*6*/
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

export const eyes3iii_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const eyes3iii_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const eyes3iii_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const eyes3iii_array_of_posts = [
  ...eyes3iii_images,
  ...eyes3iii_videos
];
