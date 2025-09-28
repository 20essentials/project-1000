import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lacittaforgiatadallalava';
const userId = '';
const prefixUrl = '';
const followers = 18_923;
const followed = 50;
const profileDescription = `Catania, L'araba Fenice Siciliana`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#catania #sicilia #futtitinni‼️ #etna #eruzione #viralvideo #spettacolo #catanesi #esplosionevulcanica #popolocatanese`, /*1*/
  `#catania #sicilia #italy🇮🇹 #bellezza #marionio #etnavulcano #viralv͟͟i͟͟d͟͟e͟͟o`, /*2*/
  `✨✨VULCANO ETNA SICILIA✨✨`, /*3*/
  `#etna #etnavulcano #eruzione #scenarioapocalittico #scenarioassurdo #catania #cataniaeprovincia #sicilia #italia #spettacolo`, /*4*/
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

export const lacittaforgiatadallalava_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lacittaforgiatadallalava_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lacittaforgiatadallalava_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const lacittaforgiatadallalava_array_of_posts = [
  ...lacittaforgiatadallalava_images,
  ...lacittaforgiatadallalava_videos
];
