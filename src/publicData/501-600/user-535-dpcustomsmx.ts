import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'dpcustomsmx';
const userId = '54ab342b-4bc8-449a-9e15-bf04dfe6ec73';
const prefixUrl = 'https://dominicnikolai.github.io/project-367/assets/dpcustomsmx/';
const followers = 434_832;
const followed = 918;
const profileDescription = `Creado para ti, que buscas algo diferente 🙂‍↔️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Se logró entregarlos a tiempo 🙂‍↔️✨ Me gusta grabarles estos videos para que conozcan un poco más de todo el proceso que hay detrás de sus pedidos 🙌 Mándanos mensaje para cotizar un par 👩‍🎨`, /*1*/
  `Colección completa ¡YA DISPONIBLE!`, /*2*/
  `Qué lado te gustó más? Woody o Buzz 🤠👨‍🚀🚀`, /*3*/
  `#arte #activaciones #experiencia #arteenvivo`, /*4*/
  `Custom de La sirenita en unos`, /*5*/
  `#pregnancy #genderreveal #genderrevealideas #beisbol #baseball`, /*6*/
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

export const dpcustomsmx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const dpcustomsmx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const dpcustomsmx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const dpcustomsmx_array_of_posts = [
  ...dpcustomsmx_images,
  ...dpcustomsmx_videos
];
