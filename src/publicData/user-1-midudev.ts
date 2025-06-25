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
  profileDescription: '👨‍💻 Programación Web con JavaScript Cursos, Tutoriales, Trucos y Consejos'
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
    shared: 520,
    
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
    shared: 840,
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
    shared: 840,
  }
];
