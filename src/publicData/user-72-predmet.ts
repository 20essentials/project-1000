import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'predmet_ia';
const userId = 'c72b740c-8572-4cc2-bb81-a8deebb23753';
const prefixUrl = 'https://dominicnikolai.github.io/project-261/assets/predmet/';
const followers = 312_720;
const followed = 97;
const profileDescription = 'AI Content Creator | Surrealism';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Feel the Vibe ✨ Prompts & Art: @predmet_ai Made by Midjourney  • AE • Kling AI #future #city #flora #fauna #eco #urban #green #bio #smart #nature #fantasy #dreams #magic #fyp #4k #ai #aiart #epic #120fps #aesthetic`, /*1*/
  `Feel the Atmosphere ✨ Prompts & Art: @predmet_ai Made by Midjourney • AE • Kling AI #forest #atmosphere #horse #nature #wild #ride #freedom #fantasy #medieval #magic #fyp #4k #ai #aiart #epic #120fps #aesthetic`, /*2*/
  `Jet above the clouds ☁️✨ Prompts & Art: @predmet_ai Made by Midjourney • AE • Kling AI #space #clouds #sky #fantasy #medieval #magic #fighterjet #fyp #4k #ai #aiart #epic #120fps #aesthetic`, /*3*/
  `Dragon above the clouds ☁️ Prompts & Art: @predmet_ai Inspired on tt: @awakened.worlds Made by ChatGPT • AE • Kling AI #space #clouds #sky #fantasy #medieval #magic #dragon #fyp #4k #ai #aiart #epic #120fps #aesthetic`, /*4*/
  `Luxury Cruise 🚢 Prompts & Art: @predmet_ai Made by ChatGPT • AE • Kling AI #cruise #ship #travel #luxury #adventure #sea #boat #vacation #explore #waves #ocean #nature #ai #aiart #epic #magic #120fps #aesthetic`, /*5*/
  `Want You Like This? ☁️✨ AI-generated video by @predmet_ai Made by ChatGPT • AE • Kling AI #surf #surfer #surfing #waves #ocean #space #clouds #sky #nature #ai #aiart #epic #magic #120fps #aesthetic`, /*6*/
  `Helicopter - Helicopter 🚁 Prompts & Art: @predmet_ai Made by ChatGPT • AE • Kling AI #helicopter #flight #dog #sky #fly #cutedog #funny #ai #aiart #creative #cute #pet #animal`, /*7*/
  `Cat Train 🚂🐱 Prompts & Art: @predmet_ai Made by ChatGPT • AE • Kling AI #cat #train #funny #cute #ai #aiart #creative #animal #pet #whimsical #art`, /*8*/
  `Reach these heights? 🏔 Prompts & Art: @predmet_ai Made by Midjourney • AE • Kling AI #mountains #clouds #sky #nature #hiking #adventure #outdoors #scenery #travel #landscape #ai #magic #aesthetic`, /*9*/ 
  `Hybrid Animals 🐾 Prompts & Art: @predmet_ai Made by ChatGPT • AE • Kling AI #zebra #deer #lion #penguin #frog #hippo #dog #leopard #savannah #wildlife #funny #ai #aiart #creative #cute #animal`, /*10*/
  `Dog Plane 🐶 Prompts & Art: @predmet_ai Made by ChatGPT • AE • Kling AI #flight #dog #sky #fly #cutedog #plane #funny #ai #aiart #creative #cute #pet #animal`, /*11*/
  `Summer Season Open 😂 Prompts & Art: @predmet_ai Made by ChatGPT • AE • Kling AI #summer #season #canning #jars #tomatoes #cucumbers #caviar #food #homemade #ai #aiart`, /*12*/
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

export const predmet_ia_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription,
  
});

const predmet_ia_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  arrayDescriptionsOfVideos,
  userId
});

const predmet_ia_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const predmet_ia_array_of_posts = [
  ...predmet_ia_images,
  ...predmet_ia_videos
];
