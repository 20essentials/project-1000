import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ernis_guljigit';
const userId = '';
const prefixUrl = '';
const followers = 289_832;
const followed = 156;
const profileDescription = `Топ мобилограф в СНГ`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#кыргызстан #фото #vn #cupcut #videoleap #trend #видео #лайфхак #бишкек #пайдалуукенеш
#video #edit #reels #ideas #creative #tutorial #text #tutorial #filmmaker #vneditor #film #filmphotography #tips #tricks #bts`, /*1*/
  `#кыргызстан #фото #vn #cupcut #videoleap #trend #видео #лайфхак #бишкек #пайдалуукенеш
#video #edit #reels #ideas #creative #tutorial #text #tutorial #filmmaker #vneditor #film #filmphotography #tips #tricks #bts`, /*2*/
  `#клип #видео #бишкек #reels #кыргызстан #ideas #video
`, /*3*/
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

export const ernis_guljigit_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ernis_guljigit_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ernis_guljigit_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ernis_guljigit_array_of_posts = [
  ...ernis_guljigit_images,
  ...ernis_guljigit_videos
];
