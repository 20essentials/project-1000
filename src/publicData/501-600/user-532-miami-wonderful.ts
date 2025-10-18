import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'miami_wonderful';
const userId = '';
const prefixUrl = '';
const followers = 251_828;
const followed = 261;
const profileDescription = `We show you what to do in Miami`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `The Messi experience in Miami `, /*1*/
  `Unique Plans Near Miami You Must Discover! 🚂🚂`, /*2*/
  `#miami #florida #todoinmiami #doral #novufusion #thingstodoinflorida #amazingplaces #vacationmiami #funplaninmiami #quecomerenmiami #foddie #intermiamigame #miamicontentcreator #floridacontentcreator #thingstodomiami #thingstodoinmiami #miamiweekend #activitiesinmiami #planesinmiami #cosasquehacerenmiami #sushimiami #activitiesforkids`, /*3*/
  `Ice Cream Shop in Florida that you’ll love for its Halloween decorations and ice cream 👻`, /*4*/
  `A farm in Miami with activities for kids.`, /*5*/
  `THE RIDING DEAD! An ATV experience in Miami featuring zombies and an apocalyptic movie theme`, /*6*/
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

export const miami_wonderful_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const miami_wonderful_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const miami_wonderful_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const miami_wonderful_array_of_posts = [
  ...miami_wonderful_images,
  ...miami_wonderful_videos
];
