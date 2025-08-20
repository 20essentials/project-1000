import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'meerkat';
const userId = '';
const prefixUrl = '';
const followers = 789_720;
const followed = 132;
const profileDescription = 'Chill';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Meerkats are small mammals that live in groups called mobs or clans.`, /*1*/
  `They are always alert, with one acting as a sentinel while others forage.`, /*2*/
  `Meerkats live in burrows in the African deserts, especially the Kalahari.`, /*3*/
  `These animals are highly social and communicate with a variety of sounds.`, /*4*/
  `A meerkat family can include up to 30 members living together.`, /*5*/
  `They feed on insects, small reptiles, and sometimes plants.`, /*6*/
  `When threatened, meerkats stand upright to appear bigger and stronger.`, /*7*/
  `They have excellent vision to spot predators from a distance.`, /*8*/
  `Life for meerkats is all about teamwork: hunting, babysitting, and defending.`, /*9*/
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

export const meerkat_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const meerkat_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const meerkat_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const meerkat_array_of_posts = [...meerkat_images, ...meerkat_videos];
