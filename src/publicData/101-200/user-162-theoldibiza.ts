import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'theoldibiza';
const userId = '8d6bd3d9-b933-460d-b633-c2764b14a838';
const prefixUrl = 'https://dominicnikolai.github.io/project-304/assets/theoldibiza/';
const followers = 172_720;
const followed = 221;
const profileDescription = 'Info&tips about IBIZA day&night 🏝✨️';
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#MediterraneanVibes #IslandEscape`, /*1*/
  `#IbizaIsland #Spain #BalearicIslands #Travel #DreamDestinations #ExploreIbiza #MediterraneanVibes #IslandEscape`, /*2*/
  ` #IbizaIsland #Spain #BalearicIslands #Travel #DreamDestinations #ExploreIbiza #MediterraneanVibes #IslandEscape`, /*3*/
  `How many places did you recognize ? 🤔 Secret Ibiza by wondertothemax 😍🏝️🇪🇸 ☀️ Discover the magic of #Ibiza with us! Every day, we repost the most incredible photos and videos, showcasing unforgettable views and moments. Like and follow us to explore more of this Mediterranean paradise! 📸 Repost wondertothemax 👈🏻 credits 🥰 #IbizaIsland #Spain #BalearicIslands #Travel #DreamDestinations #ExploreIbiza #MediterraneanVibes #IslandEscape`, /*4*/
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

export const theoldibiza_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const theoldibiza_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const theoldibiza_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const theoldibiza_array_of_posts = [
  ...theoldibiza_images,
  ...theoldibiza_videos
];
