import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'jesslwiseman';
const userId = '';
const prefixUrl = '';
const followers = 161_832;
const followed = 492;
const profileDescription = `Painter, Animator, Designer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `For some reason the clock app seemed to like this exact vid the other day lol`, /*1*/
  `#blender #blender3d #art #animator #3dart`, /*2*/
  `1) you DO NOT need to have a high poly-count for something to look realistic. Forcing yourself to optimise your renders by relying on textures and learning procedural texture stacking is what will give life to your objects 2) for background and far away objects, ‘project from view’ or projection mapping irl images will be your best friend. Real life photos already have so much detail within them (aka a brick wall with grit in between the cracks) use them to ur advantage. Photos are free detail 3) !Lighting! - probably the most important part to ‘realistic’ looking renders is how the scene or environment is being lit. Even with poor texture, lighting can change the entire feel of a shot. Always makes sure you aren’t flooding your scene with ambient / no direction lighting (unless your going for an outdoor look). Directional and purposeful lighting + even the colour of the lighting is important.`, /*3*/
  `Incredible Jess
`, /*4*/
  `#blender #blender3d #animation #3dart #blendercommunity #vfx #b3d`, /*5*/
  `#toystory #blender #blender3d #animation #3dart #blendercommunity`, /*6*/
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

export const jesslwiseman_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const jesslwiseman_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const jesslwiseman_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const jesslwiseman_array_of_posts = [
  ...jesslwiseman_images,
  ...jesslwiseman_videos
];
