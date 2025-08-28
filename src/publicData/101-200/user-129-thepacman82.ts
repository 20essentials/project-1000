import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'the_pacman_82';
const userId = '';
const prefixUrl = '';
const followers = 949_720;
const followed = 664;
const profileDescription = 'Creative Director. Some VFX, some fashion, & some fun.';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `simulation`, /*1*/
  `Proof we’re living in a simulation part 2 🧟‍♂️`, /*2*/
  `Built to take you further 🪨📱xiaomi.global Redmi Note 14 Pro now in Sand Gold 💪 #RedmiNote14Series`, /*3*/
  `behind the scenes 🎬 ___ #bts #mensfashion #cgi`, /*4*/
  `Not today buddy 🚙 ___ #bmwm3 #cgi #vfx`, /*5*/
  `The superpower you never knew you had 😂 @samsungmobile A camera zoom that brings you closer than ever so that spider only appears giant on your screen 🕷️📱😱 #GalaxyS25 #ExploreGalaxy #withGalaxy #SamsungPartner`, /*6*/
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

export const the_pacman_82_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const the_pacman_82_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const the_pacman_82_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const the_pacman_82_array_of_posts = [
  ...the_pacman_82_images,
  ...the_pacman_82_videos
];
