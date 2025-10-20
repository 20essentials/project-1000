import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'digitalarabel';
const userId = '5bc52298-addc-4da0-893c-e5cda88a99cd';
const prefixUrl = 'https://dominicnikolai.github.io/project-366/assets/digitalarabel/';
const followers = 29_832;
const followed = 179;
const profileDescription = ` hago videos sobre arte`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#terror #horror #miedo #halloween #arte #artista #artistas #creativo #creativos #creacion #tecnica #pinturas #esculturas #pelicula #musica #art #artist #creativity #creator #reel #creador`, /*1*/
  `#terror`, /*2*/
  `#terror #horror #miedo #tristesa #halloween #perturbador #arte #artista #artistas #creativo #creativos #creacion #tecnica #pinturas #esculturas #pelicula #musica #art #artist #creativity #creator #reel #creador`, /*3*/
  `#miedo #terror #horror #perturbador #halloween #arte #artista #artistas #creativo #creativos #creacion #tecnica #pinturas #esculturas #pelicula #musica #art #artist #creativity #creator #reel #creador`, /*4*/
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

export const digitalarabel_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const digitalarabel_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const digitalarabel_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const digitalarabel_array_of_posts = [
  ...digitalarabel_images,
  ...digitalarabel_videos
];
