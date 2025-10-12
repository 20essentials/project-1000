import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ryuxrstudio';
const userId = '45d2140c-94d9-44e6-81ff-c7bc462b6844';
const prefixUrl = 'https://dominicnikolai.github.io/project-355/assets/ryuxrstudio/';
const followers = 111_832;
const followed = 381;
const profileDescription = `3D Art | Desk Setup | Tech`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#3dartist #3dmodeling #blender3dart #blender
`, /*1*/
  `#ad #ASUSSeeTheUnseen #ASUS #ProArt #PA279CRV #monitor #3Dartist #blenderart #3dartists #3dmodeling #designer #desksetup #deskspace #deskgoals #homeoffice`, /*2*/
  `So I heard the 5120 x 1080 ratio supposedly makes everything CiNeMaTiC 🗿😏`, /*3*/
  `#Lovart #LovartAI #CreateWithLovart`, /*4*/
  `Green is not my usual color BUT it goes so well in my desk setup 💚😭`, /*5*/
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

export const ryuxrstudio_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ryuxrstudio_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ryuxrstudio_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ryuxrstudio_array_of_posts = [
  ...ryuxrstudio_images,
  ...ryuxrstudio_videos
];
