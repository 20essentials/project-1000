import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'prairie_dog';
const userId = '64821866-8b02-42e9-a7ce-c4ffa08b12fa';
const prefixUrl = 'https://dominicnikolai.github.io/project-308/assets/prairie-dog/';
const followers = 566_720;
const followed = 50;
const profileDescription = '🧨';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `201701 (￣(工)￣)なんだぁ〜？ #RAN #蘭ちゃん #prairiedog`, /*1*/
  `201701 身だしなみを整えて、と(￣(工)￣) #RAN #蘭ちゃん #prairiedog`, /*2*/
  `201607 味がしない、じゃない(￣(工)￣) #RAN #蘭ちゃん #prairiedog 🍉ちゃんと赤いところ、食べていましたよ。`, /*3*/
  `201510 暑いの、さよなら(￣(工)￣) #RAN #蘭ちゃん #prairiedog`, /*4*/
  `201510 最後のドヤ顔(￣(工)￣) #蘭ちゃん #RAN #prairiedog`, /*5*/
  `201601 伏目がち(￣(工)￣) #RAN #蘭ちゃん #prairiedog`, /*6*/
  `201501 🐻🐻‍❄️ #凛君と蘭ちゃん #RIN #RAN`, /*7*/
  `201501 蘭ちゃんにとられないよう 長くなった凛君。 #凛君と蘭ちゃん #RIN #RAN`, /*8*/
  `201501 凛君の背中は蘭ちゃん専用テーブル #凛君と蘭ちゃん #RIN #RAN`, /*9*/ 
  `201803 🍌真剣mgmg #RAN #蘭ちゃん #prairiedog`, /*10*/
  `201510 (￣(工)￣)？ #RAN #蘭ちゃん #prairiedog`, /*11*/
  `201611 皮は最後にいただきます(￣(工)￣) #RAN #蘭ちゃん #prairiedog`, /*12*/
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

export const prairie_dog_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const prairie_dog_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const prairie_dog_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const prairie_dog_array_of_posts = [
  ...prairie_dog_images,
  ...prairie_dog_videos
];
