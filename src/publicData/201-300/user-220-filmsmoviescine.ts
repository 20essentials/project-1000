import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'filmsmoviescine';
const userId = '';
const prefixUrl = '';
const followers = 642_234;
const followed = 50;
const profileDescription = `Amantes del Cine`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Daft Punk eran grandes fans de la película original y aceptaron inmediatamente ser los compositores. El director Joseph Kosinski dijo que, cuando los entrevistaba para el trabajo, sintió que él era el entrevistado, tal era su obsesión por que conservara el espíritu de la primera película. . . . . . . . . . . . . . . . . . . . . . .`, /*1*/
  `Esta escena de Transformers (2009) tiene mejor CGI que el 90% de las películas actuales. ¿Alguien puede estudiar cómo regresamos en vez de avanzar? 🧐🔥 (Sin ánimo de infringir) #Transformers #VenganzaDeLosCaídos #CGI #EfectosVisuales #CineVsTecnología #ShiaLaBeouf #MeganFox`, /*2*/
  `El dios del trueno o del rayo? Sigan (nos) @FILMSMOVIESCINE para más curiosidades de películas . . . . . . . . . . . . . . .. . . . . ..`, /*3*/
  `para más buen cine 🎞️🚬`, /*4*/
  `El remake live-action de Lilo & Stitch de Disney se estrenó en cines el 23 de mayo de 2025. Esta adaptación lleva el clásico animado del 2002 a una nueva era, combinando CGI y acción real para recontar la entrañable historia de Lilo, una niña hawaiana de espíritu libre, y Stitch, un experimento alienígena travieso que cae en la Tierra.

El casting generó debate: algunos fans esperaban actores más conocidos, mientras otros celebraron la autenticidad hawaiiana. La película mantiene lo esencial: la caótica amistad que redefine el concepto de "ohana" (familia), ahora con efectos que mezclan CGI práctico y digital.`, /*5*/
  `Les gusta este contenido? ❤️ . . . . . . . . . . . . . . . . . . . . . . . .`, /*6*/
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

export const filmsmoviescine_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const filmsmoviescine_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const filmsmoviescine_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const filmsmoviescine_array_of_posts = [
  ...filmsmoviescine_images,
  ...filmsmoviescine_videos
];
