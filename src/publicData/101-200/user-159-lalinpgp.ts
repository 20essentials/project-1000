import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lalinpgp';
const userId = '67cb0865-f2de-4ceb-a4aa-3293d8a89298';
const prefixUrl = 'https://dominicnikolai.github.io/project-304/assets/lalinpgp/';
const followers = 792_720;
const followed = 312;
const profileDescription = '8K | Film & Television photography';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Majestic Night View of Shanghai !! . . . . . #Shanghai #pudong #deepseek #street #urban_street #urban_city #moderntown #cyberpunk2077 #skyscraper #cyberpunklovers #architecture #design #droneviewchina #dji #8k #aerialphotography #chinatown #modernchina #china`, /*1*/
  `Properous Shanghai City! # # # #shanghai #street #urban_street #urban_city #moderntown #cyberpunk2077 #skyscraper #architecture #design #droneviewchina #dji #aerialphotography #chinatown #modernchina #china #fyp`, /*2*/
  `This is how Shanghai bund becomes crowded on Holidays !! . . . #Shanghai #bund #pudong #cityscape #nightscape #citylovers #urbancity #cyberpunk2077 #skyscraper #cyberpunklovers #architecture #design #droneviewchina #dji #8k #inspire3 #aerialphotography #chinatown #modernchina #china`, /*3*/
  ` #dji #8k #inspire3 #aerialphotography #chinatown #modernchina #china
`, /*4*/
  `#letsflyovershanghaisky #shanghaisky #china🇨🇳`, /*5*/
  `Shanghai Tower with her two sisters! . . . #Shanghai #pudong #cityscape #nightscape #citylovers #urbancity #cyberpunk2077 #skyscraper #cyberpunklovers #architecture #design #droneviewchina #dji #8k #inspire3 #aerialphotography #chinatown #modernchina #china`, /*6*/
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

export const lalinpgp_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lalinpgp_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lalinpgp_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const lalinpgp_array_of_posts = [
  ...lalinpgp_images,
  ...lalinpgp_videos
];
