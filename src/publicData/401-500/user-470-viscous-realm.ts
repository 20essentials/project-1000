import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'viscous_realm';
const userId = 'd998e86e-7be9-4beb-b7b3-e1c434687477';
const prefixUrl = 'https://dominicnikolai.github.io/project-358/assets/viscous-realm/';
const followers = 339_832;
const followed = 429;
const profileDescription = `I like to make unconventional things ✨`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Sort of productive day in blender 🤷. #b3d #blender3d #blender3dart #3danimation #3dart #3dartist #3dmodel #cgiart #blendercommunity #blendercycles`, /*1*/
  `50% of App City is done. Which App did you🫵🏻 like the most so far? #b3d #blender3d #3danimation #3dart #3dartist #blendercommunity #spotify #instagram #whatsapp #amazon #gmail`, /*2*/
  `#b3d #blender #blender3d #blendercycles #3dart #3dconceptart #3danimation #isometric #3dillustration #illustrarch #zen #zenroom #3dmodeling #3dmodel`, /*3*/
  `#b3d #blender3d #blenderrender #3dblender #3dconceptart #3dart #3dartist #3danimation #3dmodeling #3dmodel #3dillustration #illustrarch #archigram #motivation`, /*4*/
  `#b3d #blender3d #3danimation #3dart #3dartist`, /*5*/
  `A Rolex Store ⏱️ #b3d #blender3d #3danimation #3dart #blendercommunity #rolex`, /*6*/
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

export const viscous_realm_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const viscous_realm_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const viscous_realm_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const viscous_realm_array_of_posts = [
  ...viscous_realm_images,
  ...viscous_realm_videos
];
