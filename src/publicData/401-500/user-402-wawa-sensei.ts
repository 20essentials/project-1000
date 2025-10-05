import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'wawa_sensei';
const userId = 'ddf21f3e-75b1-4962-a9f9-58aefeb18dcf';
const prefixUrl = 'https://dominicnikolai.github.io/project-350/assets/wawa-sensei/';
const followers = 91_787;
const followed = 50;
const profileDescription = `3D Web Developer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Discover some 3D websites!`, /*1*/
  ` #webdevelopment #threejs #web3d #3dwebdevelopment #webgl #webgpu`, /*2*/
  `#webdevelopment #threejs #web3d #3dwebdevelopment #webgl #webgpu #developers #softwaredevelopment #webdev #webdevelopers`, /*3*/
  `Welcome to Three.js 101! In this third episode we will discover what are Meshes`, /*4*/
  `Welcome to Three.js 101! In this fourth episode we will discover what are Geometries 🪄`, /*5*/
  `Welcome to Three.js 101! 💐In this fifth episode we will discover what are Materials 🎨🖌️`, /*6*/
  `Here is a quick preview of my new video on the building process to create this AR/VR rhythm game with React Three Fiber. Watch the full video on my YouTube Channel! #webdevelopment #reactthreefiber #threejs #webdeveloper`, /*7*/
  `Three.js Devs, You NEED This VS Code Extension! 3D Previews Made Easy! 🔥 #codingtips #threejs #codeeditor #developertools #webdevtips #webdev #webdevelopment #visualstudiocode #vscode #visualstudiocodeextensions #vscodeextensions #vscodetricks`, /*8*/
  `Learn how to optimize your gltf models and textures to get rid of the loading freezes when loading Three.js / React Three Fiber scenes! 🥶 #threejs #reactthreefiber #webdevelopment #creativedevelopers #3dweb #3dwebdevelopment`, /*9*/ 
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

export const wawa_sensei_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const wawa_sensei_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const wawa_sensei_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const wawa_sensei_array_of_posts = [
  ...wawa_sensei_images,
  ...wawa_sensei_videos
];
