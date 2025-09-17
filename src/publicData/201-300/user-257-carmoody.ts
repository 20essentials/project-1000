import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'carmoody';
const userId = 'f39bcace-9470-49a7-ba93-dcfbb68392cb';
const prefixUrl = 'https://dominicnikolai.github.io/project-327/assets/carmoody/';
const followers = 223_720;
const followed = 96;
const profileDescription = `Worldwide FREE Shipping`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `I can't resist cute things🥹🥹#carinterior #decoration #carboy #giftidea #usafyp`, /*1*/
  `🤭🤓#pokemon #usa #caraccessory #funnycar`, /*2*/
  `Yes I bought this for him and he is very happy🤷🏼‍♀️#giftidea #carboy #joker #usa #caraccessory`, /*3*/
  `Me showing everyone my obsession: #animefan #caraccessories #unitedstates`, /*4*/
  `Car eyes👀😎#caraccessories #cardecor #usa🇺🇸`, /*5*/
  `#car #auto #accessory #unitedstates`, /*6*/
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

export const carmoody_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const carmoody_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const carmoody_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const carmoody_array_of_posts = [
  ...carmoody_images,
  ...carmoody_videos
];
