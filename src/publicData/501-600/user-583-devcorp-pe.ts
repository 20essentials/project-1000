import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'devcorp_pe';
const userId = '';
const prefixUrl = '';
const followers = 8_832;
const followed = 42;
const profileDescription = `Tu visión, nuestro código👨🏽‍💻`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `¿Qué necesitamos para crear una web? 🧑🏻‍💻 Desde el diseño hasta el despliegue, estas son las herramientas que nos salvan la vida cada vez que arrancamos un proyecto. 💻🔥 #devcorp #frontenddeveloper #backend #devlife #programacionweb`, /*1*/
  `Así quedó la nueva web de Sneak, la tienda para bebés que no quiere verse como todas. Rediseñamos la estructura, el estilo y experiencia. 🚀👨🏻‍💻 Cuéntanos..¿Qué tal te parecio? 🤔 #devcorp #webdesigner #diseñoweb #ecommerce #uxuidesigner`, /*2*/
  `Acompáñanos a crear una página web desde cero 👨🏻‍💻⚡ Esta vez, para un estudio de abogados que quiere llevar su presencia digital al siguiente nivel. 🚀

#devcorp #websites #abogados #webdesigner #diseñoweb
`, /*3*/
  `Esta es la 2da parte de todo nuestro proceso con Sneak 👨🏻‍💻, un proyecto que nos trajo aprendizajes y nos reta a seguir creando webs que marcan la diferencia. 🚀

#startup #emprendedores #webdesigner #devcorp #softwaredeveloper`, /*4*/
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

export const devcorp_pe_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const devcorp_pe_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const devcorp_pe_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const devcorp_pe_array_of_posts = [
  ...devcorp_pe_images,
  ...devcorp_pe_videos
];
