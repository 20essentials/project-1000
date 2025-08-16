import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gazzaladradesign';
const userId = '';
const prefixUrl = '';
const followers = 173_720;
const followed = 622;
const profileDescription = 'I design useful and enjoyable products for 3D-printing';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `I 3d scanned this beautiful birch tree with tinder mushrooms to turn it into a 3d printable vase! `, /*1*/
  `A book but also not a book! This bookend is something really special because i 3d scanned a book from 1537 for the design!`, /*2*/
  `Recently I've been getting a lot of ideas during breakfast and the Watermelon Block was one of them! Follow along while I show my thought process on making this model!`, /*3*/
  `My top 5 3d printed and 3d scanned forest designs! All files to print them are in my bio! #3dprinting #3dprinter #3dprinters #3dprinted`, /*4*/
  `🪴Let’s print this tree trunk pencil holder! `, /*5*/
  `I 3d scanned a nice tree and some mushrooms for this 3d printed planter with a hidden drip tray!`, /*6*/
  `Let’s print this beautiful notebook! `, /*7*/
  `Let’s print this pineapple coasters! `, /*8*/
  `I 3d scanned a beautiful mini pineapple and turned it into a 3d printed coaster set! A fun way to make sure you have some coasters around for your home or office! 🍍`, /*9*/ 
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

export const gazzaladradesign_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gazzaladradesign_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gazzaladradesign_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gazzaladradesign_array_of_posts = [
  ...gazzaladradesign_images,
  ...gazzaladradesign_videos
];
