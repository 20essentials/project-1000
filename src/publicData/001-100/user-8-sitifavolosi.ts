import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'siti_favolosi';
const userId = '6d33c7d3-dcad-413c-bb93-a5b76361d475';
const prefixUrl = 'https://dominicnikolai.github.io/project-194/assets/siti-favolosi/';
const followers = 18_320;
const followed = 21;
const profileDescription = 'il pc si chiama: HP pavlion';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 12;
const quantityOfImages = 0; 
const profileImageSrc = `https://20essentials.github.io/project-000-830/assets/fondin.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `✨THE NOSTALGIA MACHINE✨ #musica #canzoni`, /*1*/
  `✨SKYSCANNER✨ #viaggi #lowcost`, /*2*/
  `✨NEAL.FUN✨ #random #mistery`, /*3*/
  `✨STUDYSTREAM ✨ #studiare #corsi`, /*4*/
  `✨VENNAGE✨ #presentation #infografia`, /*5*/
  `✨flaticon✨ #icons #svg`, /*6*/
  `✨REMOVE.PG✨ #jpg #avif #webp #png`, /*7*/
  `✨COLORABLE✨ #paletter #rgb`, /*8*/
  `✨CANVA✨ #designs`, /*9*/
  `✨SPEECHNOTES✨ #notes`, /*10*/
  `✨PIXILART✨ #art`, /*11*/
  `✨ICONFINDER✨ #icons`, /*12*/
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
];

export const siti_favolosi_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const siti_favolosi_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const siti_favolosi_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const siti_favolosi_array_of_posts = [
  ...siti_favolosi_images,
  ...siti_favolosi_videos
];
