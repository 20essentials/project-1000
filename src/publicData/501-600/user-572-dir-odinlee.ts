import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'dir_odinlee';
const userId = '8110e4b5-31c2-4d70-8bb9-53f272b85325';
const prefixUrl = 'https://dominicnikolai.github.io/project-372/assets/dir-odinlee/';
const followers = 105_832;
const followed = 323;
const profileDescription = `I create 3D stories for brands`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `So grateful to able to do 3D full time successfully while traveling across the world. It’s been a long journey creating 3D animations, but so worth it. 💯 . . #blender #3dartist #visuals #3danimation #unrealengine`, /*1*/
  `Its been too long of a journey in Blender to not make this work hahaha . . #blender #3danimation #unrealengine #octane #visuals`, /*2*/
  `3 Blender artists come together using @3dkit.ai Who wants a sequel? . . #blender #3danimation #3dartist #unrealengine`, /*3*/
  `Thought id just post this client video I made a while back instead of letting it die in my gallery`, /*4*/
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

export const dir_odinlee_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const dir_odinlee_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const dir_odinlee_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const dir_odinlee_array_of_posts = [
  ...dir_odinlee_images,
  ...dir_odinlee_videos
];
