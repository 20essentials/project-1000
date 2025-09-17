import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'soyalvaroperez';
const userId = '829671dc-235b-42be-8d16-2a49d27edb7b';
const prefixUrl = 'https://dominicnikolai.github.io/project-334/assets/soy4lvarop3rez/';
const followers = 136_720;
const followed = 72;
const profileDescription = `Te enseño a crear diapositivas profesionales`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 11;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Que tengas una idea genial 😎pero tu presentación se confunda con las demás😞... es una verdadera lástima. Muchas veces perdemos oportunidades no porque nuestra idea no sea buena, sino porque no sabemos comunicarla de una manera impresionante, clara e inolvidable. 🧬Transforma la manera en que presentas tus ideas. Conoce los pasos que yo mismo he seguido para elaborar presentaciones que no solo proyectan profesionalismo, sino que también conectan de manera genuina con la audiencia. 👇¡Inscríbete en nuestra masterclass! Ahí revelaré los secretos para crear presentaciones que capten la atención al puro estilo Netflix y que tu audiencia no olvide. Link en mi BIO.`, /*1*/
  `😱”No hay segunda oportunidad para una primera impresión. en este video te mostramos solo una de las maneras para destacarse desde el principio de tu presentación que lo puedes hacer en menos de 2 minutos, Aquí te damos tres razones inapelables de por qué necesitas impactar desde el arranque: 1️⃣ Ganas Atención: En un mundo con exceso de información, captar la atención desde el primer momento es la clave. Un inicio impactante en tu presentación te diferencia y mantiene a tu audiencia enganchada. 2️⃣ Memorable: ¿Cuántas presentaciones olvidables has visto? Con un inicio potente, te aseguras de ser recordado. Tú, tu mensaje, tu marca se quedan en la mente de la audiencia. 3️⃣ Credibilidad: Un buen diseño y una apertura impactante comunican profesionalismo. Muestras a tu audiencia que valoras su tiempo y que has trabajado duro para prepararte. ¿Estás listo para darle a tu presentación un giro de 180°? únete a nuestra master class link en la bio. Recuerda, no hay segunda oportunidad para una primera impresión, ¡haz que cuente!” #presentacionesefectivas #powerpoint`, /*2*/
  `😎El diseño de presentaciones es crucial para cautivar y mantener la atención del público. Una presentación atractiva y estructurada facilita la comprensión y retención de información. El uso adecuado de colores, fuentes y elementos visuales refuerza los mensajes clave y conecta emocionalmente con la audiencia.`, /*3*/
  `¡Tu camino al éxito profesional atraviesa por las más bellas ciudades del mundo! 🏙🌍 Sin embargo, sabemos que detrás de cada gran presentación profesional hay una historia de esfuerzo, nervios y desafíos. ¿Quién no ha sentido el miedo al enfrentarse a una audiencia, a no saber transmitir las ideas con claridad, o a no dejar esa impresión duradera que deseamos? En nuestra Master Class, no solo aprenderás a diseñar presentaciones visuales impresionantes, sino que también organizar la estructura de tu charla para ganar seguridad y confianza. ¿Estás cansado de pasar desapercibido? ¿De no lograr el impacto que deseas con tus presentaciones? Ahora es tu momento, tu oportunidad para brillar y marcar la diferencia. 🌟 Por eso te invitamos a unirte a nuestra lista de espera para la Master Class. Es tiempo de enfrentar y superar tus miedos, de convertirte en el comunicador que siempre quisiste ser. No dejes pasar esta oportunidad, ¡toma las riendas de tu éxito profesional y únete a nuestra aventura! 💼🚀 link en la BIO.`, /*4*/
  `De lo textual a lo visual, 👇la gran mayoría de las presentaciones se enfocan en poner la mayor cantidad de información y texto posible en las diapositivas, esto mina la confianza y nos lleva a perder el tesoro 🪙 más importante de la audiencia ... SU ATENCIÓN.`, /*5*/
  `La comunicación es clave en cualquier negocio, ¡y las presentaciones son una parte esencial de ella! Asegúrate de crear presentaciones asombrosas para captar la atención de tu audiencia y transmitir tus ideas de manera clara y efectiva.`, /*6*/
  `#smooth`, /*7*/
  `Presentaciones persuasivas para captar la atención de tu audiencia, incitándolas a tomar acción, aprende esto y más en el taller de implementación 10xN, donde descubrirás cómo hacer presentación que impacten 10 veces más al estilo Netflix sin ser orador o diseñador, link en la`, /*8*/
  `#antesydespués #beforeafter #beforeandafter #hablarenpublico #presentacionesefectivas #powerpoint #oratoria #errorescomunes #diapositivas #oratoriagenuina #audiencia #maestría #postagrado #herramientasprofesionales`, /*9*/ 
  `#hablarenpublico #presentacionesefectivas #powerpoint #oratoria #errorescomunes #diapositivas #oratoriagenuina #audiencia #maestría #postagrado #herramientasprofesionales`, /*10*/
  `#hablarenpublico #presentacionesefectivas #powerpoint #oratoria #errorescomunes #diapositivas #oratoriagenuina #audiencia #maestría #postagrado #herramientasprofesionales`, /*11*/
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

export const soyalvaroperez_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const soyalvaroperez_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const soyalvaroperez_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const soyalvaroperez_array_of_posts = [
  ...soyalvaroperez_images,
  ...soyalvaroperez_videos
];
