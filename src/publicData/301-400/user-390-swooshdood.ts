import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'swooshdood';
const userId = '';
const prefixUrl = '';
const followers = 63_832;
const followed = 116;
const profileDescription = `Concepts + other things 💭`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#procreate #nike #airuptempo #cactusfleamarket #reelsinstagram #airmax #3Ddesign #sneskerdesign`, /*1*/
  `#procreate #stussy #airforce1 #ourlegacy #reels #reelsinstagram #3dart #3ddesign #igart`, /*2*/
  `#stussy #nike #airforce1 #procreate #reels #reelsinstagram`, /*3*/
  `Design process with Shapr3D #shapr3d#3ddesign#airmax#airmax95`, /*4*/
  `Air Max 95 Patent ‘Neon Chrome’ made with Shapr3D Probably some of the most fun software I’ve used - has a crazy range of diverse materials which is going to be a lot of fun to play around with to create concepts 💭 #airmax #airmax95 #shapr3d #3ddesign`, /*5*/
  `NOKIA 6310 SUMMERHOUSE PROCESS ✏️ Inspired from the @lorenz.og custom AM95 for @topboynetflix #reels #reelsinstagram #topboy`, /*6*/
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

export const swooshdood_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const swooshdood_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const swooshdood_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const swooshdood_array_of_posts = [
  ...swooshdood_images,
  ...swooshdood_videos
];
