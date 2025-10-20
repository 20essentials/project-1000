import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hausmann1794';
const userId = '701abc80-5d9f-453a-b3b7-5a95dda8c381';
const prefixUrl = 'https://dominicnikolai.github.io/project-362/assets/hausmann1794/';
const followers = 18_234;
const followed = 50;
const profileDescription = `Born in Rome 230 years ago`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#Italy #FineWatchmaking #Watches #HausmannLOFT #IndependentWatchmakers #Vintage #VintageWatches #Ressence #Type1 #Multicolor #ROCS`, /*1*/
  `#Hausmann1794 #Roma #Italia #Orologeria #FineWatchmaking #OrologeriaDiPrecisione #EDGE #JaegerLeCoultre #Jaeger #Reverso #ReversoOne #Enamel #MetiersRares`, /*2*/
  `#Hausmann1794 #Roma #Italia #Orologeria #FineWatchmaking #OrologeriaDiPrecisione #EDGE #TAGHeuer #DesignedToWin #TAGHeuerFormula1`, /*3*/
  `#Hausmann1794 #Roma #Italia #Orologeria #FineWatchmaking #OrologeriaDiPrecisione #EDGE #TAGHeuer #DesignedToWin #TAGHeuerFormula1`, /*4*/
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

export const hausmann1794_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hausmann1794_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hausmann1794_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hausmann1794_array_of_posts = [
  ...hausmann1794_images,
  ...hausmann1794_videos
];
