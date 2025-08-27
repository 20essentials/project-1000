import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'automotive';
const userId = '533ef583-cea7-4244-b3dd-5fcfb5ae1b2c';
const prefixUrl = 'https://dominicnikolai.github.io/project-291/assets/aut0motive/';
const followers = 100_000;
const followed = 50;
const profileDescription = 'ufff';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Reactions 😍 Ft: HYDs only Lamborghini Huracan evo spyder`, /*1*/
  `V12 FLYBY 💆🏻‍♂️ FT:- Lamborghini Aventador LP700-4 Finished In Arancio Atlas Shade & Equipped`, /*2*/
  `WAIT FOR IT!! LAMBORGHINI HURACAN IN VERDE MANTIS SHADE`, /*3*/
  `1/3 296 GTS IN HYD`, /*4*/
  `TRANSFORMER 🤖 ONE AND ONLY LAMBORGHINI HURACAN EVO SPYDER OF HYD`, /*5*/
  `BACT TO HOME ✨ FT:- PORSCHE 911 992 GT3 `, /*6*/
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

export const automotive_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const automotive_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const automotive_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const automotive_array_of_posts = [
  ...automotive_images,
  ...automotive_videos
];
