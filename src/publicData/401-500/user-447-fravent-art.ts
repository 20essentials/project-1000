import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'fravent_art';
const userId = 'a487e2f6-64fd-4322-9bbe-2945c4af84d0';
const prefixUrl = 'https://dominicnikolai.github.io/project-355/assets/fravent-art/';
const followers = 63_832;
const followed = 50;
const profileDescription = `digital Art and sculpting`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Libri pergamene e candele con nomadsculpt
#nomadsculpt #3dprinting #3dart #nomadsculpting #3d #bambulab #halloween #miniature #arttoygama #bambustudio #stampa3d stampa3ditalia`, /*1*/
  `#nomadsculpt #lantern #halloween #3dprinting #3dart #3d #blender #lanterna #miniature #presepe`, /*2*/
  `#snoopy #peanuts #nomadsculpt #bambulaba1 #3dprinting #3dart #nomadsculpting #blender3d #arttoy #miniature
`, /*3*/
  `#nomadsculpt #3dprinting #3d #disney #aliceinthewonderland #alicenelpaesedellemeraviglie #3dart #actionfigure #arttoy #miniature`, /*4*/
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

export const fravent_art_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const fravent_art_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const fravent_art_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const fravent_art_array_of_posts = [
  ...fravent_art_images,
  ...fravent_art_videos
];
