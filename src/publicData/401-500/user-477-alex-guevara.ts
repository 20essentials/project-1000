import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'alex_guevara';
const userId = '';
const prefixUrl = '';
const followers = 382_832;
const followed = 378;
const profileDescription = `Pure Freundlichkeit`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#touchdesigner #digitalart #glsl #particles #generative #codeart #realtime #maxmsp`, /*1*/
  `#audiovisual #touchdesigner #digitalart #softcentre #ctmfestival #newmediaart #generative #codeart`, /*2*/
  `#touchdesigner #digitalart #particles #glsl #maxmsp #newmediaart #generativeart #codeart`, /*3*/
  `#touchdesigner #generativeart #digitalart #glsl #audiovisual #particle`, /*4*/
  `#touchdesigner #digitalart #particles #glsl #maxmsp #newmediaart #generative #codeart`, /*5*/
  `#touchdesigner #digitalart #particles #glsl #maxmsp #offfestival #newmediaart #generative #codeart`, /*6*/
  `A tear that bursts into the ether.`, /*7*/
  `#touchdesigner #digitalart #particles #glsl #maxmsp #newmediaart #generative #codeart`, /*8*/
  `#touchdesigner #digitalart #particles #glsl #maxmsp #newmediaart #generative #codeart`, /*9*/ 
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

export const alex_guevara_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const alex_guevara_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const alex_guevara_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const alex_guevara_array_of_posts = [
  ...alex_guevara_images,
  ...alex_guevara_videos
];
