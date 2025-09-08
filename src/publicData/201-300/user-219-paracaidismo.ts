import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'paracaidismo';
const userId = '';
const prefixUrl = '';
const followers = 38_720_232;
const followed = 50;
const profileDescription = `Just Do It`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 15;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `the path:`, /*1*/
  `insane pov `, /*2*/
  `you and bro dab up at 12‘000 feet`, /*3*/
  `Vibes all summer! #skydiving`, /*4*/
  `My kind of point of view! #pov #skydive #helicoper #skydiving`, /*5*/
  `Any guesses on how high I am? #skydiving #fall #extremesports #skydive #heights`, /*6*/
  `Nothing feels better than jumping out of a plane • #skydive #travel #lifestyle #extreme #summer`, /*7*/
  `Sometimes life stands still… until you move. Don’t wait for things to happen, go make them happen🔥🚁 • • #iceland #skydiving #summer`, /*8*/
  `Who do you want to go skydiving with…? • • #skydive #lifestyle #travel #friends`, /*9*/ 
  `The start of a new chapter… There’s not exactly a way to describe the feeling of jumping off a cliff, especially the moments leading up to it. This was one of those experiences that truly pushed me to embrace that fear… my first base jumps running off the cliffs of Norway ⚡️ . . . #extreme #adventure #adrenaline #lifeofadventure #basejump #liveyourlife`, /*10*/
  `life`, /*11*/
  `play favorites reel`, /*12*/
  `Knees in the breeze. Happy Friday 🌊`, /*13*/
  `Nothing like hearing the sounds of jumpers leaving the aircraft while you’re holding it steady 🪂🪂🪂`, /*14*/
  ` No place I’d rather live don’t @me 🇺🇸🎇
`, /*15*/
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

export const paracaidismo_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const paracaidismo_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const paracaidismo_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const paracaidismo_array_of_posts = [
  ...paracaidismo_images,
  ...paracaidismo_videos
];
