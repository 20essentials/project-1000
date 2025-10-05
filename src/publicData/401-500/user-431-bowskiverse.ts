import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bowskiverse';
const userId = '';
const prefixUrl = '';
const followers = 47_832;
const followed = 946;
const profileDescription = `welcome to 𝗕𝗢𝗪𝗦𝗞𝗜𝗩𝗘𝗥𝗦𝗘 🌏
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `
#BlenderMagic #3DModeling #VFXArt #BlenderCommunity #DigitalArt #3DCreation #VisualEffects #MadeInBlender #Blender #B3d #CGI #VFX`, /*1*/
  `#3DModeling #VFX #CreativityInAction #3DModeling #Blender3D #BlenderMagic #3DModeling #VFXArt #BlenderCommunity #DigitalArt #3DCreation #VisualEffects #MadeInBlender #Blender #B3d #CGI #filmmaking`, /*2*/
  `#Blender3D #BlenderMagic #3DModeling #VFXArt #BlenderCommunity #DigitalArt #3DCreation #VisualEffects #MadeInBlender #Blender #B3d #CGI #VFX`, /*3*/
  `#Blender3D #VFX #MotionTracking #3DAnimation`, /*4*/
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

export const bowskiverse_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bowskiverse_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bowskiverse_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bowskiverse_array_of_posts = [
  ...bowskiverse_images,
  ...bowskiverse_videos
];
