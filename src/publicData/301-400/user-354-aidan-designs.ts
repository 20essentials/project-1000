import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'aidan_designs';
const userId = '8e28343e-1bba-4655-8ce0-22aa143724a9';
const prefixUrl = 'https://dominicnikolai.github.io/project-344/assets/aidan-designs/';
const followers = 23_432;
const followed = 50;
const profileDescription = `Spreading the Gospel through design `;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Which famous logo should I do next? - - - - - - DM for Projects and Pricing! - Created using Adobe Illustrator and Capcut - - - - - - - - - #design #logo #mockup #logos #logodesign #logodesigner

`, /*1*/
  `#design #logo #mockup #logos #logodesign #logodesigner`, /*2*/
  `#design #logodesign #kittl #software #vector #logo`, /*3*/
  `#design #logo #famous #logos #logodesign #tacobell`, /*4*/
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

export const aidan_designs_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const aidan_designs_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const aidan_designs_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const aidan_designs_array_of_posts = [
  ...aidan_designs_images,
  ...aidan_designs_videos
];
