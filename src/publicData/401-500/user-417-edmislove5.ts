import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'edmislove5';
const userId = '0b852257-604a-4ef3-945b-e10a9c4d0b2a';
const prefixUrl = 'https://dominicnikolai.github.io/project-351/assets/edmislove5/';
const followers = 445_832;
const followed = 595;
const profileDescription = `EDM is love`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#rave #reels #edm #parati #dj #foryou #fiesta #explorar #techno #raver #housemusic #festival #electronicmusic #shuffle #tomorrowland #techhouse #technomusic`, /*1*/
  `#rave #reels #edm #parati #dj #foryou #fiesta #explorar #techno #raver #housemusic #festival #electronicmusic #shuffle #tomorrowland #techhouse #technomusic`, /*2*/
  `#rave #reels #edm #parati #dj #foryou #fiesta #explorar #techno #raver #housemusic #festival #electronicmusic #shuffle #tomorrowland #techhouse #technomusic`, /*3*/
  `El legendario DJ y productor Steve Aoki fue el gran protagonista del fin de semana de inauguración de Marquee New York, uno de los clubes más icónicos de la ciudad que reabre sus puertas tras una importante renovación. Con su estilo explosivo y su energía característica, Aoki encendió al público neoyorquino con un set cargado de intensidad y momentos virales, incluyendo su clásico ritual de lanzar pasteles a los fans. La presencia de Aoki en el Grand Opening Weekend refuerza la ambición de Marquee NY de consolidarse como un referente internacional de la música electrónica. La reapertura no solo marcó el regreso de un espacio emblemático en la vida nocturna de Nueva York, sino que también confirmó su apuesta por atraer a los nombres más importantes de la escena global.`, /*4*/
  `#rave #reels #edm #parati #dj #foryou #fiesta #explorar #techno #raver #housemusic #festival #electronicmusic #shuffle #tomorrowland #techhouse #technomusic`, /*5*/
  `#rave #reels #edm #parati #dj #foryou #fiesta #explorar #techno #raver #housemusic #festival #electronicmusic #shuffle #tomorrowland #techhouse #technomusic`, /*6*/
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

export const edmislove5_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const edmislove5_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const edmislove5_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const edmislove5_array_of_posts = [
  ...edmislove5_images,
  ...edmislove5_videos
];
