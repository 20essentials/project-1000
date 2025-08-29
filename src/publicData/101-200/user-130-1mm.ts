import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'one_minute_magazine';
const userId = 'f40de87c-1ca1-4f2f-b789-a033970be45b';
const prefixUrl = 'https://dominicnikolai.github.io/project-295/assets/1mm/';
const followers = 323_789;
const followed = 38;
const profileDescription = '1mmm';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🐦 새를 본따 만든 새 조 鸟(niǎo) `, /*1*/
  `🕐 풍경과 하나되는 글자, 이게 바로 한자의 매력인건가`, /*2*/
  `🕐 F1 보고 ’박스 박스‘하는 사람들 다 모이삼. (positive) 🏎️`, /*3*/
  `🔥 샤먼 쌍둥이빌딩(双子塔) 60층에 위치한 바에서 불꽃을 `, /*4*/
  `❤️ 이 날은 주로 남성이 여성에게 꽃다발을 선`, /*5*/
  `🏴‍☠️ 최근 중국 양꼬치 가게들에서는 영화 캐리비안의 해적을 `, /*6*/
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

export const one_minute_magazine_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const one_minute_magazine_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const one_minute_magazine_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const one_minute_magazine_array_of_posts = [
  ...one_minute_magazine_images,
  ...one_minute_magazine_videos
];
