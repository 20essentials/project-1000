import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kushu_lofi';
const userId = '';
const prefixUrl = '';
const followers = 584_789;
const followed = 321;
const profileDescription = `Collage artist `;
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'n';
const quantityOfImages = 9;
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
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*1*/
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*2*/
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*3*/
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*4*/
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*5*/
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*6*/
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*7*/
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*8*/
  `#psychedelicart #trippyart #wisdom #mushrooms #trip #collage_art #collageart #kushucollage`, /*9*/
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

export const kushu_lofi_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kushu_lofi_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kushu_lofi_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const kushu_lofi_array_of_posts = [
  ...kushu_lofi_images,
  ...kushu_lofi_videos
];
