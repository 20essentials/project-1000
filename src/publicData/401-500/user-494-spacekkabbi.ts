import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'spacekkabbi';
const userId = '0343dcc0-d9e1-4c3b-af48-c34d9e56a451';
const prefixUrl = 'https://dominicnikolai.github.io/project-361/assets/spacekkabbi/';
const followers = 21_898;
const followed = 108;
const profileDescription = `Art Basel Miami Billboard / Dec`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#animation #animationart #animationvideo #gif #gifs  #motiongraphics #motion #rendering3d #cartoon #3danimation #3dartwork #animationart #motionmate #c4d #motiondesign #graphic #artist #animations #characterdesign #character #characterart #NFT #opensea #superrare #niftygateway #nftart #dopeart #dankmemes`, /*1*/
  `Bringing Kkabbi to Life🚀`, /*2*/
  `🚀🚀🚀🔥`, /*3*/
  `#space #spaceart #spaceexploration #spacetravel #spacemarines #ufo #alien #digitalart #artgallery #artcollector`, /*4*/
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

export const spacekkabbi_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const spacekkabbi_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const spacekkabbi_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const spacekkabbi_array_of_posts = [
  ...spacekkabbi_images,
  ...spacekkabbi_videos
];
