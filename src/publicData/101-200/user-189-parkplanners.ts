import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'park_planners';
const userId = '';
const prefixUrl = '';
const followers = 732_821;
const followed = 50;
const profileDescription = '🗺️ Experiencias VIP en parques y cruceros';
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `El mejor animatronic de Disney? Y el más caro! 😳 Está joya la encuentras en Avatar en la atracción de Na’vi River Journey en Animal Kingdom✨ #disney #disneyworld #orlando #disneyworldorlando #avatar #animalkindgom #disneyfan #disneytravel`, /*1*/
  `Art of animation, el preferido de los niños y niñas, peeero siento que todos tuvimos este sueño cuando éramos niños! O no? #artofanimation #disney #disneyworld #disneyhotel #hoteldisney`, /*2*/
  `¿Ustedes que dicen? Se quedan o prefieren otro? Somos agentes especializados en estos destinos y te ayudamos a encontrar la MEJOR opción para tus vacaciones! Económico, de lujo, todo incluido, LO QUE SEA!✨🙌🏼😍🥳 #disney #disneyworld #orlando #hotel #hoteldisney #disneyworld #hotel #barato #promo #hotelesdisney #disneytravel`, /*3*/
  `Halloween todo el año en Epic Universe!🤩 Dark Universe es la tierra de Monstruos Universal de los años 30’s en el nuevo parque de Universal Orlando, que con sus dos atracciones, restaurantes, tiendas, encuentros con personajes, y más, no importa di vas en Diciembre o Mayo, siempre sentirás un 31 de Octubre👻 💯Es mi Universo favorito del nuevo parque de Orlando Florida, y es mucho más disfrutable de noche que de día. Tiene mi atracción favorita de los 11 juegos de este parque y puedes pasar horas en este pueblito devastado por los experimentos de la Dra. Frankenstein. Super Nintendo World y el Mundo Màgico de Harry Potter se quedan cortos frente a esta obra de arte😎No crees? #epic #epicuniverse #universal #universalorlando #orlando #darkuniverse #halloween #florida #monsters #universalstudios #viaje #parquestemáticos #themepark`, /*4*/
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

export const park_planners_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const park_planners_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const park_planners_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const park_planners_array_of_posts = [
  ...park_planners_images,
  ...park_planners_videos
];
