import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kirill_gladkiy';
const userId = 'a0190470-8bfc-423f-a104-2f9d0bc2405f';
const prefixUrl = 'https://dominicnikolai.github.io/project-338/assets/kirill-gladkiy/';
const followers = 658_898;
const followed = 63;
const profileDescription = `cgi • motion design • animation`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#cinema4d #c4d #3d #aftereffects #adobe #animation #redshift #motion #motiondesign #behance #maxon #graphic #mdcommunity #mgcollective #buckuback #xuxoe #behindthescenes #tennis`, /*1*/
  `#cinema4d #c4d #3d #redshift #cartoon #buckuback #aftereffects #motiongraphics #animation #design`, /*2*/
  `#cinema4d #c4d #3d #aftereffects #adobe #animation #redshift #motion #motiondesign #behance #maxon #graphic #mdcommunity #mgcollective #buckuback #xuxoe #tennis #mog`, /*3*/
  `#cinema4d #c4d #3d #aftereffects #adobe #animation #redshift #motion #motiondesign #behance #maxon #graphic #mdcommunity #mgcollective #buckuback #xuxoe #element3d`, /*4*/
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

export const kirill_gladkiy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kirill_gladkiy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kirill_gladkiy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kirill_gladkiy_array_of_posts = [
  ...kirill_gladkiy_images,
  ...kirill_gladkiy_videos
];
