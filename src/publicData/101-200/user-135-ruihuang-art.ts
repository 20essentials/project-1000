import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ruihuang_art';
const userId = '8fbacba6-4709-4dde-a2fd-b3757d7c96fe';
const prefixUrl = 'https://dominicnikolai.github.io/project-298/assets/ruihuang-art/';
const followers = 742_720;
const followed = 35;
const profileDescription = 'Scifi Artist丨Inquire📫';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Welcome to the next level of Blender graphics. #blender`, /*1*/
  `What should i do next #digitalart #blender`, /*2*/
  `#digitalart #blender #scifiart`, /*3*/
  `Disney plz #digitalart #blender`, /*4*/
  `WIP`, /*5*/
  `Lost in space #digitalart #blender3d #scifiart`, /*6*/
  `Faster than light #blender`, /*7*/
  `Can we build this without Alien Technology? #blender`, /*8*/
  `I’m here,Murphy.I'm here. #blender`, /*9*/ 
  `This is what i do with my RTX5090 #blender`, /*10*/
  `Viewport vs Render #digitalart #blender3d`, /*11*/
  `The Adam Sphere`, /*12*/
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

export const ruihuang_art_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ruihuang_art_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ruihuang_art_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ruihuang_art_array_of_posts = [
  ...ruihuang_art_images,
  ...ruihuang_art_videos
];
