import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'alvalayu';
const userId = '';
const prefixUrl = '';
const followers = 50_832;
const followed = 517;
const profileDescription = `Segovia`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#desierto #sahara #cobra #najahaje #viral #rescates #vibora #efectostrampa #viajes`, /*1*/
  `Rescamos un ejemplar precioso de culebra bastarda!
¿qué opináis sobre estas estructuras?

#natgeo #rescate #sosfauna #balsas #animales
#naturaleza #españa #biodiversidad`, /*2*/
  `Rescatamos más de 30 bichitos☺️¿cual te ha gustado más?  `, /*3*/
  `Los ojos naranjas nunca mienten… ¿Habías visto alguna vez a este animal? #animales #wildlife #aves #nature #naturaleza #birds #buho #owl #biology #biologia`, /*4*/
  `#africa #rescate #fauna #animales #pozo #aljibe #marruecos #morocco #desierto #sahara`, /*5*/
  `#rescates #fauna #naturaleza #animales #desierto #marruecos #natgeo #africa`, /*6*/
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

export const alvalayu_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const alvalayu_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const alvalayu_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const alvalayu_array_of_posts = [
  ...alvalayu_images,
  ...alvalayu_videos
];
