import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'magi_skill';
const userId = '3f5a6e40-04e1-4387-a0d9-7dc3fd33d7c1';
const prefixUrl = 'https://dominicnikolai.github.io/project-257/assets/magiskill/';
const followers = 97_720;
const followed = 52;
const profileDescription = 'Interactive 3D Magic Tutorials';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 6;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Our mission is making you a Master of Slight of Hand with our state-of-the-art Interactive Tutorials. Launching soon. #magiskill #magictutorial #interactivemagictutorials #sleightofhand #cardtrick #magictrick`, /*1*/
  `Cardistry is now at magiskill.com! Our advanved 3D interactive tutorials make mastering cardistry moves easier than ever before, on every device. #cardistry #magiskill #magictutorial #catdistrytutorial #cardtrick #magictrick #magic3dtutorial`, /*2*/
  `Tenkai vanish. This and other manipulation moves are available as 3D tutorials at magiskill.com where you have the most advanced tools to master Sleight of Hand with ease. #sleightofhand #magiskill #magictrick #interactivemagictutorials #magictutorial #cardmagic #3dmagictutorial #cardmanipulation #c...`, /*3*/
  `Snap change flat tutorial. magiskill.com has the most advanced tools to give you the best Sleight of Hand learning experience, including direct coaching and magiskill 3D Tutorials. #sleightofhand #magiskill #magictrick #cardtrick #interactivemagictutorials #magictutorial #cardmagic #3dmagictutorial`, /*4*/
  `Shake change flat Tutorial. The magiskill 3D Interactive Tutorials at magiskill.com let you watch the moves from every angle you want, so you master Sleight of Hand smoothly and fast like never possible before. #sleightofhand #magiskill #interactivemagictutorials #magictutorial #magictrick #3dmagict...`, /*5*/
  `Logitudinal palm change flat tutorial by magiskill. For the magiskill 3D Interactive Tutorial access magiskill.com, save time and learn sleight of hand with ease. #sleightofhand #magiskill #magictrick #cardtrick #interactivemagictutorials #magictutorial #cardmagic #magictutorials`, /*6*/

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

export const magi_skill_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const magi_skill_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const magi_skill_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const magi_skill_array_of_posts = [
  ...magi_skill_images,
  ...magi_skill_videos
];
