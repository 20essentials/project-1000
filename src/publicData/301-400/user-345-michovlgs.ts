import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'michovlgs';
const userId = 'fa539533-0997-4101-8544-7a1d0f3ff6b4';
const prefixUrl = 'https://dominicnikolai.github.io/project-342/assets/michovlgs/';
const followers = 432_325;
const followed = 50;
const profileDescription = `Soy el Micho y subo videos al azar`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#golf #golfespaña #golflatino #golflife #cursodegolf #golfcolombia #golfmexico #golfargentina #golfchile #broma #bromagolf #risas #risasmillonarias #risamillonaria #humor #humorlatino #golfswing #golfing #polvora #petardo #FULMINANTE`, /*1*/
  `Mi amiga alcohólica 🤣☝`, /*2*/
  `#persecucion #policia #nolapolizia #tranquilidad #zen`, /*3*/
  `#mango #perrofeliz #goldenretriever #goldenretrieversofinstagram #perros #perroplayero #humord`, /*4*/
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

export const michovlgs_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const michovlgs_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const michovlgs_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const michovlgs_array_of_posts = [
  ...michovlgs_images,
  ...michovlgs_videos
];
