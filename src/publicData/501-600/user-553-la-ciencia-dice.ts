import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'la_ciencia_dice';
const userId = '';
const prefixUrl = '';
const followers = 6_832_832;
const followed = 549;
const profileDescription = `Yo quiero saber, no quiero creer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Las fresas/frutillas inician su ciclo de vida como pequeñas flores, predominantemente blancas, con un centro llamativo de color amarillo. Tras la polinización, que puede ser realizada por abejas y otros insectos, la parte central de la flor comienza a desarrollarse en lo que eventualmente se convertirá en la fruta. Este proceso de transformación es fascinante porque lo que comemos de la fresa no es una fruta en el sentido botánico tradicional, sino un receptáculo agrandado que sostiene los verdaderos frutos, las pequeñas semillas conocidas como aquenios que se encuentran incrustadas en su superficie. A medida que el receptáculo crece, se torna jugoso y adquiere un color rojo intenso, signo de que está lleno de azúcares y listo para ser comido. Este desarrollo depende de la polinización exitosa y también de factores ambientales adecuados como el suelo, el clima y la cantidad de luz solar.`, /*1*/
  `La rana arbórea de ojos negros, adaptadas perfectamente a la vida en los árboles gracias a sus patas adherentes que les permiten escalar con facilidad. De hábitos nocturnos, estas ranas pasan el día descansando en la tranquilidad de las hojas verdes, donde su coloración les proporciona un excelente camuflaje contra los depredadores. Al caer la noche, sus ojos negros se abren ampliamente para maximizar la visión en la penumbra, momento en el que comienzan su búsqueda activa de insectos y pequeños invertebrados.

Son consideradas como especies en peligro de extinción debido a la pérdida de hábitat y la contaminación de sus entornos naturales.`, /*2*/
  `La naturaleza esconde secretos que cambian para siempre la forma en que la entendemos. Los árboles, a través de la red subterránea de micelio, cuidan de aquellos que ya no pueden valerse por sí mismos, como tocones aparentemente muertos. Pero no lo están. Los árboles vecinos les envían nutrientes y los mantienen vivos por décadas.

¿Por qué lo hacen? ¿Será que los árboles saben que su vida depende de otras especies? ¿Será que pueden pensar en plazos más largos que los nuestros?`, /*3*/
  `🪹🪶
En el mundo natural, la construcción de un nido es tanto un arte como una ciencia. Este video captura la destreza y el ingenio de los pájaros, que tejen y construyen sus hogares con una precisión asombrosa. Este comportamiento, esculpido por millones de años de evolución, evidencia una compleja interacción entre la biología instintiva y la adaptación al entorno. La meticulosidad con la que seleccionan materiales y la estrategia de construcción reflejan una sofisticada adaptabilidad y un conocimiento innato, que asegura la protección y la continuidad de sus especies.`, /*4*/
  `Este árbol muestra un fenómeno llamado anemomorfogénesis, donde la acción constante del viento influye directamente en su crecimiento. Con el tiempo, las fuerzas mecánicas del viento modifican la elongación celular y el crecimiento secundario, haciendo que las ramas y el tronco se adapten en la dirección de menor resistencia. Es un ejemplo claro de cómo los factores ambientales pueden moldear la forma y estructura de las plantas, demostrando su increíble capacidad de adaptación.`, /*5*/
  `El oso hormiguero gigante es un verdadero experto en la caza de insectos. Gracias a su largo hocico y su lengua pegajosa, puede devorar cerca de 35.000 insectos al día, recorriendo grandes distancias en busca de hormigueros y termiteros. 🐜`, /*6*/
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

export const la_ciencia_dice_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const la_ciencia_dice_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const la_ciencia_dice_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const la_ciencia_dice_array_of_posts = [
  ...la_ciencia_dice_images,
  ...la_ciencia_dice_videos
];
