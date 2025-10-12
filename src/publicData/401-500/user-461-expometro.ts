import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'expometro';
const userId = '9637b5c7-a68d-4ed3-a652-0ad3fffb4bdb';
const prefixUrl = 'https://dominicnikolai.github.io/project-357/assets/expometro/';
const followers = 141_832;
const followed = 982;
const profileDescription = `World’s Largest Public Art Show`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 6;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
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
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  `#expometro #hongkongart #artshow #publicart #ledart #globalartists #artistcall #artworld #wanchaievents
#artopportunity #artdisplay #exhibition2025 #hongkongartist #creativecommunity`, /*1*/
  `#expometro #hongkongart #artshow #publicart #ledart #globalartists #artistcall #artworld #wanchaievents
#artopportunity #artdisplay #exhibition2025 #hongkongartist #creativecommunity`, /*2*/
  `#expometro #hongkongart #artshow #publicart #ledart #globalartists #artistcall #artworld #wanchaievents
#artopportunity #artdisplay #exhibition2025 #hongkongartist #creativecommunity`, /*3*/
  `#expometro #hongkongart #artshow #publicart #ledart #globalartists #artistcall #artworld #wanchaievents
#artopportunity #artdisplay #exhibition2025 #hongkongartist #creativecommunity`, /*4*/
  `#expometro #hongkongart #artshow #publicart #ledart #globalartists #artistcall #artworld #wanchaievents
#artopportunity #artdisplay #exhibition2025 #hongkongartist #creativecommunity`, /*5*/
  `#expometro #hongkongart #artshow #publicart #ledart #globalartists #artistcall #artworld #wanchaievents
#artopportunity #artdisplay #exhibition2025 #hongkongartist #creativecommunity`, /*6*/
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

export const expometro_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const expometro_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const expometro_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const expometro_array_of_posts = [
  ...expometro_images,
  ...expometro_videos
];
