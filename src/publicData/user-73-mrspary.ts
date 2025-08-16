import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mr_spary';
const userId = '8318b2ae-60bc-420c-8c1d-4b6714ecb0e0asdf';
const prefixUrl = 'https://dominicnikolai.github.io/project-263/assets/mrspary/';
const followers = 289_732;
const followed = 322;
const profileDescription = 'Hello';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Spary paint my mirror 🪞#sparypaint #mirror`, /*1*/
  `Spary paint my helmet 🪖⛑️#sparypaint #helmet`, /*2*/
  `Spary paint my mirror 🪞🪞#sparypaint #mirror`, /*3*/
  `Spary paint my laptop 💻💻#sparypaint #laptop`, /*4*/
  `Spary paint my jacket 🧥🧥#sparypaint #jacket`, /*5*/
  `Spary paint my guitar 🎸🎸#sparypaint #guitar`, /*6*/
  `Spary paint my MacBook #sparypaint #macbook`, /*7*/
  `Spary paint my laptop 💻#sparypaint #laptop`, /*8*/
  `Spary paint my MacBook #sparypaint #macbook`, /*9*/ 
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

export const mr_spary_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mr_spary_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mr_spary_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mr_spary_array_of_posts = [
  ...mr_spary_images,
  ...mr_spary_videos
];
