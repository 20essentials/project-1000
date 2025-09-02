import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bauifyy';
const userId = '';
const prefixUrl = '';
const followers = 81_720;
const followed = 28;
const profileDescription = 'Last Time';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `above it all #miami #nightcore #rufusdusol #aesthetic #viral #reels #rooftop #views #explore #skyscraper #urbex`, /*1*/
  `euphoria`, /*2*/
  `wind resistance on a 950ft spire #nyc #newyork #timessquare #aesthetic #viral #reels #rooftop #views #explore #skyscraper #urbex`, /*3*/
  `true freedom`, /*4*/
  `2024 taught me life is whatever you make it #nyc #newyork #timessquare #aesthetic #viral #reels #rooftop #views #explore #skyscraper #urbex`, /*5*/
  `best spot for a nap #nyc #newyork #timessquare #aesthetic #viral #reels #rooftop #views #explore #skyscraper #urbex`, /*6*/
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

export const bauifyy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bauifyy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bauifyy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bauifyy_array_of_posts = [
  ...bauifyy_images,
  ...bauifyy_videos
];
