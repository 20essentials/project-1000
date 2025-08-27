import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bromas';
const userId = '7834cb99-6410-4603-ad06-21132e5fef06';
const prefixUrl = 'https://dominicnikolai.github.io/project-291/assets/bromas/';
const followers = 928_212;
const followed = 211;
const profileDescription = '🤣😁';
const prefixLetterVideos = 'v';
const quantityOfVideos = 20;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `👽😁👽 Flash es Flash 🤣`, /*1*/
  `👽🤣👽 igualito`, /*2*/
  `A little throwback for ya.`, /*3*/
  `😏😏😏🤣🐸 #humorespañol #humor #memes #humorlatino #humorenespañol #humormemes #reelshumor #humordiario #memeviral #mr_eskibidi #humornegro #humorviral #humorabsurdo #reelgracioso #memesespanol`, /*4*/
  `I think there’s a difference between magic tricks and straight up telekinesis. . . . #reels`, /*5*/
  `Que wea maneja?`, /*6*/
  `#durabilidad 🤝🫡`, /*7*/
  `simplemente`, /*8*/
  `se fue a perrear`, /*9*/ 
  `fue punto`, /*10*/
  `pq`, /*11*/
  `Y se marchó y a su barco le llamo libertad 😌`, /*12*/
  `lo dio todo`, /*13*/
  `si`, /*14*/
  `. #desempleo #humor #xd #trabajar #memes #meme #parati #fyp #real #😭`, /*15*/
  `primer abiso`, /*16*/
  `😢`, /*17*/
  `si`, /*18*/
  `bom dia`, /*19*/
  `relax`, /*20*/
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

export const bromas_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bromas_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bromas_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bromas_array_of_posts = [
  ...bromas_images,
  ...bromas_videos
];
