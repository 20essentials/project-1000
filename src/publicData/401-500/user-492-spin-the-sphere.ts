import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'spin_the_sphere';
const userId = '8c26acf4-4c58-4860-bfec-03d49e3997c3';
const prefixUrl = 'https://dominicnikolai.github.io/project-361/assets/spin-the-sphere/';
const followers = 29_432;
const followed = 283;
const profileDescription = `Won AI/Generative Art Institution Award 2023`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#spinthesphere #generativeart #fineart #algorithmicart #proceduralart #visualdesign #abstractgeometric #patternseeing #BatsAndLanterns #WhimsicalHalloween`, /*1*/
  `#spinthesphere #generativeart #fineart #algorithmicart #proceduralart #visualdesign #abstractgeometric #patternseeing
#lightascension #digitalawakening`, /*2*/
  `#spinthesphere #generativeart #fineart #algorithmicart #proceduralart #visualdesign #abstractgeometric #patternseeing #DigitalDreamscape #CelestialDesign`, /*3*/
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

export const spin_the_sphere_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const spin_the_sphere_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const spin_the_sphere_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const spin_the_sphere_array_of_posts = [
  ...spin_the_sphere_images,
  ...spin_the_sphere_videos
];
