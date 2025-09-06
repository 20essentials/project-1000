import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'julienricojr';
const userId = '';
const prefixUrl = '';
const followers = 128_720;
const followed = 142;
const profileDescription = 'Art Director | Illustrator | Poster Artist🎨';
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 's';
const quantityOfImages = 18;
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
  `#posters #cine #style`, /*1*/
  `#posters #cine #style`, /*2*/
  `#posters #cine #style`, /*3*/
  `#posters #cine #style`, /*4*/
  `#posters #cine #style`, /*5*/
  `#posters #cine #style`, /*6*/
  `#posters #cine #style`, /*7*/
  `#posters #cine #style`, /*8*/
  `#posters #cine #style`, /*9*/
  `#posters #cine #style`, /*10*/
  `#posters #cine #style`, /*11*/
  `#posters #cine #style`, /*12*/
  `#posters #cine #style`, /*13*/
  `#posters #cine #style`, /*14*/
  `#posters #cine #style`, /*15*/
  `#posters #cine #style`, /*16*/
  `#posters #cine #style`, /*17*/
  `#posters #cine #style`, /*18*/
  `#posters #cine #style`, /*19*/
  `#posters #cine #style`, /*20*/
]

export const julienricojr_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const julienricojr_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const julienricojr_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const julienricojr_array_of_posts = [
  ...julienricojr_images,
  ...julienricojr_videos
];
