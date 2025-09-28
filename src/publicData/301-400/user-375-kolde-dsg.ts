import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kolde_dsg';
const userId = '';
const prefixUrl = '';
const followers = 38_720;
const followed = 54;
const profileDescription = ` Diseñadora certificada `;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#graphicdesign #adobe #adobeillustrator #creativeprocess #designinspiration #diseñográfico #branding #reto #3/30
#tipdiario`, /*1*/
  `#DiseñoGráfico #CartelPublicitario #Frappelatte #PublicidadCreativa #DiseñoDeCarteles #BrandingVisual #MarketingVisual #CreatividadSinLímites #DiseñoParaRedes #DiseñoPublicitario #PublicidadEnRedes`, /*2*/
  `#vlog #vlogdiseñografico #diseñadoragrafica #vlogdiseño #undíaconmigo #adobe #reuniones #universidad #desconexión`, /*3*/
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

export const kolde_dsg_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kolde_dsg_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kolde_dsg_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kolde_dsg_array_of_posts = [
  ...kolde_dsg_images,
  ...kolde_dsg_videos
];
