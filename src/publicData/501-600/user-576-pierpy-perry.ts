import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pierpy_perry';
const userId = 'd0a371e7-b362-4a7e-a2cc-4bd2d327a46c';
const prefixUrl = 'https://dominicnikolai.github.io/project-373/assets/pierpy-perry/';
const followers = 189_832;
const followed = 54;
const profileDescription = `🎓 Laureato all'Università della Vita`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Buona festa dei lavoratori a tutti ⚒️
#lavoro #italia #festadeilavoratori #lavorare #tasse #pensione #contributi #inps #fisco #1maggio #lavoratori #pensione #inps #disoccupazione #redditodicittadinanza #naspi`, /*1*/
  `Se in azienda ti dicono "siamo una famiglia", allora io sono orfano 😅 #lavoro #lavorare #colleghi #capo #italia`, /*2*/
  `Buon lunedì a chi lavora 😁 Parte 2 #lavoro #promozione #stipendio #guadagno #lavorare`, /*3*/
  `Ammetto che per qualcuna ho preso ispirazione dai vostri commenti 🤗 #lavoro #azienda #colleghi #lavorare #naspi`, /*4*/
  `Ho sentito cose che voi umani... 🙉 #lavoro #capo #dimissioni #naspi #lavorare`, /*5*/
  `Si ricomincia 😔 #lavoro #ferie #malattia #licenziamento #naspi`, /*6*/
  `In quanti si licenzieranno dopo le ferie? 😆 #ferie #lavoro #italia #lavorare #disoccupazione #naspi #colleghi`, /*7*/
  ` #scuola #itis #grafica #turistico #moda`, /*8*/
  `Ci vorrebbe una bella riforma dell'istruzione 😔
#scuola #scuolaitaliana #educazionefisica #educazionecivica #materie #liceo #liceoclassico #liceoscientifico #liceolinguistico #insegnantiditiktok #insegnante #insegnanti #insegnamento #educare #istruzione #maestra #prof #professore #professoressa`, /*9*/ 
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

export const pierpy_perry_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pierpy_perry_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pierpy_perry_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pierpy_perry_array_of_posts = [
  ...pierpy_perry_images,
  ...pierpy_perry_videos
];
