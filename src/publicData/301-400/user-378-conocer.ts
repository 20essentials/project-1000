import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'conocer';
const userId = '';
const prefixUrl = '';
const followers = 345_832;
const followed = 272;
const profileDescription = `Descubre`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#abejas #geometría #naturaleza #curiosidades #científico #panal #matemáticas #hexagono`, /*1*/
  `¿Se puede tocar la luz? En Light Object, Lachlan Turczan logra que parezca posible. La pieza combina agua, acrílico, láseres, sensores y software. El agua refracta y deforma los rayos de luz, mientras los sensores detectan los gestos de la mano. El software traduce esas interacciones en tiempo real, haciendo que la luz responda con ondas y movimientos que parecen líquidos. La luz no tiene peso ni se puede tocar, pero gracias a esta mezcla de física y tecnología sentimos que adquiere presencia tangible. Obra: Light Object (2025). Artista: Lachlan Turczan #Luz #Ciencia #ArteInteractivo #LightArt #ArteYLuz #Física #Óptica #ArteContemporáneo #Refractión #ArteDigital #LightObject`, /*2*/
  `Espejo + luz = arcoíris perfecto Cuando colocas un espejo inclinado al sol, puedes dirigir un rayo de luz concentrado hacia cualquier superficie. Si además tienes un charco de agua sobre una superficie blanca, el agua actúa como un prisma natural, separando la luz blanca en todos sus colores y formando un arco iris. Si la luz se refleja en línea recta sobre la superficie, verás una franja horizontal de colores en lugar de un arco circular. Aquí es donde aparece la sorpresa: a diferencia de un arco iris normal en el cielo, el rojo queda arriba y el violeta abajo. Esto ocurre porque la geometría de reflexión en un charco es diferente a la refracción en gotas suspendidas; los rayos rojos se desvían menos y llegan a la parte superior, mientras que los violetas se desvían más y quedan abajo. Los colores pueden parecer súper intensos porque la luz del sol es fuerte, la superficie blanca refleja muy bien y el contraste con el entorno aumenta la percepción de los tonos. En resumen: con sol, espejo, agua y una superficie blanca puedes reproducir este arco iris artificial invertido, real y alucinante. Crédito: handsandsoul_ #ArcoIris #CienciaDeLaLuz #ExperimentosCaseros #FísicaDivertida #LuzYSombras #Curiosidades #NaturalezaYArte #PrismaNatural #ColoresVivos #FotografíaCreativa #CienciaCotidiana #ExploraciónVisual

`, /*3*/
  `#astronomía #espacio #estrellas #constelaciones #ciencia #universo`, /*4*/
  `El ADN es la molécula que contiene las instrucciones genéticas de todos los seres vivos. Su famosa estructura en doble hélice está formada por largas cadenas de nucleótidos, donde destacan cuatro moléculas esenciales: Adenina (A), Timina (T), Guanina (G) y Citosina (C). Estas bases nitrogenadas siempre se aparean de la misma manera: A con T y G con C. Este mecanismo simple pero perfecto permite que el ADN se copie fielmente cuando una célula se divide, garantizando que la información genética se transmita de una generación a otra. Además de estas bases, el ADN incluye azúcares y grupos fosfato, que actúan como el armazón de la molécula, sosteniendo la hélice y dando estabilidad. Su fascinante forma de doble hélice no es casualidad, sino el resultado natural de la química. Las bases se unen mediante puentes de hidrógeno, que se protegen mejor enrollándose hacia el interior; las partes hidrofóbicas quedan resguardadas, mientras que el exterior, formado por azúcares y fosfatos, interactúa con el agua. Además, la geometría de los enlaces obliga a una ligera inclinación entre bases, que al repetirse miles de veces genera el giro helicoidal. Todo esto no solo hace al ADN más estable, sino que también permite comprimir una cantidad enorme de información en un espacio mínimo dentro de cada célula. Lo asombroso es que con solo estas cuatro “letras químicas” se escribe el libro de la vida, capaz de generar la diversidad inmensa de organismos que habitan nuestro planeta. En cada célula humana hay unos 2 metros de ADN enrollados, y si se desenrollara todo el ADN de nuestro cuerpo, podría llegar varias veces del Sol a la Tierra. El ADN no solo guarda la memoria genética: es la clave que conecta el pasado, el presente y el futuro de la vida. `, /*5*/
  `¿Sabías que algunos materiales cambian de color con la temperatura? Esto ocurre por el termocromismo, un fenómeno físico-químico en el que ciertas sustancias modifican su estructura molecular al calentarse o enfriarse, cambiando cómo absorben y reflejan la luz. Este cambio reversible se usa en muchas aplicaciones prácticas, desde indicadores de temperatura hasta textiles inteligentes y dispositivos de seguridad, permitiendo detectar cambios térmicos de forma visual y rápida.`, /*6*/
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

export const conocer_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const conocer_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const conocer_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const conocer_array_of_posts = [
  ...conocer_images,
  ...conocer_videos
];
