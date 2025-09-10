import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'skdraversoficial';
const userId = '';
const prefixUrl = '';
const followers = 13_720;
const followed = 50;
const profileDescription = `HECHOS DE TI`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Ellos son parte especial de que la vibra sea epico 🔥👌☠️ #defqon #defqon1 #dj #music #drop #hard #vj #visual #hardstyle`, /*1*/
  `#dj #music #zedd #tomorroworld #tomorrowland #insomniac #edc #besties`, /*2*/
  ` #aquacolors #dj #music #drop #djisaac #music #Hard #hardstyle #hardbass`, /*3*/
  `La diversion nunca falto 💕💕🤙 #dj #festival #drop #music #perros #dance #top #love #union #dancing #reelinstagram`, /*4*/
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

export const skdraversoficial_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const skdraversoficial_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const skdraversoficial_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const skdraversoficial_array_of_posts = [
  ...skdraversoficial_images,
  ...skdraversoficial_videos
];
