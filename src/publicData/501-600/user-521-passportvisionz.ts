import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'passportvisionz';
const userId = '';
const prefixUrl = '';
const followers = 87_832;
const followed = 222;
const profileDescription = `PASSPORT VISIONZ
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Nothing Is Ever Done “Normally” Here 😂😳 Read More…
`, /*1*/
  `#atlantissanya #atlantis_sanya #sanyachina #hainan #atlantis #china #chinatravel #chinaexplore`, /*2*/
  `China’s Ice City Is Real🥶😱Read More… We have been fortunate enough to go to China’s ice city for the second time! It is amazing to have opportunities to do this because we remember times were not always like this. Great things can happen when you take the perfect risk in life. We decided to bid on ourselves three years ago and leave America and do something different. You can do the same as well if you would like to escape the norm and become financially free COMMENT “CREDIT” so you can do the same thing! #passportvisionz #harbin #china #chinatravel`, /*3*/
  `#chinatravel #china #lynkco #passportvisionz #blackinchina`, /*4*/
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

export const passportvisionz_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const passportvisionz_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const passportvisionz_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const passportvisionz_array_of_posts = [
  ...passportvisionz_images,
  ...passportvisionz_videos
];
