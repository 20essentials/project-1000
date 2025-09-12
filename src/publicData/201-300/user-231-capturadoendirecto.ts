import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'capturadoendirecto';
const userId = 'd75c470f-e68e-44a6-9731-3103dc9393ad';
const prefixUrl = 'https://dominicnikolai.github.io/project-321/assets/capturadoendirecto/';
const followers = 81_720;
const followed = 39;
const profileDescription = `🎥 Transmitiendo historias sin filtro. `;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Sky Ladder es una obra del artista chino Cai Guo-Qiang, realizada con fuegos artificiales que forman una escalera encendida suspendida en el cielo. La estructura mide 500 metros de largo y fue elevada por un globo aerostático lleno de helio. Está recubierta con mechas que, al encenderse, generan una secuencia de fuego dorado que simula una escalera ascendiendo hacia el firmamento. El espectáculo duró apenas unos minutos, pero su impacto fue profundo y cargado de simbolismo. La idea nació en la infancia del artista, como un sueño que mantuvo durante más de veinte años. Intentó concretarlo en distintas partes del mundo, como Inglaterra, China y Estados Unidos, pero siempre surgieron obstáculos técnicos o administrativos. Finalmente, logró realizarlo en su ciudad natal, Quanzhou, en China, el 15 de junio de 2015, como un homenaje íntimo a su abuela, quien cumplía 100 años ese año. Poco después, ella falleció, y la obra tomó un carácter aún más personal, casi como una ofrenda entre el cielo y la tierra. Sky Ladder encarna muchos de los temas presentes en el trabajo de Cai: la conexión entre lo efímero y lo eterno, entre el individuo y el cosmos, entre el arte, la memoria y el deseo. La escalera encendida simboliza una unión entre el mundo humano y el universo, una forma de tender un puente entre lo terrenal y lo espiritual, lo pasado y lo futuro. Aunque la obra solo duró unos minutos, quedó grabada en video y en la memoria colectiva como una imagen de belleza fugaz y trascendente. #football#reels#deporte#fútbol#sports#reel#fyp#sport#atletismo#f1#cr7#messi#realmadrid#madrid#barcelona#world#viral#españa#spain#tv#television#fyp#cheater#reel#unitedstates#sport#eeuu#reels#f1#messi#cr7#realmadrid#madrid#barcelona#world`, /*1*/
  `Bubba Wallace estaba en plena carrera de NASCAR en Richmond cuando tras una parada en boxes la rueda delantera izquierda de su coche se soltó por completo y quedó en riesgo de abandonar. Lejos de rendirse, Wallace condujo hasta el box de un equipo rival asociado, Joe Gibbs Racing, y en un gesto de pura deportividad los mecánicos levantaron el coche, recolocaron la rueda y lo devolvieron a la pista en cuestión de segundos. La maniobra no solo evitó una sanción segura, sino que también permitió al piloto seguir en la lucha demostrando que incluso en un deporte tan competitivo la solidaridad puede marcar la diferencia. #football#reels#deporte#fútbol#sports#reel#fyp#sport#atletismo#f1#cr7#messi#realmadrid#madrid#barcelona#world#viral#españa#spain#tv#television#fyp#cheater#reel`, /*2*/
  `El 14 de octubre de 2012 Felix Baumgartner se elevó en una cápsula suspendida por un globo estratosférico desde el desierto de Nuevo México con el objetivo de batir récords y romper la barrera del sonido en caída libre. A medida que ascendía, los ingenieros seguían cada dato mientras él mantenía la calma dentro de su traje presurizado. Tras casi dos horas y media de ascenso, la cápsula alcanzó una altitud cercana a los 39 000 metros, un punto donde el cielo se tornaba oscuro y la curvatura de la Tierra era visible. Baumgartner abrió la escotilla, se colocó en el borde y, tras un breve saludo por radio, se lanzó al vacío. Durante los primeros segundos cayó sin apenas resistencia del aire, alcanzando una velocidad máxima superior a 1 300 kilómetros por hora y convirtiéndose en el primer ser humano en romper la barrera del sonido sin asistencia mecánica. Mientras descendía, la densidad creciente de la atmósfera estabilizaba su caída y le permitía controlar el cuerpo. Después de unos cuatro minutos de caída libre, desplegó el paracaídas y aterrizó suavemente en el desierto, donde el equipo de apoyo corrió a recibirlo. El salto no solo estableció nuevos récords de altura y velocidad, sino que también mostró el potencial de la tecnología aeroespacial y el valor humano al enfrentarse al límite mismo de la atmósfera. #football#reels#deporte#fútbol#sports#reel#fyp#sport#atletismo#f1#cr7#messi#realmadrid#madrid#barcelona#world#viral#españa#spain#tv#television#fyp#cheater#reel`, /*3*/
  `El ataque a Hiroshima ocurrió el 6 de agosto de 1945, durante los últimos días de la Segunda Guerra Mundial. Estados Unidos lanzó la primera bomba atómica de la historia sobre esta ciudad japonesa con el objetivo de forzar la rendición de Japón y evitar una invasión terrestre que habría costado muchas vidas. La bomba, llamada Little Boy, fue lanzada desde un avión B-29 llamado Enola Gay. Al explotar, mató instantáneamente a unas 70.000 personas y destruyó la mayor parte de la ciudad. En los días y meses siguientes, decenas de miles más murieron a causa de heridas, quemaduras y enfermedades provocadas por la radiación. Tres días después, el 9 de agosto, se lanzó una segunda bomba atómica sobre la ciudad de Nagasaki. Estos dos bombardeos provocaron que Japón anunciara su rendición el 15 de agosto de 1945, poniendo fin a la Segunda Guerra Mundial. Las consecuencias del ataque fueron devastadoras no solo en términos humanos y materiales, sino también en cuanto a los efectos a largo plazo, como enfermedades por radiación y malformaciones en generaciones futuras. Además, el uso de estas armas nucleares cambió el rumbo de la historia mundial, iniciando una nueva era marcada por la amenaza nuclear y dando paso a la Guerra Fría entre Estados Unidos y la Unión Soviética. El bombardeo de Hiroshima sigue siendo uno de los hechos más controvertidos y trágicos del siglo XX. #football#reels#deporte#fútbol#sports#reel#fyp#sport#atletismo#f1#cr7#messi#realmadrid#madrid#barcelona#world#viral#españa#spain#tv#television#fyp#cheater#reel#unitedstates#sport#eeuu#roro#hiroshima#japan#ibai#russia`, /*4*/
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

export const capturadoendirecto_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const capturadoendirecto_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const capturadoendirecto_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const capturadoendirecto_array_of_posts = [
  ...capturadoendirecto_images,
  ...capturadoendirecto_videos
];
