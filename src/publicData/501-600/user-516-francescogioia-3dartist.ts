import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'francescogioia_3dartist';
const userId = '';
const prefixUrl = '';
const followers = 132_832;
const followed = 215;
const profileDescription = `VFX / 3D artist`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#3dartist #vfxartist #rigging #skinning #animazione3d`, /*1*/
  `#3dartist #rendering #gpu #vfxartist #animazione3d`, /*2*/
  `#throwback #rigger #movies #3dcharacter #3dartist`, /*3*/
  `#3dartist #cgi #challenge #top3 #vfxartist`, /*4*/
  `#3dartist #vfxartist #abc #fresnel #shader`, /*5*/
  `#3dartist #vfxartist #3dmodeli̇ng #groomer #animazione3d`, /*6*/
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

export const francescogioia_3dartist_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const francescogioia_3dartist_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const francescogioia_3dartist_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const francescogioia_3dartist_array_of_posts = [
  ...francescogioia_3dartist_images,
  ...francescogioia_3dartist_videos
];
