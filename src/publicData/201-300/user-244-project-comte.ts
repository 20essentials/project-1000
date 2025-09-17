import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'project_comte';
const userId = 'a26a260e-1976-480d-a6ed-344e2c08ec0d';
const prefixUrl = 'https://dominicnikolai.github.io/project-326/assets/project-comte/';
const followers = 248_720;
const followed = 227;
const profileDescription = `♱ making sick sh!t`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `drop is coming soon which one yall want the most??👀🦇`, /*1*/
  `what object should he try next???👀`, /*2*/
  `TAG A HOMIE WHO HAS 0 DRIP 👀🤕`, /*3*/
  `LMK WHICH PIECE U TAKIN W YOU TO THE GRAVE `, /*4*/
  `CANT BE SILENT OUT HERE W THESE PIECES🤧🩸`, /*5*/
  `mk which one yall rockin w?? 👀🦇`, /*6*/
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

export const project_comte_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const project_comte_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const project_comte_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const project_comte_array_of_posts = [
  ...project_comte_images,
  ...project_comte_videos
];
