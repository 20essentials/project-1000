import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'abrilbelmonte';
const userId = '7bc383a9-15f0-4bfe-b813-51bfabd29a71';
const prefixUrl = 'https://dominicnikolai.github.io/project-299/assets/abrilbelmonte/';
const followers = 157_239;
const followed = 79;
const profileDescription = 'Diseñadora Gráfica';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#diseño #identidadvisual #packaging #fotografía #blog #adobeillustrator #`, /*1*/
  ` #publicidad #webdesign #uxui #diseñoweb #wixstudio #diseñografico #diseño #ilustracion`, /*2*/
  `#Publicidad #WixStudio #diseñoweb #uxui #diseño #diseñadorgrafico #website #web #webdesigner #empaques #blender3d`, /*3*/
  `Cotiza con nosotros en enigmabrandstudio.com 🌟Branding | 🎨 Ilustración | 🎁 Packaging | 💻Web Design #empaque #diseñadora #blender3d #clipstudiopaint #samsung #diseño #logo #packaging #packagingdesign #diseñador #diseñadorgrafico #branding #adobeillustrator`, /*4*/
  `Cotiza en enigmabrandstudio.com #packaging #branding #packagingdesign #asmr #adobe #empaque #diseñodeempaque #diseñodemarca #asmrsounds #asmrvideo #emprendedor #empresario #marketing`, /*5*/
  `Rediseña tu marca en enigmabrandstudio.com ✨️ #diseño #logo #diseñodelogo #logodesigner #branding #diseñodemarca #diseñadorgrafico #adobeillustrator #logotipo #imagotipo #inmobiliaria #inmuebles #departamento #estrategiademarca #estrategiademarketing #inmobiliarias #inmobiliarios #inmueble #marketing`, /*6*/
  `✨️Diseña tu marca con nosotros en enigmabrandstudio.com #adobe #adobeillustrator #branding #packaging #empaque #etiqueta #estrategiademarca #marketingtips #branding #diseñodemarca #negocioonline #negociopropio #branding #estrategia #estrategiamarketingdigital #marca #emprendedor #diseñodelogo #identidadvisual #manualdemarca #diseño`, /*7*/
  `Cotiza tu diseño en enigmabrandstudio.com #empaque #diseñodeempaque #marketing #branding #identidadvisual #diseñodemarca #diseñodelogo #emprendedor #empresario #etiqueta #impresión #packaging #estrategiademarca #estrategiademarketing #logo`, /*8*/
  `✨️ Cotiza en enigmabrandstudio.com Branding | Packaging | Diseño Web ✅️Te asistimos en todo el proceso de lanzar tu marca desde diseño hasta marketing #diseñografico #diseñodelogo #diseñodemarca #nvidia #nvidiaserie40 #nvidiageforce #branding #marketingtips #adobeillustrator #logo #diseño #adobe #diseñadora #empaque #etiqueta #blender #3dblender #blender3d #3d #samsung #clipstudiopaint #tabs10 #tabs10ultra #samsunggalaxy #lima #peru #madrid #españa`, /*9*/ 
  `Mi nuevo case para mi Tab S10 Ultra ✨️ #tabs10ultra #samsungtab #samsungtablet #samsung #lima #peru #case #aliexpress #temu #tablet #unboxing #ipad`, /*10*/
  `¿Crees que el minimalismo es una buena estrategia visual para las marcas? #minimalismo #diseñografico #diseño #adobe #adobeillustrator #adobephotoshop`, /*11*/
  `¿Se imaginan que Starbucks lo vea? 🤯 No olviden votar por su cup favorito 👇🏻 #starbucks #diseño #empaque #starbuckscup #diseñadora #diseñadoragrafica`, /*12*/
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

export const abrilbelmonte_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const abrilbelmonte_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const abrilbelmonte_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const abrilbelmonte_array_of_posts = [
  ...abrilbelmonte_images,
  ...abrilbelmonte_videos
];
