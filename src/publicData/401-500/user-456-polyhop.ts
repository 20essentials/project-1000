import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'polyhop';
const userId = '9cd8fa5e-2f2a-4576-816a-1d81e32c4e4d';
const prefixUrl = 'https://dominicnikolai.github.io/project-356/assets/polyhop/';
const followers = 114_832;
const followed = 828;
const profileDescription = `Daily Generative Art`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#climateweek #sustainability #ewaste #recycling #dataviz #datavisualization #mediaart #design #artandtechnology #digitalart #vfx #artxcode #creativecoding #codeart
`, /*1*/
  `Don’t forget to register for TouchDesigner wizard `, /*2*/
  `#toonshader #crosshatch
#everyday #realtime #generative #generativeart #generativedesign #newmedia #mediaart #design #artandtechnology #digitalart #vfx #trippy #trippyart #mesmerizing #artxcode #creativecoding`, /*3*/
  `We can't get enough of watching Osmose's symphony take shape and create this superb work of art 🤍`, /*4*/
  `#GLSL #everyday #realtime #generative #generativeart #generativedesign #newmedia #mediaart #design #artandtechnology #digitalart #vfx #trippy #trippyart #mesmerizing #artxcode #creativecoding`, /*5*/
  `#beziercurves #GLSL #everyday #realtime #generative #generativeart #generativedesign #newmedia #mediaart #design #artandtechnology #digitalart #vfx #trippy #trippyart #mesmerizing #artxcode #creativecoding`, /*6*/
  `#everyday #realtime #generative #generativeart #generativedesign #newmedia #mediaart #design #artandtechnology #digitalart #vfx #trippy #trippyart #mesmerizing #artxcode #creativecoding`, /*7*/
  `#everyday #realtime #generative #generativeart #generativedesign #newmedia #mediaart #design #artandtechnology #digitalart #vfx #trippy #trippyart #mesmerizing #artxcode #creativecoding`, /*8*/
  `#everyday #realtime #generative #generativeart #generativedesign #newmedia #mediaart #design #artandtechnology #digitalart #vfx #trippy #trippyart #mesmerizing #artxcode #creativecoding`, /*9*/ 
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

export const polyhop_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const polyhop_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const polyhop_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const polyhop_array_of_posts = [
  ...polyhop_images,
  ...polyhop_videos
];
