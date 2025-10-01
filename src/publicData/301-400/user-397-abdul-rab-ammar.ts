import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'abdul_rab_ammar';
const userId = '';
const prefixUrl = '';
const followers = 57_283;
const followed = 93;
const profileDescription = `I Design & Develop`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#fonts #tallfonts #typeface #sanserif #letterdesign #typedesign #serif #typefacedesign #fontdesign #fontstyle #FontDiscovery #abdulrabammar #design #uidesign #viralvideos`, /*1*/
  `#designtrends #uidesigner #inspiration #graphicdesign #graphicdesigner #designtrends #graphicdesigntips`, /*2*/
  `#uidesigner #designers #uiux #skincare #webdesign #ecommerce`, /*3*/
  `#designers #uiux`, /*4*/
  `#ios #ios26 #apple #update #liquidglass #effect #figma`, /*5*/
  `#designers #uiux`, /*6*/
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

export const abdul_rab_ammar_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const abdul_rab_ammar_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const abdul_rab_ammar_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const abdul_rab_ammar_array_of_posts = [
  ...abdul_rab_ammar_images,
  ...abdul_rab_ammar_videos
];
