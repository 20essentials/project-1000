import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'emmaorhun';
const userId = '';
const prefixUrl = '';
const followers = 123_720;
const followed = 367;
const profileDescription = `creative technologist `;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `opensauce vlog out now on yt :O🍬 featuring everything i saw from walking tables to robots controlled by fish….,. && i didnt even get a shot of the life sized operation board game`, /*1*/
  `me when i shrink my friends because i can ft the poster`, /*2*/
  `a new meaning 2 techwear if u saw me post this && then take it down no u didnt it was choppy #airpods #earrings should i make a tutorial on how i made them?? question mark??`, /*3*/
  `inspired by the time my iphone camera roll made a Museum compilation and it was just photos of my room. thank u steve jobs ❣︎`, /*4*/
  `the emmaverse is coming to a hand near you .`, /*5*/
  `don’t just use the internet,, build it :3`, /*6*/
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

export const emmaorhun_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const emmaorhun_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const emmaorhun_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const emmaorhun_array_of_posts = [
  ...emmaorhun_images,
  ...emmaorhun_videos
];
