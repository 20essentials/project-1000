import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'chimera_studioss';
const userId = '';
const prefixUrl = '';
const followers = 328_886;
const followed = 50;
const profileDescription = `Uno spazio per dare forma e voce alle tue idee e ai tuoi sogni`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Si, ma nulla di serio…. #lavoro #video #film #casadiproduzione #produzionimilano`, /*1*/
  `Il risultato? Un video POV che sembrava uscito da un film e oggi vi raccontiamo come abbiamo fatto a realizzarlo!`, /*2*/
  `thesetup #theshot #result #backstageshot #behindthescenes #thesetupvstheshot #videoclip`, /*3*/
  `#Imola #formula1 #f1 #chimerastudio #behindthescenes #videomaker #ferrari #redbull`, /*4*/
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

export const chimera_studioss_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const chimera_studioss_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const chimera_studioss_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const chimera_studioss_array_of_posts = [
  ...chimera_studioss_images,
  ...chimera_studioss_videos
];
