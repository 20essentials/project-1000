import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'luxury';
const userId = '49899f1c-b74d-4b21-b9de-fd5601119f9b';
const prefixUrl = 'https://dominicnikolai.github.io/project-195/assets/luxury/';
const followers = 110_538;
const followed = 251;
const profileDescription = 'Just for Fun';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 6; 
const quantityOfImages = 0; 
const profileImageSrc = 'https://20essentials.github.io/project-000-993/assets/car9.webp';

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Crypto and Luxury #cars #money`, /*1*/
  `🚁🚁🚁 #travel #helicopter`, /*2*/
  `Jungle nights! ✨🌴 #life #alone`, /*3*/
  `House ✨ #onboarding #tour`, /*4*/
  `🤩🤩🤩 #mclaren #dapox`, /*5*/
  `Fendi #gucci #padra`, /*6*/
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

export const luxury_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const luxury_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const luxury_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const luxury_array_of_posts = [
  ...luxury_images,
  ...luxury_videos
];
