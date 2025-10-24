import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'juanpablorubio';
const userId = '';
const prefixUrl = '';
const followers = 73_832;
const followed = 648;
const profileDescription = `🏡Persiguiendo el sueño Colombiano 🇨🇴`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hasta tomas en movimiento se llevó 🫨🫨

Ella pidió una foto y se llevó todo un edit como los que hago con los carros 🚗
#carros #cargirl #carmemes #rollers #edit #fyp #caredit`, /*1*/
  `Finquita+perritos+amor de la vida = el sueño completo #sueñocolombiano #sueñoamericano #colombiano #fincacolombiana #colombianosenelexterior`, /*2*/
  `Con todo el cariño y el ánimo de inspirarlos a cumplir sus sueños, quiero compartir con ustedes la nueva Nave que llegó a mi vida. La moto de mis sueños , la que me tenía loco. Gracias a Dios y gloria a él por permitirme cumplir este gran sueño. Gracias @estefanyrcoral por esta conmigo en los mejores momentos te amooo por todooo #nuevamoto #recibiendomoto #cfmoto #cfmoto250 #sueñocumplido`, /*3*/
  `De tanto ver tiktoks de skate volví a montar skate después de 6 años de no practicar, me encantooo #skate #skater #skateboard #volverskate #staketricks`, /*4*/
  `Prendan el volumen para escuchar este diseño sonó hecho desde 0 por mi ¿quieren saber de dónde sacó los sonidos? #diseñosonoro #produccionadiovisual #sonidos #escenariosonoro`, /*5*/
  `Una maleta de Golf 🏌️con ruedas fue mi solución al dolor de espalda ¿cómo guardar y transportar trípodes? #filmmaker #maletaconruedas #dolordeespalda #solucionesprácticas`, /*6*/
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

export const juanpablorubio_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const juanpablorubio_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const juanpablorubio_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const juanpablorubio_array_of_posts = [
  ...juanpablorubio_images,
  ...juanpablorubio_videos
];
