import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'yantastic';
const userId = '4c4a3432-3a25-4410-aae6-6f9a63e35f73';
const prefixUrl = 'https://dominicnikolai.github.io/project-304/assets/yantastic/';
const followers = 741_720;
const followed = 136;
const profileDescription = 'Shop Presets';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `The China they don’t show you.`, /*1*/
  `When the city’s first floor is also the 60th… that’s when you realise Chongqing isn’t just a city, it’s another dimension. Stacked roads, layered skyscrapers, and a skyline that bends reality. Welcome to the 8D city. #photography #chongqing`, /*2*/
  `Concrete jungle, neon heart. 💛 Nights like these remind me why I love Chongqing. 🌆 #chongqing #photography #streetphotography`, /*3*/
  `Was it worth it? For a brief moment, their paths in life draw so close that only glass and air divide them, yet neither knows the other exists. Two journeys crossing once before vanishing into separate forever.`, /*4*/
  `EVERY night during the summer holidays in China, over 100,000 people make their way to Chongqing Hong Ya Dong - drawn in by the viral videos, the neon glow, the atmosphere. And at exactly 8pm, when the lights turn on, the whole place shifts. Have you seen it in person? #china #chongqing #cyberpunk #shotoniphone`, /*5*/
  `China be living in 2075… or is it AI?`, /*6*/
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

export const yantastic_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const yantastic_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const yantastic_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const yantastic_array_of_posts = [
  ...yantastic_images,
  ...yantastic_videos
];
