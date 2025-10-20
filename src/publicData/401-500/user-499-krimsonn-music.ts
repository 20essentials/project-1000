import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'krimsonn_music';
const userId = '1bbcfaf2-9985-4eaa-9f66-26730cefc6c9';
const prefixUrl = 'https://dominicnikolai.github.io/project-362/assets/krimsonn-music/';
const followers = 461_832;
const followed = 280;
const profileDescription = `DJ and Music Producer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `The combo of good vocals + good melodies + good energy made this golden age unbeatable!! 🔥🔥 #edm #dancemusic #tomorrowland #zedd #avicii #steveaoki #swedishhousemafia #alesso`, /*1*/
  `#thechainsmokers #avicii #mashup #edm #tomorrowland #ravers #futurebass #2016 #throwback #dancemusic #closer #halsey`, /*2*/
  `#edmremix #tomorrowland #mashup #throwback #throwbackmusic #throwbackthursday #millenial #millenialmusic #beatmakers #makingbeats #mashupsong`, /*3*/
  `#edm #throwback #edmmusic #tomorrowland #edcvegas #ultramusicfestival #ravers #spinninrecords #avicii #swedishhousemafia #alesso #alanwalker #dancemusic #dj #jameshype #fredagain #housemusic`, /*4*/
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

export const krimsonn_music_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const krimsonn_music_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const krimsonn_music_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const krimsonn_music_array_of_posts = [
  ...krimsonn_music_images,
  ...krimsonn_music_videos
];
