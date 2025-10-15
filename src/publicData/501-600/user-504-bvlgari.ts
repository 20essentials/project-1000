import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bvlgari';
const userId = '';
const prefixUrl = '';
const followers = 14_832_325;
const followed = 627;
const profileDescription = `The Magnificent Roman High Jeweler`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 9;
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
    `#Bvlgari #BvlgariWatches #BvlgariTubogas`, /*1*/
  `#Bvlgari #BvlgariWatches #BvlgariTubogas`, /*2*/
  `#Bvlgari #BvlgariExhibition #Serpenti #SerpentiInfinito`, /*3*/
  `#Bvlgari #BvlgariJewelry #DivasDream⁣`, /*4*/
  `#Bvlgari #BvlgariJewelry #DivasDream⁣`, /*5*/
  `#Bvlgari #BvlgariHeritage #BvlgariExhibition #Kaleidos #NACT #TheNationalArtCenterTokyo”`, /*6*/
  `#Bvlgari #BvlgariHeritage #BvlgariExhibition #Kaleidos #NACT #TheNationalArtCenterTokyo”`, /*7*/
  `#Bvlgari #BvlgariHeritage #BvlgariExhibition #Kaleidos #NACT #TheNationalArtCenterTokyo”`, /*8*/
  `#Bvlgari #BvlgariHeritage #BvlgariExhibition #Kaleidos #NACT #TheNationalArtCenterTokyo”`, /*9*/ 
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

export const bvlgari_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bvlgari_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bvlgari_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const bvlgari_array_of_posts = [...bvlgari_images, ...bvlgari_videos];
