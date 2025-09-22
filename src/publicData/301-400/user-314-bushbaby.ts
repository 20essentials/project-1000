import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bushbaby';
const userId = 'e96e8631-8f88-4fde-bc99-d8179c9c2f8f';
const prefixUrl = 'https://dominicnikolai.github.io/project-339/assets/bushbaby/';
const followers = 899_832;
const followed = 154;
const profileDescription = `🕳️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🔥`, /*1*/
  `#BushBBCooper#bushbabythailand#bushbaby#bushbabyworld#doubletrouble#cute#animals#animalovers#exoticpets#adorable#exoticanimals#galago#galagomoholi#pets#nature#petstagram#together#zoo #monkey#cuteanimals #cuteanimal #cuteanimalvideos #บุชเบบี้ #littlemonkey #thailand #thedodo`, /*2*/
  `#BushBBCooper#bushbabythailand#bushbaby#bushbabyworld#doubletrouble#cute#animals#animalovers#exoticpets#adorable#exoticanimals#galago#galagomoholi#pets#nature#petstagram#together#zoo #monkey#cuteanimals #cuteanimal #cuteanimalvideos #บุชเบบี้ #littlemonkey #thailand #thedodo`, /*3*/
  `#BushBBCooper#bushbabythailand#bushbaby#bushbabyworld#doubletrouble#cute#animals#animalovers#exoticpets#adorable#exoticanimals#galago#galagomoholi#pets#nature#petstagram#together#zoo #monkey#cuteanimals #cuteanimal #cuteanimalvideos #บุชเบบี้ #littlemonkey #thailand #thedodo`, /*4*/
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

export const bushbaby_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bushbaby_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bushbaby_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bushbaby_array_of_posts = [
  ...bushbaby_images,
  ...bushbaby_videos
];
