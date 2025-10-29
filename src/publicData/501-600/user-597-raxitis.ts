import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'raxitis';
const userId = 'c207b909-ada8-41b0-b31a-37c72f8ad520';
const prefixUrl = 'https://dominicnikolai.github.io/project-375/assets/raxitis/';
const followers = 18_832;
const followed = 270;
const profileDescription = `Web Developer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `ovviamente si scherza(invece no il sito non si apre proprio) #perte #programmazione #developer #coding
`, /*1*/
  `dai giovanni… nulla di personale #perte #programmazione #developer #coding #papa #fantapapa
`, /*2*/
  `sempre così.. #perte #developer #programmazione #informatica #coding #app
`, /*3*/
  `si dice che per ogni developer che esiste almeno 10 ingegneri devono rompere il cazzo #perte #developer #programmazione #informatica #coding #app #uni
`, /*4*/
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

export const raxitis_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const raxitis_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const raxitis_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const raxitis_array_of_posts = [
  ...raxitis_images,
  ...raxitis_videos
];
