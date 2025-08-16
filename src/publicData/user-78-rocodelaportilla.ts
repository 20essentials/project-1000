import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'rocodelaportilla';
const userId = '92d73823-d060-4e08-ac4f-c4051b51c252';
const prefixUrl = 'https://dominicnikolai.github.io/project-265/assets/rocodelaportilla/';
const followers = 1_720_320;
const followed = 322;
const profileDescription = 'Cursos de IA y PS🔥';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hice un anuncio para Dior solo con IA y Johnny Depp 🤯🔥`, /*1*/
  `SHREK 5 Tráiler 🔥 #shrek #shrek5`, /*2*/
  `Malcolm en el Chavo del 8 🎥 #malcolminthemiddle #elchavodel8 #chespirito`, /*3*/
  `Gordon el creador de los hacks de #Photoshop revela la verdad🤯`, /*4*/
  `Modifica cualquier cosa de tu video con ACT 2 de Runway 🤯🔥`, /*5*/
  `El secreto para siempre editar fluido 🎥🔥`, /*6*/
  `Creando un final para #BreakingBad solo con la IA del teléfono más viral 🔥 #HONOR400 #GenioDeLaIA`, /*7*/
  `Midjourney ahora también hace videos 🤯🔥`, /*8*/
  `Comenta 🔥 y te envío el link al Club de la IA`, /*9*/ 
  `Comenta 🔥 si quieres más videos de Rudiberto`, /*10*/
  `Hack de Photoshop para separar a tu sujeto del fondo 🔥`, /*11*/
  `Aquí está el prompt, aplica con cualquier logo 🔥👽

Crea un render 3D hiperrealista del logo de Adidas esculpido en una superficie rocosa rugosa y detallada, con relieves profundos y sombras naturales que acentúan la textura de la piedra. Iluminación tipo Rembrandt que resalta el volumen y las grietas, lente 50mm. Estilo cinematográfico con grano de película sutil, bloom leve en zonas iluminadas, materiales realistas, formato vertical.`, /*12*/
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

export const rocodelaportilla_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const rocodelaportilla_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const rocodelaportilla_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const rocodelaportilla_array_of_posts = [
  ...rocodelaportilla_images,
  ...rocodelaportilla_videos
];
