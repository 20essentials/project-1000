import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'aaronblaiseart';
const userId = '9efaa1bb-c6cb-4918-9300-e7ea6f3cee14';
const prefixUrl = 'https://dominicnikolai.github.io/project-274/assets/aaronbl4iseart/';
const followers = 572_720;
const followed = 50;
const profileDescription = 'Animation Feature Film Director, character designer, concept & Wildlife Artist.';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Check out my website to learn more! #animation #2danimation #aladdin #disney`, /*1*/
  `See my new film, Snow Bear this Saturday, August, 23rd. Become a lifetime member at CreatureArtTeacher.com #aaronblaise #animation #2danimation #artschool #arteducation #snowbearfilm`, /*2*/
  `College is expensive. I’m not. #Artschool #animation #2danimation #arteducation #handdrawnanimation`, /*3*/
  `CreatureArtTeacher.com #aladdin #animation #2danimation #creatureartteacher #traditionalanimation animation`, /*4*/
  `Today I animated on paper live this little bunny hop. #aaronblaise #animation #2danimation #drawing #paperanimation #traditionalanimation`, /*5*/
  `Hawk`, /*6*/
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

export const aaronblaiseart_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const aaronblaiseart_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const aaronblaiseart_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const aaronblaiseart_array_of_posts = [
  ...aaronblaiseart_images,
  ...aaronblaiseart_videos
];
