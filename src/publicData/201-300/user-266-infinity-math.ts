import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'infinity_math';
const userId = '';
const prefixUrl = '';
const followers = 372_720;
const followed = 79;
const profileDescription = `📚 Cursuri de Matematică pentru gimnaziu`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#math #maths #mathematics #mathmemes #mathstudent #mathsolve #mathpuzzle #algebra #geometry #calculus #trigonometry #physicsmemes #physics #mathriddle #mathteach #mathtutor #chemistry #science #stem #engineering #engineeringmemes #chemistrymemes #school #highschool. #university #college #sat #alevels #gcse`, /*1*/
  `#math #maths #mathematics #mathmemes #mathstudent #mathsolve #mathpuzzle #algebra #geometry #calculus #trigonometry #physicsmemes #physics #mathriddle #mathteach #mathtutor #chemistry #science #stem #engineering #engineeringmemes #chemistrymemes #school #highschool. #university #college #sat #alevels #gcse`, /*2*/
  `#math #maths #mathematics #mathmemes #mathstudent #mathsolve #mathpuzzle #algebra #geometry #calculus #trigonometry #physicsmemes #physics #mathriddle #mathteach #mathtutor #chemistry #science #stem #engineering #engineeringmemes #chemistrymemes #school #highschool. #university #college #sat #alevels #gcse`, /*3*/
  `#math #maths #mathematics #mathmemes #mathstudent #mathsolve #mathpuzzle #algebra #geometry #calculus #trigonometry #physicsmemes #physics #mathriddle #mathteach #mathtutor #chemistry #science #stem #engineering #engineeringmemes #chemistrymemes #school #highschool. #university #college #sat #alevels #gcse`, /*4*/
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

export const infinity_math_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const infinity_math_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const infinity_math_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const infinity_math_array_of_posts = [
  ...infinity_math_images,
  ...infinity_math_videos
];
