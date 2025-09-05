import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'fresero';
const userId = 'f75c2f24-a51c-41e0-af87-4fa46c56b8cd';
const prefixUrl = 'https://dominicnikolai.github.io/project-309/assets/fresero/';
const followers = 172_720;
const followed = 89;
const profileDescription = '🍓';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Asi se pizca la caneria en California 🇺🇸🧑‍🌾🍓#campesino #ElCampesino #sueñoamericano #immigrantlife #creatorsearchinsights`, /*1*/
  `Nunca en mi vida me he sentido tanto asi 🥺😱🧑‍🌾🇺🇸🍓 #ElCampesino #sueñoamericano #campesino #california #fresa`, /*2*/
  `El conteo de las cajas es asi 🍓🧑‍🌾🇺🇸 #ElCampesino #sueñoamericano #campesino #california #fresa`, /*3*/
  `Trabajando en la pizca de fresa por hora 🇺🇸🧑‍🌾🍓 #ElCampesino #campesino #sueñoamericano #california #fresa`, /*4*/
  `Como empacar los básquet pequeños de fresa 🧑‍🌾🍓🇺🇸 #ElCampesino #SueñoAmericano #campesino #california #fresa`, /*5*/
  `Encontre una fresa en forma de una rosa 🌹🍓🇺🇸🧑‍🌾 #campesino #ElCampesino #sueñoamericano #california #creatorsearchinsights`, /*6*/
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

export const fresero_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const fresero_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const fresero_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const fresero_array_of_posts = [
  ...fresero_images,
  ...fresero_videos
];
