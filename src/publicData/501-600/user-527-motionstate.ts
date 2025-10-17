import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'motionstate';
const userId = '';
const prefixUrl = '';
const followers = 322_832;
const followed = 432;
const profileDescription = `Creative Production Co & Specialty Camera Ops EST. 2014`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `this is so cool`, /*1*/
  `Behind the Scenes - Titleist “25 Pro V1”
Take a look at our latest behind the scenes film for the Titleist Pro V1 “25” campaign we produced and shot in Okanagon County at Gamble Sands Golf course. Washington State offers a diversity of climates and topographies that most outside of our state do not realize exists. One of our main missions at Motion State is to showcase the beauty of Washington State and bring clients here to experience all it has to offer. With the support of WAFIlm Works rural incentive program, we have been able to continue to build upon that mission.`, /*2*/
  `#underwatercinematography #underwaterphotography #underwaterfilming #oceanphotography`, /*3*/
  `Incredibly rare footage of a wild Rivian Blue R1S`, /*4*/
  `#bts #seattle #washington #photography #set
`, /*5*/
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

export const motionstate_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const motionstate_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const motionstate_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const motionstate_array_of_posts = [
  ...motionstate_images,
  ...motionstate_videos
];
