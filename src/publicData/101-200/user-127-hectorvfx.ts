import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hectorfvx';
const userId = '';
const prefixUrl = '';
const followers = 350_720;
const followed = 523;
const profileDescription = 'Artista CGI';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Así han hecho Expedition 33 😳 #expedition33 #cgi #modelado3d #animacion3d #houdini #unrealengine
`, /*1*/
  `El CGI de hace 20 años se ve mejor que el de ahora 😳 #cgi #vfx #efectosvisuales #animación3d #modelado3d #efectosespeciales`, /*2*/
  `Así han hecho el nuevo T-Rex de Jurassic World Rebirth 😳 #jurassicworld #jurassicworldrebirth #trex #cgi #vfx #animación3d #modelado3d`, /*3*/
  `Así revolucionó Jurassic Park el mundo del CGI para siempre 😳 #jurassicpark #jurassicworldrebirth #animacion3d #modelado3d #vfx #cgi`, /*4*/
  `Trabajo hiper realista con Blender mezclando simulaciones de fluidos y geometry nodes 😳 #blender3dart #blender3d #blender #modelado3d #animación3d #vfx #cgi`, /*5*/
  `Así se hizo el CGI de Minecraft 😳 #minecraft #minecraftpelicula #animacion3d #modelado3d #vfx #cgi`, /*6*/
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

export const hectorfvx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hectorfvx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hectorfvx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hectorfvx_array_of_posts = [
  ...hectorfvx_images,
  ...hectorfvx_videos
];
