import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'rock_and_letters';
const userId = 'a15c26c0-09d8-45bd-bbe9-0b78823c4b67';
const prefixUrl = 'https://dominicnikolai.github.io/project-340/assets/rock-and-letters/';
const followers = 391_322;
const followed = 245;
const profileDescription = `𝔼𝕤𝕔𝕣𝕚𝕓𝕠 𝕤𝕠𝕓𝕣𝕖 𝕞ú𝕤𝕚𝕔𝕒 😎`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#lovehurts #classicrock`, /*1*/
  `ue en el concierto del sábado 7 de junio de 2008 en el Webley Stadium. Esa noche, los Foo Fighters tocaron “Rock N Roll” y “Ramble On” junto a los integrantes de Led Zeppelin, John Paul Jones y Jimmy Page. Fue parte de dos conciertos consecutivos en Wembley, filmados para el video Live at Wembley Stadium. Cuando tocaron “Rock and Roll”, Dave Grohl tocó la batería y Taylor Hawkins hizo la voz. En “Ramble On” se invirtieron los papeles.`, /*2*/
  `Green Day en Colombia`, /*3*/
  `El solo final de “Hotel California” es una obra maestra de composición. Es tan icónico que puedes tararearlo desde el comienzo hasta el final. Se construye a partir de las guitarras entrelazadas de Don Felder y Joe Walsh. Después de que se grabó la pista básica, los dos guitarristas se pusieron de acuerdo para ver quién tocaba cada parte. Los solos no estaban planeados cuando se grabaron: fueron toques espontáneos que se generaban en un proceso mediante el cual cada uno reaccionaba al otro, como en una conversación.`, /*4*/
  `Solo imagínate lo que se debe sentir escribir y componer una canción así, como "Wild Horses" y luego escucharla por primera vez, rodeado de las otras personas con las cuales la creaste, y entonces pensar que la canción no ha sido publicada aun, pero que saldrá próximamente, cambiará el mundo y tocará el corazón de millones de personas... ¿Qué sentirían los Stones cuando escribían canciones así?`, /*5*/
  `La canción, la banda, la letra, la lluvia, la gente, épico`, /*6*/
  `Esta película nos enseñó que cuando llevas audífonos hay que tener el volumen al máximo.`, /*7*/
  `El día que Metallica tocó en vivo un fragmento de “American idiot” fue el 27 de octubre del 2012 en el Voodoo Music Festival en Nueva Orleans. Esa noche, Metallica reemplazó a Green Day como cabeza de cartel del festival, ya que Billie Joe Armstrong había entrado en rehabilitación por problemas de consumo de alcohol. Esto fue justo después del incidente en el iHeartRadio Festival de septiembre de 2012, cuando Billie rompió su guitarra en la mitad de “Basket Case” y abandonó el escenario porque su tiempo de actuación había sido reducido.`, /*8*/
  `“Say It Aint So” es una de las miles de canciones de los 90 que hablan sobre la niñez. Es, también, una de las miles canciones de los 90 que alternan versos suaves y calmados con coros explosivos de los cuales emergen oleadas intensas de distorsión. Pero aparte de eso, lo que es genial en Weezer (aparte de ser una banda en la cual el cincuenta por ciento de sus integrantes usa lentes con prescripción elevada), es que con solo una imagen —una botella de Heineken enfriándose en la heladera, un sweater, el maquillaje sobre el estante, un poster de Kiss pegado en la pared— pueden contar toda una historia, y luego crear una canción.`, /*9*/ 
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

export const rock_and_letters_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const rock_and_letters_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const rock_and_letters_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const rock_and_letters_array_of_posts = [
  ...rock_and_letters_images,
  ...rock_and_letters_videos
];
