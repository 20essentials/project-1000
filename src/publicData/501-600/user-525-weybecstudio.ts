import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'weybecstudio';
const userId = '';
const prefixUrl = '';
const followers = 102_832;
const followed = 58;
const profileDescription = `Inquiry`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#vfxartist #vfxbreakdown #vfxindia #explorepage #explore #expresso #sabrinacarpenter #blender3d #blendercommunity #blenderrender #blenderart #blendercycles #blenderartist #blender3dart #blenderanimation #blendereevee #motiongraphicscollective #motionsgraphics #graphicsmotion #blenderartists #motiongraphics_p #motiongraphicsdesign #vfxindia #vfxnews`, /*1*/
  `#b3d #blender #vfx #vfxartist #vfxbreakdown #vfxindia #explorepage #explore #blender3d #blendercommunity #blenderrender #blenderart #blendercycles #blenderartist #blenderanimation #blendereevee #blendercycles #motiongraphicscollective #motionsgraphics #graphicsmotion #blenderartists #motiongraphics_p #motiongraphicsdesign #vfxindia #vfxnews`, /*2*/
  `#b3d #blender #vfx #vfxartist #vfxbreakdown #vfxindia #explorepage #explore #blender3d #blendercommunity #blenderrender #blenderart #blendercycles #blenderartist #noai #blenderanimation #blendereevee #motiongraphicscollective #motionsgraphics #graphicsmotion #blenderartists #motiongraphics_p #motiongraphicsdesign #vfxindia #vfxnews`, /*3*/
  `#b3d #blender #vfx #vfxartist #vfxbreakdown #vfxindia #explorepage #explore #blender3d #blendercommunity #blenderrender #blenderart #blendercycles #blenderartist #noai #blenderanimation #blendereevee #motiongraphicscollective #motionsgraphics #graphicsmotion #blenderartists #motiongraphics_p #motiongraphicsdesign #vfxindia #vfxnews`, /*4*/
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

export const weybecstudio_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const weybecstudio_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const weybecstudio_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const weybecstudio_array_of_posts = [
  ...weybecstudio_images,
  ...weybecstudio_videos
];
