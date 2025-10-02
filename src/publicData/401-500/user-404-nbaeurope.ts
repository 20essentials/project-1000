import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'nbaeurope';
const userId = '';
const prefixUrl = '';
const followers = 1_234_345;
const followed = 50;
const profileDescription = `🏀💫`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Representing on the biggest stage ⭐`, /*1*/
  `Reshuffled the deck for Nikola 🃏`, /*2*/
  `Giannis’ poster, or Wemby’s self-oop? 🤔`, /*3*/
  `Two of our favourite dunkers at it again 💪 But who had the best slam - Giannis or Wemby? 🤔`, /*4*/
  `Wemby’s self alley-oops are something else 🤯 But which of these two slams is your favourite? 🤔`, /*5*/
  `#TeamFranceBasket #PassionnémentBleu #EuroBasket`, /*6*/
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

export const nbaeurope_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const nbaeurope_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const nbaeurope_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const nbaeurope_array_of_posts = [
  ...nbaeurope_images,
  ...nbaeurope_videos
];
