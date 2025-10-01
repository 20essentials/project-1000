import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'store222';
const userId = '';
const prefixUrl = '';
const followers = 185_832;
const followed = 883;
const profileDescription = `Se è interessante lo trovi qui.`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 9;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
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
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*1*/
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*2*/
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*3*/
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*4*/
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*5*/
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*6*/
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*7*/
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*8*/
  `#cool #fashion #style #aesthetic #vintage #architecture #home #homedesign`, /*9*/
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

export const store222_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const store222_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const store222_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const store222_array_of_posts = [
  ...store222_images,
  ...store222_videos
];
