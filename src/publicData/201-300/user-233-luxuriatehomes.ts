import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'luxuriatehomes';
const userId = 'c0e0ede2-aa7d-4bc4-a65e-e1c9917e9e8d';
const prefixUrl = 'https://dominicnikolai.github.io/project-321/assets/luxuriatehomes/';
const followers = 392_720;
const followed = 580;
const profileDescription = `Interior | Decor | Hotels`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `In the chaos of life, this place is my calm.#luxuriatehome #homedecor #instadaily #florida`, /*1*/
  `The true beauty of home lies in the touch you give it… because that’s where my inner peace lives. 🕊️🏡 #luxuriatehome #homedecor #instadaily #florida`, /*2*/
  `When your home has it all — comfort, beauty, and peace in every corner. #luxuriatehome #homedecor #instadaily #florida`, /*3*/
  `For mind therapy, I didn’t just pick a house… I picked peace.#luxuriatehome #homedecor #instadaily #chicago`, /*4*/
  `Where my mind rests and my heart feels — my peaceful sanctuary. #luxuriatehome #homedecor #instadaily #newyork`, /*5*/
  `A house painted in peace, wrapped in love — it has all my heart. 🕊️🏡 #luxuriatehome #homedecor #instadaily #florida`, /*6*/
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

export const luxuriatehomes_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const luxuriatehomes_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const luxuriatehomes_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const luxuriatehomes_array_of_posts = [
  ...luxuriatehomes_images,
  ...luxuriatehomes_videos
];
