import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'blackpenredpen';
const userId = 'ecdea009-d702-4ead-af7d-af64144ed53a';
const prefixUrl = 'https://dominicnikolai.github.io/project-327/assets/blackpenredpen/';
const followers = 586_720;
const followed = 50;
const profileDescription = `calculus`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
// const profileImageSrc = `${prefixUrl}p3rfil.avif`;
const profileImageSrc = `https://20essentials.github.io/project-000-940/assets/j8.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `家裡有貓`, /*1*/
  `Head to head round on the stage!`, /*2*/
  `Calc 3`, /*3*/
  `No need for calculus`, /*4*/
  `😃`, /*5*/
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

export const blackpenredpen_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const blackpenredpen_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const blackpenredpen_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const blackpenredpen_array_of_posts = [
  ...blackpenredpen_images,
  ...blackpenredpen_videos
];
