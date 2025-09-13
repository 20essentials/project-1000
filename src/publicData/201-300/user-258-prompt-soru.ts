import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'prompt_soru';
const userId = '';
const prefixUrl = '';
const followers = 123_720;
const followed = 202;
const profileDescription = `🎯Soru Insights Lab⚡️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#ray2 #sunomusic #cursor #kiro #windsurf #aicontents #chatgpt5 #imagetovideo`, /*1*/
  `#midjourneyv7 #ray2 #aicreator #aicontents #sunomusic`, /*2*/
  `#imagetovideo #midjourneyvideo #aicreator #sunomusic #texttoimage #aitool`, /*3*/
  `He doesn’t see the end and keeps going ☝️☝️Check my bio for more . . #midjourneyvideo #aidigitalcreator #nanobanana #polloai #aivideo`, /*4*/
  `#midjourneyvideo #aivideotools #imagetovideo #sunomusic #texttoimage #seedreamv4 #veo3video`, /*5*/
  `It’s nice day to ride a bike 🚲 . . #relaxday #midjourneyvideo #sunomusic #aicreator #imagetovideo #nanobanana`, /*6*/
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

export const prompt_soru_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const prompt_soru_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const prompt_soru_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const prompt_soru_array_of_posts = [
  ...prompt_soru_images,
  ...prompt_soru_videos
];
