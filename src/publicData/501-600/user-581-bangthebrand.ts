import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bangthebrand';
const userId = '';
const prefixUrl = '';
const followers = 464_832;
const followed = 83;
const profileDescription = `Branding | Diseño | Web`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `💌 #graphicdesign #estudiodiseño #creatividad #designtips #freelance`, /*1*/
  ` #taschen #libreriamadrid #librosdiseño #libroscreativos #creatividad #freelance #arte #estudiocreativo #estudiodiseño #madrid #fyp`, /*2*/
  `so happy #graphicdesign #graphicdesigner #branding #diseño #estudiocreativo #estudiodiseño #designresources #freelance #emprendimiento #fyp #paratii`, /*3*/
  `#lummi #graphicdesign #graphicdesigner #branding #designresources #estudiocreativo #estudiodiseño #websitesyouneed #fyp #freelance #paratii`, /*4*/
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

export const bangthebrand_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bangthebrand_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bangthebrand_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bangthebrand_array_of_posts = [
  ...bangthebrand_images,
  ...bangthebrand_videos
];
