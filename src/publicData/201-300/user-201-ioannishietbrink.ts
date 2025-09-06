import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ioannishietbrink';
const userId = '';
const prefixUrl = '';
const followers = 127_720;
const followed = 55;
const profileDescription = '🎓Helping 3D Freelancers go Full-Time';
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Blender can feel like a Jet2Holiday sometimes… Cloth explodes, fluids glitch, pink textures everywhere… It feels like even simple stuff takes hours because nothing works how it should. But once you finally understand the systems, it all starts to click - and suddenly this mess turns into one of the most powerful tools you’ll ever use as a creative. That’s exactly why I created a step-by-step Blueprint for artists who want to skip the years of trial and error and actually start freelancing with Blender. Comment freelance if you want me to send you something helpful that’ll guide you to the exact systems I use to make a full-time income as a Blender artist. PS: Some accounts require you to follow me so I can DM you – so drop a follow to make sure I can send it over.`, /*1*/
  `In Blender everything starts with the default cube. A timeless classic - but when I first opened Blender, I had no clue what I was doing. Back then, I was ambitious but lost. Now, after helping others become full-time 3D freelancers, I realized most struggle with the same first step: Where do I even start? That’s why I created the Full-Time Blender3D Blueprint - a full guide to learning Blender, getting clients, and making money with 3D. Comment “freelance” and I’ll send you something free to get started 🚀 PS some accounts require you to follow me so I’m able to send you a DM - so drop a follow to make sure I can message you`, /*2*/
  `They will find out eventually 🤫🥷📈 - #solopreneurlife #digitalnomadlifestyle #bangkokcoworking #thainomad #3ddesigner #blender3d`, /*3*/
  `#thainomad #3ddesigner #blender3d`, /*4*/
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

export const ioannishietbrink_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ioannishietbrink_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ioannishietbrink_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ioannishietbrink_array_of_posts = [
  ...ioannishietbrink_images,
  ...ioannishietbrink_videos
];
