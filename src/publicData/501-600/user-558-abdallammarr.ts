import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'abdallammarr';
const userId = '24d1f222-8df3-495d-907b-7b5714fbaf09';
const prefixUrl = 'https://dominicnikolai.github.io/project-370/assets/abdallammarr/';
const followers = 19_832;
const followed = 322;
const profileDescription = `3D Motion Designer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#cinema4d #c4d #otoy #octanerender #3dmodelling #3drendering #motiondesign #3danimation #3d #3dart #b3d #blender3d #motionlovers #3drenders #mdcommunity #visualart #productdesign #productvisualization #render3d #renderzone #styleframe #digitalart #ثري_دي`, /*1*/
  `#cinema4d #c4d #octanerender #otoy #3dart #3dartist #3drendering #maxon #motiondesign #mdcommunity #motiondesigner #b3d #blender3d #3dmotiondesign #motionlovers #c4danimation #rendering3d #rendering #3d #productdesign #productvisualization #3dvisualization #gsg #renderzone #nvidiastudio #cgi`, /*2*/
  `Don’t leave them alone!, Speak up.`, /*3*/
  `#cinema4d #c4d #otoy #octanerender #motiondesign #3d #3dart #3dartist #interstellar #interstellarmovie #mdcommunity #gsg #madewithgsg #blender3d #b3d #3danimation #photorealistic #3dmotiondesign #3dvisualization #3drender #3drendering #renderlovers #rendering3d #motionlovers #renderzone #digitalart #cgi #murph #hanzzimmer`, /*4*/
  `#cinema4d #c4d #3d #octane #otoy #octanerender #rendernetwork #3dartwork #3dart #3dartists #mdcommunity #motiondesign #3dvisualization #blender #blender3d #blendercommunity #b3d #maxon #maxonc4d #rendering #render #rendering3d #3drender #3drendering #renderlovers #motionlovers #studioshare #nvidiastudio #3danimations @nvidiastudio`, /*5*/
  `#cinema4d #c4d #otoy #octanerender #octane #maxon #3d #3dartwork #3dart #3dartist #3danimation #3drendering #b3d #blender3d #blendercommunity #mdcommunity #motiondesign #motiondesigner #3drender #render #rendering3d #rendering #gsg #productdesign #productanimation #3dvisualizations #productvisualization #motionlovers #renderzone`, /*6*/
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

export const abdallammarr_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const abdallammarr_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const abdallammarr_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const abdallammarr_array_of_posts = [
  ...abdallammarr_images,
  ...abdallammarr_videos
];
