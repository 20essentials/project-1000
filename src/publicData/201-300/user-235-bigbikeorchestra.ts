import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bigbikeorchestra';
const userId = '94379cd0-0b30-44af-9f7e-97565fadcc8e';
const prefixUrl = 'https://dominicnikolai.github.io/project-323/assets/bigbikeorchestra/';
const followers = 169_720;
const followed = 50;
const profileDescription = `🚲🪗🎻🔥crazy band from Poland🔥🎷🥁🚲`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `We’re back 🚲🎶🚀🔥 #bigbikeorchestra #musiconthewheels #tandembicycle`, /*1*/
  `Basel Tattoo 2024 🇨🇭 #bigbikeorchestra #baseltattoo #switzerland #festival`, /*2*/
  `City? #bigbikeorchestra #eurotriponbigbike #frombydgoszcztoeurope`, /*3*/
  `How many cyclists can you see in this video? #bigbikeorchestra #parade #bicycles`, /*4*/
  `Mirsk - 06.09.2025 - zapowiedź #bigbikeorchestra #koncert #mirsk`, /*5*/
  `Trzebinia - 31.08.2025 - zapowiedź #bigbikeorchestra #koncert #trzebinia`, /*6*/
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

export const bigbikeorchestra_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bigbikeorchestra_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bigbikeorchestra_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bigbikeorchestra_array_of_posts = [
  ...bigbikeorchestra_images,
  ...bigbikeorchestra_videos
];
