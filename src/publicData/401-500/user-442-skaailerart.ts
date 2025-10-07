import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'skaailerart';
const userId = '';
const prefixUrl = '';
const followers = 288_832;
const followed = 168;
const profileDescription = `⚡️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Dragon Ball Univers WHO’S YOUR FAVORITE ?🔥 #midjourney #concept #comics #pinterest #instagram #brasil #communitymidjourney #prompts #liveaction #midjourney #frieza #dragonball #animallovers #dbz #dragonballz #goku #kidbuu #vegeta #supersaiyan #dragonballsuper #anime #manga #dalle3 #dragonball #dragonballgt #dragonballfrance #france #wallpaper #wallpaperphone #cell #jiren`, /*1*/
  `#midjourney #concept #comics #pinterest #instagram #brasil #communitymidjourney #prompts #liveaction #midjourney #erenjaeger #attackontitan #animallovers #dbz #dragonballz #mikasa #leviedit #shingekinokyojin #supersaiyan #snk #anime #manga #dalle3 #dragonball #dragonballgt #dragonballfrance #france #wallpaper #wallpaperphone #reinerbraun #armin`, /*2*/
  `#midjourney #concept #comics #pinterest #instagram #brasil #communitymidjourney #prompts #liveaction #midjourney #kakashi #dragonball #animallovers #jiraya #madara #naruto #sasuke #itachi #supersaiyan #dragonballsuper #anime #manga #dalle3 #dragonball #dragonballgt #dragonballfrance #france #wallpaper #wallpaperphone #orochimaru #gaara`, /*3*/
  `#midjourney #concept #dcuniverse #marvel #comics #pinterest #instagram #brasil #communitymidjourney #prompts #liveaction #midjourney #dragonball #animallovers #dbz #dragonballz #goku #broly #vegeta #supersaiyan #dragonballsuper #anime #manga #omegashenron #dragonball #dragonballgt #dragonballfrance #france #wallpaper #wallpaperphone #gokussj4`, /*4*/
  `#midjourney #concept #comics #pinterest #instagram #brasil #communitymidjourney #prompts #liveaction #midjourney #onepiece #dragonball #animallovers #dbz #dragonballz #roronoazoro #luffy #vegeta #supersaiyan #dragonballsuper #anime #manga #dalle3 #dragonball #dragonballgt #dragonballfrance #france #wallpaper #wallpaperphone #cell #jiren`, /*5*/
  `#midjourney #concept #comics #pinterest #instagram #brasil #communitymidjourney #prompts #liveaction #midjourney #kuma #dragonball #animallovers #nami #onepiece #mihawk #luffy #shanks #monkeyddragon #dragonballsuper #anime #manga #dalle3 #dragonball #dragonballgt #dragonballfrance #france #wallpaper #wallpaperphone #marshalldteach #edwardnewgate`, /*6*/
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

export const skaailerart_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const skaailerart_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const skaailerart_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const skaailerart_array_of_posts = [
  ...skaailerart_images,
  ...skaailerart_videos
];
