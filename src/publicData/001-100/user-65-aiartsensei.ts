import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

const username = 'aiaartsensei';
const userId = '4f7dbbbd-78d2-4bc2-9ccf-690f85d00a4eas';
const prefixUrl =
  'https://dominicnikolai.github.io/project-254/assets/aiaartsensei/';
const followers = 35_600;
const followed = 211;
const profileDescription = '🎨 AI-Generated Art & Wallpapers ✨';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'a';
const quantityOfVideos = 0;
const quantityOfImages = 20;
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

export const aiaartsensei_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const aiaartsensei_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId
});

const aiaartsensei_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

const amArrayContent: ArrayContent = [
  {
    type: 'image',
    arrayImages: ['a1.avif', 'a2.avif', 'a3.avif', 'a4.avif', 'a5.avif'],
    description: `Recap`,
    idPost: `${aiaartsensei_commonProps.userId}-2a04dc1e-8c3e-324950-92d2-470487e3f8e132`
  }
];

export const galery_testing = generateArrayPosts({
  PREFIX: prefixUrl,
  ARRAY_CONTENT: amArrayContent
});

export const aiaartsensei_array_of_posts = [
  ...galery_testing,
  ...aiaartsensei_images.slice(1),
  ...aiaartsensei_videos
];
