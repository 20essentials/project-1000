import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'monster_trucks';
const userId = 'f132a805-4fbd-4dc4-b449-7d09a8563a81';
const prefixUrl = 'https://dominicnikolai.github.io/project-288/assets/m0nster-trucks/';
const followers = 2_700_720;
const followed = 32;
const profileDescription = 'Hello';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `MJ getting damn good at these combos; taking the Skills win in Lincoln! #monsterjam

`, /*1*/
  `boink.`, /*2*/
  `My favorite moment that I’ve filmed of the 2025 season so far!!`, /*3*/
  `YEA!!!`, /*4*/
  `Mike wins Busch Light Racing Saturday night in an absolute thriller! One of the races of the year! #buschlight`, /*5*/
  `Jimmy Creten truck jumps have gone horrible wrong twice. This is not one of those cases. Elkhorn was a pretty cool venue. Was great because you could go see that show at 1 PM, then drive to Sycamore Speedway an hour away and see that show at 7 PM (they were always on the same day)`, /*6*/
  `Kicking off the work week with some Feeling jumps `, /*7*/
  `Zack tries to go for back-to-back freestyle wins, but the back left tire had other plans. Great effort though! At least it’s not as much damage as the October event 😅👍

`, /*8*/
  `Gettin’ Er Done in the South Carolina State Capital! `, /*9*/ 
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

export const monster_trucks_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const monster_trucks_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const monster_trucks_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const monster_trucks_array_of_posts = [
  ...monster_trucks_images,
  ...monster_trucks_videos
];
