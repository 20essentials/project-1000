import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'juan_amonda';
const userId = '';
const prefixUrl = '';
const followers = 603_720;
const followed = 214;
const profileDescription = 'Recomiendo las películas que me gustan 🎥';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Ghost in the Shell (1995) Mamoru Oshii Un clásico absoluto del anime cyberpunk que inspiró a Matrix y redefinió lo que la animación podía contar. Entre acción futurista y reflexión filosófica, plantea una de las grandes preguntas: ¿qué nos hace humanos cuando nuestro cuerpo ya no lo es? Una obra adelantada a su tiempo que puso sobre la mesa debates sobre inteligencia artificial, transhumanismo y la identidad en un mundo digital. Está disponible en Apple, Netflix, Movistar y YouTube. #GhostInTheShell #MamoruOshii #Anime #CineJapones #Cyberpunk #Matrix #Películas #Peliculas #Reseñas #Recomendaciones`, /*1*/
  `Stand by Me (1986) – Cuatro chicos. Un verano. Una aventura que los va a cambiar para siempre. Basada en una historia de Stephen King, Stand by Me es uno de los coming of age más bellos y emotivos del cine. Una película sobre la amistad, el duelo, y ese momento inevitable en que la infancia se empieza a desvanecer. Disponible en Max, Movistar, Claro Video, Apple TV y YouTube. #StandByMe #RobReiner #StephenKing #ComingOfAge #CineClásico #RiverPhoenix #Películas #Peliculas #CaminoAlMillón #Reseñas #Recomendaciones #CuentaConmigo`, /*2*/
  `Primicia mortal (2014) Dir. Dan Gilroy Un thriller nocturno donde Jake Gyllenhaal se luce como Lou Bloom, un hombre capaz de todo con tal de conseguir la nota perfecta. Armado con una cámara y sin escrúpulos, convierte la tragedia ajena en un negocio. La película funciona como un retrato brutal del periodismo sensacionalista y de nuestra propia fascinación por el morbo. Con atmósfera oscura, tensión constante y una actuación descomunal, es de esas historias que incomodan pero no podés dejar de mirar. Está disponible en Prime Video, Apple TV, Amazon Video y Claro Video. #PrimiciaMortal #Nightcrawler #JakeGyllenhaal #DanGilroy #Thriller #Películas #Peliculas #Reseñas #Recomendaciones`, /*3*/
  `Mi primer amor (2010, Rob Reiner) Una comedia romántica ambientada en los años 60 que se convirtió en un clásico moderno sobre el primer amor y la adolescencia. La historia de Juli y Bryce se cuenta dos veces mostrando cómo una misma realidad puede verse de formas opuestas. Rob Reiner filma con calidez y nostalgia un relato lleno de ternura, humor y lecciones sutiles. Disponible en Apple TV, HBO Max, Movistar y Amazon Video. #MiPrimerAmor #Flipped #RobReiner #ComediaRomántica #ComingOfAge #Recomendaciones #Peliculas #Películas #Reseñas`, /*4*/
  `Akira (1988) – Dir. Katsuhiro Otomo Después de una explosión que destruye Tokio, surge Neo-Tokio: una ciudad futurista, corrupta y violenta. En ese escenario, dos adolescentes quedan atrapados en un proyecto gubernamental que escapa a todo control. Akira no solo revolucionó la animación japonesa: es una obra de ciencia ficción oscura, frenética y política. Habla del poder, la represión, la rebelión y la cicatriz que deja la destrucción. Una de las películas más influyentes del cine contemporáneo. Disponible en YouTube, Netflix, MUBI y Apple TV. #Akira #KatsuhiroOtomo #Anime #NeoTokio #Animación #Películas #Peliculas #Reseñas #Recomendaciones`, /*5*/
  `Perfect Blue (1997) – Satoshi Kon. Una joya del anime psicológico, perturbadora y brillante. Cuando una idol deja la música para convertirse en actriz, su identidad comienza a fracturarse hasta que ya no distingue la realidad de la ficción. Espejos, símbolos, paranoia y una crítica feroz a la industria del entretenimiento. Una obra maestra que influenció a películas como Cisne Negro y Requiem for a Dream. Disponible para alquilar en YouTube. #PerfectBlue #SatoshiKon #Anime #Thriller #Películas #Recomendaciones #CineJaponés #Peliculas #Reseñas`, /*6*/
  `Ex Machina (2014) – Un joven programador es elegido para participar en un experimento con una inteligencia artificial llamada Ava, en la casa secreta de su jefe, un CEO brillante y perturbador. Lo que empieza como un test se convierte en un juego de manipulación, deseo y control. Escrita y dirigida por Alex Garland, Ex Machina es un thriller contenido, elegante y profundamente inquietante. Un análisis sobre el poder, la conciencia y la fragilidad humana frente a la tecnología. Disponible en Netflix, Max, Apple TV y Claro Video. #ExMachina #AlexGarland #CienciaFicción #ThrillerPsicológico #Películas #CaminoAlMillón #Peliculas #Reseñas #Recomendaciones`, /*7*/
  `La vida de Pi (2012) – Un joven naufraga y queda a la deriva con un tigre de Bengala. Una fábula sobre la fe, el instinto y el poder de las historias. Disponible en Mercado Play (AR) y Disney+ (ES). #LifeOfPi #LaVidaDePi #AngLee #RichardParker #CineEspiritual #CinePoético #Supervivencia #CaminoAlMillón #ReelDeCine #Reseñas #Recomendaciones #Películas #Peliculas`, /*8*/
  `Amigos intocables (2011) – Una amistad improbable que cambió la vida de dos personas. Basada en una historia real. Disponible en Prime Video, Movistar y Amazon Video. #AmigosIntocables #TheIntouchables #CineFrancés #OmarSy #FrançoisCluzet #LudovicoEinaudi #HistoriaReal #CineQueInspira #CaminoAlMillón #ReelDeCine #Películas #Peliculas #Reseñas #Recomendaciones`, /*9*/ 
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

export const juan_amonda_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const juan_amonda_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const juan_amonda_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const juan_amonda_array_of_posts = [
  ...juan_amonda_images,
  ...juan_amonda_videos
];
