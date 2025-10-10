import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'incanserbero';
const userId = '';
const prefixUrl = '';
const followers = 59_823;
const followed = 322;
const profileDescription = `Lifestyle | Home | Products | & More`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Temu Genius Finds!!! 🏠✨ The price is affordable and the shipping is fast!!! ❤ Click THE LINK to get this item with discount!✨❤ #temusale #temuhaul #temu #temufinds #gift #temumusthave #temushopping #foryou #fyp #trending #shopping #holidaygiftguides #giftideas #viral #gadget

`, /*1*/
  `#viral #gadget`, /*2*/
  `#viral #gadget`, /*3*/
  `#viral #gadget`, /*4*/
  ` Grab Hot Deals 🎉`, /*5*/
  `Don't Miss Out 🛍️`, /*6*/
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

export const incanserbero_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const incanserbero_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const incanserbero_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const incanserbero_array_of_posts = [
  ...incanserbero_images,
  ...incanserbero_videos
];
