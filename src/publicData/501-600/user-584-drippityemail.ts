import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'drippityemail';
const userId = '';
const prefixUrl = '';
const followers = 182_832;
const followed = 50;
const profileDescription = `I hope this email finds you well...seriously`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#email#emailmarketing #omnisend #emailmarketingtutorial #graphicdesign #graphic`, /*1*/
  `#digitalmarketing #emailmarketing #email #emaildesign #omnisend`, /*2*/
  `#uxdesigntips #uxdesign #uxdesigner #email #emailmarketing #digitalmarketing #howtomarketyourbusiness #howtodesign #graphicdesign #creatorsearchinsights`, /*3*/
  `#klaviyo #adobexd #emailmarketing #uxdesign #graphicdesign #digitalmarketing #branding #emaildesign #marketing #graphic #graphicdesigntips #designer #photoshopediting #email #ux #jeep #uxdesigntips #bronco`, /*4*/
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

export const drippityemail_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const drippityemail_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const drippityemail_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const drippityemail_array_of_posts = [
  ...drippityemail_images,
  ...drippityemail_videos
];
