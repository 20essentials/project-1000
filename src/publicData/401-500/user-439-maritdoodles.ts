import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'maritdoodles';
const userId = '845b031c-3f4e-4544-84b9-4350c909e62f';
const prefixUrl = 'https://dominicnikolai.github.io/project-354/assets/maritdoodles/';
const followers = 142_832;
const followed = 455;
const profileDescription = `✨ 3D artist ✨`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#b3d #blender3d #blendercommunity #blenderrender #blendercycles #blenderartist #blenderart #3dart #3dartist #digitalart #digitalartist #3danimation #animation #artistsoninstagram #blender #illustration #art
#render #artshare #cycles #renderdaily #3dilustration #character #characterdesign #overthegardenwall #wirt #greg #otgw #cartoonnetwork @cartoonnetworkofficial
@cartoonnetworkla`, /*1*/
  `#b3d #blender3d #blendercommunity #blenderrender #blendercycles #blenderartist #blenderart #3dart #3dartist #digitalart #digitalartist #artistsoninstagram #blender #characterdesigner #illustration #art
#render #artshare #cycles #renderdaily #3dilustration #process #animation #animacion #3danimation #studioshare`, /*2*/
  `#b3d #blender3d #blendercommunity #blenderrender #blendercycles #blenderartist #blenderart #3dart #3dartist #digitalart #digitalartist #artistsoninstagram #blender #characterdesigner #illustration #art
#render #artshare #cycles #renderdaily #3dilustration #character #process #behindthescene #tutorial`, /*3*/
  `#b3d #blender3d #blendercommunity #blenderrender #blendercycles #blenderartist #blenderart #3dart #3dartist #digitalart #digitalartist #3danimation #animation #artistsoninstagram #blender #illustration #render #cycles #renderdaily #3dilustration #character #characterdesign #chrometype #scifi #y2kaesthetic #y2k #plasticity #behindthescenes #process`, /*4*/
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

export const maritdoodles_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const maritdoodles_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const maritdoodles_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const maritdoodles_array_of_posts = [
  ...maritdoodles_images,
  ...maritdoodles_videos
];
