import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'parijanofficial';
const userId = '';
const prefixUrl = '';
const followers = 327_720;
const followed = 50;
const profileDescription = 'Designed in Paris, Delivered Worldwide 🌍';
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Not loud, not flashy — just wealth in every shade. 🎩 Link in bio. 🔗 . . . . . #oldmoney #oldmoneystyle #menstyle #budgetfashion #parijan #classicmensfashion #mensfashion #oldmoneyoutfits`, /*1*/
  `Old money couples blend shades like legacy. 📖🕰️ Dress Old Money. Dress Parijan Link in Bio 🔗 - - - #parijan #oldmoney #oldmoneyaesthetic #men #menfashion #italianoutfit #italian #oldmoneyoutfits #oldfashioned #outfit #foryoupage #fyp #fashion #elegantstyle`, /*2*/
  `From casual to commanding ⚜️🗝️ Dress Old Money. Dress Parijan Link in Bio 🔗 - - - #parijan #oldmoney #oldmoneyaesthetic #men #menfashion #italianoutfit #italian #oldmoneyoutfits #oldfashioned #outfit #foryoupage #fyp #fashion #elegantstyle`, /*3*/
  `When class comes in pairs ⚜️🏛️ Dress Old Money. Dress Parijan Link in Bio 🔗 - - - #parijan #oldmoney #oldmoneyaesthetic #men #menfashion #italianoutfit #italian #oldmoneyoutfits #oldfashioned #outfit #foryoupage #fyp #fashion #elegantstyle`, /*4*/
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

export const parijanofficial_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const parijanofficial_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const parijanofficial_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const parijanofficial_array_of_posts = [
  ...parijanofficial_images,
  ...parijanofficial_videos
];
