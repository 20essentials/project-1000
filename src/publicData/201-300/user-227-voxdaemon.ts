import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'voxdaemon';
const userId = '';
const prefixUrl = '';
const followers = 505_720;
const followed = 50;
const profileDescription = `May Induce Momentary Synesthesia`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `had to use all the colors for this one 🫠 #tinydeskraves #edm #lasershow`, /*1*/
  `#tinydeskraves #lasershow #martingarrix`, /*2*/
  `No wrong answers just tryna prove something to a friend 😈 #tinydeskraves #lasershow #edm

`, /*3*/
  `the most requested song I’ve seen in the comments. Martin Garrix’s laser designer nailed this one for EDC LV 2024. Hopefully I’ll get to see it in person some day`, /*4*/
  `studies show Chaos Theory proves too powerful for the human neck. live demos coming to a stage near you #tinydeskraves #lasershow #edm`, /*5*/
  `Alex LeMirage has us ascending every time I swear #tinydeskraves #lasershow #edm`, /*6*/
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

export const voxdaemon_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const voxdaemon_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const voxdaemon_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const voxdaemon_array_of_posts = [
  ...voxdaemon_images,
  ...voxdaemon_videos
];
