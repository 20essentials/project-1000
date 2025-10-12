import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'designgemstudio';
const userId = '38f9d84a-df3c-4a45-82a0-80b97302d600';
const prefixUrl = 'https://dominicnikolai.github.io/project-353/assets/designgemstudio/';
const followers = 65_523;
const followed = 79;
const profileDescription = `Web Design Inspiration`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Build a portfolio site that wows your clients. Wix Studio gives you the tools to design, customize, and showcase their work beautifully. Get started today!🦊💜 - - - - - - #wixstudio #builtonwixstudio #portfoliowebsite #3dartist #3dartistportfolio #webdesign #3dwebsite #webdesigntips #lowcode #webdesignagency #nocode`, /*1*/
  `#wixstudio #Rive #animation #builtonwixstudio #webdesign #webdesigntips #lowcode #webdesignagency #nocode @wixstudio`, /*2*/
  `#wixstudio #hovereffect #animation #builtonwixstudio #webdesign #webdesigntips #lowcode #webdesignagency #nocode @wixstudio`, /*3*/
  `#wixstudio #animation #builtonwixstudio #webdesign #webdesigntips #lowcode #webdesignagency #nocode @wixstudio`, /*4*/
  `#wixstudio #hovereffect #animation #builtonwixstudio #webdesign #webdesigntips #lowcode #webdesignagency #nocode @wixstudio`, /*5*/
  `#wixstudio #hovereffect #animation #builtonwixstudio #webdesign #webdesigntips #lowcode #webdesignagency #nocode @wixstudio`, /*6*/
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

export const designgemstudio_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const designgemstudio_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const designgemstudio_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const designgemstudio_array_of_posts = [
  ...designgemstudio_images,
  ...designgemstudio_videos
];
