import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'sergioprompts';
const userId = '8694c457-fa8b-4fd6-90e6-058fca6ca7c9';
const prefixUrl = 'https://dominicnikolai.github.io/project-343/assets/s3rgioprompts/';
const followers = 109_342;
const followed = 50;
const profileDescription = `🧠 Dominamos el lenguaje de los prompts`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#inteligenciaartificial #chatgpt #prompts #prompt #promptschatgpt #promptsia #tecnologia #noticiasdeia #noticias #veo3 #ai #artificialintelligence`, /*1*/
  `Solo búscalo como “RealEarth-Kontext” en Civitai.
`, /*2*/
  `#tecnologia #noticiasdeia`, /*3*/
  `#ia #inteligenciaartificial #chatgpt #prompts #prompt #promptschatgpt #promptsia #tecnologia #noticiasdeia #noticias #deepseek #grok #ai #artificialintelligence`, /*4*/
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

export const sergioprompts_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const sergioprompts_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const sergioprompts_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const sergioprompts_array_of_posts = [
  ...sergioprompts_images,
  ...sergioprompts_videos
];
