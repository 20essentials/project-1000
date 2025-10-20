import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gdiaz2022';
const userId = 'b66bd60f-fe1e-4515-9e23-9240c3bd24d9';
const prefixUrl = 'https://dominicnikolai.github.io/project-367/assets/gdiaz2022/';
const followers = 18_832;
const followed = 112;
const profileDescription = `Hablemos de emprender!`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Un ventilador holográfico se utiliza para visualizar productos industriales en 360°, permitiendo una presentación tridimensional y dinámica de los productos.
Esto es útil en marketing, exhibiciones, y capacitación, ya que ofrece una vista detallada y completa de los productos desde todos los ángulos, mejorando la comprensión y el atractivo visual. #novedad #Tecnología #led @lidercom__ www.lidercom.net.ar`, /*1*/
  `Fíjate como te relaja ver estás imágenes del streaming del Océano.`, /*2*/
  `Las granjas de telefonía son instalaciones donde se concentran decenas o incluso cientos de líneas telefónicas y dispositivos para realizar llamadas de forma masiva.
En muchos casos se utilizan con fines ilegales`, /*3*/
  `as cámaras ocultas no son tan ocultas.
Felino activado 🤦`, /*4*/
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

export const gdiaz2022_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gdiaz2022_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gdiaz2022_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gdiaz2022_array_of_posts = [
  ...gdiaz2022_images,
  ...gdiaz2022_videos
];
