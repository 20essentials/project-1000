import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gabrielfong_web';
const userId = '';
const prefixUrl = '';
const followers = 27_832;
const followed = 72;
const profileDescription = `Te ayudo a conseguir clientes con una página web que convierte.
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `2 minutos de full valor #diseñoweb #webdesign #figma #shopify #ecommerce
`, /*1*/
  `#diseñoweb #webdesign #figma #bentogrid #bento
`, /*2*/
  `Diseño de página web para una Agencia de Viajes. La web se hizo en WordPress con Bricks Builder. #diseñoweb #webdesign #wordpress #bricksbuilder #agenciadeviajes`, /*3*/
  `Página para encontrar inspiración para tus diseños en WordPress. #wpmade #wordpress #webdesign #diseñoweb`, /*4*/
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

export const gabrielfong_web_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gabrielfong_web_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gabrielfong_web_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gabrielfong_web_array_of_posts = [
  ...gabrielfong_web_images,
  ...gabrielfong_web_videos
];
