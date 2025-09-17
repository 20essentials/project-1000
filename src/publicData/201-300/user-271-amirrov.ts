import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'amirrov';
const userId = '780fcee6-dd12-471c-b6d4-980d52f2316f';
const prefixUrl = 'https://dominicnikolai.github.io/project-331/assets/amirrov/';
const followers = 76_720;
const followed = 50;
const profileDescription = `📍 Dubai`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#dubai #dubailife #dubaiblogger #reels #reelsinstagram #mercedes #mercedesbenz #mercedesamg #dubainight #dubaicity #dubaicars #mydubai`, /*1*/
  `#FerrariSF90 #Motorfest #GamingToReality #GameVsReality #FerrariLife #SupercarGoals #LuxuryCars #DubaiCars #CarReels #CarLifestyle #FerrariLove #FerrariNation #CarSpotting #DreamCar #SupercarReels #ExoticCarsDaily #CarContent #GamerLife #FerrariDubai #CarVibes #RaceLife #CarVideo #LuxuryLifestyle #CarPassion #SpeedAndStyle`, /*2*/
  `#Ferrari #FerrariPortofino #ForzaHorizon5 #ForzaHorizon #ForzaGaming #GameVsReality #RealVsGame #Supercar #LuxuryCar #CarReels #DubaiCars #CarLifestyle #CarContent #SupercarSpotting #CarLovers #DreamCar #SportsCar #CarVibes #CarCommunity #GamingReels #SupercarReels #FerrariLove #ForzaMotorsport #CarWorld #CarSpotting #CarCulture #CarAddict`, /*3*/
  `🎮Game & Reality✨ • • • #Ferrari #FerrariPortofino #ForzaHorizon5 #ForzaHorizon #ForzaGaming #GameVsReality #RealVsGame #Supercar #LuxuryCar #CarReels #DubaiCars #CarLifestyle #CarContent #SupercarSpotting #CarLovers #DreamCar #SportsCar #CarVibes #CarCommunity #GamingReels #SupercarReels #FerrariLove #ForzaMotorsport #CarWorld #CarSpotting #CarCulture #CarAddict`, /*4*/
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

export const amirrov_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const amirrov_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const amirrov_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const amirrov_array_of_posts = [
  ...amirrov_images,
  ...amirrov_videos
];
