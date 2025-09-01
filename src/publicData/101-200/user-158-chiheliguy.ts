import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'chiheliguy';
const userId = '';
const prefixUrl = '';
const followers = 555_720;
const followed = 166;
const profileDescription = 'helicopter camera operator 🚁🎥';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🌑🦇🌑🦇 //📍Chicago . . . . #chicago #chicagoshots #likechicago #visitchitown #city_features #lifeviachicago #epic_chicago #chitown #illinois #chi #chicagogram #chicity_shots #tlpicks #chicagoandknow #forbestravelguide #igerschicago #mychicagopix #chigram #artofchi #insta_chicago`, /*1*/
  `Blaze 🔥 //📍Chicago . . . . #chicago #chicagoshots #likechicago #visitchitown #city_features #lifeviachicago #epic_chicago #chitown #illinois #chi #chicagogram #chicity_shots #tlpicks #chicagoandknow #forbestravelguide #igerschicago #mychicagopix #chigram #artofchi #insta_chicago`, /*2*/
  `✨✨✨✨ //📍Chicago . . . . #chicago #chicagoshots #likechicago #visitchitown #city_features #lifeviachicago #epic_chicago #chitown #illinois #chi #chicagogram #chicity_shots #tlpicks #chicagoandknow #forbestravelguide #igerschicago #mychicagopix #chigram #artofchi #insta_chicago`, /*3*/
  `🏙️🏙️🏙️🏙️ //📍Chicago . . . . #chicago #chicagoshots #likechicago #visitchitown #city_features #lifeviachicago #epic_chicago #chitown #illinois #chi #chicagogram #chicity_shots #tlpicks #chicagoandknow #forbestravelguide #igerschicago #mychicagopix #chigram #artofchi #insta_chicago`, /*4*/
  `Distant 🟠🔵 //📍Chicago . . . . #chicago #chicagoshots #likechicago #visitchitown #city_features #lifeviachicago #epic_chicago #chitown #illinois #chi #chicagogram #chicity_shots #tlpicks #chicagoandknow #forbestravelguide #igerschicago #mychicagopix #chigram #artofchi #insta_chicago`, /*5*/
  `🌇🌆🚁🏙️🌃 //📍Chicago . . . . #chicago #chicagoshots #likechicago #visitchitown #city_features #lifeviachicago #epic_chicago #chitown #illinois #chi #chicagogram #chicity_shots #tlpicks #chicagoandknow #forbestravelguide #igerschicago #mychicagopix #chigram #artofchi #insta_chicago`, /*6*/
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

export const chiheliguy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const chiheliguy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const chiheliguy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const chiheliguy_array_of_posts = [
  ...chiheliguy_images,
  ...chiheliguy_videos
];
