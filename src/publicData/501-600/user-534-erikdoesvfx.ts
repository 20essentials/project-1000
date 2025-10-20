import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'erikdoesvfx';
const userId = '54030249-5ba9-40a0-85bb-d4e201a91374';
const prefixUrl = 'https://dominicnikolai.github.io/project-367/assets/erikdoesvfx/';
const followers = 507_832;
const followed = 50;
const profileDescription = `My VFX course is finally available`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#vfx #edit #3dartist #render #cgiartist #vfxartist #transformers`, /*1*/
  `If you can’t beat ‘em, join ‘em #NarakaBladepoint #Gundam #vfx #edit #3dartist #render #cgiartist #vfxartist`, /*2*/
  `#vfx #edit #3dartist #render #cgiartist #vfxartist`, /*3*/
  `It's not about money. Its all about time`, /*4*/
  `If you want to see how I made it, I just uploaded a YouTube video on the process 😊`, /*5*/
  `he movie would have a been a lot shorter`, /*6*/
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

export const erikdoesvfx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const erikdoesvfx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const erikdoesvfx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const erikdoesvfx_array_of_posts = [
  ...erikdoesvfx_images,
  ...erikdoesvfx_videos
];
