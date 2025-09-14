import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'anasierrarch';
const userId = '';
const prefixUrl = '';
const followers = 96_720;
const followed = 322;
const profileDescription = `Arquitecta`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 2;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Design`, /*1*/
  `#autocad #photoshop #dwg #tutorial #archdaily #arquitectura
#archdaily #arch #arquitectura #diseño #design #photoshop #art #illustration #planos #plan #paisajismo #maracaibo #maquetasdearquitectura`, /*2*/
  `Me imagino!!! Que conocías a Le Corbusier ✨🤔 Este arquitecto es uno de los más reconocidos en la historia de la arquitectura 📢 Y aquí te dejo sus 5 principios en la arquitectura👇🏽 1) La planta libre es importante y, para él, este nivel pertenecía al automóvil, razón por la que la vivienda se elevaba sobre pilotis. 2) La terraza-jardín se refiere al último piso. Como el terreno se encuentra ocupando un área natural, se hace necesario devolver el área verde en la terraza. 3)La ventana longitudinal es otro punto importante, ya que, al crearla, se liberan los muros exteriores. De ese modo, las ventanas pueden extenderse a todo lo ancho de la construcción, mejorando así la relación con el exterior. 4)Los pilotis se refieren a la estructura, que hace posible que la casa esté elevada del nivel basal. De esta manera, se logra aprovechar las superficies útiles, liberando a la planta de condicionantes estructurales. 5) Por último, la fachada libre complementa a las ventanas longitudinales. Los pilares se retrasan con respecto a la fachada, para liberar a esta de su función estructural. Te gustan sus obras?👇🏽 • #arquitecturaydiseño #arquilovers #architecturelovers #arquitecture #arquitecturephotography #arquitecturelovers #arquitectos #arquitecturainterior #arquitecto #arquitecturaydiseño #archdaily #mexico

`, /*3*/
  `¿Conocías a Alberto Kalach?✨ Es un arquitecto mexicano, que crea a partir de recuperar la naturaleza, dándole un profundo respeto a lo que lo rodea.🤔 Es el fundador del Taller de Arquitectura X (estudio de arquitectura)✨ La inspiración y conceptualización de sus espacios proviene problemas sociales, dándole una perspectiva ecología; de la polarización y desigualdad, el clima, los recursos naturales, materiales y cada detalle de la geografía local🍃 Su frase es: " la ciudad es una gran obra de arquitectura " Yo amo todas estas obras y la estética mexicana moderna que tienen... y tú?👇🏽👇🏽 • • #arquitecturaydiseño #arquilovers #architecturelovers #arquitecture #arquitecturephotography #arquitecturelovers #arquitectos #arquitecturainterior #arquitecto #arquitecturaydiseño #archdaily #mexico`, /*4*/
  `Zaha Hadid fue una arquitecta iraquí ✨ con un estilo descontructuvista😌 Su portación principal a la arquitectura fue romper con los moldes y estereotipos establecidos, con formas geométricas complejas, con curvas y ángulos inesperados🙏🏽 Te gusta el estilo de Zaha Hadid? • #arquitecturaydiseño #arquilovers #architecturelovers #arquitecture #arquitecturephotography #arquitecturelovers #arquitectos #arquitecturainterior #arquitecto #arquitecturaydiseño #archdaily #zahahadid`, /*5*/
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

export const anasierrarch_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const anasierrarch_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const anasierrarch_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const anasierrarch_array_of_posts = [
  ...anasierrarch_images,
  ...anasierrarch_videos
];
