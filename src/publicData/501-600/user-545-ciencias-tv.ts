import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ciencias_tv';
const userId = '';
const prefixUrl = '';
const followers = 463_832;
const followed = 234;
const profileDescription = `Scienziato`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#triangle`, /*1*/
  `Torque y Momento Angular 🎥 Walter Lewin #Física #Mecánica #Torque #MomentoAngular #Matemáticas #Rotaciones #Grupos`, /*2*/
  `Hyperbolic Space
Poincaré Disk

#Mathematics #Geometry
#NonEuclidianGeometry #HyperbolicGeometry #PoincareDisk`, /*3*/
  `Curva de transformaciones que inicia en f(z)=z y termina en en f(z)=-1/z #Matemáticas #VariableCompleja #CurvaDeTransformaciones #Transformación #Compleja`, /*4*/
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

export const ciencias_tv_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ciencias_tv_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ciencias_tv_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ciencias_tv_array_of_posts = [
  ...ciencias_tv_images,
  ...ciencias_tv_videos
];
