import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'macweb';
const userId = '';
const prefixUrl = '';
const followers = 10_832;
const followed = 132;
const profileDescription = `Diseñamos sitios web modernos 💰`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Queres ver que tiene una tienda online de 1200usd? 🧐 Aca te mostramos un sitio web de belleza y cuidado personal 🤩 Si queres aprender a hacer paginas web de este estilo tenes en el LINK de nuestro perfil🙌🏻 un curso de WordPress‼️ #wordpress #paginaweb #paginasweb #sitioweb #desarrollador`, /*1*/
  `#paginaweb #paginasweb`, /*2*/
  `#slider #efectosweb #transformatuweb #diseñowordpress #paginawordpress`, /*3*/
  `#wordpress #diseñowordpress #diseñoweb #designweb #diseñadorweb #ingresosextra #ᴛʀᴀʙᴀᴊᴏᴅᴇsᴅᴇᴄᴀsᴀ`, /*4*/
  `#paginaweb #wordpress #diseñoweb #sitioweb #elementor`, /*5*/
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

export const macweb_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const macweb_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const macweb_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const macweb_array_of_posts = [
  ...macweb_images,
  ...macweb_videos
];
