import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'matatogames';
const userId = '';
const prefixUrl = '';
const followers = 149_323;
const followed = 50;
const profileDescription = `I make weird videos and games!`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#blueshirtguy #blue #shirt #dance #samba #whisk #pinkshirtguy #catandcapy #meme #masbro #cute #gamedev #gato #capivara Cat and Capy, Cat and Capybara, Cat&Capy, Cat & Capy, gato e capivara`, /*1*/
  `#gamedev #minigame #showdown #minigameshowdown #gamelaunch`, /*2*/
  `#blueshirtguy #blue #shirt #dance #samba #whisk #pinkshirtguy #catandcapy #meme #masbro #cute #gamedev #gato #capivara Cat and Capy, Cat and Capybara, Cat&Capy, Cat & Capy, gato e capivara`, /*3*/
  `
#ad #catandcapy #maxwell #dingus #cat #capybara #maxwellthecat #dingusthecat #maxwellthecarryablecat #meme #pullup #masbro #cute #gamedev #gato #capivara #easter #easteregg Cat and Capy, Cat and Capybara, Cat&Capy, Cat & Capy, gato e capivara`, /*4*/
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

export const matatogames_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const matatogames_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const matatogames_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const matatogames_array_of_posts = [
  ...matatogames_images,
  ...matatogames_videos
];
