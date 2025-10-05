import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'akcreationshd';
const userId = 'd0c78639-f2b2-4c8f-8c43-f524853d314a';
const prefixUrl = 'https://dominicnikolai.github.io/project-349/assets/akcreationshd/';
const followers = 347_832;
const followed = 847;
const profileDescription = `3D Designing, Figures, Props...`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🍏 WATCH X BEN 10 OMNIVERSE CASE - ASSEMBLE 🎃🎃🎃, Quick Assembly video ✨✨✨
Apple Watch Cases Now available for purchase, interested ones link in bio , Get one if you own a Apple watch, Thanks for all your support !!!!`, /*1*/
  `And the list goes on…. Samsung Galaxy smartwatch cases ✨✨✨ #ben10 #omnitrix #3dprinting #ben103d #ben10omniverse #ben103d #ben10edit #ben10live #omnitrix`, /*2*/
  `#ben10 #omnitrix #ben103d #ben10omniverse #ben103d #ben10ultimatealien #ben10omniverse #ben10memes #3dprinting`, /*3*/
  `#3dprinting #omnitrix #omnitrix #ben10 #ben10ultimatealien #ben103d`, /*4*/
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

export const akcreationshd_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const akcreationshd_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const akcreationshd_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const akcreationshd_array_of_posts = [
  ...akcreationshd_images,
  ...akcreationshd_videos
];
