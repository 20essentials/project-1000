import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mikedesignofficial';
const userId = '';
const prefixUrl = '';
const followers = 149_832;
const followed = 284;
const profileDescription = ` design partner for startup founders`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#motiondesign #aftereffects #graphics #motionaep #motionaid #visualdesigner #aftereffects #adobeae #google #motiongraphics #animation #2danimation`, /*1*/
  `#motiondesign #aftereffects #motionhatchling #graphics #typography #motionaep #motionaid #visualdesigner #aftereffects #adobeae #graphicdesign #motiongraphics #animation #design #designer #setup #mograph #animatedloops`, /*2*/
  `#motiondesign #aftereffects #motionhatchling #graphics #typography #motionaep #motionaid #visualdesigner #aftereffects #adobeae #graphicdesign #motiongraphics #animation #design #designer #motionmass #mograph #animatedloop #motionmate #mdcommunity #aescripts`, /*3*/
  `#animation #logoanimation #2d #aftereffects #motiondesign #motiongraphics`, /*4*/
  `#animation #logoanimation #2d #aftereffects #motiondesign #motiongraphics`, /*5*/
  `Podcasts iOS app animation concept. Here’s a small behind-the-scenes look. If you would like to learn more you can check my course - Motion Magic (the link is in bio) ✨ #animation #logoanimation #2d #aftereffects #motiondesign #motiongraphics`, /*6*/
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

export const mikedesignofficial_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mikedesignofficial_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mikedesignofficial_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mikedesignofficial_array_of_posts = [
  ...mikedesignofficial_images,
  ...mikedesignofficial_videos
];
