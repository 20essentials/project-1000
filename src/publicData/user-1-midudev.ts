/*
  Notas
   - The Description can be considered as the title in TikTok.
   - The Last Elements are the first published
     - The first Element are news
     - (Usare unshift para agregar elemento al primer elemento del array)
   - The Format Date is: ISO 8601
    - Thanks to the dateOfPublication I can get the "Time Ago" for example "2 days ago"
   - There will be only an username (not a name)
   - I don't do the option of repost.
   
*/

export const midudev_commonProps = {
  userId: 'b5a8904a-310a-4757-808c-3e5ca8b9609d',
  username: 'midudev',
  profileImageSrc: '/assets/profileTest/midu-profile-testing.jpeg',
  following: false,
  followers: 323_302,
  totalLikes: 6_800_000,
  followed: 38,
  profileDescription:
    '👨‍💻 Programación Web con JavaScript Cursos, Tutoriales, Trucos y Consejos'
};

export const midudev_array_of_posts = [
  {
    videoSrc: '/assets/profileTest/midu-video1.mp4',
    description: `¿Te cuesta el CSS y el diseño de tu web?
  ¡Este recurso te va a facilitar la vida!
  Crea layouts con Grid de forma visual e interactiva.
  Es personalizable y luego te da todo el código que necesitas para tu página.
  ¡Deja tu corazón si te sirve!`,
    tags: ['software', 'programacion', 'uxui', 'css3', 'webdev'],
    dateOfPublication: '2025-06-24T14:30:00',
    totalViewsOfThePost: 35_200,
    hearts: 3601,
    comments: 9,
    saved: 2621,
    isSaved: false,
    shared: 520
  },
  {
    description: `✓ Dar una charla en inglés sobre JavaScript y React ✓ Delante de 1000 personas en Ámsterdam ✓ Tus héroes viéndote desde la primera fila ✓ Y marcarte un live-coding sin problemas El viernes participé en la React Summit para hablar de JavaScript y React. Desarrollé en directo un Global State Manager en 50 líneas de código basado en el código de Zustand. Sin contexto, providers ni estados. ¡Deja un comentario si te gustaría que hiciese un directo para enseñar cómo lo hice! Además pude disfrutar de Amsterdam con la mejor compañía. :)`,
    tags: ['react', 'javascript', 'programacion', 'software', 'programadores'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 20_500,
    hearts: 665,
    comments: 7,
    saved: 32,
    isSaved: false,
    shared: 320,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },

  {
    videoSrc: '/assets/profileTest/midu-video2.mp4',
    description: `Pon en tu buscador favorito "replit 100 days python"`,
    tags: ['python', 'backend'],
    dateOfPublication: '2025-06-22T14:30:00',
    totalViewsOfThePost: 52_500,
    hearts: 4594,
    comments: 39,
    saved: 3088,
    isSaved: false,
    shared: 840
  },
  {
    description: `Compártelo a ese amigo que le gustan los chistes malos.`,
    tags: ['chist', 'javascript', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 32_500,
    hearts: 765,
    comments: 7,
    saved: 80,
    isSaved: false,
    shared: 280,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
  {
    videoSrc: '/assets/profileTest/midu-video3.mp4',
    description: `¡Aprende Programación, Cloud y DevOps practicando!
Servidores gratis con ejercicios reales.
✓ Practica Git y servidores Linux
✓ Crea y prueba recursos AWS sin miedo
✓ Kubernetes, Docker, Terraform y más
No hace falta registro, se llama Kode Kloud y tiene un montón de laboratorios gratuitos.
Si te sirve, compártelo y deja tu like.`,
    tags: ['software', 'devops', 'aws', 'linux', 'programadores'],
    dateOfPublication: '2025-06-20T14:30:00',
    totalViewsOfThePost: 101_800,
    hearts: 11_600,
    comments: 39,
    saved: 3088,
    isSaved: false,
    shared: 840
  },
  {
    description: `Ya no voy a programar más CRUD!
¿Y tú cuál prefieres como programador?`,
    tags: ['chist', 'jajaja', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 23_300,
    hearts: 20_500,
    comments: 30,
    saved: 80,
    isSaved: false,
    shared: 700,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
  {
    videoSrc: '/assets/profileTest/midu-video3.mp4',
    description: `¿Preparando una entrevista técnica? Recurso con una guía que te ayuda con:
- Patrones de diseño y arquitectura
- Buenas prácticas de desarrollo
- Clean Code explicado fácil
- Algoritmos y estructuras clave
- Preguntas frecuentes por lenguaje y stack
Al final del vídeo tienes cómo acceder a la web con el contenido.
¡Comparte con alguien que esté buscando trabajo en desarrollo!`,
    tags: [
      'software',
      'programacion',
      'programador',
      'informatica',
      'programadores'
    ],
    dateOfPublication: '2025-06-20T12:30:00',
    totalViewsOfThePost: 78_500,
    hearts: 3909,
    comments: 7,
    saved: 3088,
    isSaved: false,
    shared: 2953
  },
  {
    description: `¿Cuál es tu peor búsqueda como programador?

Las típicas: escribe widht o width, lenght o length, por qué 0.1 + 0.2 no da 0.3, qué narices es una rama, y hablando con un patito de goma para depurar errores existenciales 🐤

Pero no te sientas mal, buscar las respuestas en Internet no te hace peor programador.

¿Tú también has buscado cosas así? Confiesa en los comentarios 👇`,
    tags: ['codigo', 'informatica', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 70_000,
    hearts: 8200,
    comments: 120,
    saved: 90,
    isSaved: false,
    shared: 234,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
  {
    videoSrc: '/assets/profileTest/midu-video3.mp4',
    description: `Ahora puedes compartir tu proyecto local directamente desde Visual Studio Code, sin instalar nada.
Solo activa el Port Forwarding y tendrás una URL pública para enseñar tu trabajo.
Ideal para mostrar avances a tu equipo mientras desarrollas:
- Marca la visibilidad como Pública si vas a compartirla.
- Úsalo solo de forma temporal y con gente de confianza.
- No es un sistema de despliegue, es para pruebas rápidas o feedback.
Es una alternativa a ngrok pero sin instalar nada.
Está integrado en el editor y funciona muy bien. ¿Lo has probado ya?`,
    tags: ['software', 'programacion'],
    dateOfPublication: '2025-06-20T11:30:00',
    totalViewsOfThePost: 38_322,
    hearts: 797,
    comments: 3,
    saved: 381,
    isSaved: false,
    shared: 2008
  },
  {
    description: `¿A ti también te pasa? Si eres programador, seguro que sí.

La carpeta “utils” es como ese cajón donde guardas todo lo que no sabes dónde poner.

Funciones sueltas, pequeños scripts, y herramientas que no tienen un lugar claro, pero que necesitas tener a mano.

Todos tenemos una, y aunque parezca un desorden, siempre terminas recurriendo a ella.

¡Admite que sin ella, estarías perdido!
`,
    tags: ['codigo', 'informatica', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 7000,
    hearts: 800,
    comments: 70,
    saved: 234,
    isSaved: false,
    shared: 1234,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
  {
    videoSrc: '/assets/profileTest/midu-video3.mp4',
    description: `¿Buscas un calendario ligero y fácil de integrar en tu web?
Este componente tiene todo lo que necesitas:
✓ Solo 9 KB
✓ Personalización con CSS
✓ Soporte para rangos, múltiples meses y más
✓ Compatible con cualquier framework (¡sí, cualquiera!)
Está hecho con Web Components, así que lo puedes usar donde quieras sin complicaciones.
Instálalo con:
> npm install cally
Si te parece útil, ¡regálale un ❤️ y compártelo con quien lo necesite!`,
    tags: ['midudev', 'programacion', 'cool', 'CSS'],
    dateOfPublication: '2025-06-20T10:30:00',
    totalViewsOfThePost: 50_000,
    hearts: 1843,
    comments: 5,
    saved: 200,
    isSaved: false,
    shared: 720
  },
 {
    description: `¡Poca sabe esto de HTML!

Puedes hacer submit de cualquier formulario desde un botón... ¡que no está dentro del formulario!

He visto muchas veces gente haciendo esto con código JavaScript... ¡Y no es necesario!

Sólo tienes que tener un id único en el formulario, y usar el atributo form en el botón para indicar qué formulario debe enviar.

¿Lo conocías? Si lo acabas de aprender, deja un fueguito en los comentarios 
`,
    tags: ['frontend', 'informatica', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 2000,
    hearts: 5487,
    comments: 70,
    saved: 334,
    isSaved: false,
    shared: 720,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
  {
    videoSrc: '/assets/profileTest/midu-video3.mp4',
    description: `Una joyita para devs web:
Guía completa de patrones de diseño y arquitectura para tus proyectos con JavaScript y TypeScript.
- Código comentado
- Diagramas claros
- Buenas prácticas
- Optimización para React y Vue
Y lo mejor: puedes descargar el libro completo en PDF (+400 páginas) totalmente gratis.
Una lectura obligatoria si quieres llevar tu código al siguiente nivel.`,
    tags: ['fresh', 'designs', 'patterns', 'informatica'],
    dateOfPublication: '2025-06-20T10:30:00',
    totalViewsOfThePost: 120_500,
    hearts: 4479,
    comments: 5,
    saved: 3104,
    isSaved: false,
    shared: 3200
  },
{
    description: `Hacer un pequeño cambio en CSS... y ver cómo toda tu web se descompone como un castillo de cartas 😅

¿Te suena?

Aprender CSS no es opcional si te dedicas al frontend. No es solo “poner colorines”:

Es adaptar tu web a móviles sin romper nada

Es evitar bugs visuales raros

Es hacer una web accesible y usable

Y sí, ¡es evitar que Pikachu te mire así cada vez que tocas un margin!

No subestimes el poder de una línea de CSS mal escrita... o bien dominada.
`,
    tags: ['css3', 'informatica', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 12_500,
    hearts: 10000,
    comments: 200,
    saved: 720,
    isSaved: false,
    shared: 350,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
  {
    videoSrc: '/assets/profileTest/midu-video3.mp4',
    description: `Aprende Python mientras juegas gracias a Code Strike.
Lo tienes sin coste en Steam por tiempo limitado.
Es un videojuego de acción, aventura y programación.
Tendrás que hackear y resolver puzzles con código Python mientras avanzas en el juego.
Disponible para Windows.
¡Me encanta el concepto! Deja tu ❤️ para mandarle tu apoyo.`,
    tags: ['css3', 'designs', 'patterns', 'informatica'],
    dateOfPublication: '2025-06-20T10:30:00',
    totalViewsOfThePost: 132_649,
    hearts: 14095,
    comments: 42,
    saved: 5927,
    isSaved: false,
    shared: 2362
  },
{
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

¿Tú lo sigues usando o ya migraste al debugger?.
`,
    tags: ['css3', 'informatica', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 27_000,
    hearts: 5738,
    comments: 242,
    saved: 1203,
    isSaved: false,
    shared: 578,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
  {
    videoSrc: '/assets/profileTest/midu-video3.mp4',
    description: `¿Buscas ahorrar tiempo desarrollando interfaces?
Esta web es un tesoro escondido para devs.
Más de 1500 plantillas HTML gratuitas con componentes de UI listos para usar.
Compatible con React, Angular, Vue, Astro, Next.js, y también con frameworks como Bootstrap y Bulma.
Se llama HTMLRev y te puede salvar más de una tarde de código.`,
    tags: ['html5', 'designs', 'uxui', 'informatica'],
    dateOfPublication: '2025-06-20T10:30:00',
    totalViewsOfThePost: 49_166,
    hearts: 4401,
    comments: 10,
    saved: 3892,
    isSaved: false,
    shared: 741
  },
{
    description: `A veces escribimos código tan rápido y con tanta confianza que ni nos preocupamos por documentarlo o dejarlo claro.

Porque en ese momento lo entendemos perfectamente…
¿para qué explicar algo que es “obvio”? 😅

Pero luego pasa el tiempo.

Y cuando vuelves a ese archivo, lo miras como si lo hubiera escrito otra persona en otro idioma, desde otra dimensión.
`,
    tags: ['programador', 'informatica', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 21_500,
    hearts: 4328,
    comments: 234,
    saved: 1234,
    isSaved: false,
    shared: 432,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
  {
    videoSrc: '/assets/profileTest/midu-video3.mp4',
    description: `Recurso para crear diagramas interactivos de tu SQL.
Funciona con mySQL, PostgreSQL, SQLite y más.
Si eres programador o estás estudiando una ingeniería, seguro que te salva la vida alguna vez.`,
    tags: ['mysql', 'prgramador', 'uxui', 'software'],
    dateOfPublication: '2025-06-20T10:30:00',
    totalViewsOfThePost: 68215,
    hearts: 6831,
    comments: 40,
    saved: 4047,
    isSaved: false,
    shared: 731
  },
  {
    description: `Si usas software libre:
✅ Da las gracias
✅ Reporta bugs con respeto
✅ Dona si puedes
✅ Y si tienes tiempo... ¡contribuye!

🤝 El open source no es gratis, es un regalo que alguien ya pagó con su tiempo y esfuerzo.
`,
    tags: ['opensource', 'informatica', 'programacion', 'software'],
    dateOfPublication: '2020-06-24T10:30:00',
    totalViewsOfThePost: 23500,
    hearts: 7500,
    comments: 124,
    saved: 2394,
    isSaved: false,
    shared: 5323,
    arrayImages: [
      'https://mysupercoolprojects.github.io/repo-1/assets/nin4-parod1/1.jpg'
    ]
  },
];
