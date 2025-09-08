import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lililile3343';
const userId = '';
const prefixUrl = '';
const followers = 666_720;
const followed = 16;
const profileDescription = `六年插畫師在線分享procreate 繪畫教程百科`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `超好玩 快去試試 #畫畫 #繪畫 #procreate #畫畫畫 #ps #筆刷 #插畫`, /*1*/
  `背景裝飾筆刷 評論留言333領取喔 #畫畫 #繪畫 #procreate #art #artist #illustration #illustrator #畫畫畫 #插畫 #draw #drawing`, /*2*/
  `第四彈 #畫畫 #繪畫 #procreate #畫畫畫 #ps #筆刷 #教程 #教程 #零基礎學畫畫`, /*3*/
  `第三彈 #畫畫 #繪畫 #procreate #畫畫畫 #ps #筆刷 #教程 #教程 #零基礎學畫畫`, /*4*/
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

export const lililile3343_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lililile3343_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lililile3343_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const lililile3343_array_of_posts = [
  ...lililile3343_images,
  ...lililile3343_videos
];
