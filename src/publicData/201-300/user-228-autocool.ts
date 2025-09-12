import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'autocool';
const userId = '8ff8432a-649c-4d7a-897e-646315ade959';
const prefixUrl = 'https://dominicnikolai.github.io/project-321/assets/autocool/';
const followers = 929_720;
const followed = 322;
const profileDescription = `🚗`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 10;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#lowestlowrider #loweststancecar #lowestbeetle #skylineautocollision #vwbeetle #carshow #bngrz #superbeetle #atlanticcity #loweststance`, /*1*/
  `GTA Mod`, /*2*/
  `Abbiamo collaborato con la produzione di Tommy Cash, in pochissimi giorni, per la logistica, blocchi stradali e supporto operativo nel girare il suo nuovo videoclip a Offanengo. Un lavoro intenso, veloce e super coordinato e ora ve ne mostriamo il backstage. 🙏 Un grazie gigante ad: 🚗 Andrea Marazzi per la macchina più iconica del progetto; 🛠️ Tutto il team Phantom, instancabili e sempre sul pezzo; 🏛️ E soprattutto al Comune di Offanengo e Daniel Bressan che hanno creduto in questa visione e ci ha supportati alla grande! E ora… godetevi il dietro le quinte di un momento assurdo.`, /*3*/
  `They said it was a drive-in. We misunderstood. Or maybe we understood too well.`, /*4*/
  `🇮🇹 Stabile abbastanza? 🇬🇧 Stable enough?`, /*5*/
  `This car has one pedal`, /*6*/
  `Relax`, /*7*/
  `The new Tesla 2026 Model F #tesla`, /*8*/
  `🥇`, /*9*/ 
  `#vintagespeed #olskoolrodz #hotrods #hotrod #hotrodlife #hotrodding #hamb #hotrodder #GenerationOldSchoOl #woodwarddreamcruise #woodwarddreamcruise2025 #wdc2025 #wdc25 #shoppingcart #themehotrod #lawyergarage`, /*10*/
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

export const autocool_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const autocool_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const autocool_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const autocool_array_of_posts = [
  ...autocool_images,
  ...autocool_videos
];
