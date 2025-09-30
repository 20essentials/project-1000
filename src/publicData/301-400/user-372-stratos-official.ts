import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'stratos_official';
const userId = 'f584ba49-7bd2-4015-96ca-242be388cefd';
const prefixUrl = 'https://dominicnikolai.github.io/project-346/assets/stratos-official/';
const followers = 31_922;
const followed = 110;
const profileDescription = `Stratos funds and supports indie studios`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Migliaia di giochi indie nascono tutti i giorni nelle menti degli sviluppatori. 🚀 Ma ben pochi riescono a vedere la luce. 😫 Non basta avere un’idea brillante o un buon prototipo: senza marketing, mentoring, supporto operativo e strategico, anche i progetti migliori rischiano di restare fermi. Per questo motivo nasce Stratos, l'unica piattaforma in grado di fornire questi servizi agli sviluppatori e non solo... 🧑‍🚀 #gamingreel #games #Gaming #gamedesign #indiegames #gamer #gamedev #videogames #adv

`, /*1*/
  `#gaming #games #videogames #indiegames #tokyo #tokyogameshow`, /*2*/
  `#gaming #games #videogames #indiegames #gamer #tokyo #tokyogameshow`, /*3*/
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

export const stratos_official_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const stratos_official_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const stratos_official_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const stratos_official_array_of_posts = [
  ...stratos_official_images,
  ...stratos_official_videos
];
