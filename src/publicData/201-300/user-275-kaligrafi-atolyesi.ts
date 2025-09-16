import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kaligrafi_atolyesi';
const userId = '';
const prefixUrl = '';
const followers = 357_000;
const followed = 733;
const profileDescription = `Kaligraf & İmza Tasarım Uzmanı`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Mishi +🦋 #signatureidea #İmzaSanatı`, /*1*/
  `#signatureideas #İmzaSanatı #imzatasarimi`, /*2*/
  `Sıradaki imza ne olsun? #sign #imzasanati`, /*3*/
  `"Sarı sana ne ifade ediyor?" ✨ Bu rengi yazmak inanılmaz huzur verici. #kaligrafi #yazısanatı #sarı #yellow #calligraphy #letteringcommunity #calligraphylovers #penmanship`, /*4*/
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

export const kaligrafi_atolyesi_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kaligrafi_atolyesi_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kaligrafi_atolyesi_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kaligrafi_atolyesi_array_of_posts = [
  ...kaligrafi_atolyesi_images,
  ...kaligrafi_atolyesi_videos
];
