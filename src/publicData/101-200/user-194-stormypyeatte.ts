import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'stormypyeatte';
const userId = '';
const prefixUrl = '';
const followers = 123_720;
const followed = 50;
const profileDescription = '🌸Flowers 📹Cameras 📽️Projectors';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `👾 When pixels meet petals. Here’s a quick glimpse 👀 at three visual experiments in projection mapping of flowers. #projectionmapping #floraldesign #videoart #sonyalpha #artdirector #visuals`, /*1*/
  `#projectionmapping #cinematic #studiolighting #filmmaking #filmlight #behindthescene`, /*2*/
  `#projectionmapping #cinematic #filmmaking #filmmaker #visuals #videoart #filmlight #behindthescene`, /*3*/
  `#behindthescene #photographylighting #studiolighting #creativephotoshoot #stilllife #stilllifephotography`, /*4*/
  `#filmlight #filmlighting #creativephotography #cinematiclighting #cinematography #behindthescenes #videoart`, /*5*/
  ` #cinematic #filmmaking #filmmaker #visuals #videoart #filmlight #behindthescene`, /*6*/
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

export const stormypyeatte_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const stormypyeatte_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const stormypyeatte_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const stormypyeatte_array_of_posts = [
  ...stormypyeatte_images,
  ...stormypyeatte_videos
];
