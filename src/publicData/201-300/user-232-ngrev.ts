import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ngrev';
const userId = '28bbdd25-9321-4a54-9516-7e7f5e16192d';
const prefixUrl = 'https://dominicnikolai.github.io/project-322/assets/ngrev/';
const followers = 384_720;
const followed = 278;
const profileDescription = `Multidisciplinary creator blending art.`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `you want to find the secrets of the universe, think in terms of energy, frequency and vibration.  #nikolatesla #chaos #energy #frequency`, /*1*/
  `#from #dust #to #dust #journey`, /*2*/
  `System Overload. #system #chaos #overload`, /*3*/
  `Tower of Babel. #tower #of #babel`, /*4*/
  `the burden of love is carrying it when it is lost. #burden #of #love`, /*5*/
  `have no fear of perfection – you’ll never reach it. #spiderman #web #data`, /*6*/
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

export const ngrev_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ngrev_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ngrev_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ngrev_array_of_posts = [
  ...ngrev_images,
  ...ngrev_videos
];
