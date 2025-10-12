import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'annaberu_chan';
const userId = 'd29f134d-286c-4c63-91e9-7634f7eaeefb';
const prefixUrl = 'https://dominicnikolai.github.io/project-355/assets/annaberu-chan/';
const followers = 184_832;
const followed = 78;
const profileDescription = `Senior 3D Character Artist`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#dayinmylife #workday #corporatelife #minivlog #3danimation #3dsculpting #3dcharacter #3dart #zbrush #unrealengine #blender #3dartist #blender3d #fyp #trending #ue5`, /*1*/
  `BTS Plant Man 🌱`, /*2*/
  `#dayinmylife #workday #corporatelife #minivlog #3danimation #3dsculpting #3dcharacter #3dart #zbrush #unrealengine #blender #3dartist #softwareengineer #reelsinstagram #blender3d #fyp #trending #ue5 #vlog #digitalartist #motivation #technology #womanintech`, /*3*/
  `#Maya #Metahuman #Unreal #ForYou #fyp #Videogames #3DTutorial #Blender #3D #3DArt #3Dartist #Artwork #Tutorial #ue5 #unrealengine #Rigging #CGI #DigitalArt #BlenderArt #Sculpting #Zbrush #3DSculpt #scifi #blenderguru #modeling #hardsurface #hardsurfacemodeling #blenderguru #tutorial #3Dmaterial #3dcharacterartist`, /*4*/
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

export const annaberu_chan_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const annaberu_chan_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const annaberu_chan_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const annaberu_chan_array_of_posts = [
  ...annaberu_chan_images,
  ...annaberu_chan_videos
];
