import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'unghie';
const userId = 'e88e2cca-80a8-4afe-acd2-e1dca80756ad';
const prefixUrl = 'https://dominicnikolai.github.io/project-346/assets/unghie/';
const followers = 377_822;
const followed = 123;
const profileDescription = `🦄`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `💙💚`, /*1*/
  `Tecnologiiiiiiiia`, /*2*/
  `💙💚`, /*3*/
  `Vi piacciono?🌊💅🏻💙 #unghie #passionunghie22 #nails #nailsinspiration #nailsinspo #nailsnailsnails #nailsonfleek #nailsart #nailsdesign #nailstyle #nailslove #nailsonpoint #unghiegel #unghiemania #unghieingel #unghiebelle #manikur #manicure #mani #womanstyle #instanails #instalove #instalike #instanail #uñaslindas #summernails☀️ #womanfashion #fashionstyle Cc`, /*4*/
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

export const unghie_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const unghie_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const unghie_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const unghie_array_of_posts = [
  ...unghie_images,
  ...unghie_videos
];
