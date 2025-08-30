import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'netflixnmovies';
const userId = '';
const prefixUrl = '';
const followers = 11_820_322;
const followed = 32;
const profileDescription = 'memes and movies account';
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `“Don’t stop on my account” IS ACTUALLY CRAZYYYYY 😭 🎥 DreamWorks is an American film production company known for creating animated feature films, television series, and live-action movies. Founded in 1994 by Steven Spielberg, Jeffrey Katzenberg, and David Geffen, the studio gained fame for its animated hits like “Shrek,” “Finding Nemo,” “How to Train Your Dragon,” and “Kung Fu Panda.” DreamWorks is recognized for its engaging storytelling, innovative animation, and memorable characters, appealing to both children and adults. The studio has received numerous awards and accolades, solidifying its place as a major player in the entertainment industry. #explorepage #explorepost #funnymemes #memes #memestagram #memesdaily #wholesome #wholesomememes #fashion #fashionstyle #jokes #movie #movies #viralmovies`, /*1*/
  `She ate him 💀 🎥 bao: An aging Chinese mother suffering from empty nest syndrome gets another chance at motherhood when one of her dumplings springs to life as a lively, giggly dumpling boy. 📺 watch on: Disney plus #explorepage #explorepost #funnymemes #memes #memestagram #memesdaily #wholesome #wholesomememes #fashion #fashionstyle #jokes #movie #movies #viralmovies #moviescenes`, /*2*/
  `She was the only one who gave him attitude n lived 🎥 no country for old men: Llewelyn Moss discovers $2 million at the scene of a failed drug deal in the Texas desert, but soon finds himself hunted by a ruthless hitman. As Moss tries to evade the deadly pursuit, local Sheriff Ed Tom Bell struggles to make sense of the escalating violence. In a grim chase where prey and predator blur, fate and justice collide with devastating consequences. 📺 watch on prime video #explorepage #explorepost #funnymemes #memes #memestagram #memesdaily #wholesome #wholesomememes #fashion #fashionstyle #jokes #movie #movies #viralmovies #moviescenes`, /*3*/
  `they don’t make movies like this anymore 🎥 white chicks: After an unsuccessful mission, FBI agents Kevin and Marcus Copeland fall into disgrace at the agency. They decide to work undercover on an abduction case disguised as Brittany and Tiffany Wilson, the vain, spoiled white daughters of a tycoon. 📺watch on: Netflix, prime video, Apple TV #explorepage #explorepost #funnymemes #memes #memestagram #memesdaily #wholesome #wholesomememes #fashion #fashionstyle #jokes #movie #movies #viralmovies #moviescenes`, /*4*/
  `I wish they did a movie with the same cast 😳❤️ 🎥 Fantastic Four: Rise of the Silver Surfer: Everything seems to be going great for the Fantastic Four. Reed and Sue are finally getting married, and things couldn’t seem better. However, when the mysterious Silver Surfer crashes things, they learn that they will have to deal with an old foe, and the powerful planet eating Galactus. 📺 watch on: Disney plus #explorepage #explorepost #funnymemes #memes #memestagram #memesdaily #wholesome #wholesomememes #fashion #fashionstyle #jokes #movie #movies #viralmovies #moviescenes`, /*5*/
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

export const netflixnmovies_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const netflixnmovies_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const netflixnmovies_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const netflixnmovies_array_of_posts = [
  ...netflixnmovies_images,
  ...netflixnmovies_videos
];
