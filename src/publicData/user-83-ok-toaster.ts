import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ok_toaster';
const userId = '';
const prefixUrl = '';
const followers = 820_720;
const followed = 322;
const profileDescription = 'I make epic battles ⚔️';
const prefixLetterVideos = 'v';
const quantityOfVideos = 10;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Which team wins ? #epic #battle #ishowspeed #meme #funny #gaming
`, /*1*/
  `Where love leads, fear disappears. #epic #battle #brainrot #meme #funny #gaming

`, /*2*/
  `Can a MILLION civilians beat the US Army ? #epic #battle #gaming #funny #meme #usa

`, /*3*/
  `The last archer 💀 #epic #battle #gaming #funny #meme #brainrot`, /*4*/
  `U.S Army VS 1 MILLION Zombies 😱 #battle #gaming #epic #usa #usarmy #army #military`, /*5*/
  `Two worlds collide. #epic #battle #brainrot #minecraft #meme #funny`, /*6*/
  `Please don't ask any plot related questions 🙏🥀  #epic #battle #ishowspeed #ashtonhall #meme #funny`, /*7*/
  `Can a MILLION Gorillas defeat One Punch Man ? #epic #battle #gorilla #meme #funny #anime`, /*8*/
  `U.S Army vs 200,000 Gorillas ! Who wins ?! #gorilla #epic #battle #usa #usarmy #gorillavsmen`, /*9*/ 
  `Bro had enough at the end 😂 #epic #battle #brainrot #bombardirocrocodilo #funny #meme`, /*10*/
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

export const ok_toaster_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ok_toaster_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ok_toaster_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const ok_toaster_array_of_posts = [
  ...ok_toaster_images,
  ...ok_toaster_videos
];
