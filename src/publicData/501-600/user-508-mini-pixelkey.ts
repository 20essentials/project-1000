import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mini_pixelkey';
const userId = '1e6eabed-c47d-48f0-84c4-a518fe47e967';
const prefixUrl = 'https://dominicnikolai.github.io/project-363/assets/mini-pixelkey/';
const followers = 89_232;
const followed = 50;
const profileDescription = `📸| Las mejores mini cámaras`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#CámaraRetro #FotografíaVintage #MiniCámara #EstiloRetro #LlaverosPersonalizados #AccesoriosDeModa #RetroStyle #GadgetsCool #NostalgiaVibes #PhotographyLover #EstiloDeVida #TecnologíaRetro #IdeasDeRegalo #RegalosÚnicos #VintageVibes #RetroGadgets #FotografíaCreativa #AccesoriosDeBolsillo #LlaverosOriginales #FotografíaMóvil #EstiloVintage #AccesoriosRetro #TecnologíaDeBolsillo #RetroLover #vintagelifestyle`, /*1*/
  `#camara #minicamara #fotografia #photography #photographers #llaveros`, /*2*/
  `#camara #minicamara #fotografia #photography #photographers #llaveros`, /*3*/
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

export const mini_pixelkey_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mini_pixelkey_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mini_pixelkey_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mini_pixelkey_array_of_posts = [
  ...mini_pixelkey_images,
  ...mini_pixelkey_videos
];
