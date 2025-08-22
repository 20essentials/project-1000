import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'childhood_2000s';
const userId = '3f555d0e-49fc-4372-90cc-0bd8da81802e';
const prefixUrl = 'https://dominicnikolai.github.io/project-282/assets/ch1ldh0od-2000/';
const followers = 832_231;
const followed = 32;
const profileDescription = 'Los 2000 no han muerto ¡estaban dormidos! 🛌😴 Revive con nosotros los tazos, las pegotas… y toda la magia de tu infancia... ';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Los tico taco… ¿alguien recuerda cómo se jugaba?#infancia #2000s #nostalgia #childhood_2000s_`, /*1*/
  `P-GOTAS  #infancia #nostalgia #2000s #childhood_2000s_`, /*2*/
  `Magneto Sticks de grefusa, año 2000. #infancia #nostalgia #2000s`, /*3*/
  `Las peonzas Beyblade 🌪️: la fiebre del 2002  #infancia #nostalgia #2000s #beyblade`, /*4*/
  `Siempre me recordaron a Willy Fog 😅 ¿Los tuvisteis? @childhood_2000s_ #infancia #nostalgia #2000s`, /*5*/
  `Tazos de Pokémon… ¿los recordabais? #infancia #nostalgia #2000s #pokemon #tazos`, /*6*/
  `Los recuerdo como si fuera ayer ⌛️ Tatuajes de Surfmanía (2005) 😍 Salían en las bolsas de Matutano y en los Chipicao. @childhood_2000s_ #infancia #2000s #nostalgia`, /*7*/
  `La goma loca… ¿alguien más la había olvidado?  #infancia #nostalgia #2000s #childhood_2000s_
`, /*8*/
  `Una mañana en los 2000  #2000s #infancia #nostalgia #childhood_2000s_`, /*9*/ 
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

export const childhood_2000s_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const childhood_2000s_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const childhood_2000s_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const childhood_2000s_array_of_posts = [
  ...childhood_2000s_images,
  ...childhood_2000s_videos
];
