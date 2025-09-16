import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'professorjuliolombaldo';
const userId = '';
const prefixUrl = '';
const followers = 7_298_323;
const followed = 508;
const profileDescription = `Professor PhD Matemátic`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#number #euler #math #eulernumber #limit #manim #animation`, /*1*/
  `Como se comportam e porque envolvem funções trigonométricas as representações de coordenadas esféricas em 3 dimensões.`, /*2*/
  `#math #manim #trigonometric #mathematics #matematica #calculo #calculus #animation #exponential`, /*3*/
  ` como entender e interpretar geometricamente onde estão e o que representam as funções trigonométricas hiperbólicas. a matemática é linda demais! #math #manim #animation #fy #trigonometric #mathematician #mathematics`, /*4*/
  `#math #nonlineartransformations #surprise #dragonball #vegeta #dragonballz #dragonballzfans #dragonballzkai #goku #linearalgebra #mathematics #trigonometry`, /*5*/
  `#math #manim #animation #curve #mathematics #parametric #icarus`, /*6*/
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

export const professorjuliolombaldo_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const professorjuliolombaldo_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const professorjuliolombaldo_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const professorjuliolombaldo_array_of_posts = [
  ...professorjuliolombaldo_images,
  ...professorjuliolombaldo_videos
];
