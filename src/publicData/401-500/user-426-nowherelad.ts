import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'nowherelad';
const userId = 'dde7d592-00ee-4b67-9798-64470ac3a05c';
const prefixUrl = 'https://dominicnikolai.github.io/project-353/assets/nowherelad/';
const followers = 422_832;
const followed = 446;
const profileDescription = `prints, socials and patreon`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 3;
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
  `#tv #cartoons  #meme  #fanart #parody #worklife #webcomic #digitalart #explore`, /*1*/
  `#tv #cartoons  #meme  #fanart #parody #worklife #webcomic #digitalart #explore`, /*2*/
  `#tv #cartoons  #meme  #fanart #parody #worklife #webcomic #digitalart #explore`, /*3*/
  `#tv #cartoons  #meme  #fanart #parody #worklife #webcomic #digitalart #explore`, /*4*/
  `#tv #cartoons  #meme  #fanart #parody #worklife #webcomic #digitalart #explore`, /*5*/
  `#tv #cartoons  #meme  #fanart #parody #worklife #webcomic #digitalart #explore`, /*6*/
  `#tv #cartoons  #meme  #fanart #parody #worklife #webcomic #digitalart #explore`, /*7*/
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

export const nowherelad_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const nowherelad_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const nowherelad_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const nowherelad_array_of_posts = [
  ...nowherelad_images,
  ...nowherelad_videos
];
