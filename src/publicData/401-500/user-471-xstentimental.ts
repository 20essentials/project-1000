import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'xstentimental';
const userId = '3b66719e-f61c-4444-b4f5-a53ea6a042e9';
const prefixUrl = 'https://dominicnikolai.github.io/project-358/assets/xstentimental/';
const followers = 282_832;
const followed = 74;
const profileDescription = `Your Mind-blowing Canva Hacks`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#graphicdesigner #graphicdesign #genz #graphicdesignstyle #art`, /*1*/
  `#graphicdesign #genz #graphicdesigner #canva #canvaelements #art #canvacreator`, /*2*/
  `#graphicdesign #graphicdesigner #artblock #designtips #graphicdesigntips`, /*3*/
  `#resetindonesia #colorcombination #wargajagawarga #acab #1312 #tetapfokus #indonesia #graphicdesign #graphicdesigner`, /*4*/
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

export const xstentimental_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const xstentimental_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const xstentimental_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const xstentimental_array_of_posts = [
  ...xstentimental_images,
  ...xstentimental_videos
];
