import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'raulmoran';
const userId = '';
const prefixUrl = '';
const followers = 78_720;
const followed = 50;
const profileDescription = 'Creador de experiencias visuales únicas';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Óleo 100x100 cm #pintura #arte #art #instagram #instaart #painting #paint #dibujo #artist #spain #artista #oleo #artwork #drawing #arteconteporaneo #artgallery #color #acuarela #ilustracion #oilpainting #draw #cultura #watercolor #pinturas #artistoninstagram #oilcanvas #realismo #oleos #figurativepainting`, /*1*/
  `Aquí estoy intentando dar vida a la espuma del mar. #pintura #arte #art #instagram #instaart #painting #paint #dibujo ##artist #spain #artista #oleo #artwork #drawing #arteconteporaneo #artgallery #color #acuarela #ilustracion #oilpainting #draw #cultura #watercolor #pinturas #artistoninstagram #oilcanvas #realismo #oleos #figurativepainting`, /*2*/
  `New York Pintar sus edificios es hipnótico, maravilloso . Óleo 100x65 cm #pintura #arte #art #instagram #instaart #painting #paint #dibujo ##artist #spain #artista #oleo #artwork #drawing #arteconteporaneo #artgallery #color #acuarela #ilustracion #oilpainting #draw #cultura #watercolor #pinturas #artistoninstagram #oilcanvas #realismo #oleos #figurativepainting`, /*3*/
  `Pintar el mar, bonita obsesión . Luces en el mar II Óleo 70x50 cm #pintura #arte #art #instagram #instaart #painting #paint #dibujo ##artist #spain #artista #oleo #artwork #drawing #arteconteporaneo #artgallery #color #acuarela #ilustracion #oilpainting #draw #cultura #watercolor #pinturas #artistoninstagram #oilcanvas #realismo #oleos #figurativepainting`, /*4*/
  `Pilistras óleo 116x79 cm. #pintura #arte #art #instagram #instaart #artist #painting #paint #dibujo #artist #artist #spain #artista #oleo #artwork #drawing #arteconteporaneo #artgallery #color #acuarela #ilustracion #oilpainting #draw #cultura #watercolor #pinturas #artistoninstagram #oilcanvas #realismo #oleos #figurativepainting #arte`, /*5*/
  `Pintar el agua de una piscina también es bello Óleo 116x89 cm #pintura #arte #art #instagram #instaart #painting #paint #dibujo #artist #spain #artista #oleo #artwork #drawing #arteconteporaneo #artgallery #color #acuarela #ilustracion #oilpainting #draw #cultura #watercolor #pinturas #artistoninstagram #oilcanvas #realismo #oleos #figurativepainting`, /*6*/
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

export const raulmoran_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const raulmoran_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const raulmoran_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const raulmoran_array_of_posts = [
  ...raulmoran_images,
  ...raulmoran_videos
];
