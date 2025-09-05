import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'suricatas';
const userId = '8c998306-1cf9-415e-8819-0941ffd175eb';
const prefixUrl = 'https://dominicnikolai.github.io/project-310/assets/suricatas/';
const followers = 4_720_822;
const followed = 50;
const profileDescription = '🍡';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🙌🏼`, /*1*/
  `Vigilando`, /*2*/
  `Antes del Fin`, /*3*/
  `Amanecer`, /*4*/
  `🍡`, /*5*/
  `Иногда мне кажется`, /*6*/
  `#africa #lionking #reels #foryou #photooftheday`, /*7*/
  `#photography #africa #foryou #reel`, /*8*/
  `#africa #photography #reels #foryou #travel #photooftheday #lionking`, /*9*/ 
  `For the love of Meerkats 🫶 . . . #africa #travel #photography #wildlife #meerkats #animals #photooftheday #foryou`, /*10*/
  `Baby Meerkats at sunset 🥹 📍The Kalahari - Botswana . . . #photography #travel #africa #photooftheday #wildlife #animals #meerkat #foryou`, /*11*/
  `African sunsets ❤️ 📍Makgadikgadi Salt Pans - Botswana . . . #africa #travel #photography #wild #botswana #animals #photooftheday`, /*12*/
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

export const suricatas_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const suricatas_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const suricatas_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const suricatas_array_of_posts = [
  ...suricatas_images,
  ...suricatas_videos
];
