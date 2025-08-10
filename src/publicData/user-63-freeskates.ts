import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'freeskates';
const userId = '';
const prefixUrl = '';
const followers = 195_720;
const followed = 132;
const profileDescription = '🎒 Portable skates that turn heads';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 9;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `New skate spot 🔓💫 #skating #rollerskate #freeskates`, /*1*/
  `she was so nice ☺️`, /*2*/
  `Best feeling ever 😍 Filmed during our Beijing competition trip! 🇨🇳 Nothing beats exploring with friends on freeskates 🙌 more freeskating content ✨ #skating #rollerskating #longboarding #freeskates`, /*3*/
  `Trying to get this one down! 💪 The trick Gabe is doing here is called “kickflip switch-it,” which is where one freeskate does a kickflip, and both skates swap positions. #skating #kickflip #skatetricks #streetskating #freeskates`, /*4*/
  `Just a day at work 😎 feat.`, /*5*/
  `5 steps for smoother freeskating! In one continuous take, Kevin walks through some exercises for improving posture and riding style on freeskates ➿➿ 🎥`, /*6*/
  `Last shot was definitely first try 💯 feat. jackknapek 🔥 #skate #skating #rollerskating #rollerskate #inlineskate #rollerblades #longboarding #freeskates`, /*7*/
  `Making it look so easy 💯 feat. pro rider Hogo 🇨🇳🔥 #skating #inlineskate #streetskating #freeskates`, /*8*/
  `Love these random interactions!`, /*9*/
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

export const freeskates_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const freeskates_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const freeskates_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const freeskates_array_of_posts = [
  ...freeskates_images,
  ...freeskates_videos
];
