import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'dr_marmot';
const userId = '';
const prefixUrl = '';
const followers = 558_832;
const followed = 377;
const profileDescription = `Marmot Lover 🇯🇵 🇮🇳 🇲🇽 🇧🇷 🇺🇸 🇮🇷`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Poor thing…don’t hold wild animals.`, /*1*/
  `I'm getting ready to bring marmots back to Japan!`, /*2*/
  `In a cozy suburban backyard, a marmot named Oliver happily munching cookies. The sun casts a warm glow, and the gentle rustle of leaves adds a peaceful ambiance.`, /*3*/
  `It was too fast for me to see`, /*4*/
  `#marmot#mamochi#funny`, /*5*/
  `Marmot actually chooses his favorite movie over delicious strawberries.
`, /*6*/
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

export const dr_marmot_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const dr_marmot_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const dr_marmot_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const dr_marmot_array_of_posts = [
  ...dr_marmot_images,
  ...dr_marmot_videos
];
