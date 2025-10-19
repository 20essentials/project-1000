import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'agnod3';
const userId = '';
const prefixUrl = '';
const followers = 784_832;
const followed = 194;
const profileDescription = ` agnod__3`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Who are you thinking of?
#foryou #fyp #fypシ #sad #sadedits⚫️`, /*1*/
  `I'm too small #foryou #fyp #fypシ #sad #sadedits⚫️`, /*2*/
  `It's a pity that if you don't follow Agnod, you won't know how interesting I am. #foryou #fyp #fypシ #agnod`, /*3*/
  `"Time" #foryou #sadedits⚫️ #sad #fyp #fypシ`, /*4*/
  `what makes you happy?
#foryou #fyp #fypシ #sad #sadedits⚫️ #agnod`, /*5*/
  `Time
#foryou #fyp #fypシ #sad #sadedits⚫️ #agnod`, /*6*/
  `#foryou #fyp #fypシ #sad #sadedits⚫️ #agnod`, /*7*/
  `Memory
#foryou #fyp #fypシ #sad #sadedits⚫️ #agnod`, /*8*/
  `Memory #foryou #fyp #fypシ #sad #sadedits⚫️ #agnod`, /*9*/ 
  `A dream #foryou #fyp #fypシ #sad #sadedits⚫️ #agnod 3 sett`, /*10*/
  `Time
#foryou #fyp #fypシ #sad #sadedits⚫️ #agnod`, /*11*/
  `Time
#foryou #fyp #fypシ #sad #sadedits⚫️ #agnod`, /*12*/
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

export const agnod3_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const agnod3_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const agnod3_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const agnod3_array_of_posts = [
  ...agnod3_images,
  ...agnod3_videos
];
