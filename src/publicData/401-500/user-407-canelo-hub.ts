import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'canelo_hub';
const userId = '';
const prefixUrl = '';
const followers = 604_832;
const followed = 50;
const profileDescription = `🐇`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#canelo #coco #reels #profe #contador #maestro #profecanelo #impuestos #evadir #tutorial #clase #humor #fyp #funny #viral #conejo #mascotas #pets #bunny #rabbit`, /*1*/
  `#canelo #conejo #conejito #famoso #tutorial #humor #comedia #bunny #funny #pets #comedy #viral #fama #bonito #trend #fyp #parati #foryou #fypage #fypシ #feed #insta #reels`, /*2*/
  `#canelo #conejo #escuela #fracaso #uni #amigos #social #humor #comedia #hack #tutorial #bunny #funny #pets #comedy #puñetas #ceo #fyp #parati #foryou #feed #fypシ #viral #reels #insta`, /*3*/
  `#canelo #conejo #mascota #cute #ex #ruptura #superar #pareja #comedia #humor #bunny #funny #rabbit #pets #fyp #parati #foryou #fypシ #feed #video #viral #insta #reels`, /*4*/
  `#canelo #conejo #mascota #tutorial #consejo #box #netflix #pelea #crawford #comedia #humor #libre #enemigos #fyp #parati #foryou #feed #fypシ #reels #insta @canelo`, /*5*/
  `#canelo #conejo #mascota #exconvicto #cárcel #tutorial #cristianos #humor #comedia #bunny #funny #rabbit #pet #fyp #parati #foryou #fypシ #feed #reels #insta #ig #video #viral`, /*6*/
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

export const canelo_hub_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const canelo_hub_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const canelo_hub_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const canelo_hub_array_of_posts = [
  ...canelo_hub_images,
  ...canelo_hub_videos
];
