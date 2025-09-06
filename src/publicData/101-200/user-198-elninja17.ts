import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'elninja17';
const userId = '';
const prefixUrl = '';
const followers = 1_720_234;
const followed = 735;
const profileDescription = '🍍 fruta fresca';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🥷...#elfrutero #elninja17 #ninja #fruitninja`, /*1*/
  `🥷“Ven y disfruta fruta de la más alta calidad estamos puesto todos los dias de ⏰️ 12:00 pm a 7:00 pm locación 📍925 N Hacienda Blvd, La Puente, CA 91744.`, /*2*/
  `Tajin🌶 x Rare Beauty💄 x Ninja 🥷, en colaboración 🔥. #ninja #elfrutero #elninja17`, /*3*/
  `🔪🍈.. #elfrutero #elninja17 #ninja`, /*4*/
  `Chamoyninja`, /*5*/
  `Sandia de las mas alta calidad ✅️ #elfrutero #elninja17 #ninja`, /*6*/
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

export const elninja17_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const elninja17_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const elninja17_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const elninja17_array_of_posts = [
  ...elninja17_images,
  ...elninja17_videos
];
