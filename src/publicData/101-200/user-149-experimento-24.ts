import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'experimento_24';
const userId = '92239b02-462a-4743-ac9d-ab3f56966b69';
const prefixUrl = 'https://dominicnikolai.github.io/project-301/assets/experimento-24/';
const followers = 80_922;
const followed = 144;
const profileDescription = '🦊 The ̶T̶̶r̶̶u̶̶t̶̶h̶ is in here';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `⛈️⚡️🐶🐱🐰⚡️🐿 Comportamiento animal ante los truenos ⛈️⚡️🐶🐱🐰⚡️🐿 Cuando suenan truenos y relámpagos, perros y gatos experimentan una respuesta de alarma que acelera el ritmo cardíaco y aumenta el cortisol, provocando temblores, jadeos y la búsqueda de escondites junto a su propietario o bajo muebles. En especies sociales como cabras y caballos, la tormenta refuerza la cohesión del grupo: se agrupan, sincronizan la huida y emiten vocalizaciones para mantenerse unidos. La primera exposición a estos ruidos intensifica la activación del eje hipotálamo-hipófisis-adrenal, extendiendo el estado de alerta incluso después de que amaine la tormenta. 😵‍💫🐿✨️ En la naturaleza, ciervos y otros ungulados solitarios suelen adoptar primero la congelación para evaluar el peligro y luego huir a toda velocidad una vez determinado el riesgo. Aves silvestres aprovechan las corrientes ascendentes generadas por las variaciones de presión para remontar vuelo o buscan refugio en las copas más altas. Carnívoros como zorros y jaguares se guarecen en madrigueras o cuevas, manteniendo rondas de vigilancia más intensas. Los individuos sin experiencia previa muestran reacciones erráticas hasta que se habitúan al estruendo de la tormenta. 🔍🤔 En un estudio publicado en la revista Applied Animal Behaviour Science se expuso a perros a ruidos simulados de tormenta y se midió su cortisol y frecuencia cardíaca; los resultados mostraron incrementos significativos en ambos indicadores y conductas de evitación, pero aquellos cuyos dueños mantuvieron una actitud tranquila y proporcionaron estímulos positivos redujeron notablemente su ansiedad, evidenciando cómo la conducta humana modula la respuesta al estrés por tormentas en animales domésticos. #Instinto #Alarma #peru #Refugio #Cohesion #Vocalizacion #truenos #comportamientoanimal #Sincronia #tormenta #animal #animales #Adaptacion #Social #Aprendizaje #teoriadelacomunicacion #Supervivencia #colombia #mexico #españa #Semiotica #Codificacion #Decodificacion #Señal #argentina #Emisor #Receptor #chile #cosasdemujer #Comunicacion

`, /*1*/
  `🦐 🐋 🫧 Presenciar a un tiburón ballena cazando es como ver una coreografía colosal en cámara lenta: este gigante del océano se desliza con serenidad, abriendo su enorme boca para filtrar miles de diminutas presas en cada bocanada, procesando más de 20.000 litros de agua por hora a través de sus branquiespinas. Lo asombroso no es solo su tamaño, sino su método: sin violencia, sin persecución, solo una danza de absorción entre plancton, krill y peces diminutos. A pesar de su imponente presencia, el tiburón ballena no representa peligro para los humanos; no tiene interés en cazarlos ni capacidad para hacerlo. Es un titán pacífico, un filtro viviente que transforma el océano en sustento sin romper su armonía. 👻 🚰🧠✨️ Comparte tus pensamientos y emociones en los comentarios.   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 🌧 🔥 Forests are the solution 🌿🥵 🌎 💧   ♨         🌬🌲🌲🌲⤸ 🧊 ༄.°      💧  #Tiburonballena #Gigante #Filtrador #Oceano #Cazador #Branquias #Plancton #Krill #Majestuosidad #Pazmarina #Coloso #peru #Gentil #Azul #Marino #Danza #Naturaleza #colombia #chile #Titan #Serenidad #Armonia #españa #mexico #Vitalidad #Espectaculo #Profundidad #argentina #Sabiduria #Equilibrio`, /*2*/
  `🌊🔄 Las estructuras costeras diseñadas para combatir la erosión varían en forma, función y eficacia según el entorno. Los muros de roca (revetments) son populares por su simplicidad y resistencia: se construyen con bloques de piedra o concreto que absorben la energía de las olas y protegen la costa directa. Aunque son duraderos y relativamente económicos, pueden alterar el paisaje natural y provocar erosión en zonas adyacentes si no se diseñan con precisión. el Curved Return Wall destaca por su diseño cóncavo que devuelve la energía de la ola hacia el mar, reduciendo significativamente el sobrepaso de agua y la erosión detrás del muro. A diferencia de los muros verticales tradicionales, esta forma recurvada imita el perfil de la ola y la redirige, lo que no solo protege la infraestructura costera sino que también minimiza el impacto visual y ecológico. Estudios comparativos han demostrado que los muros curvos permiten el menor volumen de agua sobrepasada entre varios tipos de estructuras. Por otro lado, los rompeolas offshore (estructuras sumergidas o flotantes situadas mar adentro) actúan como barreras que disipan la energía de las olas antes de que lleguen a la costa. Esta solución puede ser más ecológica y menos invasiva visualmente, favoreciendo la acumulación de sedimentos y la regeneración natural de playas. 🌊 🟦 🔷️🔹️Sin embargo, la elección óptima depende de múltiples factores: tipo de costa, clima de olas, profundidad del agua y objetivos ecológicos. Estudios recientes sugieren que los rompeolas tipo arrecife y los rompeolas compuestos ofrecen una mejor sostenibilidad a largo plazo, especialmente en zonas con alta biodiversidad o turismo costero. #Costa #Rompeolas #Revestimiento #Muro #Erosion #Sostenibilidad #Ingenieria #Infraestructura #Playas #Clima #Oceanografia #peru #colombia #Sedimento #Oleaje #Litoral #argentina #españa #Ecoingenieria #Restauracion #Conservacion #Inundaciones #mexico #Paisajismo #chile #Hidraulica #Marino #Costero #Proteccion #Naturaleza`, /*3*/
  ` #optica #clasificacion #vision #infrarrojo #sensores #automatizacion #papas #deteccion #colombia #iavision #españa #procesamiento #agrotecnologia #tecnologiaalimentaria #clasificador #argentina #flujo #eficiencia #precision #peru #multiespectral #imagen #tech #mexico #papa #algoritmos #hardware #chile #industrial #granja`, /*4*/
  `✈︎🔥 Durante los ensayos para el Radom Air Show 2025, un caza F-16 de la Fuerza Aérea Polaca se estrelló en la tarde del 28 de agosto cerca del aeropuerto Radom-Sadków. El avión pertenecía al equipo de demostración Tiger Demo Team y realizaba maniobras acrobáticas cuando entró en picada sobre la pista, sin lograr recuperarse antes del impacto. El piloto, que no logró eyectarse a tiempo, falleció en el accidente. Las imágenes difundidas muestran una bola de fuego tras el choque, y las autoridades confirmaron que no hubo víctimas en tierra. El evento, que atrae a decenas de miles de visitantes y contaba con la participación de equipos internacionales como los Red Arrows del Reino Unido y el Zeus F-16 Demo Team de Grecia, ha sido cancelado tras la tragedia. ⚙️🪛 Este tipo de accidentes suele ocurrir por una combinación de factores extremos: las maniobras acrobáticas exigen precisión milimétrica, y cualquier error de cálculo, fallo técnico o condición atmosférica adversa puede ser fatal. En exhibiciones como la de Radom, los pilotos llevan los aviones al límite de sus capacidades para impresionar al público, lo que incrementa exponencialmente el riesgo. Además, los F-16 polacos modelo Block 52+ aunque avanzados, fueron entregados entre 2006 y 2008, lo que implica que ya operan con más de una década de uso intensivo. La presión por mantener rutinas espectaculares, sumada a la fatiga estructural y posibles fallos humanos, convierte cada ensayo en una danza peligrosa entre la técnica y el abismo. 👻 🚰🧠✨️ Comparte tus pensamientos y emociones en los comentarios.   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 🌧 🔥 Forests are the solution 🌿🥵 🌎 💧   ♨         🌬🌲🌲🌲⤸ 🧊 ༄.°      💧  #Radom #F16 #Crash #Airshow #Tragedia #Piloto #Sadkow #Polonia #DemoTeam #Accidente #Eyectar #Fatal #Vuelo #Ensayo #Impacto #Emergencia #Investigacion #Conmocion #Aviacion #Espectaculo #Maniobra #Caida #Jet #Fuego #Silencio #Suspension #Luto #Riesgo #Acrobacia #Memoria`, /*5*/
  `Te mira`, /*6*/
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

export const experimento_24_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const experimento_24_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const experimento_24_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const experimento_24_array_of_posts = [
  ...experimento_24_images,
  ...experimento_24_videos
];
