import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'spirograph';
const userId = '86a0c21e-97e2-40fb-9608-b9e92a0ce1f2';
const prefixUrl = 'https://dominicnikolai.github.io/project-256/assets/spirograph/spirograph/';
const followers = 497_000;
const followed = 322;
const profileDescription = '🌀Spirograph Satisfaction🌀';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 11;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `A Perfect Slide into a Flawless U . . #spirographshr #spirograph #satisfying #asmr #pattern #reels #reels #shr #art #viral #relax`, /*1*/
  `Elegant Flow of Green Waves . . #spirographshr #asmr #spirograph #satisfying #pattern #reels #shr #art #viral #relax`, /*2*/
  `Spirograph in Reverse, but with Style . . #spirographshr #asmr #spirograph #satisfying #pattern #reels #shr #art #viral #relax`, /*3*/
  `A net that doesn’t catch – only connects . . #spirographshr #asmr #spirograph #satisfying #pattern #reels #shr #art #viral #relax`, /*4*/
  `The Symbol of Inner Energy . . #spirographshr #asmr #spirograph #satisfying #pattern #reels #shr #art #viral #relax`, /*5*/
  `When Lines Create Life . . #spirographshr #asmr #spirograph #satisfying #pattern #reels #shr #art #viral #relax`, /*6*/
  `The video doesn’t show how big this shape really is . . #spirographshr #asmr #spirograph #pattern #satisfying #reels #shr #art #viral #relax #relax`, /*7*/
  `You won’t understand what’s happening… until you see the ending! . . #spirographshr #asmr #spirograph #satisfying #pattern #reels #shr #art #viral #relax`, /*8*/
  `The shape is real… the meaning is up to you . . #spirographshr #asmr #spirograph #satisfying #pattern #reels #shr #art #viral #relax`, /*9*/ 
  `Colors dance, the sound calms you – the perfect ending . . #spirographshr #asmr #satisfying #pattern #reels #shr #art #viral #relax`, /*10*/
  `This experiment is more beautiful than it has any right to be! . . #turmeric #turmerictrend #spirographshr #asmr #spirograph #magic #amazing #pattern #reels #shr #art #viral #relax`, /*11*/
  
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

export const spirograph_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const spirograph_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const spirograph_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const spirograph_array_of_posts = [
  ...spirograph_images,
  ...spirograph_videos
];
