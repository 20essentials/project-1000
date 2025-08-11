import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mateomassoni';
const userId = '';
const prefixUrl = '';
const followers = 370_720;
const followed = 322;
const profileDescription = '🦹🏻Sky Athlete🇫🇷';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'a';
const quantityOfVideos = 9;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🪄Gravity Express Lane🔻 #topland #repack #wingsuitbelly #basejump #rushhour #traffic #videogame`, /*1*/
  `Run🏃 Jump 🪄Magic 🎒 •🪂  #feastables #basejump #urban #rooftop #parkour #city #parachute #magicbackpack #flysquirrel #hayduke2 #panama #servers #gta #grandtheftauto #fly #jump #urbex`, /*2*/
  `Watch til the end🎉 Attempt #1🇧🇷`, /*3*/
  `🎮 TopLand 🎒 Repack 🏃🏻‍♂️‍➡️ Jump 💫 A week of waiting for winds that cooperated to be able to top land this Building 🏙️ with blakeAlderson This great day started with a freefly jump + a high pull with nice views over the city. Got to fly some clouds too🌤️ Flew our way over onto this roof�...`, /*4*/
  `⛰️ High Gavea 💫 Full circle moment in Rio this morning🔅 Top Landed with the help of beautiful @gustavo.areias 💛 Repacked ontop while watching the sunrise🌄 Walked myself overtop the exit that tried to kiss me 2 years ago😁 Took a nice run🏃🏽‍♂️ and healthy delay Feels good to be back Obri`, /*5*/
  `🏝️ Pedra da Tartaruga🐢 A nice hike, a beautiful jump, fresh coconuts 🥥 a day on the beach🔅 Brazil, your version of BASE is dangerously good🪄 Obrigado Brasil🇧🇷`, /*6*/
  `Love Story between Nylon ~ Nonsense`, /*7*/
  `A day that felt like a dream. #fun #slowmo #cam #except...`, /*8*/
  `September 16th, 24' Lauterbrunnen💫 At 5am, I wake up to Jonathan, chest deep in the ice cold river, casually rummaging through my secret Red Bull stash like a raccoon on a mission. The man never drank Red Bull. It was basically a running joke. But that morning, he cracked one open, took a slow si...`, /*9*/ 
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

export const mateomassoni_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mateomassoni_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mateomassoni_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mateomassoni_array_of_posts = [
  ...mateomassoni_images,
  ...mateomassoni_videos
];
