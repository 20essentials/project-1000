import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ayzz_thedesigner';
const userId = '62883e20-1d5b-4100-aefd-fa38c2f647a3';
const prefixUrl = 'https://dominicnikolai.github.io/project-344/assets/ayzz-thedesigner/';
const followers = 187_832;
const followed = 50;
const profileDescription = `I design websites & apps`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#figma #figmatutorial #uichallange #uiux #figmadesign #uiuxdesign #animation #figmaanimation #prototype #ux #slider #carousel #uiuxdesigner #uiuxtips #clothing #ecommerce #shopify #zara #nike`, /*1*/
  `Pinterest is kinda old school for modern design trends.`, /*2*/
  `#webdesign #cookies #sweets #icecream #webdesigner #uidesign #uxdesign #coffee #starbucks #designinspiration #behance #dribbble #appdesign #websitedesigner #WebsiteInspiration #viral #enegy #uianimation #donut @dunkin`, /*3*/
  `#webdesign #monsterenergy #energydrink #monstereffect #webdesigner #uidesign #uxdesign #Monster #designinspiration #behance #dribbble #appdesign #websitedesigner #WebsiteInspiration #viral #enegy #uianimation #redbull @monsterenergy @monsterenergygirls`, /*4*/
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

export const ayzz_thedesigner_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ayzz_thedesigner_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ayzz_thedesigner_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ayzz_thedesigner_array_of_posts = [
  ...ayzz_thedesigner_images,
  ...ayzz_thedesigner_videos
];
