import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'olionovaro';
const userId = '02737fc9-5249-4053-8edc-3d1ac8b8b079';
const prefixUrl = 'https://dominicnikolai.github.io/project-335/assets/olionovaro/';
const followers = 98_720;
const followed = 269;
const profileDescription = `Since 1860, a tradition handed down from father to son.`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` #frantoio #extravergine #spremutoafreddo`, /*1*/
  `Le olive subiscono un doppio lavaggio: in una prima fase passano attraverso una vasca piena di acqua che viene fatta gorgogliare energicamente mediante immissione di getti di aria. Per evitare sprechi tale acqua viene continuamente filtrata e riutilizzata e sostituita solo ogni qualche ora. In una seconda fase (qui raffigurata) le olive vengono sciacquate con un getto di acqua sempre fresca. Il nastro a tapparelle che si vede sullo sfondo trasferisce le olive nel frantoio.`, /*2*/
  `Anticamente le olive appena raccolte venivano passate “passate” ovvero ripulite dalle foglie tramite l’antica “chitarra” ora invece una defogliatrice elettrica ne permette la separazione in modo veloce tramite un getto d’aria.`, /*3*/
  `#olionovaro #olioextraverginedioliva #extravirginoliveoil #organic #biologico #madeinitaly #food #foodporn #news #eccellenzeitaliane`, /*4*/
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

export const olionovaro_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const olionovaro_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const olionovaro_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const olionovaro_array_of_posts = [
  ...olionovaro_images,
  ...olionovaro_videos
];
