import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hazedisplay';
const userId = '';
const prefixUrl = '';
const followers = 10_720;
const followed = 50;
const profileDescription = 'Located in Los Angeles, California';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Projecting hologram characters on a fog machine #hologram #holographic #projector #tech`, /*1*/
  `Hologram Minions projected on a fog machine #minions #hologram #holographic #projector #technology #tech #halloween #despicableme`, /*2*/
  `Neon skull projected on a fog machine #projector #tech #technology #hazedisplay #neon #skull #halloween`, /*3*/
  `SpongeBob hologram characters projected on a fog machine #hologram #holographic #spongebob #cartoon #projector #technology #tech`, /*4*/
  ``, /*5*/
  `Pokemon holograms projected on a fog machine #pikachu #gengar #charizard #pokemon #hologram #holographic #projector #technology #tech #hazedisplay`, /*6*/
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

export const hazedisplay_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hazedisplay_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hazedisplay_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hazedisplay_array_of_posts = [
  ...hazedisplay_images,
  ...hazedisplay_videos
];
