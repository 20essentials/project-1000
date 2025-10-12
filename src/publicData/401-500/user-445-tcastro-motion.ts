import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'tcastro_motion';
const userId = '499cef2a-65a6-4fbf-aa5e-d606d48aa43f';
const prefixUrl = 'https://dominicnikolai.github.io/project-355/assets/tcastro-motion/';
const followers = 275_832;
const followed = 684;
const profileDescription = `Motion Designer | Criador de Conteúdo`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `In After Effects, limits are nonexistent. 🚀✨ . . . Client: Lacnor Agency: And US Director: Eduardo Rosa Animation director: Tiago Castro Character Design Fernanda Rosa Ilustration: darkstream.cc nicolas.corrente Animation: porimotion , johnalves.me , iagomacielmotion , mykaelsobreira Comp: Tiago Castro Animatic  #madewithcc #creativecloud #adobecreativecloud #lacnor #characteranimation #process #animation2d #aftereffects #rig #digitalart #movement #motiondesign

`, /*1*/
  `#rigmaster #rig #motiongraphics #aftereffects`, /*2*/
  `Easy Rig 🔥`, /*3*/
  `#aftereffects #rig #animation #motiongraphics #rigmaster`, /*4*/
  `#CreativeCloudPro #Photoshop #AfterEffects #AdobeBrasil #MotionDesign #VFX #Rig #Publi`, /*5*/
  `#aftereffects #animation #motiongraphics`, /*6*/
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

export const tcastro_motion_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const tcastro_motion_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const tcastro_motion_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const tcastro_motion_array_of_posts = [
  ...tcastro_motion_images,
  ...tcastro_motion_videos
];
