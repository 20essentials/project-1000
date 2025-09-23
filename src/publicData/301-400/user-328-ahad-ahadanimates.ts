import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ahad_ahadanimates';
const userId = 'e07487a7-6b16-46ab-af67-58e49fedce8e';
const prefixUrl = 'https://dominicnikolai.github.io/project-340/assets/ahad-ahadanimates/';
const followers = 324_832;
const followed = 50;
const profileDescription = ` Youngest 3D Artist of Pakistan`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `POV: Galaxy S24 Ultra Cases 📱 Modeling & texturing in progress… Stay tuned for the final look! #b3d #cgi #blender #3dmodeling #3drender #3dart #productvisualization #techdesign #3dtexturing #galaxys24ultra #productrendering

`, /*1*/
  `#blender #cgi #productanimation #ahadanimates #blender3d #rendering #digitalart #b3d #viral`, /*2*/
  `#b3d #Blender #3DModeling #FutureCreators #hardworkpaysoff #3danimation #viralreels #inspiration`, /*3*/
  `#ahadanimates #cgiads #render #blender #3danimation #3dads #ai #ads #productdesign #cgi`, /*4*/
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

export const ahad_ahadanimates_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ahad_ahadanimates_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ahad_ahadanimates_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ahad_ahadanimates_array_of_posts = [
  ...ahad_ahadanimates_images,
  ...ahad_ahadanimates_videos
];
