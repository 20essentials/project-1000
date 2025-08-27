import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'akshit_blend';
const userId = '';
const prefixUrl = '';
const followers = 86_720;
const followed = 323;
const profileDescription = '3d Artist';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `The Retro KFC store. Let's have Chicken Bucket. Viewport Vs Render Made using Blender 3D and DaVinci Resolve #blenderrender #blenderanimation #blenderart #visual_creatorz #renderscapes #blendercommunity #3d #kfc #kfcchicken First KFC store opened in which city?`, /*1*/
  `You are being consistent with your passion. Viewport Vs Render Made using Blender 3D and DaVinci Resolve #blender3d #blendercommunity #blendercycles #blenderart #blenderrender #blenderanimation #renderscapes #visual_creatorz #porsche #porsche911 #porscheart #cars #3d`, /*2*/
  `The childhood memories of going to McDonalds and having Happy Meals just for the fancy toys. Viewport Vs Render Made using Blender 3D and DaVinci Resolve @mcdonalds #blender3d #blenderanimation #blenderart #blendercycles #3d #blenderender #mcdonalds #mcdonalds🍟 #renderscapes #visual_creatorz #3dartwork #3danimation`, /*3*/
  `Viewport Vs Render The Cozy Date at Starbucks Made using Blender 3D and DaVinci Resolve #blender3d #blendercommunity #blendercycles #blenderrender #blenderanimation #visual_creatorz #renderscapes #starbucks #starbuckscoffee #3dartwork #3d #blenderrender`, /*4*/
  `POV: You are trusting the process. The journey of creating 3D art requires time, effort, and most importantly trust in your abilities to bring your imagination to life All the artworks are made using Blender 3D #blender3d #blendercommunity #blenderart #blenderrender #blenderanimation #blender3dart #renderscapes #visual_creatorz #3d #3dartwork #3danimation`, /*5*/
  `#blender3dart #blenderanimation #visual_creatorz #renderscapes #3d #artworks #mercedes_benz #gclass #mercedeslovers #3danimation #3dart`, /*6*/
  `Viewport VS Render The Peaceful Room My desired place to work and sleep. Made using Blender 3D and DaVinci Resolve #blender3d #blendercommunity #blenderrender #blenderart #blenderanimation #cozy #interiordesign #renderscapes #visual_creatorz #blendercycles #blenderanimation #blender3dart #3d #3dart`, /*7*/
  `The Ducati SuperSport Room Viewport Vs Render Made using Blender 3D and DaVinci Resolve #blender3d #blendercommunity #blenderart #blenderender #blender3dart #blendercycles #renderscapes #visual_creatorz #blenderanimation #ducatisupersport #ducati #3dart #3d #nvidiastudio`, /*8*/
  `Viewport Vs Render The Dirty Porsche Made using Blender 3D & DaVinci Resolve #blender3d #blendercommunity #b3d #blendercycles #blenderart #blenderrender #3d #3dartwork #3danimation #blender3dart #artworks #renderscapes #visual_creatorz #blenderanimation #porsche #porsche911 #porscheartdaily `, /*9*/ 
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

export const akshit_blend_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const akshit_blend_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const akshit_blend_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const akshit_blend_array_of_posts = [
  ...akshit_blend_images,
  ...akshit_blend_videos
];
