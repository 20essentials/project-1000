import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'youngceoclub';
const userId = 'aa7d3090-d217-4744-b514-c236f9c7cd78';
const prefixUrl = 'https://dominicnikolai.github.io/project-306/assets/youngceoclub/';
const followers = 172_720;
const followed = 342;
const profileDescription = 'a journey of self improvement';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#silversurfer #him #aesthetic`, /*1*/
  `He’s HIM #silversurfer #him #aesthetic`, /*2*/
  `Ladies and gentlemen, the Silver Surfer.`, /*3*/
  `Mr aura himself…`, /*4*/
  `GOAT character 🏄🏾‍♂️ #silversurfer #marvel #universe #aesthetic`, /*5*/
  `Aura… #silversurfer #aethetic #marvel #universe`, /*6*/
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

export const youngceoclub_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const youngceoclub_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const youngceoclub_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const youngceoclub_array_of_posts = [
  ...youngceoclub_images,
  ...youngceoclub_videos
];
