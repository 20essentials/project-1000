import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'cienciainexplicable';
const userId = 'fb6399a8-52b4-47fa-b2a5-6a793be79a3d';
const prefixUrl = 'https://dominicnikolai.github.io/project-348/assets/cienciainexplicable/';
const followers = 392_832;
const followed = 159;
const profileDescription = `La ciencia no lo explica todo… pero aquí lo exploramos`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `👁️✨ ¿Imaginas cómo sería vivir en la cuarta dimensión? 🚨 Antes de seguir leyendo, entra al enlace de mi perfil y descubre LO INEXPLICABLE. Lo que vas a encontrar podría desafiar toda tu realidad. 🕵️‍♂️ Vivir en la cuarta dimensión significaría controlar el tiempo, ver pasado, presente y futuro a la vez, e incluso recordar vidas anteriores. Pero… ¿está nuestro cerebro preparado para eso? 🤯 Si algún día llegáramos ahí, ¿seguiríamos siendo humanos o nos convertiríamos en algo completamente distinto? 🔎 Algunas preguntas son demasiado profundas para ser ignoradas… Descubre más en LO INEXPLICABLE. #loinexplicable #cuartadimension #realidad #universo #tiempo #dimensiones #misterios #ciencia #datosprohibidos`, /*1*/
  `El núcleo del demonio: Cuando la curiosidad se volvió fatal. El núcleo del Demonio era una pequeña esfera de plutonio diseñada para bombas atómicas. Estuvo peligrosamente cerca de alcanzar una masa crítica, desencadenando una reacción en cadena nuclear autosostenible. El plutonio libera neutrones cuando los átomos se dividen; si demasiados neutrones rebotan, la reacción se intensifica rápidamente. En 1945, Harry Daghlian dejó caer un ladrillo que refleja neutrones cerca del núcleo, causando una explosión fatal de radiación. Murió semanas después. En 1946, Louis Slotin usó un destornillador para separar mitades metálicas, pero se deslizó, encerrando completamente el núcleo. Le siguió un flash masivo de radiación, matándolo en 9 días. Estos accidentes demostraron lo fácilmente que una reacción en cadena mortal podría comenzar sin una explosión.`, /*2*/
  `¿Sabías que tenemos un libro llamado “Lo Inexplicable: Perderás la fe en la Humanidad” que está siendo muy polémico ya que expone la VERDAD de este mundo? Y puedes leerlo desde el link de nuestra biografía 👀🔞 #conspiraciones #oculto #iluminati #secretos #misterios #misterioso #curiosidades #inexplicable #casosinsolitos #datos #teoriasconspirativas #conspiracion #desaparecidos #teoria #perturbador #verdades #explicacion #extraterrestre #enigma #ciencia #CienciaProhibida #illuminati #cienciainexplicable

`, /*3*/
  `Imagina vivir rodeado solo de hielo y agua, y de pronto encontrarte con algo totalmente distinto. Así fue el curioso encuentro de unos pingüinos con un hombre que grababa el paisaje helado.`, /*4*/
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

export const cienciainexplicable_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const cienciainexplicable_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const cienciainexplicable_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const cienciainexplicable_array_of_posts = [
  ...cienciainexplicable_images,
  ...cienciainexplicable_videos
];
