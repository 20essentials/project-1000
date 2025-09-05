import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'thomas_vanz';
const userId = '';
const prefixUrl = '';
const followers = 64_800;
const followed = 50;
const profileDescription = 'Pianist / Macro Artist / Cosmic Director / Desert explorer 🎥 ✨🌒☄️🎹 🦂';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `FRACTAL FOREVER III - NoCgi NoAI - ink on acrylic #abstract #ink #nocgi #cosmos #chemical #scienceart #experiment #novae`, /*1*/
  `HALLUCINATION CYCLE - NoAI NoCGI - 2cm With marvelous sound design by @eius.echo #abstract #ink #cosmos #nocgi #chemical #scienceart #experiment #novae #blackhole`, /*2*/
  `VEGETAL TRANSITION - NoAI NoCGI - 1cm #abstract #ink #cosmos #nocgi #chemical #scienceart #experiment #novae #blackhole #nebula`, /*3*/
  `EXISTENCE OF EVERYTHING - NoAI - High speed edit Highlights #abstract #ink #cosmos #nocgi #chemical #scienceart #experiment #novae #blackhole #nebula`, /*4*/
  `UNIVERSAL - NoAI almost NoCGI - HIghlights of 2022-2025 Song : diedlonely - Liminal.mp3 #abstract #ink #cosmos #nocgi #chemical #scienceart #experiment #novae #blackhole #nebula`, /*5*/
  `TEXTURES - NoAI NoCGI - 1cm #abstract #ink #cosmos #nocgi #chemical #scienceart #experiment`, /*6*/
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

export const thomas_vanz_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const thomas_vanz_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const thomas_vanz_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const thomas_vanz_array_of_posts = [
  ...thomas_vanz_images,
  ...thomas_vanz_videos
];
