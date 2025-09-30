import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'legalbet_esp';
const userId = '3cdd652c-2076-4d4e-9a71-351d196f06aa';
const prefixUrl = 'https://dominicnikolai.github.io/project-345/assets/legalbet-esp/';
const followers = 38_323;
const followed = 749;
const profileDescription = `Portal de #apuestasdeportivas y pronósticos`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#betting #parley #parlay #parleyganador #fórmula1 #formula1 #f1 #fernandoalonso #alonso #renault #v10 #automovilismo`, /*1*/
  `#sinner #janniksinner #tenis #sabalenka #arynasabalenka #wimbledon #tennis #atp #wta`, /*2*/
  `#memes #memeslatinos #reelsi̇nstagram #reels #apuestas #apuestasdeportivas #apuestasonline #baloncesto #basketball #nba #basquet #deporte #betting #parley #parlay #cuotas #pronóstico #looneytunes #tinytoons #spacejam`, /*3*/
  `Fernando Alonso's 2005 world title-winning Renault R25
`, /*4*/
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

export const legalbet_esp_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const legalbet_esp_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const legalbet_esp_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const legalbet_esp_array_of_posts = [
  ...legalbet_esp_images,
  ...legalbet_esp_videos
];
