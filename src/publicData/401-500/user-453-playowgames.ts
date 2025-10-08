import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'playowgames';
const userId = '';
const prefixUrl = '';
const followers = 439_832;
const followed = 94;
const profileDescription = `Indie game studio from 🇸🇪`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `He’s at it again 😵 #indiegames #indiegame #OWGamesStudio #indiegamedev #indiegamestudio #student #game #gaming #gamedev #studentgames #3dartist #3dmodeling #blender

`, /*1*/
  `And we’re just getting started! 🐉 #indiegamedev #gamedev #steamgame #mythbreak #3dmodelling`, /*2*/
  `We are never escaping cuting stickers 😭 #fyp #steam #indiegames #mythbreak #owgames`, /*3*/
  `#indiegamestudio #gamestudio #indiegamedev #indiegamedeveloper #indiegame #indiegames #gamedevelopment #gamedeveloper #owgames #mythbreak`, /*4*/
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

export const playowgames_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const playowgames_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const playowgames_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const playowgames_array_of_posts = [
  ...playowgames_images,
  ...playowgames_videos
];
