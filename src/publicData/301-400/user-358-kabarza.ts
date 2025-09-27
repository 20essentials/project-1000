import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kabarza';
const userId = '17e4ce13-8266-4756-8fef-b99c5f7a335a';
const prefixUrl = 'https://dominicnikolai.github.io/project-344/assets/kabarza/';
const followers = 72_322;
const followed = 50;
const profileDescription = `Building things on the internet`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Watch top 5 websites and how they were built on my YouTube. I made a video showing this and 4 other cool websites in detail. Check the link in my bio. Are you interested in learning Webflow? If yes, let me know in the comments. I’m putting some tutorials together. `, /*1*/
  `Apple just surprised the entire design industry with their new design language, Liquid Glass — and here’s how you can recreate it in Figma.`, /*2*/
  `How is this website made? You might be asking. For the 3d they have used threejs and for the animations gsap.

Something like the last page I showed could be done in webflow though. Mostly nocode.`, /*3*/
  `#setup #dev #webflow #threejs #code #nocode #homeoffice #creativespace #deskgoals #deskdecor #workspace #minimalist #setuptour #fully #autonomous #developer #designer #webdesign`, /*4*/
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

export const kabarza_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kabarza_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kabarza_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kabarza_array_of_posts = [
  ...kabarza_images,
  ...kabarza_videos
];
