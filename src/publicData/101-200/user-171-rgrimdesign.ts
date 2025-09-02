import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'rgrimdesign';
const userId = '';
const prefixUrl = '';
const followers = 229_720;
const followed = 50;
const profileDescription = 'Tips & Tricks⚡️ #ux #ui';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Built an Arcane-inspired accordion in Figma Moody UI, smooth animation, and a touch of magic.💙 - - - - - - - #figma #animation #slider #interactions #designguide #dailyinspiration #uiux #ui #u× #learndesign #uxuitips #designtips #animation`, /*1*/
  `Hey guys! What time is it? Right, it’s pie time! 😁🥧 who doesn’t like pies after all? I was just trying to come up with a cool yummy concept for a bakery or something. What do you think? Let me know in the comments below 👇🏻👇🏻👇🏻 - - - - - - - - #figma #figmadesign #designguide #dailyinspiration #uiux #ui #ux #learndesign #uxuitips #designtips #animation #figmaanimation #protoypes #spotlight #rinagrim #figmalovers #slider #figmatutotial #tutoria`, /*2*/
  `👋🏻 🦦Heyo! Here is a simple, but cool tutorial for you, guys, Super easy! ❤️ Let me know what you think in the comments 👇🏻👇🏻👇🏻 Link to the materials and tutorial in the bio - - - - - - - - #figma #figmadesign #designguide #dailyinspiration #uiux #ui #ux #learndesign #uxuitips #designtips #animation #figmaanimation #protoypes #spotlighteffect #spotlight #rinagrim #figmalovers #slider #figmatutotial #tutorial`, /*3*/
  `Here is my new tutorial for you guys! 🍊⚡️Check out this fresh idea for a Carousel in Figma! What do you think? Let me know in the comments below 👇🏻👇🏻👇🏻 - - - - - - - - #figma #figmadesign #designguide #dailyinspiration #uiux #ui #ux #learndesign #uxuitips #designtips #animation #figmaanimation #protoypes #spotlighteffect #spotlight #rinagrim #figmalovers #slider #carousel #figmatutotial #tutorial`, /*4*/
  `POV: your client hovers, and the design responds 🌝 Hover effects in Wix Studio = next-level experience 👇 - - - - - - #wixstudio #hovereffect #animation #builtonwixstudio #webdesign #webdesigntips #lowcode #webdesignagency #nocode`, /*5*/
  `Bring motion and depth to your site with WebGL + Mouse Effects in Wix Studio 💜 Smooth background animations + interactive cursor-based elements — all without code. Try it out 👇 - - - - - - #wixstudio #mouseeffects #parallax #parallaxeffect #WebGLEffects #WebGL #animation #InteractiveDesign #MotionUX #builtonwixstudio #webdesign #webdesigntips #lowcode #webdesignagency #nocode`, /*6*/
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

export const rgrimdesign_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const rgrimdesign_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const rgrimdesign_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const rgrimdesign_array_of_posts = [
  ...rgrimdesign_images,
  ...rgrimdesign_videos
];
