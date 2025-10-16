import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'daftpink_art';
const userId = '';
const prefixUrl = '';
const followers = 409_832;
const followed = 274;
const profileDescription = `🧶 Fluffy • Shaggy • Custom`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#keyboard #gift #fyp #rugs #gaming #gamingsetup #desktop #keyboardrug`, /*1*/
  `Mini rugs, max vibes ✨😍
Handmade with love 👐 and yarn 🧶`, /*2*/
  `#nycart #desksetup #gamingsetup #gift #christmasgiftsideas #etsyfinds`, /*3*/
  `Vibes on your Desk 🪄🖥️✨ 👐Handmade keyboard Rugs ⌨️ #deskdecor #ontario #canadacreators #setupinspiration #etsyfinds #animevibes`, /*4*/
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

export const daftpink_art_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const daftpink_art_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const daftpink_art_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const daftpink_art_array_of_posts = [
  ...daftpink_art_images,
  ...daftpink_art_videos
];
