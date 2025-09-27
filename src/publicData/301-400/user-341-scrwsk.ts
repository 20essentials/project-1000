import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'scrwsk';
const userId = '9c66ab12-f7b0-4f7a-9e2b-00a21fb2b99f';
const prefixUrl = 'https://dominicnikolai.github.io/project-342/assets/scrwsk/';
const followers = 767_832 ;
const followed = 50;
const profileDescription = `Promo&Product Videos`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#ugccontent #aestheticvideo #contentcreator #ugccommunity #ugcvideo #ugcphotos #productvideos #productphotos #ugc #portfolio #ugcslovensko #ugcslovakia`, /*1*/
  `#collab#collaboration#content#contentcreation#contentcreator#ugc#ugcvideo#ugcwork`, /*2*/
  `#capcut#video#photo#productvideo#productphoto#ugcvideo#ugcvideo#ugcphoto#ugctips#capcuttips#capcuttip#promotiln#product
`, /*3*/
  `#essence#cosmetics#ugc#contentcreator#ugccreator#ugcportfolio#ugctips#ugcvideo#productvideo`, /*4*/
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

export const scrwsk_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const scrwsk_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const scrwsk_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const scrwsk_array_of_posts = [
  ...scrwsk_images,
  ...scrwsk_videos
];
