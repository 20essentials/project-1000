import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'yefertech';
const userId = '';
const prefixUrl = '';
const followers = 322_832;
const followed = 159;
const profileDescription = `💻 Tecnología a tu alcance, con lógica y estilo. 💻
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 7;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#SoftwareDevelopment #GestiónDocumental #DesarrolloDeSoftware #UML #IngenieríaDeSoftware #PlaneaciónDeSoftware #Programación #DiagramaDeClases #CasosDeUso #DocumentManagement #Desarrollador #AprendiendoProgramación #ProyectoDeSoftware
`, /*1*/
  `🎨 Diseñando una interfaz atractiva y funcional con Figma - Avance 2 🎨

En este segundo avance trabajamos el diseño de interfaz y experiencia de usuario con Figma, partiendo del diagrama de despliegue anterior. Seleccionamos colores, fuentes, componentes reutilizables y prototipamos la navegación para asegurar una experiencia intuitiva y agradable.

¿Tienes sugerencias o dudas sobre diseño UX/UI? ¡Coméntalas! 👨‍💻🎨

#DiseñoUI #UXUI #Figma #ExperienciaDeUsuario #InterfazDeUsuario #DesarrolloDeSoftware #Prototipado #ComponentesUI #DiseñoWeb #DiseñoDigital #SoftwareDesign #Dribbble #Uiverse #DesignSystem #InterfazAtractiva`, /*2*/
  `🗄️ Diseño de base de datos: el corazón del software – Avance 3 🗄️

En este tercer avance trabajamos el diseño de la base de datos partiendo del diagrama de clases. Usamos ChartDB como herramienta visual, y definimos las relaciones y tablas clave para un gestor de bases de datos relacional, considerando también MongoDB como alternativa.

Este paso es crucial: un buen modelo de datos permite escalar, evitar errores y asegurar el crecimiento del software. 👨‍💻🗃️

¿Tienes dudas sobre relaciones o normalización? ¡Déjalas en los comentarios!

#BaseDeDatos #MySQL #MongoDB #DiseñoDeSoftware #ModeloRelacional #ChartDB #DesarrolloDeSoftware`, /*3*/
  `📄 Creando el proyecto en Next.js: un solo entorno para frontend y backend – Avance 4 📄

En este cuarto avance iniciamos la construcción del software usando Next.js, un potente framework de React. Creamos una RestAPI dentro del mismo proyecto aprovechando las API Routes, logrando que frontend y backend convivan de forma fluida.

Esta estructura facilita el mantenimiento, la escalabilidad y futuras integraciones con apps móviles o servicios externos. ¡Una sola base para múltiples plataformas! 🚀💻

¿Quieres saber más sobre Next.js o cómo estructurar un proyecto escalable? ¡Déjamelo saber en los comentarios!

#NextJS #ReactJS #RestAPI #FullStackDevelopment #WebDevelopment #Frontend #Backend #AppRoutes #TailwindCSS #TypeScript #TurboPack #NextJSTutorial #IngenieríaDeSoftware #NextJS13 #ProgramaciónWeb`, /*4*/
  `🎯 Control total del proyecto con Git – Avance 5 🎯

En este quinto avance configuramos Git, el sistema de control de versiones por excelencia. Nos permite gestionar cambios, crear ramas, retroceder en el tiempo y mantener un historial limpio del desarrollo.

Ya sea trabajando solo o en equipo, Git es clave para construir software escalable y ordenado.

¿Aún no usas Git en tus proyectos? ¡Es el momento de empezar! ⚙️🧠

#Git #ControlDeVersiones #DesarrolloDeSoftware #NextJS #VisualStudioCode #GitLens #GitConfig #Repositorios #SoftwareEscalable #DevTools #Programación #IngenieríaDeSoftware #GitHub #CodeManagement`, /*5*/
  `⚙️ Configuración inicial y variables de entorno – Avance 6 ⚙️

En este sexto avance configuramos las variables de entorno necesarias para ejecutar correctamente el software. Desde la conexión a la base de datos hasta la creación del usuario administrador, todo se valida paso a paso para asegurar una instalación guiada, segura y funcional.

Un sistema bien configurado desde el inicio evita errores futuros y garantiza un despliegue exitoso. ⚙️🔐

¿Te interesa implementar una instalación guiada en tus proyectos? ¡Cuéntame en los comentarios!

#VariablesDeEntorno #NodeJS #ConfiguraciónInicial #DesarrolloDeSoftware #NextJS #InstalaciónGuiada #DevOps #SoftwareSeguro #JWT #MongoDB #MySQL #Programación #BackendDev #ConfiguraciónDeProyectos`, /*6*/
  `🏳️ Ejecuta tu app en cualquier sistema con Docker - Avance 7 🏳️

En este séptimo avance aprendemos a usar Docker para evitar el típico "en mi máquina sí funciona".

Creamos un contenedor con MongoDB, aislado y funcional, que no depende del sistema operativo y no deja basura en tu equipo.

Usamos docker run con volumen, nombre personalizado y redirección de puertos.

Así garantizamos portabilidad, orden y un entorno limpio para el desarrollo. 🐳💻

¿Aún no trabajas con contenedores? ¡Este es el momento ideal para empezar!

#Avance7 #Docker #MongoDB #Contenedores #DevOps #Infraestructura #DesarrolloDeSoftware #FullStackDev #Microservicios #DockerEnEspañol #BaseDeDatos #CleanCode #MongoCompass #BackendDev`, /*7*/
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

export const yefertech_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const yefertech_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const yefertech_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const yefertech_array_of_posts = [
  ...yefertech_images,
  ...yefertech_videos
];
