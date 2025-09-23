import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'blendermeme';
const userId = '';
const prefixUrl = '';
const followers = 69_832;
const followed = 50;
const profileDescription = `Memes about Blender and Motion Graphics `;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 6;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
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
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  `Enjoy it friends. One day you might want to become a solo gamedev of a 3d game, than smallest of projects can take years`, /*1*/
  `😂😢`, /*2*/
  `I started using Blender in 2019. It has become a necessary for my job now and to this day I keep learning things I feel like I should have know many years ago.`, /*3*/
  `😂😢thats real`, /*4*/
  `It's a pain to set up even a basic material, but the rendering is unbelievably fast.`, /*5*/
  `#blender`, /*6*/
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

export const blendermeme_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const blendermeme_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const blendermeme_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const blendermeme_array_of_posts = [
  ...blendermeme_images,
  ...blendermeme_videos
];
