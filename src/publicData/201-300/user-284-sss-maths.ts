import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'sss_maths';
const userId = '';
const prefixUrl = '';
const followers = 304_720;
const followed = 50;
const profileDescription = `Basic mathematics 💕`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 6;
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
  `#sscchsl #ssccgl #previousyearquestionpapers #maths #trending #trend #ssccgl2021 #mathstricks #mathematics #mathisfun #mathsteacher #rrb #railway #instaeducational #instadaily #instalikes #instafollow #tricks #gktricks #mathstricks #mathproblems #upscmotivation #sscaspirants #trendingnow to ki#mathmeme #mathematics #maths #mathsquiz #mathsfunda`, /*1*/
  `#mathsquiz #mathsfun #mattenails #mathematicsisbeautiful #mathstudents #mathslover #mathematicalsymbols #mathmemes #mathproblems #mathscience #mathewperry #mathstmat #mathewmcconaughey #mathtricks #mathjokes #to #mathematician #mathfacts #mathematiciansatwork`, /*2*/
  `#mathsquiz #mathsfun #mattenails #mathematicsisbeautiful #mathstudents #mathslover #mathematicalsymbols #mathmemes #mathproblems #mathscience #mathewperry #mathstmat #mathewmcconaughey #mathtricks #mathjokes #to #mathematician #mathfacts #mathematiciansatwork`, /*3*/
  `#mathsquiz #mathsfun #mattenails #mathematicsisbeautiful #mathstudents #mathslover #mathematicalsymbols #mathmemes #mathproblems #mathscience #mathewperry #mathstmat #mathewmcconaughey #mathtricks #mathjokes #to #mathematician #mathfacts #mathematiciansatwork`, /*4*/
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

export const sss_maths_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const sss_maths_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const sss_maths_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const sss_maths_array_of_posts = [
  ...sss_maths_images,
  ...sss_maths_videos
];
