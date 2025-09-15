import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'castellarogolfresort';
const userId = '';
const prefixUrl = '';
const followers = 898_720;
const followed = 50;
const profileDescription = `Golf, piscina & colline liguri • Resort`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#CastellaroGolfResort #Liguria #RivieraDeiFiori #CollineLiguri #BorghiLiguri #GolfResort #StayAndPlay #TravelReels #ReelsItalia #VisitLiguria #ItalyTravel #WeekendItalia #ShortBreak #Natura #ExploreItaly`, /*1*/
  `#CastellaroGolfResort #RivieraDeiFiori #VisitLiguria #GolfResort #StayAndPlay #TeeTime #PoolTime #SunsetVibes #RelaxTime #WeekendItalia #ShortBreak #ItalyTravel #TravelReels #ReelsItalia #ExploreItaly`, /*2*/
  `#holeoftheweek #golflife #greenfee #golfitalia #teetime #rivieraligure #golftips`, /*3*/
  `#castellarogolfresort #castellaro #golf #liguria #vacanze #holiday`, /*4*/
  `#castellarogolfresort #besthotel #luxuryhotel #italia #visitliguria #visititaly #best_liguria_pics #liguria_cartoline #alluring_liguria #super_liguria_channel #bestliguriapics #volgoliguria #luxurytravel #luxurylifestyle #beautifulplacestovisit #beautifuldestinations`, /*5*/
  `#castellarogolfresort #besthotel #luxuryhotel #italia #visitliguria #visititaly #best_liguria_pics #liguria_cartoline #alluring_liguria #super_liguria_channel #bestliguriapics #volgoliguria #luxurytravel #luxurylifestyle #beautifulplacestovisit #beautifuldestinations #breakfast #pancake #brioches`, /*6*/
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

export const castellarogolfresort_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const castellarogolfresort_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const castellarogolfresort_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const castellarogolfresort_array_of_posts = [
  ...castellarogolfresort_images,
  ...castellarogolfresort_videos
];
