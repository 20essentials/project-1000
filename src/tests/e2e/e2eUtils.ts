export const USER_TEST = {
  url: `/?userId=21a87f69-c341-492f-a156-47588fd606dd6`,
  username: 'midudev',
  userId: '21a87f69-c341-492f-a156-47588fd606dd6',
  prefixUrl: 'https://dominicnikolai.github.io/project-208/assets/m1dudev/',
  followers: 8720322,
  followed: 122,
  profileDescription:
    '👨‍💻 Programación Web con JavaScript Cursos, Tutoriales, Trucos y Consejos',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-208/assets/m1dudev/p3rfil.avif'
};

export const POST_1_USER_TEST = {
  type: 'video',
  videoSrc: 'v1.mp4',
  description: `¿Te cuesta el CSS y el diseño de tu web?
¡Este recurso te va a facilitar la vida!
Crea layouts con Grid de forma visual e interactiva.
Es personalizable y luego te da todo el código que necesitas para tu página.
¡Deja tu corazón si te sirve! #software #programacion #uxui #css3 #webdev`,
  idPost: `${USER_TEST.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
};

export const postUrlFromUserTest = `/?userId=${USER_TEST.userId}&postId=${POST_1_USER_TEST.idPost}`;
export const homeURL = '/';
export const searchQueryValue = 'hello';
export const searchURL = `/?search=${searchQueryValue}`;
export const uploadURL = '/?upload=view';
export const inboxURL = '/?inbox=view';
export const profileURL = '/?profile=view';
export const queryParam = {
  userId: 'userId',
  postId: 'postId',
  search: 'search',
  inbox: 'inbox',
  upload: 'upload',
  profile: 'profile'
} as const;
