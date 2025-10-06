import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'alisa_dizzy';
const userId = '';
const prefixUrl = '';
const followers = 77_993;
const followed = 50;
const profileDescription = `design / ai tools / freelance life`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#framerpartner #buildwithframer #freelancedesigner #uxdesigner #webdesign #designwithme #userexperience #websitedesign #uxui #uxui #webdesignagency #framertips`, /*1*/
  `#designstudio #webdesigner #uxdesigner #webdesign #designwithme #uxui #websitedesign #userexperience #reels #webdesignagency #designportfolio`, /*2*/
  `aking more intentional time to actually design this summer has brought me back to why I love doing what I do (& has prevented me to quitting altogether 🥲)`, /*3*/
  `These websites are full on movies

🌐 thetinypod.com
🌐 flighty.com
🌐 ouraring.com`, /*4*/
  `#freelancedesigner #uxdesigner #webdesign #designwithme #uxui #websitedesign #userexperience #figmaglasseffect #glasseffect #figma #figmadesign #webdesignagency #graphicdesign #appleliquidglass #liquidglass #design`, /*5*/
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

export const alisa_dizzy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const alisa_dizzy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const alisa_dizzy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const alisa_dizzy_array_of_posts = [
  ...alisa_dizzy_images,
  ...alisa_dizzy_videos
];
