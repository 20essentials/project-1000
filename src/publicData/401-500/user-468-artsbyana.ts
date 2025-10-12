import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'artsbyana';
const userId = '2c9aefd9-2824-4641-8117-3244597fbc53';
const prefixUrl = 'https://dominicnikolai.github.io/project-358/assets/artsbyana/';
const followers = 64_834;
const followed = 291;
const profileDescription = `Self-taught 🧑‍🎨 Procreate 🎨`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#lineart #digitalart #arttips #arttipsandtricks #artreels`, /*1*/
  `#tutorial #hands #digitalart #artreel #reels
`, /*2*/
  `#artmemes #animation #shrek #shrekmemes #artreels #digitalart #procreatedreams #memes #instaart #kooleensmashorpass #kooleenroastme`, /*3*/
  `#arttip #arthack #digitalart #procreate #fanart #artreel`, /*4*/
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

export const artsbyana_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const artsbyana_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const artsbyana_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const artsbyana_array_of_posts = [
  ...artsbyana_images,
  ...artsbyana_videos
];
