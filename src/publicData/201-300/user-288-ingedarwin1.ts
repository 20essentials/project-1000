import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ingedarwin1';
const userId = '';
const prefixUrl = '';
const followers = 899_729;
const followed = 146;
const profileDescription = `Bienvenidos amigazos, es momento de aprender 🤓`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 4;
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
  `eorema de Pitágoras 🤓✌️ Pitágoras fue un filósofo y matemático griego considerado el primer matemático puro. El teorema estable que en un triángulo rectángulo "el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos". Recordemos que un triángulo rectángulo se caracteriza porque tiene un ángulo recto (90°) formado por los catetos, en cambio la hipotenusa es el lado de mayor longitud y opuesto al ángulo recto. Si quieres calcular la hipotenusa se debe SUMAR los cuadrados de los catetos; pero si quieres calcular un cateto, se debe RESTAR el cuadrado de la hipotenusa menos el cuadrado del otro cateto. No te confundas, para hallar la hipotenusa se suma y para hallar los catetos se resta.`, /*1*/
  ` #reels #ingedarwin #matematica`, /*2*/
  `#reels #ingedarwin #matematica`, /*3*/
  `Dentro de las aplicaciones de la integral definida se puede mencionar el cálculo de área de regiones y volumen de sólidos; en el siguiente ejemplo se observa el cálculo del área de un círculo, para ello se trabajó con la integral doble y las variables (radio y ángulo), en este caso el radio es 3 unidades y el ángulo es 2pi. El análisis geométrico es importante porque permite comprender de que trata la resolución de integrales definidas. 😀`, /*4*/
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

export const ingedarwin1_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ingedarwin1_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ingedarwin1_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const ingedarwin1_array_of_posts = [
  ...ingedarwin1_images,
  ...ingedarwin1_videos
];
