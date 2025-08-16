import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'polymico';
const userId = '00f53a1c-61b0-47bc-a881-259f7c6c3709';
const prefixUrl = 'https://dominicnikolai.github.io/project-269/assets/polymico/';
const followers = 232_720;
const followed = 323;
const profileDescription = 'Branquinha- AL 📍';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Onça noturna`, /*1*/
  `10 minutos: 😂😮‍💨`, /*2*/
  `Gato Noturno`, /*3*/
  `Cozy dog`, /*4*/
  `Evil Eyed `, /*5*/
  `Fast`, /*6*/
  `Jump`, /*7*/
  `Lucky`, /*8*/
  `Spider`, /*9*/ 
  `Please`, /*10*/
  `Emote`, /*11*/
  `Bro had only one job`, /*12*/
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

export const polymico_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const polymico_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const polymico_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const polymico_array_of_posts = [
  ...polymico_images,
  ...polymico_videos
];
