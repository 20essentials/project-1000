import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ocaelgames';
const userId = '';
const prefixUrl = '';
const followers = 148_832;
const followed = 132;
const profileDescription = `PES e FIFA Antigos e muito mais… 🎮`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Arena Corinthians - Copa do Mundo 2014 PS3/XBOX360 #copadomundo #gamesbrasil #games #nostalgia #playstation2 #ps3 #xbox360 #nostalgiagames #eafc #futebol`, /*1*/
  `PES 2011 PS2 - BARCELONA X REAL MADRID

#pes2011 #efootball #proevolutionsoccer #futebol #playstation #jogosantigos #ps3 #gamesbrasil`, /*2*/
  `FIFA Soccer 2002 PlayStation 2 #ps2games #fifasoccer #nostalgic #games #ps2 #retrogames`, /*3*/
  `Pro Evolution Soccer PlayStation 2 #games #proevolutionsoccer #konami #gamesretro #retrogames #ps2 #playstation #nostalgia #jogosantigos`, /*4*/
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

export const ocaelgames_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ocaelgames_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ocaelgames_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ocaelgames_array_of_posts = [
  ...ocaelgames_images,
  ...ocaelgames_videos
];
