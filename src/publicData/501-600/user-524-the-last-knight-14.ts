import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'the_last_knight_14';
const userId = '97cf5fb7-a51c-44a1-9d03-1bc78566544b';
const prefixUrl = 'https://dominicnikolai.github.io/project-366/assets/the-last-knight-14/';
const followers = 328_832;
const followed = 322;
const profileDescription = `💯⛓️⛓️⛓️⛓️💯`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `💀`, /*1*/
  `Optimus Prime Vs Lockdown`, /*2*/
  `The End`, /*3*/
  `I was expecting a giant car”`, /*4*/
  `Lockdown’s entrance cold asf 💀`, /*5*/
  `Love the scream Optimus does as he kicks off the building`, /*6*/
  `He's why I love mustangs`, /*7*/
  `Optimus prime 🔥🔥🔥🔥😍😍`, /*8*/
  `Master my master yes master`, /*9*/ 
  `PRIME SH*T TALK 🤣🔥`, /*10*/
  `I love (and miss) Megatron’s Fusion Cannon`, /*11*/
  `Movie is badass ,Michael Bay making GOATED movies 🐐`, /*12*/
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

export const the_last_knight_14_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const the_last_knight_14_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const the_last_knight_14_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const the_last_knight_14_array_of_posts = [
  ...the_last_knight_14_images,
  ...the_last_knight_14_videos
];
