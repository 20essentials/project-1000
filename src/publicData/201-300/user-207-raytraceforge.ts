import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'raytraceforge';
const userId = '79d9d938-e39f-4bd3-88fb-30455f1222d5';
const prefixUrl = 'https://dominicnikolai.github.io/project-316/assets/raytraceforge/';
const followers = 243_890;
const followed = 50;
const profileDescription = `Explore at World's End`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `You Waited 21 Hours for World Generation`, /*1*/
  `Bro got RTX5090 early access`, /*2*/
  `How Much Peace Do You Want `, /*3*/
  `Descending 2000 Blocks in 1m🤯`, /*4*/
  `Ultra Realistic Terrain in Minecraft⛰ Map: https://www.planetminecraft.com/project/thalassira-conquest-reforged-9k-x-7k/ #minecraft #120fps #8k`, /*5*/
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

export const raytraceforge_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const raytraceforge_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const raytraceforge_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const raytraceforge_array_of_posts = [
  ...raytraceforge_images,
  ...raytraceforge_videos
];
