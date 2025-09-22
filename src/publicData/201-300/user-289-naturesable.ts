import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'naturesable';
const userId = '0560a289-8103-4a3b-b4d8-f882d12ac60f';
const prefixUrl = 'https://dominicnikolai.github.io/project-335/assets/naturesable/';
const followers = 3_922_322;
const followed = 489;
const profileDescription = `Let's Discover the World Together`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#asmr #asmrcommunity #asmrsounds #asmrvideo #oddlysatisfying #oddlysatisfyingvideo #satisfy #satisfying #satisfyingasmr #satisfyingcontent #satisfyingpost #satisfyingposts #satisfyingslime #satisfyingsounds #satisfyingvid #satisfyingvideo#slimevideo#sosatisfying`, /*1*/
  `#satisfyingslime #satisfyingsounds #satisfyingvid #satisfyingvideo#slimevideo#sosatisfying`, /*2*/
  `satisfyingvideo #slimevideo#sosatisfying`, /*3*/
  `#satisfyingsounds`, /*4*/
  `#satisfy`, /*5*/
  `#oddlysatisfying `, /*6*/
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

export const naturesable_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const naturesable_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const naturesable_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const naturesable_array_of_posts = [
  ...naturesable_images,
  ...naturesable_videos
];
