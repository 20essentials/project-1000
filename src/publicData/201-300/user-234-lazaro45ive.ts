import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lazaro45ive';
const userId = 'c7a7cb82-5c3f-443d-991c-3022b1e2849c';
const prefixUrl = 'https://dominicnikolai.github.io/project-321/assets/lazaro45ive/';
const followers = 91_720;
const followed = 50;
const profileDescription = `𝗗𝗿𝗲𝗮𝗺𝗽𝘂𝗻𝗸`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `079//You were my sweetest curse ”Never lasted, never faded..” • Music: .diedlonely - bipolar • • Find Assets, Tutorials + more on Patreon patreon.com/lazaro45ive Made with Blender. Featured assets from @kitbash3D. Get any Kit 15% off with code Lazaro15 at checkout! #b3d #cyberpunk #cinematic #digitalart #cyberpunk_cities #scifi`, /*1*/
  `072//Finally home “I just don’t know what I’m supposed to be..” • Music: Resonance x Genesis • • Find Assets, Tutorials + more on my Patreon patreon.com/lazaro45ive Made with Blender. Featured assets from kitbash3d | Get any Kit 15% off with code Lazaro15 at checkout! #night #neon #nostalgic #future #cyberpunk #b3d #cinematic #cyberpunk_cities`, /*2*/
  `You, me, 90s cars and late night drives💙 #cyberpunk #cinematic #b3d #jdm #fyp`, /*3*/
  `#cyberpunk #b3d #cinematic #future #fyp`, /*4*/
  `#night #neon #future #cyberpunk #b3d #cinematic`, /*5*/
  `#future #cyberpunk #b3d #cinematic #cyberpunk_cities`, /*6*/
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

export const lazaro45ive_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lazaro45ive_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lazaro45ive_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const lazaro45ive_array_of_posts = [
  ...lazaro45ive_images,
  ...lazaro45ive_videos
];
