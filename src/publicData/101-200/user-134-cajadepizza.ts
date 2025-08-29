import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'cajadepizza';
const userId = '';
const prefixUrl = '';
const followers = 872_720;
const followed = 322;
const profileDescription = '💬 Noticias que fomentan la curiosidad';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `📸✨ Un visitante chillón en Monserrate El fotógrafo colombiano Diego Emerson logró captar en Monserrate al colibrí coruscans, más conocido como colibrí chillón 🐦💚. Esta especie, una de las más grandes y territoriales de los Andes, es fácil de reconocer por su verde brillante, los parches azules y violetas en cabeza y mejillas, y su particular canto que le da nombre. En Bogotá es un visitante común de humedales, jardines y parques urbanos. Su rasgo más llamativo son las “orejas” de plumas azul-violeta que despliega al cantar o enfrentarse a otros colibríes, lo que también le ha valido los nombres de “orejudo” o “violetear”. Un recordatorio de que la capital sigue siendo hogar de maravillas aladas. 🏞️✨ 📸: @diegoemerson
`, /*1*/
  `El fotógrafo de naturaleza Juan Camilo Quintero, logró capturar un enfrentamiento entre colibríes y el resultado dejó a todos con la boca abierta. La escena —que fue reducida 4 veces en velocidad— muestra cómo estas pequeñas aves pasan de ser criaturas delicadas a auténticos guerreros territoriales en cuestión de milisegundos. Aunque son maravillosas, los colibríes tienen un temperamento fuerte y son extremadamente territoriales, sin importar el género o el tamaño del otro individuo. En el video se aprecia cómo se lanzan ataques fugaces con una precisión sorprendente, algo que normalmente ocurre demasiado rápido para el ojo humano. Dato orgullosamente colombiano: Colombia es el país con mayor diversidad de colibríes en el mundo, con cerca de 165 especies registradas. Estas aves pueden encontrarse desde los bosques andinos y páramos hasta jardines urbanos en ciudades como Bogotá. 📹: @foto_sintesiss_`, /*2*/
  `El fotógrafo de naturaleza Juan Camilo Quintero logró captar en video al Barbudito Paramuno (Oxypogon guerinii), una especie de colibrí que solo habita en los páramos andinos de Colombia. Su publicación en redes sociales rápidamente se volvió viral por la rareza y belleza del avistamiento. Quintero contó que el registro fue un reto debido al clima adverso, pero que la lluvia y la neblina hicieron parte de la magia de la experiencia. “Si algo he aprendido es a aprovechar cada oportunidad en la naturaleza… incluso el mal clima puede ser un gran aliado”, comentó. El Barbudito Paramuno, también llamado Colibrí Chivito, vive en la Cordillera Oriental y se alimenta principalmente del néctar de los frailejones y de pequeños insectos. Su avistamiento no solo es un espectáculo visual, sino también un recordatorio de la riqueza natural única que guarda Colombia. 📹: @foto_sintesiss_`, /*3*/
  `¡Transformación sobre ruedas! 🚌➡️🚆 Japón sorprende al mundo con su revolucionario vehículo de modo dual (DMV), un autobús que en 15 segundos despliega ruedas ferroviarias y se convierte en tren. Con capacidad para 21 pasajeros, este prodigio de la ingeniería alcanza 100 km/h en carretera y 60 km/h sobre rieles, uniendo las prefecturas de Tokushima y Kochi sin trasbordos. Este híbrido no solo reduce tiempos de viaje, sino que demuestra que la innovación puede ser tan ágil como sus transformaciones. Video: iwanori_pho`, /*4*/
  `Un pescador en Bahía Solano, Chocó, captó un momento mágico cuando una familia de delfines comenzó a nadar y saltar junto a su embarcación. El video, que rápidamente se hizo viral, muestra a los delfines realizando acrobacias como si fueran parte de una coreografía. Mientras avanzaba mar adentro, el pescador no podía ocultar su emoción y se le oye decir: “Hermosa demostración”, mientras los delfines parecían escoltarlo. Bahía Solano es una joya del Pacífico colombiano, famosa por su biodiversidad y avistamientos de especies majestuosas como ballenas jorobadas, que migran a sus costas para dar a luz. El video despertó cientos de reacciones en redes, con comentarios como “¡Mágico!”, “Qué locura, hermoso” y “¡¡Videazo hermanooo!!!”. Un recordatorio de la impresionante conexión entre la naturaleza y el ser humano.`, /*5*/
  `Un creador de contenidos quiso saber cómo se vería “Deadpool & Wolverine” si fuese una telenovela mexicana y el resultado se hizo viral 🤯 📹: iamelimckenzie`, /*6*/
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

export const cajadepizza_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const cajadepizza_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const cajadepizza_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const cajadepizza_array_of_posts = [
  ...cajadepizza_images,
  ...cajadepizza_videos
];
