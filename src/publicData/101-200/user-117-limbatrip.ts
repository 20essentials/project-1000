import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'limbatrip';
const userId = '';
const prefixUrl = '';
const followers = 1_200_720;
const followed = 50;
const profileDescription = 'Hello';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `今日の登る人 今日のは人を大きめに描くことでキモさをブーストしました。 あと、人をフレームアウトさせることなく、最初の地点に戻して無限ループさせてるのもポイントです。 #ろくろ #potterywheel #art #アート #paint #pottery #design`, /*1*/
  `Today's Kalimba looping #kalimba #chromatickalimba #カリンバ #カリンバ奏者 #クロマチックカリンバ #loop #ditto #multistomp #oc5`, /*2*/
  `今日のエレキカリンバ #kalimba #electrickalimba #bass #electricbass #カリンバ #カリンバ奏者 #whammy5 #whammy`, /*3*/
  `Spin Art with WhiteBoard and Potter’s Wheel. 今日のろくろ遊び。ろくろの上にホワイトボードをのせてペンで遊んでいます。 使用しているマーカーは、パイロットコーポレーションの「ボードマスター極太」です。 I usually use “ボードマスター極太“(WhiteBoard Marker of PILOT Corporation japan). #ろくろ #轆轤 #potterswheel #potterywheel #pottery #wheel #art #アート #paint #painting`, /*4*/
  `食べ歩き回転おじさん #ろくろ #potterywheel #art #アート #paint #pottery #design`, /*5*/
  `これは全部カリンバの音です。 コーヒールンバ #moliendocafe #コーヒールンバ #kalimba #chromatictreblekalimba #chromatickalimba #hughtracey #カリンバ #カリンバ奏者 #クロマチックカリンバ #cover #pistachio`, /*6*/
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

export const limbatrip_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const limbatrip_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const limbatrip_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const limbatrip_array_of_posts = [
  ...limbatrip_images,
  ...limbatrip_videos
];
