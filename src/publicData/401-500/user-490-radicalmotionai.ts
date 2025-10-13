import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'radicalmotionai';
const userId = '';
const prefixUrl = '';
const followers = 39_030;
const followed = 261;
const profileDescription = `Real-time 3D creation and animation. At scale.
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#3D #Animation #RealTime #RADiCAL`, /*1*/
  `If you're a creator but don’t have a studio, team of animators, or a mocap budget, then RADiCAL is built for you. Open a browser. Turn on a webcam. Act out a scene. Preview in 3D instantly. Export. Share. Move on. From YouTubers and indie devs to educators and anyone with an idea, RADiCAL makes motion fast, fun, and frictionless. One browser. Millions of ideas. www.radicalmotion.com`, /*2*/
  `Create your own mini movie in minutes with nothing more than an idea, a web browser, and a RADiCAL account.`, /*3*/
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

export const radicalmotionai_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const radicalmotionai_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const radicalmotionai_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const radicalmotionai_array_of_posts = [
  ...radicalmotionai_images,
  ...radicalmotionai_videos
];
