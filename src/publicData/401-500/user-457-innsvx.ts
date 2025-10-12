import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'innsvx';
const userId = 'ea77b136-0f86-476a-a455-ea608ce3e2ac';
const prefixUrl = 'https://dominicnikolai.github.io/project-356/assets/innsvx/';
const followers = 64_432;
const followed = 194;
const profileDescription = `we make 3D art! ★`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#3d #blender3d #3dart #vfx #vfxartist #3dartist #artist #artistlife #hongkong #hk #hkart #3djourney`, /*1*/
  `we just upgraded our monitor and it’s a game changer (honestly) 🖥️`, /*2*/
  `#mercari香港 #japan`, /*3*/
  `#3d #3dartist #blender3d`, /*4*/
  `#createwithclo #digitalfashion #clo3d`, /*5*/
  `#3d #3dart #blender3d #hongkong #artist #artistlife #3dartist #hongkongart`, /*6*/
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

export const innsvx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const innsvx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const innsvx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const innsvx_array_of_posts = [
  ...innsvx_images,
  ...innsvx_videos
];
