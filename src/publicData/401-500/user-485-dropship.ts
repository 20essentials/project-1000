import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'dropship';
const userId = '28b672eb-e4da-4ecd-b6ed-fe0e94234c23';
const prefixUrl = 'https://dominicnikolai.github.io/project-360/assets/dropship/';
const followers = 4_723_832;
const followed = 50;
const profileDescription = `We help you discover winning products to sell`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Would you buy this for your dog? 🤔😂 #dropshipping #ecommerce #ecom #ecomtips #dropshippingtips #ecommercetips #onlinebusiness #onlinestore #shopifydropshipping #entrepreneur`, /*1*/
  `#dropshipping #ecommerce #ecom #ecomtips #dropshippingtips #ecommercetips #onlinebusiness #onlinestore #shopifydropshipping #entrepreneur #businessowner #businesstips #businessman #businessideas #richlife #luxurylifestyle #money #sidehustle #investing #investment`, /*2*/
  `#dropshipping #ecommerce #ecom #ecomtips #dropshippingtips #ecommercetips #onlinebusiness #onlinestore #shopifydropshipping #entrepreneur`, /*3*/
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

export const dropship_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const dropship_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const dropship_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const dropship_array_of_posts = [
  ...dropship_images,
  ...dropship_videos
];
