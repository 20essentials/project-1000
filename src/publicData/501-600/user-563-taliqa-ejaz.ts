import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'taliqa_ejaz';
const userId = '642dfc5a-ed43-4b08-ac37-23b4b193f94f';
const prefixUrl = 'https://dominicnikolai.github.io/project-371/assets/taliqa-ejaz/';
const followers = 193_832;
const followed = 50;
const profileDescription = `Get To Next Generation WebDev`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` Like if you love it ❤️#webdevelopment #webdesign #webservices #webanimations #animations #ui #ux #uxdesigns #uidesigns #usa`, /*1*/
  ` Like if you love it ❤️#webdevelopment #webdesign #webservices #webanimations #animations #ui #ux #uxdesigns #uidesigns #usa`, /*2*/
  ` Like if you love it ❤️#webdevelopment #webdesign #webservices #webanimations #animations #ui #ux #uxdesigns #uidesigns #usa`, /*3*/
  ` Like if you love it ❤️#webdevelopment #webdesign #webservices #webanimations #animations #ui #ux #uxdesigns #uidesigns #usa`, /*4*/
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

export const taliqa_ejaz_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const taliqa_ejaz_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const taliqa_ejaz_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const taliqa_ejaz_array_of_posts = [
  ...taliqa_ejaz_images,
  ...taliqa_ejaz_videos
];
