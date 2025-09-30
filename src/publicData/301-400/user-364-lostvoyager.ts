import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lostvoyager';
const userId = 'fdc03b07-092f-4414-bbd9-069f72428ef9';
const prefixUrl = 'https://dominicnikolai.github.io/project-345/assets/lostvoyager/';
const followers = 38_832;
const followed = 50;
const profileDescription = `Lost? Maybe 🌌`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#LostVoyager #ghibli #ghiblistudio #plainart #skyart #artgallery
#digitalartsensei #minimalstyle #retroart #aiart #digitalart #photoshop #vintageart #lofi #digitalpainting #minimalistart #aiartcommunity #midjourneyart #aiartwork #cozyart #skysparxx #seawaves #stablediffusion #artlover #retroaesthetic #landscapephotography #pastelart #artexploration #midjourneyart`, /*1*/
  `#landscapephotography`, /*2*/
  `#landscapephotography`, /*3*/
  `Beautiful day✨
`, /*4*/
  `  #igreach #artworld #viral #trending #reels #Dreamscape #LostVoyager #AnimeArt #SereneVibes #AIArt`, /*5*/
  ` #explore #igreach #artworld #viral #trending #reels #Dreamscape #LostVoyager #AnimeArt #SereneVibes #AIArt`, /*6*/
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

export const lostvoyager_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lostvoyager_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lostvoyager_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const lostvoyager_array_of_posts = [
  ...lostvoyager_images,
  ...lostvoyager_videos
];
