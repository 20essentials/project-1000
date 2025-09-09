import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lotion3d';
const userId = '';
const prefixUrl = '';
const followers = 37_920;
const followed = 50;
const profileDescription = `I make 3D art using Blender`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Trance - made in blender by me This is just the first scene of many that was gonna be a little short video. Figured I’d post this now as a teaser #blenderenvironment #blender #blender3dartwork #cyberpunk #scifi #hyperrealism #cinematography`, /*1*/
  `#blender #blender3d #blenderrender #cinematic #surrealism #3dart #cyberpunk #nightlife #scifi #cyberpunkrenders #cyberpunkart`, /*2*/
  `#blenderrender #3dart #3denvironment #scifiart #cyberpunk ##blenderart #nightlife #motorcycleart #cinematic`, /*3*/
  `Vibes at an all time high 🎵, Getting better with time 🍷`, /*4*/
  `Echos of the Void - Here is the full rendered animation. Thank you guys for the support! 🙏 #blender #blender3d #cyberpunk #scifi #cinmatography #3drender #bladerunner2049 #hyperrealism`, /*5*/
  `#blender #blender3d #cyberpunk #scifi #cinmatography #3drender #bladerunner2049 #hyperrealism`, /*6*/
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

export const lotion3d_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lotion3d_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lotion3d_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const lotion3d_array_of_posts = [
  ...lotion3d_images,
  ...lotion3d_videos
];
