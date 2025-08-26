import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'jay_tracing';
const userId = '7b929a85-97d9-48e8-a78b-7723ea2986b3';
const prefixUrl = 'https://dominicnikolai.github.io/project-290/assets/jaytracing/';
const followers = 123_720;
const followed = 193;
const profileDescription = 'Bringing ideas to life through stunning visuals';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Time to put this animation in the oven, hopefully the next 4 days of rendering goes smoothly! #rampagerally`, /*1*/
  `Final Submission for #chasmscall `, /*2*/
  `#rampagerally final submission`, /*3*/
  `Polestar 5`, /*4*/
  `Lights - Textures - Render #B3D #Blender #Blender3D #mdcommunity #rendershare #renderlovers #MadeWithBlender #Blenderrender #Blenderartwork #3Dblendered #3Dart #3Drender #3Dartist #CGI #beetle #woods #forest`, /*5*/
  `Porsche animation made in #blender`, /*6*/
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

export const jay_tracing_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const jay_tracing_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const jay_tracing_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const jay_tracing_array_of_posts = [
  ...jay_tracing_images,
  ...jay_tracing_videos
];
