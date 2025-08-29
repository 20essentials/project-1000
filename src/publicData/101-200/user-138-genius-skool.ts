import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'genius_skool';
const userId = '75b7fd50-2bfb-4fb3-a3fc-fc79e552d845';
const prefixUrl = 'https://dominicnikolai.github.io/project-297/assets/genius-skool/';
const followers = 279_720;
const followed = 50;
const profileDescription = ' Canva Pro';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#canvatutorial #canvalove #canvatips #canvahacks #canvatemplates #canva #canvapro #canvaproductdesign #canvaanimation #canvaanimacion #canvagratis`, /*1*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*2*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*3*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*4*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*5*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks #canvaprincipiantes`, /*6*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*7*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*8*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*9*/ 
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*10*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*11*/
  `#canva #canvatemplate #canvadesigns #canvapro #canvalovers #creadoresdecontenido #socialmedia #canvahacks`, /*12*/
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

export const genius_skool_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const genius_skool_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const genius_skool_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const genius_skool_array_of_posts = [
  ...genius_skool_images,
  ...genius_skool_videos
];
