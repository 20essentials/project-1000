import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'dante_leoncini';
const userId = '';
const prefixUrl = '';
const followers = 34_832;
const followed = 177;
const profileDescription = `Artista 3D y Programador`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#fernet #fernetbranca #argentina #cordoba #b3d #blender #blendercommunity #3d #3dmodeling #3dmodel #software #symbian #nokia #retro #uv`, /*1*/
  `Quake 3 funcionando en un Nokia N95 del año 2007!! #pc #pcgaming #quake #quakechampions #quake3 #nokia #symbian #retro #classic #videogames #playstation #ps2 #sony #dreamcast #sega #technology #doom #nostalgia #linux #software #development #gaming #nintendo #apple #iphone13 #iphone11 #android`, /*2*/
  `Efecto de half-life 2 recreados con openGL ES 1.1!! Con algo de trabajo se podria hacer la intro de hl2 completa! Creo que seria una gran demo. #hl #hl2 #halflife #halflife2 #valve #steam #linux #pc #pcgaming #nokia #symbian #dev #development #opengl #retro #retrogaming #videogames #gaming #n95`, /*3*/
  `Probando simular un control de Xbox 360 con un Nokia atravesado del wifi. La pc con Ubuntu/linux tiene un pequeño server que simula un control de Xbox y escucha al Nokia en el puerto 5000. Al simular ser un control de Xbox. Automáticamente anda en casi todos los juegos de Steam. Desgraciadamente algo está andando mal. Se pierden paquetes. Se mantiene apretando teclas y no suelta… le tendría que dedicar más tiempo a ver si puedo hacer que sea usable.
#nokia #symbian #dev #retro #n95 #steam #silksong #gaming #xbox #xbox360 #control #gamepad`, /*4*/
  `ClassicCube. Port creado por nnproject. Siempre me preguntan o piden un por de minecraft. Por suerte para mí, ya alguien lo hizo. Lo que no entiendo es porque nadie subió videos o imágenes. Me enteré de pura casualidad mirando la página de nnproject.

English: ClassicCube. Port created by nnproject. I'm always being asked for or requested a Minecraft port. Luckily for me, someone already made one. What I don't understand is why nobody uploaded any videos or images. I found out by pure chance while looking at the nnproject page.
#nokia #symbian #retro #minecraft #port`, /*5*/
  `Probando la pantalla táctil con Whisk3D. La verdad que se siente bastante bien y, gracias al teclado, puedo mantener apretado Shift para mover la cámara de forma cómoda y rápida. Aunque es difícil mostrarlo con una sola mano. Cuando esté más pulido, seguramente lo suba. Inglés: Testing the touchscreen with Whisk3D. It actually feels pretty good, and thanks to the keyboard, I can hold down Shift to move the camera comfortably and quickly. Although it’s hard to show with just one hand. Once it’s more polished, I’ll probably upload it. #nokia #symbian #retro #3dart #b3d #whisk3d #dev #opengl #smarthphone #3d #3dmodelling`, /*6*/
  `#whisk3d #symbian #nokia #retro #3dart #b3d #blender #dev #blender3d #blendercommunity #opengl #crashbandicoot #ps1 #playstation #naughtydog #psone #lowpoly #indidev #gaming #gamedev #gaming`, /*7*/
  `#nokia #symbian #retro #whisk3d #crashbandicoot #ps1 #psx #psxgames #lowpoly #animation #shapekeys #animacion`, /*8*/
  `El modelo más pesado que he cargado hasta la fecha: 120.820 triángulos 💀 ¡y es solo la cabeza! El personaje completo tiene 185.550. Solo para darse una idea, Arthur Morgan de Red Dead Redemption 2 tiene 62.300 triángulos. El modelo de Ella Freya tiene más polígonos que píxeles tiene la pantalla del Nokia N95 (320x240 = 76.800 píxeles). Hay algunos errores gráficos que creo que se deben a un desbordamiento de memoria. Los índices los guardaba en valores de 16 bits, o sea, solo podía almacenar índices entre 0 y 65.536. Después aumentaré el valor a 32 bits a ver si se soluciona. Aunque, aun así... ¿por qué alguien usaría modelos así en un viejo Nokia? xD. Otro detalle increíble es que tiene modeladas hasta las pestañas. Normalmente, se usa una geometría y se le aplica una textura. Si optimizo el modelo, bajo la geometría y la calidad de las texturas, seguiría viéndose increíble, ya que sería imposible notar todo ese nivel de detalle en una pantalla con solo 240p de resolución.
`, /*9*/ 
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

export const dante_leoncini_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const dante_leoncini_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const dante_leoncini_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const dante_leoncini_array_of_posts = [
  ...dante_leoncini_images,
  ...dante_leoncini_videos
];
