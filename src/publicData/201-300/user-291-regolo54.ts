import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'regolo54';
const userId = '';
const prefixUrl = '';
const followers = 329_899;
const followed = 604;
const profileDescription = `Art`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'f';
const quantityOfImages = 12;
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
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*1*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*2*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*3*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*4*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*5*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*6*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*7*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*8*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*9*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*10*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*11*/
  `#solid #polyhedra #geometry #symmetry #handmade #mathart #regolo54`, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
]

export const regolo54_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const regolo54_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const regolo54_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const regolo54_array_of_posts = [
  ...regolo54_images,
  ...regolo54_videos
];
