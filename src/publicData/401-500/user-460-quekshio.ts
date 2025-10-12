import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'quekshio';
const userId = '580403bf-b3e8-4e21-ade5-de3e44295ead';
const prefixUrl = 'https://dominicnikolai.github.io/project-357/assets/quekshio/';
const followers = 1_300_832;
const followed = 394;
const profileDescription = `Film Director / Creator / Cyclist`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Qué bien las mete @QUEKSHIO! 🥵 #blender #vfx #3d`, /*1*/
  `#iamspecialized #tarmacsl8 #newbikeday #bikebuild #creative #editing #magic
`, /*2*/
  `#insta360 #insta360X5`, /*3*/
  `#camping #editing #asmr #creative #cycling #bikepacking #sounddesign #filmmaking`, /*4*/
  `ideo Magic Staff 🎥✨🧙‍♂️`, /*5*/
  `#UlanziCreatorJourney #CreateForCreators`, /*6*/
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

export const quekshio_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const quekshio_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const quekshio_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const quekshio_array_of_posts = [
  ...quekshio_images,
  ...quekshio_videos
];
