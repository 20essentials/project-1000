import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lumaskyshow';
const userId = '';
const prefixUrl = '';
const followers = 222_720;
const followed = 132;
const profileDescription = 'Drone light shows for event professionals';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Formula 1 Azerbaijan GP Drone Show #drones #formula1 #droneshow #lumasky`, /*1*/
  `Innovations in Technology: Interactive Drone Light Shows One of the hottest trends in entertainment today is the ability for audiences to interact with any type of content. You’ve probably seen numerous examples of activities such as light and kinetic installations, touch screens, audiovisual performances and more. We decided not to avoid this trend and imagined how it could work with drone shows. Imagine drones responding to your movements, voice, touch, creating patterns and designs in real time as if at your command. It’s the interactive features that truly advance drone shows. These shows allow us to involve the audience in ways we could only dream of before. Gamify your events with @lumaskyshow 💙 #droneshow #dronelightshow #lumasky`, /*2*/
  `Contact us via Direct to get a quote for your show 💌 #droneshow #dronelightshow #lumasky`, /*3*/
  `500 Drone Show Honors 120 Years of Estudiantes de La Plata 500 drones lit up the sky over La Plata, Argentina, for Estudiantes de La Plata’s 120th anniversary. A roaring lion, stadium formations, and the club logo blew the audience away. This football drone light show in Argentina proves again that drone art is the ultimate way to honor any sports legacy`, /*4*/
  `Amazing 3,000-drone light show at the Lusail Sky Festival in Qatar `, /*5*/
  `Thousands of LED drones are landing after a drone light show`, /*6*/
  `Dune formation at the 1,500-drone light show for the Global Champions Arabian Tour in Doha Client`, /*7*/
  `Massive 4,000-Drone Takeoff in Dubai`, /*8*/
  `Timelapse of a 1000-drone light show in Asunción, Paraguay`, /*9*/ 
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

export const lumaskyshow_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lumaskyshow_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lumaskyshow_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const lumaskyshow_array_of_posts = [
  ...lumaskyshow_images,
  ...lumaskyshow_videos
];
