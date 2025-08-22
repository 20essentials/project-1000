import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

const username = 'midudev';
const userId = '21a87f69-c341-492f-a156-47588fd606dd6';
const prefixUrl =
  'https://dominicnikolai.github.io/project-208/assets/m1dudev/';
const followers = 8_720_322;
const followed = 122;
const profileDescription =
  '👨‍💻 Programación Web con JavaScript Cursos, Tutoriales, Trucos y Consejos';
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

export const midudev_commonProps = generateExactlyCommonProps({
  userId,
  username,
  profileImageSrc,
  followers,
  followed,
  profileDescription
});

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `¿Te cuesta el CSS y el diseño de tu web?
  ¡Este recurso te va a facilitar la vida!
  Crea layouts con Grid de forma visual e interactiva.
  Es personalizable y luego te da todo el código que necesitas para tu página.
  ¡Deja tu corazón si te sirve! #software #programacion #uxui #css3 #webdev`,
    idPost: `${midudev_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'image',
    arrayImages: ['v2.avif'],
    description: `✓ Dar una charla en inglés sobre JavaScript y React ✓ Delante de 1000 personas en Ámsterdam ✓ Tus héroes viéndote desde la primera fila ✓ Y marcarte un live-coding sin problemas El viernes participé en la React Summit para hablar de JavaScript y React. Desarrollé en directo un Global State Manager en 50 líneas de código basado en el código de Zustand. Sin contexto, providers ni estados. ¡Deja un comentario si te gustaría que hiciese un directo para enseñar cómo lo hice! Además pude disfrutar de Amsterdam con la mejor compañía. :) #react #javascript #programacion #software #programadores`,
    idPost: `${midudev_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Pon en tu buscador favorito "replit 100 days python" #python #backend`,
    idPost: `${midudev_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`
  },
  {
    type: 'image',
    arrayImages: ['v4.avif'],
    description: `Compártelo a ese amigo que le gustan los chistes malos. #chiste #javascript #programacion #software`,
    idPost: `${midudev_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `¡Aprende Programación, Cloud y DevOps practicando!
Servidores gratis con ejercicios reales.
✓ Practica Git y servidores Linux
✓ Crea y prueba recursos AWS sin miedo
✓ Kubernetes, Docker, Terraform y más
No hace falta registro, se llama Kode Kloud y tiene un montón de laboratorios gratuitos.
Si te sirve, compártelo y deja tu like. #software #devops #aws #linux #programadores`,
    idPost: `${midudev_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'image',
    arrayImages: ['v6.avif'],
    description: `Ya no voy a programar más CRUD!
  ¿Y tú cuál prefieres como programador? #chiste #jajaja #programacion #software`,
    idPost: `${midudev_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `¿Preparando una entrevista técnica? Recurso con una guía que te ayuda con:
- Patrones de diseño y arquitectura
- Buenas prácticas de desarrollo
- Clean Code explicado fácil
- Algoritmos y estructuras clave
- Preguntas frecuentes por lenguaje y stack
Al final del vídeo tienes cómo acceder a la web con el contenido.
¡Comparte con alguien que esté buscando trabajo en desarrollo! #software #programacion #programador #informatica #programadores`,
    idPost: `${midudev_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'image',
    arrayImages: ['v8.avif'],
    description: `¿Cuál es tu peor búsqueda como programador?

Las típicas: escribe widht o width, lenght o length, por qué 0.1 + 0.2 no da 0.3, qué narices es una rama, y hablando con un patito de goma para depurar errores existenciales 🐤

Pero no te sientas mal, buscar las respuestas en Internet no te hace peor programador.

¿Tú también has buscado cosas así? Confiesa en los comentarios 👇 #chiste #jajaja #programacion #software`,
    idPost: `${midudev_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Ahora puedes compartir tu proyecto local directamente desde Visual Studio Code, sin instalar nada.
Solo activa el Port Forwarding y tendrás una URL pública para enseñar tu trabajo.
Ideal para mostrar avances a tu equipo mientras desarrollas:
- Marca la visibilidad como Pública si vas a compartirla.
- Úsalo solo de forma temporal y con gente de confianza.
- No es un sistema de despliegue, es para pruebas rápidas o feedback.
Es una alternativa a ngrok pero sin instalar nada.
Está integrado en el editor y funciona muy bien. ¿Lo has probado ya? #software #programacion`,
    idPost: `${midudev_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'image',
    arrayImages: ['v10.avif'],
    description: `¿A ti también te pasa? Si eres programador, seguro que sí.

La carpeta “utils” es como ese cajón donde guardas todo lo que no sabes dónde poner.

Funciones sueltas, pequeños scripts, y herramientas que no tienen un lugar claro, pero que necesitas tener a mano.

Todos tenemos una, y aunque parezca un desorden, siempre terminas recurriendo a ella.

¡Admite que sin ella, estarías perdido! #codigo #informatica #programacion #software`,
    idPost: `${midudev_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `¿Buscas un calendario ligero y fácil de integrar en tu web?
Este componente tiene todo lo que necesitas:
✓ Solo 9 KB
✓ Personalización con CSS
✓ Soporte para rangos, múltiples meses y más
✓ Compatible con cualquier framework (¡sí, cualquiera!)
Está hecho con Web Components, así que lo puedes usar donde quieras sin complicaciones.
Instálalo con:
> npm install cally
Si te parece útil, ¡regálale un ❤️ y compártelo con quien lo necesite! #midudev #programacion #cool #CSS`,
    idPost: `${midudev_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'image',
    arrayImages: ['v12.avif'],
    description: `¡Poca sabe esto de HTML!

Puedes hacer submit de cualquier formulario desde un botón... ¡que no está dentro del formulario!

He visto muchas veces gente haciendo esto con código JavaScript... ¡Y no es necesario!

Sólo tienes que tener un id único en el formulario, y usar el atributo form en el botón para indicar qué formulario debe enviar.

¿Lo conocías? Si lo acabas de aprender, deja un fueguito en los comentarios #frontend #informatica #programacion #software`,
    idPost: `${midudev_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `Una joyita para devs web:
Guía completa de patrones de diseño y arquitectura para tus proyectos con JavaScript y TypeScript.
- Código comentado
- Diagramas claros
- Buenas prácticas
- Optimización para React y Vue
Y lo mejor: puedes descargar el libro completo en PDF (+400 páginas) totalmente gratis.
Una lectura obligatoria si quieres llevar tu código al siguiente nivel. #fresh #designs #patterns #informatica`,
    idPost: `${midudev_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  },
  {
    type: 'image',
    arrayImages: ['v14.avif'],
    description: `Hacer un pequeño cambio en CSS... y ver cómo toda tu web se descompone como un castillo de cartas 😅

¿Te suena?

Aprender CSS no es opcional si te dedicas al frontend. No es solo “poner colorines”:

Es adaptar tu web a móviles sin romper nada

Es evitar bugs visuales raros

Es hacer una web accesible y usable

Y sí, ¡es evitar que Pikachu te mire así cada vez que tocas un margin!

No subestimes el poder de una línea de CSS mal escrita... o bien dominada. #css3 #informatica #programacion #software`,
    idPost: `${midudev_commonProps.userId}-43973d48-d59b-4dc7-aaa1-c5e69ea055f7`
  },
  {
    type: 'video',
    videoSrc: 'v15.mp4',
    description: `Aprende Python mientras juegas gracias a Code Strike.
Lo tienes sin coste en Steam por tiempo limitado.
Es un videojuego de acción, aventura y programación.
Tendrás que hackear y resolver puzzles con código Python mientras avanzas en el juego.
Disponible para Windows.
¡Me encanta el concepto! Deja tu ❤️ para mandarle tu apoyo. #css3 #designs #patterns #informatica`,
    idPost: `${midudev_commonProps.userId}-9f278864-6362-4e81-a406-fc99443828a1`
  },
  {
    type: 'image',
    arrayImages: ['v16.avif'],
    description: `¿Usas console.log para todo?

Con todas las herramientas de depuración que tenemos hoy en día… :D

Pero seguimos usándolo. ¿Por qué?

✔︎ Es rápido
✔︎ No requiere configuración
✔︎ Funciona en cualquier entorno

Aunque también tiene sus contras:
✘ Ensucia el código
✘ Es fácil olvidarlo en producción
✘ Puede ocultar errores reales

¿Tú lo sigues usando o ya migraste al debugger?. #css3 #informatica #programacion #software`,
    idPost: `${midudev_commonProps.userId}-e8023a99-ae84-46f0-9f6f-133d9cf5b741`
  },
  {
    type: 'video',
    videoSrc: 'v17.mp4',
    description: `¿Buscas ahorrar tiempo desarrollando interfaces?
Esta web es un tesoro escondido para devs.
Más de 1500 plantillas HTML gratuitas con componentes de UI listos para usar.
Compatible con React, Angular, Vue, Astro, Next.js, y también con frameworks como Bootstrap y Bulma.
Se llama HTMLRev y te puede salvar más de una tarde de código. #html5 #designs #uxui #informatica`,
    idPost: `${midudev_commonProps.userId}-53b20bf6-9713-4530-aee7-e0b96ba95280`
  },
  {
    type: 'image',
    arrayImages: ['v18.avif'],
    description: `A veces escribimos código tan rápido y con tanta confianza que ni nos preocupamos por documentarlo o dejarlo claro.

Porque en ese momento lo entendemos perfectamente…
¿para qué explicar algo que es “obvio”? 😅

Pero luego pasa el tiempo.

Y cuando vuelves a ese archivo, lo miras como si lo hubiera escrito otra persona en otro idioma, desde otra dimensión. #programador #informatica #programacion #software`,
    idPost: `${midudev_commonProps.userId}-27c1569a-7950-48dc-9384-079e46448ba5`
  },
  {
    type: 'video',
    videoSrc: 'v19.mp4',
    description: `Recurso para crear diagramas interactivos de tu SQL.
Funciona con mySQL, PostgreSQL, SQLite y más.
Si eres programador o estás estudiando una ingeniería, seguro que te salva la vida alguna vez. #mysql #prgramador #uxui #software`,
    idPost: `${midudev_commonProps.userId}-8d9b86b2-4f3c-46b3-be0c-4157fecc9ae6`
  },
  {
    type: 'image',
    arrayImages: ['v20.avif'],
    description: `Si usas software libre:
✅ Da las gracias
✅ Reporta bugs con respeto
✅ Dona si puedes
✅ Y si tienes tiempo... ¡contribuye!

🤝 El open source no es gratis, es un regalo que alguien ya pagó con su tiempo y esfuerzo. #opensource #informatica #programacion #software`,
    idPost: `${midudev_commonProps.userId}-b8dee4fb-3715-4c10-a916-419d81ea91f4`
  }
];

export const midudev_array_of_posts = generateArrayPosts({
  PREFIX: prefixUrl,
  ARRAY_CONTENT
});
