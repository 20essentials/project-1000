import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gian_piccin';
const userId = '';
const prefixUrl = '';
const followers = 441_000;
const followed = 720;
const profileDescription = 'Faço mágica em lugares inusitados';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 20;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Eu juro que isso é normal #baralho #cardistry #cards #metro #reaction`, /*1*/
  `Pra quem você mandaria esse vídeo? #baralho #cardistry #cards #metro #reaction`, /*2*/
  `Se você cresceu nos anos 2000 você vai amar esse baralho #baralho #cardistry #cards #metro #reaction #nostalgia`, /*3*/
  `Eu adoro quando isso acontece #baralho #cardistry #cards #metro #reaction`, /*4*/
  `O BSOP é mesmo um lugar mágico 😅`, /*5*/
  `Tô fazendo o que vocês pediram #baralho #cardistry #cards #metro #reaction`, /*6*/
  `É incrível quando isso acontece #baralho #cardistry #cards #metro #reaction`, /*7*/
  `Duvido que você saiba #baralho #cardistry #cards #metro #reaction #pov`, /*8*/
  `Não dirijo que nem o Brad mas embaralho que nem ele #baralho #cardistry #cards #f1`, /*9*/ 
  `Tudo por causa de uma maçã #baralho #cardistry #cards #metro #reaction #pov`, /*10*/
  `Qual seria sua reação? #baralho #cardistry #cards #metro #reaction`, /*11*/
  `#cards #metro #reaction`, /*12*/
  `Como descobriram isso? #baralho #cardistry #cards #metro #reaction`, /*13*/
  `A felicidade é contagiante #baralho #cardistry #cards #metro #reaction #magica`, /*14*/
  `Eu juro que tô falando a verdade… #baralho #cardistry #metro #reaction`, /*15*/
  `Ativei o modo FOCADO #baralho #cardistry #cards #metro #reaction #skills`, /*16*/
  `Não vou conseguir superar isso #cardistry #baralho #cards #metro #reaction #magica #magic`, /*17*/
  `Isso foi absolute cinema #cardistry #baralho #cards #metro #reaction`, /*18*/
  `As vezes o básico é o suficiente #cardistry #baralho #cards #metro #reaction`, /*19*/
  `Por que eu faço isso? #cardistry #baralho #cards #metro #reaction #magic`, /*20*/
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

export const gian_piccin_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gian_piccin_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gian_piccin_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const gian_piccin_array_of_posts = [
  ...gian_piccin_images,
  ...gian_piccin_videos
];
