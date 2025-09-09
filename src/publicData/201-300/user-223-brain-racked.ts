import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'brain_racked';
const userId = '';
const prefixUrl = '';
const followers = 187_720;
const followed = 226;
const profileDescription = `Ryan McCoy | Sci-fi Ai art`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#ai #aiart #aigeneratedart #aiartwork#aidigitalart #digitalart #midjourney #midjourneyart #scifi #fantasy #fantasyworld #rococo #baroque #baroquefashion #sciencefiction #scifiart #fashionstyle #luxury #futuristic #robotart #hautecouture #robotmance #robotlove #spaceship`, /*1*/
  `#ai #aiart #aigeneratedart #aiartwork#aidigitalart #digitalart #midjourney #midjourneyart #scifi #fantasy #fantasyworld #rococo #baroque #baroquefashion #sciencefiction #scifiart #fashionstyle #luxury #futuristic #robotart #hautecouture #robotmance #robotlove #spaceship`, /*2*/
  `#aigeneratedart #aiartwork#aidigitalart #digitalart #midjourney #midjourneyart #scifi #fantasy #fantasyworld #rococo #baroque #baroquefashion #sciencefiction #scifiart #fashionstyle #luxury #futuristic #robotart #hautecouture #robotmance #robotlove #spaceship`, /*3*/
  `#midjourney #midjourneyart #scifi #fantasy #fantasyworld #rococo #baroque #baroquefashion #sciencefiction #scifiart #fashionstyle #luxury #futuristic #robotart #hautecouture #robotmance #robotlove #spaceship #klingai`, /*4*/
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

export const brain_racked_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const brain_racked_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const brain_racked_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const brain_racked_array_of_posts = [
  ...brain_racked_images,
  ...brain_racked_videos
];
