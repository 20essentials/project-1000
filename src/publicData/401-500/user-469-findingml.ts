import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'findingml';
const userId = 'c1b1c906-3dca-4325-990d-ddbb3b04421e';
const prefixUrl = 'https://dominicnikolai.github.io/project-358/assets/findingml/';
const followers = 38_832;
const followed = 204;
const profileDescription = `Playing With Netssssss`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#reelsinstagram #viralreels #trendingreels #ai#coding#ml#dl#scienceworld #science #mindset#motivation#scienceworld #tech#techworld #python#java#javascript #matlab#R#datascience`, /*1*/
  `#reelsinstagram #fypシ #tren#viralreels #ai #ml #coding #coders #DataScience #projects`, /*2*/
  `#reelsinstagram #ai#coding#ml#computerscience #cs#computervision #dl#neuralnetwork #python#c++#viralreels #trendingreels`, /*3*/
  `#reelsinstagram #foryourpage#ai#coding#ml#reels#codinglife #dl#datastructure #datascience #python #javascript #java#fypage #fypシ #fy #trending #trendingreels #viralvideos #viralreels #viral`, /*4*/
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

export const findingml_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const findingml_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const findingml_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const findingml_array_of_posts = [
  ...findingml_images,
  ...findingml_videos
];
