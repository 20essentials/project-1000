import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bneumeister_art';
const userId = '';
const prefixUrl = '';
const followers = 98_899;
const followed = 251;
const profileDescription = `Ventanas, murales, cuadros, etc`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#windowpainting #ventana #decoracion #restaurante #pintadoamano`, /*1*/
  ` #windowpainting #storytime #pintadoamano #ventana #posca`, /*2*/
  `#storytime #windowpainting #posca #pintadoamano #pinturaenvidrio #kfc`, /*3*/
  `#windowpainting #posca #linedrawing #windowmural #ventana #hechoamano #diseño #heladoconqueso`, /*4*/
  `#windowpainting #pintadoamano #decoracion #posca #windowmural #kfc`, /*5*/
  `#storytime #galaxytabs10FE #decoracion #tablet #digitalillustration #pintadoamano`, /*6*/
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

export const bneumeister_art_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bneumeister_art_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bneumeister_art_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bneumeister_art_array_of_posts = [
  ...bneumeister_art_images,
  ...bneumeister_art_videos
];
