import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'red_panda';
const userId = '6c2d4764-922d-4621-8cd8-5b5d9cd605ec';
const prefixUrl = 'https://dominicnikolai.github.io/project-338/assets/red-panda/';
const followers = 899_882;
const followed = 452;
const profileDescription = `🟥 Red Panda 🔴`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Red panda core #redpanda #core #fyp #viral #cute #animals #trend
`, /*1*/
  `#foryou #fyp #fy #viral #2025`, /*2*/
  `I'm not afraid of you. Let's duel.⚔️⚔️⚔️#fy #fyp #trending #cute #redpanda #duel`, /*3*/
  `Funny red panda #fun #funny #funnyanimals #redpanda #funnyredpanda #funnytiktok #fyp #fypシ #foryou #redpanda`, /*4*/
  `I'm very obedient. Please give me all the grapes.#fy #fyp #trending #redpanda #cute #grape #obedientchild`, /*5*/
  `Funny red panda #fun #funny #funnyanimals #redpanda #funnyredpanda #funnytiktok #fyp #fypシ #foryou #redpanda`, /*6*/
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

export const red_panda_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const red_panda_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const red_panda_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const red_panda_array_of_posts = [
  ...red_panda_images,
  ...red_panda_videos
];
