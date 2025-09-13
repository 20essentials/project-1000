import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'littlestory';
const userId = '';
const prefixUrl = '';
const followers = 358_720;
const followed = 50;
const profileDescription = `📽️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Immagina essere un attore in una serie tv nel 2010 e i tuoi avversari sono loro.`, /*1*/
  `Esistono tantissime repliche o copie della Monna Lisa, ma questa, presente al Prado fin dalla sua inaugurazione e proveniente dalle Collezioni Reali, oltre che essere tra le più antiche che si conoscano è anche una delle più fedeli. Fu dipinta nello stesso periodo e nello stesso laboratorio dell’originale, da un allievo di Leonardo Da Vinci e si dice che impressionò anche Leonardo in persona.`, /*2*/
  `Il monumentale progetto dell’ “Elefante Trionfale” non è mai stato realizzato. Sarebbe stato un’ edificio a forma di elefante alto cinque piani e sarebbe dovuto essere eretto sugli Champs-Élysées. Avrebbe dovuto avere una sala da ballo abbastanza grande da ospitare un’orchestra e delle orecchie che fungevano da megafoni giganti. 50 anni dopo, al suo posto fu costruito l’Arco di Trionfo.`, /*3*/
  `La stesura originale de “I fratelli Karamazov” scritta a mano da Dostoevskij nel 1880.`, /*4*/
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

export const littlestory_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const littlestory_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const littlestory_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const littlestory_array_of_posts = [
  ...littlestory_images,
  ...littlestory_videos
];
