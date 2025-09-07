import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'fitshortie';
const userId = '66f3b913-9351-49dd-aaa6-1888fe1d5b17';
const prefixUrl = 'https://dominicnikolai.github.io/project-311/assets/fitshortie/';
const followers = 9_720_822;
const followed = 50;
const profileDescription = '🔥 Join The Bali Fruit Retreat 2026';
const prefixLetterVideos = 'v';
const quantityOfVideos = 10;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `TOP 3 Fruits in Costa Rica 🤩💯 1. Soursop 2. Safu 3. Casa Banana. Save and Share this reel with someone who needs to see this! #fruit #food #foodie #nice #vegan`, /*1*/
  `❗Click Follow 👆 . . . . . #fruit #rawvegan #veganfood #foodie #nice`, /*2*/
  `❗Click Follow 👆 . . . . . #fruit #rawvegan #veganfood #foodie #nice`, /*3*/
  `❗Click Follow 👆 . . . . . #fruit #rawvegan #veganfood #foodie #nice`, /*4*/
  `❗Click Follow 👆 . . . . . #fruit #rawvegan #veganfood #foodie #nice`, /*5*/
  `❗Click Follow 👆 . . . . . #fruit #rawvegan #veganfood #foodie #nice`, /*6*/
  `❗Click Follow 👆 . . . . . #fruit #rawvegan #veganfood #foodie #nice
`, /*7*/
  `#fruit #rawvegan #veganfood #foodie #nice`, /*8*/
  `#fruit #rawvegan #veganfood #foodie #nice`, /*9*/ 
  `Banana`, /*10*/
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

export const fitshortie_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const fitshortie_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const fitshortie_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const fitshortie_array_of_posts = [
  ...fitshortie_images,
  ...fitshortie_videos
];
