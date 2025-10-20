import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mr_temaz0s';
const userId = 'c5b1891d-81b5-491e-a42a-2df0bd363b59';
const prefixUrl = 'https://dominicnikolai.github.io/project-367/assets/mr-temaz0s/';
const followers = 1_232_832;
const followed = 323;
const profileDescription = `| Toda canción se queda en nuestra mente`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 14;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Laura Branigan - Self Control`, /*1*/
  `Tame Impala - Borderline`, /*2*/
  `Depeche Mode - Enjoy The Silence`, /*3*/
  ` Pink Floyd - The Great Gig in the Sky`, /*4*/
  `Modern Talking - Cheri Cheri Lady`, /*5*/
  ` Blondie - Heart Of Glass`, /*6*/
  `Chemical Brothers - Hey Boy Hey Girl
`, /*7*/
  `Daft Punk - Da Funk
`, /*8*/
  `Avisados estáis 🌧️🎸

#gunsnroses #temazo #90s #axlrose #slash`, /*9*/ 
  `The Smiths - There Is a Light That Never Goes Out 🔥🎧 #temazo #thesmiths`, /*10*/
  `Player - Baby Come Back 🔥🎧`, /*11*/
  `#temazos #90s
`, /*12*/
  `Tame Impala - The Less I Know The Better 🔥🎧 #temazo #mclovin #tameimpala #kevinparker`, /*13*/
  `Vanessa Carlton - A Thousand Miles 🔥🎧 En 2002, Vanessa Carlton conquistó el mundo con “A Thousand Miles”, un himno pop inolvidable que se convirtió en una de las canciones más icónicas de los 2000. Su piano, su letra y su energía la llevaron directo al Top 5 del Billboard Hot 100 y la convirtieron en un clásico eterno. 🎹💫 Pero además de ser un éxito mundial, todos recordamos esa escena legendaria de White Chicks (2004) con Terry Crews cantándola a todo pulmón en el coche 🚗😂. Desde entonces, la canción no solo es un hit, sino también un ícono de la cultura pop. 🎶 Un temazo que nos sigue acompañando más de 20 años después. #temazo #terrycrews #whitechicks #dondeestanlasrubias #2000s #music`, /*14*/
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

export const mr_temaz0s_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mr_temaz0s_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mr_temaz0s_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mr_temaz0s_array_of_posts = [
  ...mr_temaz0s_images,
  ...mr_temaz0s_videos
];
