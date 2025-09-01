import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'neuromark';
const userId = '';
const prefixUrl = '';
const followers = 536_720;
const followed = 98;
const profileDescription = 'marketing';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Multiplicó sus ventas x5 con una idea simple 🍡 Mini helados en palito, fáciles de comer y perfectos para probar muchos sabores 😋 Una idea divertida, visual y con potencial global 🌍 Sígueme para descubrir más ideas de negocio y visita el link de mi bio para aprender sobre a captar clientes🚀 #ideasdenegocio #emprendedores #negocioscreativos #tendenciasgastronomicas #negocioviral #emprendimientoexitoso
`, /*1*/
  `🧡 Cheetos llevó el marketing divertido a otro nivel: crearon unos pantalones naranjas para que pudieras limpiarte los dedos después de comer. 👖 Diseñaron estos pantalones del mismo color que el polvo de Cheetos, con textura tipo toalla en los muslos. 🔥 Lo que parecía una broma terminó siendo un éxito total: se agotaron en solo un día. 👇 ¿Y tú? ¿Los comprarías? Comparte este reel y sígueme para más ideas creativas de marketing. #marketingcreativo #publicidadqueinspira #storytellingvisual #ideasdenegocio #marketingdeimpacto #reelsdevalor`, /*2*/
  `
#startupespañola #innovación #maquinadecubatas #negocios2025 #reelsnegocios #socialmediamarketingagency`, /*3*/
  `🥭 ¿Te imaginas comer mango como si fueran fideos? 🔪 Este emprendedor tuvo una idea brillante: usa una máquina para cortar los mangos en tiras y servirlos como un plato totalmente nuevo. 🌶️ Lo mejor es que puedes añadir sal, especias o los toppings que quieras para crear tu combinación perfecta. 🇪🇸 Esta tendencia ya empieza a crecer en España porque transforma una fruta común en una experiencia única. 👇 ¿Probarías estos “fideos de mango”? Déjamelo en los comentarios y comparte este reel si te sorprendió. #innovacióngastronómica #emprendimientocreativo #foodielïfe #tendencias2025 #ideasdenegocio`, /*4*/
  `🚲 ¿Has visto lavaderos de coches, pero alguna vez un lavadero automático para bicicletas? ✨ En Alemania han creado una máquina que limpia tu bici desde todos los ángulos, sin que tengas que mover un dedo. 💡 Con cada vez más personas usando la bicicleta, mantenerla limpia se ha vuelto un reto… hasta ahora. ⚡ Solo entras con tu bici, activas la máquina, y en pocos minutos queda impecable por una tarifa muy accesible. 🌍 ¿Te imaginas tener esta innovación en tu ciudad? Podrías ser el primero en traerla. 📈 Sígueme para más ideas brillantes. #innovaciónurbana #movilidadsostenible #bicicletaslimpias #tecnologíapráctica #solucionesurbanas #reelsinnovadores`, /*5*/
  `Estas crepes no son normales… y por eso todo el mundo habla de ellas 🥞🌈 Banana, Oreo, colores vibrantes y una presentación que atrapa solo con verla 📸🍌 Baby Crepe convirtió un postre simple en una marca viral en Tailandia. Guarda este video y sígueme para más ideas que combinan sabor, estética y negocio 🚀 #crepescreativas #ideasdenegocio #brandingvisual #marketinggastronómico #tendenciasfoodie #reelsemprendedores`, /*6*/
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

export const neuromark_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const neuromark_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const neuromark_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const neuromark_array_of_posts = [
  ...neuromark_images,
  ...neuromark_videos
];
