import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bootroombible';
const userId = '166fc7fb-a010-42ef-8502-499c80102d51';
const prefixUrl = 'https://dominicnikolai.github.io/project-331/assets/bootroombible/';
const followers = 153_720;
const followed = 50;
const profileDescription = `Checking out the latest football boots.`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#footballboots #footballcleats #soccerboots #soccercleats #football #soccer #boots #cleats #nike #nikefootball #nikesoccer #adidas #adidassoccer #adidasfootball #pumafootball #pumasoccer #championsleague #premierleague #messi #beckham #predator#botines #footballplayer #ronaldo #futsal #futebol #futbol #fifa #David Beckham`, /*1*/
  `#bootroombible #footballboots #footballcleats
#soccerboots #soccercleats #footballplayer
#soccerplayer #football #soccer #boots #Cleats #futbol #futball #futsal #adidas #adidassoccer #adidasfootball #nike #nikefootball #nikesoccer
#adidaspredator #mizunomorelia #championsleague
#premierleague #mbappe #pumatootball #botines
#messi #cr7 #mizuno`, /*2*/
  `#bootroombible #footballboots #footballcleats #soccerboots #soccercleats #football #soccer #boots #cleats #footballplayer #soccerplayer #fifa #futbol #futball #futsal #championsleague #premierleague #facup #adidas #adidaspredator #adidasfootball #adidassoccer #adidaspredatorfreak #nikefootball #nikesoccer #pumafootball #pumasoccer #messi #cr7 #haaland`, /*3*/
  `#bootroombible #footballboots #footballcleats #soccerboots #soccercleats #football #soccer #boots #cleats #nike #nikefootball #nikeid #newbalance #nikemercurial #nikesoccer #adidas #adidasfootball #adidassoccer #adidasnemeziz #puma #pumatootball #pumasoccer #messi #cr7 #cristianoronaldo #botines #haaland#shoes#championsleague #premierleague
`, /*4*/
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

export const bootroombible_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bootroombible_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bootroombible_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bootroombible_array_of_posts = [
  ...bootroombible_images,
  ...bootroombible_videos
];
