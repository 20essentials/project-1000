import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ringwitdahoodie';
const userId = '';
const prefixUrl = '';
const followers = 1_720_322;
const followed = 123;
const profileDescription = 'Greatest Quality Possible🗣️.';
const prefixLetterVideos = 'v';
const quantityOfVideos = 20;
const prefixLetterImages = 'n';
const quantityOfImages = 20;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Quality Settings In My Bio #ai #demonslayer #kimetsunoyaiba #anime #aesthetic #edit #fyp #instagood Demon Slayer Infinity Castle Trailer`, /*1*/
  `Quality Settings In My Bio #ai #gachiakuta #anime #animeedit #edit #fyp #explore`, /*2*/
  `Quality Settings In My Bio #ai #gachiakuta #anime #animeedits`, /*3*/
  `Quality Settings In My Bio #ai #attackontitan #anime`, /*4*/
  `Quality Settings In My Bio #ai #demonslayer #kimetsunoyaiba #anime #animeedits #edit #fyp #aesthetic #vertical`, /*5*/
  `Quality Settings In My Bio #ai #dandadan #anime #animeedits #edit #aesthetic #vertical #fy
`, /*6*/
  `Quality Settings In My Bio #ai #anime #aesthetic #animeedits #demonslayer #kimetsunoyaiba #edits #fyp`, /*7*/
  `Quality Settings In My Bio #ai #myheroacademia #bokunoheroacademia #animeedits #edit #aesthetic #fyp`, /*8*/
  `Quality Settings In My Bio #ai #spiderman #marvel #movie #edit #vertical #aesthetic`, /*9*/ 
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

export const ringwitdahoodie_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ringwitdahoodie_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ringwitdahoodie_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ringwitdahoodie_array_of_posts = [
  ...ringwitdahoodie_images,
  ...ringwitdahoodie_videos
];
