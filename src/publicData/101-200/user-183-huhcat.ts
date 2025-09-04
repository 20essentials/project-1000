import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'huhcat';
const userId = '';
const prefixUrl = '';
const followers = 946_720;
const followed = 170;
const profileDescription = 'Hi, I’m a Cat that owns a Human. ';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hi Ben here. This is my short version of meowing for food. I always get fed i don't know why i bother meowing. Longer version of these meows in next vid`, /*1*/
  `Huh Cat Meme`, /*2*/
  `Hi Ben here. This is me speaking humaneese.`, /*3*/
  `Hi Ben here. I was told today i had a cutesy meow. CUTESY! 😺`, /*4*/
  `Hi Ben here. I'm back on my yoyo diet. 😼I’m permitted to lick my paws.`, /*5*/
  `Hi Ben here. I got a purrrrfect fit box.`, /*6*/
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

export const huhcat_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const huhcat_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const huhcat_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const huhcat_array_of_posts = [
  ...huhcat_images,
  ...huhcat_videos
];
