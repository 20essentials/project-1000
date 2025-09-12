import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'cloud_i0';
const userId = 'b91637a8-7e05-4270-9e81-ec978b5de268';
const prefixUrl = 'https://dominicnikolai.github.io/project-323/assets/cloud-i0/';
const followers = 153_720;
const followed = 157;
const profileDescription = `3D Wizard`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#blender3d #animegirl #electronicmusic #maxmsp #animation`, /*1*/
  `Neck control point added to the real-time system. Audio-driven facial morphs targets via FFT + audio amplitude. Max/MSP patch controlling bones and shape keys in Blender . . #blender3d #newmediaart #electronicmusic #maxmsp #animation`, /*2*/
  `Alien Autopsy 🦴🫁🕳️👽 . . . . . . . . #medical #alien #3dart #sciart #blender3d`, /*3*/
  `#computerart #blendercommunity #motiondesign #dailyartwork #xparticles #cgsociety #cryptoart #nftart #dailyart #surrealart #3dartworks #3dartwork #cryptoartist #proceduralart #creativecodeart #3dart #fkndesign #graphicjuice @graphic.juice`, /*4*/
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

export const cloud_i0_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const cloud_i0_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const cloud_i0_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const cloud_i0_array_of_posts = [
  ...cloud_i0_images,
  ...cloud_i0_videos
];
