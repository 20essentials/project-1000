import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'math_epik1100';
const userId = '';
const prefixUrl = '';
const followers = 262_720;
const followed = 53;
const profileDescription = `Math concepts simplified using animations📐📊`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `An angle is a slice of a circle. #stem #reels #mathmemes #mathematics #math #animation #2d #2danimation #visual #geometry #science #physics #mathematician #education #learn #math_magician #india`, /*1*/
  `#mathematics #maths #math #science #stemeducation #stem #physics #programming #computerscience #school #education #engineering #reels #animation #2d #india #Math_magician`, /*2*/
  `Polar equation

#maths #mathematics #mathsmemes #science #stem #physics #animation #2d #programming #education #engineering #school #stemeducation #visual #Math_magician #india`, /*3*/
  `#maths #mathematics #math #mathsmemes #stem #stemeducation #science #school #physics #programming #animation #2d #education #learn #engineering #india #Math_magician`, /*4*/
  `Oscillations as waves #maths #mathematics #mathsmemes #math #animation #2d #physics #programming #stem #stemeducation #science #education #school #Math_magician #india`, /*5*/
  `#math #mathematics #maths #mathsmemes #stem #science #stemeducation #physics #cbse #education #animation #2d #programming #reels #india #Math_magician`, /*6*/
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

export const math_epik1100_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const math_epik1100_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const math_epik1100_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const math_epik1100_array_of_posts = [
  ...math_epik1100_images,
  ...math_epik1100_videos
];
