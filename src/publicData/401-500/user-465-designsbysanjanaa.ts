import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'designsbysanjanaa';
const userId = '';
const prefixUrl = '';
const followers = 67_832;
const followed = 431;
const profileDescription = `Sanjanaa Lalwani | Logo Animation`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#3danimation #3dcamera #motiondesigner #bts #behindthescenes #viewportvsrender #2dto3d #logoreveal #aftereffectsanimation #motiongraphics #snowfalling #wintervibes #christmasseason`, /*1*/
  `Multiple takes on the Apple logo animation 🍏`, /*2*/
  `#logoanimation #restaurantlogo #steaklovers #logoinmotion #youtubeintro #2danimations`, /*3*/
  `#3danimation #2dto3d #behindthescenes #viewportvsrender #aftereffectstutorial #aftereffectsedit #animation #parallaxeffect #logoreveal #explainervideo`, /*4*/
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

export const designsbysanjanaa_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const designsbysanjanaa_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const designsbysanjanaa_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const designsbysanjanaa_array_of_posts = [
  ...designsbysanjanaa_images,
  ...designsbysanjanaa_videos
];
