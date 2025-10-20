import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'oscar_diazx';
const userId = '9ccf2944-6acc-4d02-8b8e-fafa4c6e56e0';
const prefixUrl = 'https://dominicnikolai.github.io/project-366/assets/oscar-diazx/';
const followers = 466_832;
const followed = 73;
const profileDescription = `Looking for the Nostalgia and things that reminds me of a time gone by`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#shootfilmmag #portra400 #filmisnotdead #filmcamera #nycphotographer #filmwave #nyclife #thefilmcommunity #vintageinspired #filmphotography #vintageaesthetic #vintagelove`, /*1*/
  `#nostalgic #filmcamera #1980s #vintagecar #vintagecars #retrostyle #70s #streetdreamsmag #vintageaesthetic #retroaesthetic #vintagevibes #vintagelove #1970s #retrocar`, /*2*/
  `#pups #halloweenvibes #puppylover #dogphotography #halloweencostume #nyclife #doglove#vintagevibes #vintageaesthetic #retroaesthetic #halloweendog #vintageinspired`, /*3*/
  `#nostalgic #80s #1980s #retroaesthetic #newyorker #nyclife #80sfashion #80snostalgia #80svintage #vintageaesthetic #vintagelove#80sbaby #vintageinspired #80saesthetic`, /*4*/
  `#nostalgic #vintagelove #1970s #retroaesthetic #newyorker #retrostyle #60s #vintagevibes #vintageaesthetic #vintagelove#newyorker #vintagelife #vintagelook #vintagegirl`, /*5*/
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

export const oscar_diazx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const oscar_diazx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const oscar_diazx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const oscar_diazx_array_of_posts = [
  ...oscar_diazx_images,
  ...oscar_diazx_videos
];
