import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'nagy_visuals';
const userId = '';
const prefixUrl = '';
const followers = 723_820;
const followed = 32;
const profileDescription = 'Krisztina | 3D Artist';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Blender`, /*1*/
  `Me and my bubble obsession 🤝`, /*2*/
  `Who can relate?🙃`, /*3*/
  `Here’s how I figured it out: For me personally, it was really hard to figure out what I actually wanted in life .. My adhd-ish brain wanted to be everything at once - but at the same time, I had no real idea what I truly wanted. I know, kind of a mess🙃 `, /*4*/
  `Everlasting Liquid Blush 👏🏽✨ Pigmentation in a bottle plus easy to use! 🙌🏽 available at link in bio & stories! #pinklipps #liquidblush`, /*5*/
  `If I had to start over, I´d tell myself: 1. Being a 3D artist isn’t just about creating cool visuals - you’ll spend a lot of time dealing with clients. If you don’t understand people, your work alone won’t take you far. People skills matter more than you think. 2. Blender will look like pure chaos`, /*6*/
  ` #3danimation #maccosmetics #lipglassair #maclipglassair #productanimation #blender3d`, /*7*/
  `Me and my laptop 🤝`, /*8*/
  `#blender3d #bubbleskincare #bubble #3danimation #3dart`, /*9*/ 
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

export const nagy_visuals_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription,
  
});

const nagy_visuals_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  arrayDescriptionsOfVideos,
  userId
});

const nagy_visuals_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const nagy_visuals_array_of_posts = [
  ...nagy_visuals_images,
  ...nagy_visuals_videos
];
