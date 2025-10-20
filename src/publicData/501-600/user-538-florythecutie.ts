import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'florythecutie';
const userId = '46357aa1-9fbb-422e-91cd-0a6bb5db5a7c';
const prefixUrl = 'https://dominicnikolai.github.io/project-368/assets/florythecutie/';
const followers = 17_832;
const followed = 131;
const profileDescription = `Hi! I'm Flory the calico - 🇨🇦`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Cats are so funny 😭 #catsofinstagram #cats #funny #funnycats`, /*1*/
  `She's the karma #catsofinstagram #cats #funnycats #funny #cat`, /*2*/
  `#cats #catsofinstagram #catmom #funny #funnycats #cat
`, /*3*/
  `#cats #catsofinstagram #funnycats #funny #catmom #catlover
`, /*4*/
  `#catsofinstagram #cats #catsbeingcats #funny #funnycats #relatable #funnycatvideos`, /*5*/
  `These new arms help me communicate what I think about humans 🐱 #catsofinstagram #cats #funnycats #funny #catmom #catlover #catsbeingcats`, /*6*/
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

export const florythecutie_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const florythecutie_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const florythecutie_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const florythecutie_array_of_posts = [
  ...florythecutie_images,
  ...florythecutie_videos
];
