import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'juanmartinez';
const userId = '063ee6d9-2d25-46ba-8526-1adff403b9e2';
const prefixUrl = 'https://dominicnikolai.github.io/project-303/assets/juanm4rtinez/';
const followers = 172_720;
const followed = 32;
const profileDescription = '¡Así es!';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🌐💬 ¿Sabías que el internet viaja por el fondo del mar? 🌊🧠 ¡Así es! Aunque parezca increíble, la mayoría de lo que ves en tu celular 📱 o computadora 💻 llega gracias a cables submarinos. 🚢🧵 🔎 ¿Cómo funciona? 📡 Cuando envías un mensaje, ves un video o haces una videollamada, la información se transforma en impulsos de luz 💡 y viaja por cables de fibra óptica que están tendidos bajo el océano 🌍. 🔌 Estos cables conectan países y continentes 🗺️ y transportan más del 95% del tráfico internacional de internet 📶🌐. 🧵 Son del grosor de una manguera 🚿 y están protegidos con varias capas de materiales resistentes ⚙️ para soportar la presión del mar, terremotos 🌪️ y hasta mordidas de tiburones 🦈 (¡sí, en serio!). 🚢 Se instalan con barcos especializados que pueden colocar miles de kilómetros de cable a gran profundidad ⚓📏. Algunos llegan a más de 8,000 metros bajo el mar 😱🌊. 🌎 Sin estos cables, no podrías chatear, hacer llamadas ni ver tus series favoritas desde otros países 🎬💬. 🧠💡 El internet no es mágico... ¡es ingeniería bajo el mar! 🌐⚙️`, /*1*/
  `🇨🇳🇮🇳"El Dragón y el Elefante deben unirse." Xi Jinping se reunió con el Primer Ministro indio Modi en China. Esta es la primera visita de Modi a China en siete años. Tiene lugar en un contexto de empeoramiento de las relaciones entre ambos países y Estados Unidos. "El mundo se está moviendo hacia la transformación. China e India son los dos países más civilizacionales. Somos los dos países más poblados del mundo y parte del Sur Global... Es vital ser amigos, buenos vecinos, y el Dragón y el Elefante deben unirse...", dijo Xi en la reunión con Modi. "También debemos cumplir con nuestras obligaciones históricas de defender el multilateralismo, un mundo multipolar y una mayor democracia en las instituciones internacionales y trabajar juntos por la paz y la prosperidad en Asia y en todo el mundo", añadió el líder chino. Modi declaró que India está comprometida a desarrollar sus lazos con China basados en la confianza mutua, el respeto y la sensibilidad. Según él, el bienestar de 2.8 mil millones de personas está vinculado a la cooperación bilateral entre India y China. Modi también anunció la reanudación de la comunicación aérea directa con China. Añadió que ha prevalecido un ambiente de "paz y estabilidad" en la frontera con China en el Himalaya, donde ocurrió una confrontación militar en 2020, congelando la mayoría de las áreas de cooperación entre India y China.`, /*2*/
  `La creación de montañas no es un simple accidente geográfico, sino una danza lenta y poderosa entre fuerzas invisibles que modelan el rostro del planeta. En Bray Head, Irlanda, el Glentornan Fold se alza como una cicatriz antigua, un pliegue sinclinal apretado que revela la historia oculta bajo nuestros pies. Aquí, la corteza terrestre se dobló como si fuera papel, presionada por la implacable fuerza de la tectónica. Bajo la superficie, las placas tectónicas colisionan, comprimen, deforman. La Tierra, en su silencio aparente, se retuerce y cambia. En ese proceso nacen las montañas, los pliegues, las fallas: huellas profundas de una historia escrita en roca. Cada línea, cada curvatura del terreno, guarda secretos de un pasado remoto. El Glentornan Fold es más que una formación geológica; es una evidencia viva del inmenso poder del subsuelo. Sus capas curvadas hacia abajo, marcadas por la presión del tiempo, actúan como páginas abiertas de un libro que pocos saben leer. La geología, en este contexto, se convierte en un arte de interpretación. Leer la piedra es leer la memoria de la Tierra, descubrir cómo, durante millones de años, los paisajes que hoy habitamos fueron esculpidos en silencio. El Glentornan Fold no solo es un testimonio de esa historia, sino también una invitación a escuchar lo que las rocas aún susurran.`, /*3*/
  `Estados Unidos El cohete más grande del mundo despegó desde Texas, su cohete propulsor cayó en el Golfo de México y una hora más tarde la etapa superior aterrizó en el Océano Índico. La NASA quiere una Starship para una misión a la Luna ya en 2027.`, /*4*/
  `¿Sabías que el girasol esconde un secreto matemático? La forma en que distribuye sus semillas no es al azar: sigue un patrón de espirales conocido como la sucesión de Fibonacci, una secuencia numérica en la que cada número es la suma de los dos anteriores (1, 1, 2, 3, 5, 8, 13…). En el disco del girasol, las semillas se ordenan en espirales que giran en ambas direcciones. Al contarlas, aparecen series como 21 y 34, o 34 y 55, números consecutivos de Fibonacci. Este arreglo garantiza que las semillas ocupen el espacio de la manera más eficiente posible, evitando huecos y maximizando la cantidad de semillas en un área limitada. Además, esta distribución permite que cada semilla reciba la luz necesaria y aproveche mejor los nutrientes. Lo más fascinante es que este mismo patrón no solo está en los girasoles: aparece en conchas marinas, piñas, caracoles e incluso en la forma de algunas galaxias espirales. La naturaleza parece repetir una misma “fórmula matemática” que optimiza la forma y el crecimiento.`, /*5*/
  `El Caladium es una joya tropical que transforma cualquier rincón en un espectáculo visual. Con sus grandes hojas rojizas, esta particular variedad aporta una elegancia intensa y sofisticada al jardín. Su follaje parece pintado a mano, creando un hermoso contraste con plantas verdes o flores de colores más claros. Al plantarse directamente en el suelo, su crecimiento puede ser sorprendentemente grande, alcanzando una dimensión descomunal que lo convierte en la pieza central del paisaje. Es ideal para zonas de semisombra donde la luz moteada realza sus colores intensos sin quemar las hojas. Cuidados básicos: Luz: prefiere semisombra o luz indirecta. Riego: constante pero sin encharcar, el suelo siempre debe estar húmedo. Suelo: rico en materia orgánica, bien aireado y con buen drenaje. Clima: cálido y húmedo, no tolera las heladas. Perfecto para añadir un toque exótico y refinado, el Caladium rojizo nunca pasa desapercibido y es una apuesta segura para los amantes del diseño audaz y natural. #jardinería #gardenizi #plantasmosquito #jardíncontenedor #jardínverde #amantesdelasplantas`, /*6*/
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

export const juanmartinez_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const juanmartinez_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const juanmartinez_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const juanmartinez_array_of_posts = [
  ...juanmartinez_images,
  ...juanmartinez_videos
];
