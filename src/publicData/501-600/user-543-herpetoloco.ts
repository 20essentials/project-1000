import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'herpetoloco';
const userId = '';
const prefixUrl = '';
const followers = 65_832;
const followed = 50;
const profileDescription = `🐍 Reptiles & 🌍 Viajes`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `⚪️ ENCONTRAMOS LA PERLA BLANCA!

#serpientes #reptiles #viajar #filipinas #animalessalvajes #vidasalvaje #reels`, /*1*/
  `#borneo #borneowildlife #herpingborneo #herping #reptiles #serpientes #viaje #viajar #wildlands #animalessalvajes #herpetologia`, /*2*/
  `#serpientes #naturaleza #animales #vibora #animalessalvajes #herpetologia #herping #vipera`, /*3*/
  `Algunas especies son extremadamente adaptables a las ciudades y la vida urbana como es el caso de este lagarto de jardín ( Calotes versicolor ) que podemos verlo en gran parte de ciudades del sudeste asiático y debido al comercio de bienes y plantas a través de los puertos a llegado a la ciudad de Kota Kinabalu en la Isla de Borneo donde no son originarios, ahora se pueden ver en casi cada árbol y parque de la ciudad.
`, /*4*/
  `Buscando serpientes con la policía en la India #story #anecdota #reptiles #zoologia #herpetologia #animales #serpientes #reels`, /*5*/
  `El mejor día del viaje! Vimos 5 especies en un mismo sitio (la quinta fue una serpiente jarretera de cuello negro que no grabe). La cascabel negra de Arizona era la serpiente que tenía más ganas de ver en el viaje, después del monstruo de Gila obviamente! #serpiente #reptiles #animales #animalessalvajes #vidasalvaje #herping #gilamonster #herping #herpingusa #arizona #heloderma #reels #viajes #viajar`, /*6*/
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

export const herpetoloco_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const herpetoloco_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const herpetoloco_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const herpetoloco_array_of_posts = [
  ...herpetoloco_images,
  ...herpetoloco_videos
];
