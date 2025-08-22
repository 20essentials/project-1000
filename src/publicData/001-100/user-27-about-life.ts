import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

//falta userId, profilesrc, prefix, profileDescription

export const about_life_commonProps = generateExactlyCommonProps({
  userId: '8b463629-8ec8-4d4a-b32c-89ea36fd67a1',
  username: 'about_life',
  profileImageSrc: 'https://dominicnikolai.github.io/project-214/assets/about-life/p3rfil.avif',
  following: false,
  followers: 413_720,
  totalLikes: 10_900_720,
  followed: 36,
  profileDescription: '🌍 Descubriendo el mundo laboral'
});

const PREFIX = 'https://dominicnikolai.github.io/project-214/assets/about-life/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: [
      '#fyp',
      '#softwareengineer',
      '#profesional',
      '#trabajo',
      '#aprendeentiktok',
      '#aboutlife9596'
    ],
    description: `¿Cuánto cobraba un ingeniero de software hace 10 años?🥱 
`,
    idPost: `${about_life_commonProps.userId}-9fd97a84-c39d-4c2e-872f-53eb5fbdfe4e`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: [
      '#fyp',
      '#trabajo',
      '#profesion',
      '#educacion',
      '#salario',
      '#saludmental',
      '#estudiar',
      '#dinero',
      '#movilidad',
      '#europe'
    ],
    description: `Adivina a qué se dedica 😉 ¿Por qué se quedó en España? 🇬🇧🇪🇸
Ella es de Inglaterra y estudió Filología Hispánica y Catalana, en su último año de carrera se vino a España. El rango salarial de su profesión varía entre 1200-2000€ neto/mes.`,
    idPost: `${about_life_commonProps.userId}-2a04dc1e-8c3e-4950-92d2-470487e3f8e1`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `¡Hola a todos! Esta es la nueva serie de 1 Día de 1 Profesión, donde vamos a pasar un día entero con un profesional. ¿Estáis preparad@s a conocer más a profundidad las diferentes profesiones y descubrir lo que realmente te apasiona a ti?
La protagonista de este primer episodio es Wen, 27 años, empezó a estudiar un ciclo formativo de peluquería y estética a los 16 años y su sueño era un día tener su propia peluquería. Tras muchos años currando, pasando momentos difíciles, altibajos, hoy por hoy, ha logrado montar su peluquería en una zona alta en Barcelona. ¿Le ha sido difícil cumplir su sueño? ¿Cuánto puede facturar con su negocio?
`,
    idPost: `${about_life_commonProps.userId}-cfba6620-d11c-4baf-8546-91d426127ede`,
    tags: [
      '#fyp',
      '#profesional',
      '#trabajo',
      '#estilodevida',
      '#peluqueria',
      '#estetica',
      '#aboutlife9596'
    ]
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Entrevistando a CEO... ¿Cómo llegó a ser CEO con 25 años? ¿A dónde quiere llegar?
Fernando Hernández García, CEO de @Aszendit , originario de Alicante y amante de los coches, decidió dejarlo todo con 25 años y crear su propia empresa de consultoría tecnológica, para solucionar la problemática y cambiar las reglas del sector.
Todo esto, lo ha conseguido involucrándose de manera integral con su equipo y cuidando
el capital humano, punto clave de este proyecto. Consiguiendo, de esta forma, que se
trabaje de manera conjunta para conseguir los resultados deseados en cada proyecto.`,
    tags: ['#fyp', '#ceo', '#entrevista', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-d59c3b2f-f3b3-4df0-bd30-ec9c11d27f30`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `¿Cómo es ser un arquitecto autónomo en Madrid?
¿Qué vertientes de la arquitectura están en auge?`,
    tags: ['#fyp', '#arquitecto', '#autonomo', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-e706089d-69a2-4f89-85c3-70912b2cfc84`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `¿cuál es tu deporte favorito? 
`,
    tags: ['#fyp', '#deporte', '#trabajo', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-3e9b2094-ffb3-4cf4-aebc-7db3a9e8b9e4`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Parte I. Tiago Santos, Director de Talento y top HR influencer en España, nos comparte su recorrido profesional de más de 13 años en el sector de recursos humanos. ¿Cómo está el mercado actual? ¿Qué habilidades son imprescindibles para trabajar en RRHH? ¿Rango salariales?
`,
    tags: ['#fyp', '#rrhh', '#recursoshumanos', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-6bcd548d-6371-409b-b7c9-63ee02aae38f`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Parte II. Director de RRHH. ¿Año sabático o huecos en un currículum, cómo lo ven los RRHH? ¿Te cuesta despedir a gente? 😬😬😬`,
    tags: ['#fyp', '#rrhh', '#recursoshumanos', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-6d0e1d04-2dac-4f7f-8e47-4c1ecc61d614`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Él se formó en Derecho, pero se dio cuenta de que no era lo suyo. Estudió un bootcamp de programación gratuito, y entró en el sector tecnológico como líder técnico. ¡Viva cambios!`,
    tags: ['#fyp', '#programador', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-397c28c9-7cfc-4503-a6e1-fa7b20ce0eef`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `¿Por qué elegir bien tu carrera profesional es tan importante?
Hemos entrevistado a Eduardo Riera, cofundador de ZRIVE. ¿Qué es ZRIVE? Es una plataforma educativa profesional que sirve de puente entre el mundo académico y el mundo profesional! Edu estudió Economía en la Universidad de Oviedo, al salir de la carrera, entró como analista en banca de inversión y, posteriormente, dio el salto al mundo de los Hedge Funds en Londres (un crack!). Nada le fue fácil, pero lo logró gracias a mucha preparación y mucho esfuerzo. Después de casi 8 años, tomó una decisión valiente, salió del mundo financiero y creó ZRIVE para preparar mejor a los jóvenes de España y ayudarles a acceder al mercado laboral en el ámbito financiero, la consultoría de negocio, la abogacía. Así que otra vez, empieza desde 0 un camino lleno de incertidumbres, pero con armas!
`,
    tags: ['#fyp', '#zrivelife', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-613257bd-2429-489a-9694-4e4e68827333`
  },
  {
    type: 'video',
    videoSrc: 'v11.mp4',
    description: `¿Salidas profesionaldes de psicología? ¿Qué es la psicología clínica? ¿Crees que cura o no?
Todos sabemos que la psicología se compone en ramas. La rama de la psicología clínica basa su praxis en atender a personas con afecciones mentales que impiden, limitan o comprometen su vida en diferentes escalas. Usualmente, los psicólogos clínicos trabajan en clínicas, hospitales y centros privados. Luego hay un porcentaje menor que trabaja por cuenta propia.`,
    tags: ['#fyp', '#psicologia', '#psicologiaclinica', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-276da371-8abb-41f5-ba4a-b5042786c748`
  },
  {
    type: 'video',
    videoSrc: 'v12.mp4',
    description: `Ingenieros informáticos, una profesión sin paro? A los desarroladores de software/programadores les pueden llegar muchas ofertas de trabajo pero, ¿qué hay que vigilar para tomar decisiones importantes en tu carrera profesional? `,
    idPost: `${about_life_commonProps.userId}-b467d312-cb8d-4554-bec0-590590565d77`
  },
  {
    type: 'video',
    videoSrc: 'v13.mp4',
    description: `Médico Ginecóloga: 14 años de formación, ¿te atreves? Claro que sí! A por ello!
Mucha suerte para la selectividad! 💪💪💪`,
    tags: ['#fyp', '#medico', '#ginecologa', '#aboutlife9596'],
    idPost: `${about_life_commonProps.userId}-a6a20e67-0771-4112-a915-d4db596daef6`
  }
];

export const about_life_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
