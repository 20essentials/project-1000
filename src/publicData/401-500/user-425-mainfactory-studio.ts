import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mainfactory_studio';
const userId = '1524b735-f949-42c6-9ab2-37cf36569f52';
const prefixUrl = 'https://dominicnikolai.github.io/project-352/assets/mainfactory-studio/';
const followers = 28_832;
const followed = 100;
const profileDescription = `MaiN is a CGI, Animation, illustrations studio`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `We are happy to present a special edit that brings together the three videos created for the Iren product campaign. A dynamic and engaging narrative that enhances the brand’s message and identity. We hope you like it!`, /*1*/
  `#Iren #NiloxX0 #SustainableMobility #SmartLiving`, /*2*/
  `#SantaMariaNovella #HolidayCampaign #3DArt #PaperRooms #PaperWinter`, /*3*/
  `#SantaMariaNovella #AcquadiRose #IncontroDiMeraviglie #BeautyCampaign #full3D`, /*4*/
  `#main #sephora #fakeoutofhome #3dvisual #dancinglady #cgi #advertising`, /*5*/
  `#3dvisual`, /*6*/
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

export const mainfactory_studio_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mainfactory_studio_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mainfactory_studio_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mainfactory_studio_array_of_posts = [
  ...mainfactory_studio_images,
  ...mainfactory_studio_videos
];
