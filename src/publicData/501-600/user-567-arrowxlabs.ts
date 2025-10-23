import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'arrowxlabs';
const userId = '';
const prefixUrl = '';
const followers = 158_832;
const followed = 163;
const profileDescription = `🎮 A Development Agency 👾`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#coding #programming #programmer #python #developer #javascript #code #coder #technology #html #computerscience #codinglife #java #webdeveloper #tech #webdevelopment #css #software #softwaredeveloper #webdesign #linux #programmers #codingisfun #softwareengineer #php #programmingmemes #programminglife #machinelearning #code_with_arrow`, /*1*/
  `Ideas to Life – One Beautiful Website at a Time!`, /*2*/
  `#NextGenWeb #WebsiteGlowUp #BuiltDifferent #WebDesignTrends #CreativeDev #DesignThatSpeaks #FutureReadySites #MadeWithArrowXLabs #DigitalCraft #ModernWebDesign #UXThatMatters #DevDiaries #TechAesthetic`, /*3*/
  `#AnimeInspired #DesignVibes #AnimePortfolio #AestheticDesign #WebDesignMagic #UXArt #CreativeProcess #UIUXInspo #OtakuDesign #VisualStorytelling`, /*4*/
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

export const arrowxlabs_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const arrowxlabs_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const arrowxlabs_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const arrowxlabs_array_of_posts = [
  ...arrowxlabs_images,
  ...arrowxlabs_videos
];
