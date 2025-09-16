import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gjieparadise';
const userId = '';
const prefixUrl = '';
const followers = 588_720;
const followed = 104;
const profileDescription = `Based in NYC📍`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `NYC . . . #newyorknewyork #nycreels #cityviews #travelnyc #nyc #manhattanviews #empirestatebuilding #newyork #reels #nycviews #visitnyc #reelsinstagram #newyorkcity`, /*1*/
  `#newyorknewyork #travelnyc #nybucketlist #visitnyc #nyc #manhattanbridge #cityviews #manhattanviews #newyork #nycreels #reelsinstagram #newyorkcity`, /*2*/
  `Stunning view..!`, /*3*/
  `💙💙`, /*4*/
  `👏👏👏`, /*5*/
  `Evening in Paris 💙`, /*6*/
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

export const gjieparadise_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gjieparadise_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gjieparadise_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gjieparadise_array_of_posts = [
  ...gjieparadise_images,
  ...gjieparadise_videos
];
