import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'aicanfeel';
const userId = 'c7136c03-97d1-4fa9-995b-cfec0bf88b51';
const prefixUrl = 'https://dominicnikolai.github.io/project-359/assets/aicanfeel/';
const followers = 245_832;
const followed = 261;
const profileDescription = `CGI+VFX+AI w/ Elite Clubs~DJs~Musicians`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Alien X- The TRUE meaning of Existence. 🔮`, /*1*/
  `Ben 10 Aliens in Real Life 👁️‍🗨️`, /*2*/
  `What if aliens from Ben 10 really existed?`, /*3*/
  `Ben 10 Aliens in Real Life 👁️‍🗨️`, /*4*/
  `Ben 10 Aliens in Real Life 👁️‍🗨️`, /*5*/
  `#instareels #viralreels #DigitalArt #TrendingReels #viralvideo #trendingnow #explorepage #photography #photo #Anime #musician #love #cartoonnetwork #animelove #InstaReels #anime #instagram #animes #instaart #trending #manga #wallpaper #concept #reels #usa #musicvideo #viral #ben10 #reel #demonslayer`, /*6*/
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

export const aicanfeel_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const aicanfeel_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const aicanfeel_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const aicanfeel_array_of_posts = [
  ...aicanfeel_images,
  ...aicanfeel_videos
];
