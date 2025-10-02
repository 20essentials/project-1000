import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'uandersonx';
const userId = '';
const prefixUrl = '';
const followers = 841_832;
const followed = 161;
const profileDescription = `Descobri`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Quem é desse tempo vai ter a memória desbloqueada em 3, 2, 1… O nome do joguinho é Bounce Tales`, /*1*/
  `NOKIA (xenon) vs IPHONE (led)`, /*2*/
  `Voltando ao passado com o Sony Xperia SP lançado em 2013 com uma faixa transparente na área inferior. Quem lembra?`, /*3*/
  `#galaxy`, /*4*/
  `Lembranças do SMS`, /*5*/
  `Space Impact II: quem lembra?`, /*6*/
  `Nokia N73 zerado à venda! R$399,00`, /*7*/
  `Sony Ericsson Satio U1`, /*8*/
  `Foto com o Nokia E6-00 (2011) `, /*9*/ 
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

export const uandersonx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const uandersonx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const uandersonx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const uandersonx_array_of_posts = [
  ...uandersonx_images,
  ...uandersonx_videos
];
