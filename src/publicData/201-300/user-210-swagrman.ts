import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'swagrman';
const userId = '3091421e-296b-4164-8b9d-85d39162ba22';
const prefixUrl = 'https://dominicnikolai.github.io/project-316/assets/swagrman/';
const followers = 3_420_720;
const followed = 50;
const profileDescription = `Official Instagram for Swaggy Wolfdog`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `This is how our Rolling loud ended !😂🤦🏽‍♂️ #rollingloud #miami #arrested`, /*1*/
  `SWAGGY IS INNOCENT!😭 THEY GOT THE WRONG DOG! PART 2! 😭 #dodgers #mlb #losangeles #worldseries #police`, /*2*/
  `DROVE MY TOY CAR TO THE RICHEST TOWN IN ALABAMA AND COPS DONT PLAY 😳 #police #mexico #alabama #birmingham #hoover #tesla`, /*3*/
  `#tennessee #costco #toycar #tesla #mexico #security #police`, /*4*/
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

export const swagrman_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const swagrman_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const swagrman_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const swagrman_array_of_posts = [
  ...swagrman_images,
  ...swagrman_videos
];
