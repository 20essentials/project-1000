import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'max_retoka';
const userId = '';
const prefixUrl = '';
const followers = 322_432;
const followed = 323;
const profileDescription = `Эксперт-самоучка`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#logitech #ProductDesign #pcsetup #3d #3dart #3dmodel #3dmodeling #3danimation #3drender #renderlovers #3д #3дмодель #3данимация #3двизуализация #3дмоделирование #3ддизайн #cgart #cgartist #blender #blendercommunity #blender3d #blender3d #3dsmax #cinema4d #fusion360 #octanerender #redshift #vray`, /*1*/
  `#samsung #samsungs25ultra #s25ultra
#3d #3dart #3dmodel #3dmodeling #3danimation #3drender #renderlovers #3д #3дмодель #3данимация #3двизуализация #3дмоделирование #3ддизайн #cgart #cgartist #blender #blendercommunity #blender3d #blender3d #3dsmax #cinema4d #fusion360 #octanerender #redshift #vray`, /*2*/
  `#3d #3dart #3dmodel #3dmodelling #3danimation #3drender #renderlovers #3д #3дмодель #3дмоделирование #3двизуализация #3ддизайн #cgart #cgartist #blender #blender3d #blendercommunity #3dsmax #cinema4d #fusion360 #octanerender #redshift #vray #coronarender #maxretoka`, /*3*/
  `#3d #3dart #3dmodel #3dmodelling #3danimation #3drender #renderlovers #3д #3дмодель #3дмоделирование #3данимация #3двизуализация #3ддизайн #cgart #cgartist #blender #blender3d #blendercommunity #3dsmax #cinema4d #fusion360 #octanerender #redshift #vray #coronarender #dji #djiaction4 #gopro`, /*4*/
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

export const max_retoka_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const max_retoka_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const max_retoka_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const max_retoka_array_of_posts = [
  ...max_retoka_images,
  ...max_retoka_videos
];
