import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'desde_la_ciencia';
const userId = '';
const prefixUrl = '';
const followers = 1_202_322;
const followed = 731;
const profileDescription = `Donde la naturaleza cuenta su historia y la ciencia la explica.`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `En los océanos tropicales, algunos peces han desarrollado una forma inesperada de escapar: salir volando. Los peces voladores impulsan su cuerpo con una serie de latigazos rápidos de su cola, alcanzando la velocidad suficiente para despegar del agua. En el aire, extienden sus aletas pectorales —adaptadas a lo largo de más de 60 millones de años— y planean durante cientos de metros. No es un salto, es un vuelo. Uno que puede alcanzar los 70 km/h, esquivando a depredadores como delfines y atunes. Una estrategia afilada por la evolución. Una coreografía entre agua, cuerpo y aire. 🎥 Créditos a su respectivo autor. Material utilizado con fines educativos. 🎙 Doblaje por La Ciencia Dice y @desde_la_ciencia`, /*1*/
  `Un momento que resume la fuerza y la belleza de la naturaleza: la caza perfecta de una garza en plena acción. 🐦🐟 La escena revela la delicadeza y la precisión de estos animales increíbles, que dependen de la absoluta sincronía entre ojos, reflejos y paciencia para sobrevivir. El registro va más allá de una simple imagen: es un retrato vivo de la lucha por la vida que ocurre todos los días, invisible para muchos de nosotros. 📸 Mérito especial al fotógrafo, que con sensibilidad y técnica logró congelar este instante impresionante en el tiempo, transformándolo en arte`, /*2*/
  `En laboratorios, se realizan pruebas curiosas que demuestran la delicadeza de los sistemas quirúrgicos asistidos por robots. En estas demostraciones, los instrumentos robóticos pelan uvas o suturan huevos para simular el cuidado necesario al manipular tejidos humanos extremadamente frágiles, como nervios, vasos sanguíneos y órganos vitales. Uno de los ejemplos más conocidos es el sistema quirúrgico da Vinci, desarrollado por Intuitive Surgical y aprobado por la FDA a principios de los años 2000. Este sistema permite a los médicos realizar operaciones mínimamente invasivas con instrumentos que imitan los movimientos de las manos humanas, pero con mayor estabilidad y sin temblores. Estas tecnologías ya se aplican en áreas como urología, ginecología, cardiología, neurocirugía y oftalmología, ofreciendo beneficios como incisiones más pequeñas, menor pérdida de sangre, menor riesgo de infección y una recuperación más rápida. En algunos casos, como en cirugías oftalmológicas, los robots ya han sido utilizados incluso dentro del ojo humano con una precisión imposible para las manos humanas por sí solas. El futuro de la robótica quirúrgica apunta a avances aún más audaces: robots autónomos capaces de realizar procedimientos simples, inteligencia artificial que asista en diagnósticos en tiempo real e incluso nanotecnología para actuar directamente a nivel celular. Así, la sutura en una uva no es solo un truco visual: es la prueba de cómo la robótica está transformando la medicina, haciendo posible reparar, reconstruir y salvar estructuras cada vez más delicadas del cuerpo humano. ✨ Unknown author.`, /*3*/
  `La escena muestra a una araña encontrándose con su propio reflejo, algo completamente nuevo para ella. Sin comprender que se está mirando a sí misma, su instinto la hace reaccionar como si se tratara de otro individuo invadiendo su espacio. Movimientos rápidos, de defensa e incluso de curiosidad se hacen evidentes frente al “intruso invisible”. Este comportamiento es común en muchos animales que no poseen una autopercepción avanzada. A diferencia de especies como delfines, elefantes y algunos primates, las arañas no tienen la capacidad de reconocer que están frente a un reflejo. Para ellas, la imagen es simplemente otro ser, lo que despierta alerta y estrategias de protección. La escena, además de curiosa, muestra cómo diferentes criaturas interpretan el mundo que las rodea de maneras únicas. El reflejo, para nosotros, es solo una imagen, pero para la araña puede parecer una amenaza real. Un pequeño recordatorio de cómo el instinto moldea el comportamiento de cada especie. `, /*4*/
  `El espectáculo del ave lira soberbia El ave lira soberbia (Menura novaehollandiae) es una de las aves más fascinantes de Australia y famosa en todo el mundo por su talento extraordinario: ¡es una verdadera maestra de la imitación! ✨ 🔹 Cortejo impresionante: durante la época de reproducción, el macho despliega su magnífica cola en forma de lira y realiza una danza elaborada para impresionar a las hembras. 🔹 Imitación perfecta: esta ave puede reproducir con increíble precisión los sonidos del bosque —incluidos cantos de otras aves, ruidos de cámaras fotográficas, motosierras e incluso alarmas. 🔹 Cola deslumbrante: formada por 16 plumas largas y ornamentales, la cola es el gran atractivo de su ritual de apareamiento. 🔹 Un verdadero ingeniero acústico: estudios demuestran que el ave lira soberbia posee uno de los repertorios vocales más complejos del reino animal. `, /*5*/
  `Arte en la naturaleza… 🤩🐙🤯 Este pulpo muestra cómo puede cambiar de color de manera impresionante para camuflarse en su entorno, mientras el buzo @ibrahim.elhariry se acerca lentamente. El pulpo logra este camuflaje increíble gracias a los cromatóforos, pequeñas células presentes en su piel. Estos órganos contienen sacos de pigmento que se hacen visibles cuando diminutos músculos radiales tiran de ellos, expandiendo el pigmento bajo la piel. Cuando el pulpo se siente amenazado, contrae los músculos alrededor de los cromatóforos, estirando los sacos y cambiando rápidamente de color. Este proceso está controlado neuronalmente, lo que le permite cambiar de color en milisegundos — a negro, marrón, naranja, rojo y amarillo`, /*6*/
  `Los ardillas son muy sensibles a los movimientos repentinos y a los ruidos fuertes, lo que hace que se asusten con facilidad. Cuando esto sucede, levantan sus patas delanteras como mecanismo de defensa y, por un instante, pueden quedarse inmóviles para evaluar la situación, decidiendo si huir o seguir observando.`, /*7*/
  `En 1946, Estados Unidos llevó a cabo la Operación Crossroads en el Atolón Bikini, marcando las primeras pruebas nucleares desde la Segunda Guerra Mundial. Una bomba atómica funciona liberando energía mediante reacciones de fisión nuclear, donde núcleos atómicos pesados como el uranio o el plutonio se dividen en núcleos más pequeños. Esta división libera una enorme cantidad de energía en forma de calor, radiación y onda expansiva, capaz de arrasar estructuras enteras o, como en este caso, hundir barcos. La prueba Baker, en particular, produjo una gigantesca columna de agua y una contaminación radiactiva tan extendida que muchos de los barcos objetivo quedaron inhabitables por el nivel de radiación persistente. Los habitantes originarios del Atolón Bikini fueron desplazados antes de las pruebas y, hasta el día de hoy, siguen sin poder regresar debido a los riesgos radiológicos que aún persisten.`, /*8*/
  `He leído que la razón por la que encontramos el canto de los pájaros tan relajante es porque nuestros sistemas nerviosos han sido programados durante miles de años para asociar el canto de las aves con la seguridad. Los pájaros no cantan cuando hay depredadores alrededor, así que si hay canto de pájaros en el aire, significa que no hay peligro inminente cerca. Esta conexión con la seguridad nos hace sentir relajados y en paz. También se cree que las frecuencias específicas del canto de los pájaros son calmantes para el cerebro. Una investigación realizada en 2022 encontró que el sonido del canto de las aves puede mejorar el estado de ánimo al reducir la ansiedad y los síntomas depresivos. ¡Qué hermoso es eso! Estudio: “A large-scale analysis of the emotional impact of bird sounds on humans” (Nature, 2022). DOI: 10.1038/s41598-022-20841-0`, /*9*/ 
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

export const desde_la_ciencia_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const desde_la_ciencia_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const desde_la_ciencia_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const desde_la_ciencia_array_of_posts = [
  ...desde_la_ciencia_images,
  ...desde_la_ciencia_videos
];
