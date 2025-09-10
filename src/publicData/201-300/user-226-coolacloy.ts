import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'coolacloy';
const userId = '7ede1b91-66bf-42d9-90fc-e546d14fc70c';
const prefixUrl = 'https://dominicnikolai.github.io/project-319/assets/coolacloy/';
const followers = 590_823;
const followed = 422;
const profileDescription = `visuals`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#digitalart #dreamworld #dreams #digitalarts #unrealengine5 #mdcommunity #motiondesigner #motionmood #motiongraphics #astralplane #astralprojection #astral #renderzone #renderoftheday #renderlovers #nftcollector #nftart #blackholes #infinity #blackhole #spaceandtime #universe #océan #ocean #nebula #whales`, /*1*/
  `#trippy #trippyart #reality #universe #ultimatereality #trippyvideos #trippyartwork #dream #dreams #dreamart #astral #astralrealm #astralprojection #consciousness #space #dreamworld #dreamworldimages #cosmicconsciousness #cosmicenergy #newyork_instagram #nyc #timesquare #centralpark #newyorkartist #newyorkart`, /*2*/
  `Tranquility in motion • • • • • #digitalart #dreamworld #dreams #digitalarts #unrealengine5 #mdcommunity #motiondesigner #motionmood #motiongraphics #astral #renderzone #renderoftheday #renderlovers #nftcommunity #nftart #fluidartgallery #stream`, /*3*/
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

export const coolacloy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const coolacloy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const coolacloy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const coolacloy_array_of_posts = [
  ...coolacloy_images,
  ...coolacloy_videos
];
