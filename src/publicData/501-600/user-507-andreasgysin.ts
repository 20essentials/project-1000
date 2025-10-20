import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'andreasgysin';
const userId = 'e600f09c-52bf-4615-8740-d849bfb0a9f7';
const prefixUrl = 'https://dominicnikolai.github.io/project-363/assets/andreasgysin/';
const followers = 58_832;
const followed = 911;
const profileDescription = `︻╦╤─ ☮︎`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `‘Crush’, by Andreas Gysin, 2023.`, /*1*/
  `X–Y–Z embeds the glyphs obtained from the ROM of an HP vector screen and displays them through a custom 3D stroke-geometry renderer.`, /*2*/
  `Custom software, Javascript, WebGL`, /*3*/
  `X-Y-Z `, /*4*/
  `Variable dimensions, silent
`, /*5*/
  `Test for a fun little project for an unusual client. #realtime #graphicdesign #motiondesign #kineticidentity #visualidentity #javascript #printdesign #gysinvanetti`, /*6*/
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

export const andreasgysin_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const andreasgysin_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const andreasgysin_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const andreasgysin_array_of_posts = [
  ...andreasgysin_images,
  ...andreasgysin_videos
];
