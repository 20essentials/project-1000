import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lingojiapp';
const userId = '';
const prefixUrl = '';
const followers = 232_720;
const followed = 50;
const profileDescription = 'English learning';
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Easy English Learning 🇬🇧 English comprehension for beginners 🇬🇧 Learn English by listening #englishlearning #learnenglish #comprehension #englishforkids #easyenglish #englishlesson #englishcourse #englishlistening #englishdaily #dailyenglish #anglais #anglaisfacile #ingles #inglesfacil #inglese #английский
`, /*1*/
  `Easy English Learning 🇬🇧 English comprehension for beginners Learn English by listening Simple English explanations to everyday life scenes #englishlearning #learnenglish #comprehension #englishforkids #easyenglish #englishlesson #englishcourse #englishlistening #englishdaily #dailyenglish #anglais #anglaisfacile #ingles #inglesfacil #inglese #английский #İngilizce #TiếngAnh #英语 #英語 #영어 #الإنجليزية #अंग्रेज़ी`, /*2*/
  `Easy English Learning 🇬🇧 Working on top of ladders carries a risk of falls, especially if the ladder is not stable or placed on uneven ground. Even a short fall can cause injuries such as sprains, fractures, or head impacts. Ensuring the ladder is set up correctly and checked before use helps reduce these risks. Overreaching while on a ladder can cause a loss of balance. This is a common cause of accidents, as workers may try to extend their reach rather than reposition the ladder. Keeping your body centered between the rails is a basic but important safety practice. Fatigue and distraction can also increase the risk of accidents. Long periods on a ladder can strain muscles, affect concentration, and make it easier to slip. Taking regular breaks and staying alert are key to maintaining safety while working at height. English comprehension for beginners Learn English by listening Simple English explanations to everyday life scenes #englishlearning #learnenglish #comprehension #englishforkids #easyenglish #englishlesson #englishcourse #englishlistening #englishdaily #dailyenglish #anglais #anglaisfacile #ingles #inglesfacil #inglese #английский #İngilizce #TiếngAnh #英语 #英語 #영어 #الإنجليزية #अंग्रेज़ी`, /*3*/
  `Easy English Learning 🇬🇧 English comprehension for beginners Learn English by listening Simple English explanations to everyday life scenes #englishlearning #learnenglish #easyenglish`, /*4*/
  `Easy English Learning 🇬🇧 English comprehension for beginners Learn English by listening Simple English explanations to everyday life scenes #englishlearning #learnenglish #comprehension #englishforkids #easyenglish #englishlesson #englishcourse #englishlistening #englishdaily #dailyenglish #anglais #anglaisfacile #ingles #inglesfacil #inglese #английский #İngilizce #TiếngAnh #英语 #英語 #영어 #الإنجليزية #अंग्रेज़ी`, /*5*/
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

export const lingojiapp_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lingojiapp_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lingojiapp_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const lingojiapp_array_of_posts = [
  ...lingojiapp_images,
  ...lingojiapp_videos
];
