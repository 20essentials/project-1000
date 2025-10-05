import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'design_insignia';
const userId = '5bca280f-1608-4b60-821f-69a89362a500';
const prefixUrl = 'https://dominicnikolai.github.io/project-349/assets/design-insignia/';
const followers = 283_832;
const followed = 547;
const profileDescription = `Helping Content creators upgrade their visuals`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` #designinsignia #graphicdesigntips #creativeprocess`, /*1*/
  `#posterdesign #canvadesign #designinsignia #graphicdesigntips #creativeprocess`, /*2*/
  `#posterdesign #canvadesign #designinsignia #graphicdesigntips #creativeprocess`, /*3*/
  `[design insignia, social media post, Poster Design, Canva Design Challenge, Content Design , Business Owner , Agency owners]`, /*4*/
  `#designinsignia #graphicdesigntips #creativeprocess`, /*5*/
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

export const design_insignia_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const design_insignia_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const design_insignia_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const design_insignia_array_of_posts = [
  ...design_insignia_images,
  ...design_insignia_videos
];
