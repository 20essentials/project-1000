import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'chavitocodes';
const userId = '55d0b4cd-d3ff-498d-9a6f-e1b3aaf713c7';
const prefixUrl = 'https://dominicnikolai.github.io/project-375/assets/chavitocodes/';
const followers = 143_832;
const followed = 32;
const profileDescription = `Soy el chavito y estoy aprendiendo a codear 💻
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Todavía se usa bootstrap? #elchavodel8 #programacion #bootstrap #wordpress`, /*1*/
  `Wordpress es FEO. #elchavodel8 #programacion #php #wordpress #wordpresswebsite`, /*2*/
  `React ya está sobrevalorado? #react #vue #javascript #chavodel8 #nextjs`, /*3*/
  `lo del pixel es real, super real...`, /*4*/
  `Jquery ya está muerto 💀 #jquery #javascript #chavodel8 #frontend
`, /*5*/
  `Ruby está muerto 💀 #chavodel8 #ruby #rails
`, /*6*/
  `Que es docker? #docker #kubernetes #containers #chavodel8
`, /*7*/
  `Android sigue usando Java? ☕️ #java #kotlin #android #elchavodel8
`, /*8*/
  `PHP ya está morido? #chavodel8 #php #laravel #wordpress
`, /*9*/ 
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

export const chavitocodes_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const chavitocodes_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const chavitocodes_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const chavitocodes_array_of_posts = [
  ...chavitocodes_images,
  ...chavitocodes_videos
];
