import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'novemilagiri';
const userId = 'edcefd45-551f-4939-b00f-3ca8d5d7eef4';
const prefixUrl = 'https://dominicnikolai.github.io/project-371/assets/9milagiri/';
const followers = 19_800;
const followed = 181;
const profileDescription = `Supercar, Potenza e Adrenalina`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#supercar #car #motori #cavalli #macchine #auto #velocità #potenza #moto #yamaha #honda #motogp #lusso #soldi #money #obiettivo #sogno #ricchezza #9milagiri`, /*1*/
  `#supercar #car #motori #cavalli #macchine #auto #velocità #potenza #audi #bmw #mercedes #porsche #lambo #bro #carguy #lusso #soldi #money #obiettivo #sogno #ricchezza #9milagiri`, /*2*/
  `#supercar #car #motori #cavalli #macchine #auto #velocità #potenza #lusso #soldi #money #obiettivo #sogno #ricchezza #9milagiri #monaco #principatodimonaco`, /*3*/
  `#supercar #car #motori #cavalli #macchine #auto #velocità #potenza #lusso #soldi #money #obiettivo #sogno #ricchezza #9milagiri`, /*4*/
  `#supercar #car #motori #cavalli #macchine #auto #velocità #potenza #lusso #soldi #money #obiettivo #sogno #ricchezza #9milagiri #monza #ferraricorseclienti #scuderiaferrari #spmonza #rossocorsa`, /*5*/
  `#supercar #car #motori #cavalli #macchine #auto #velocità #potenza #lusso #soldi #money #obiettivo #sogno #ricchezza #9milagiri #vr46 #thedoctor46 #46 #vale46`, /*6*/
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

export const novemilagiri_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const novemilagiri_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const novemilagiri_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const novemilagiri_array_of_posts = [
  ...novemilagiri_images,
  ...novemilagiri_videos
];
