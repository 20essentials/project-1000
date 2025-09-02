import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'quokka';
const userId = '';
const prefixUrl = '';
const followers = 722_720;
const followed = 23;
const profileDescription = '🏝️';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hey！I’m Kokaka! #ASMR #smilingkokaka #きゅん死 #尊死 #しんどい時見て #なうろく #休み時間 #推しが作ったみたい #かわいすぎる #癒し #安らぎ #毎日わんこ #ストレス解消 #かわいい #動物 #クオッカ #音フェチ #オーストラリア #森林浴`, /*1*/
  `Pokémon Get? #ASMR #きゅん死 #尊死 #しんどい時見て #なうろく #休み時間 #推しが作ったみたい #かわいすぎる #癒し #安らぎ #毎日わんこ #ストレス解消 #かわいい #動物 #クオッカ #音フェチ #オーストラリア #森林浴 #shorts #relaxation #sleepaid #quokka #asmrsounds #mukbangasmr #stressrelief`, /*2*/
  `세상에서 제일 무해한 먹방 장면…✨ 호주의 아이콘, 쿼카가 풀을 뜯어먹는 모습이 포착됐습니다. 귀여운 외모와 순한 성격 덕분에 ‘세상에서 가장 행복한 동물’로 불리기도 하는데요. 쿼카처럼 먹는 친구들 있다면 태그해주세요☑️ 🎥 🎙가장 빠르고 트렌디한 여행 정보 채널 `, /*3*/
  `Kokaka is back！ #ASMR #きゅん死 #尊死 #しんどい時見て #なうろく #休み時間 #推しが作ったみたい #かわいすぎる #癒し #安らぎ #毎日わんこ #ストレス解消 #かわいい #動物 #クオッカ #音フェチ #オーストラリア #森林浴 #shorts #relaxation #sleepaid #quokka #asmrsounds #mukbangasmr #stressrelief`, /*4*/
  `a leaf a day keeps the doctor away #ASMR #smilingkokaka #きゅん死 #尊死 #しんどい時見て #なうろく #休み時間 #推しが作ったみたい #かわいすぎる #癒し #安らぎ #毎日わんこ #ストレス解消 #かわいい #動物 #クオッカ #音フェチ #オーストラリア #森林浴 #quokka #quokkaselfie #quokkasmile #cutestanimal #asmr #asmrsounds #eatingsounds #mukbangasmr #cuteanimals #animalvideos #cutepets`, /*5*/
  `Happy weekend！ #ASMR #きゅん死 #尊死 #しんどい時見て #なうろく #休み時間 #推しが作ったみたい #かわいすぎる #癒し #安らぎ #毎日わんこ #ストレス解消 #かわいい #動物 #クオッカ #音フェチ #オーストラリア #森林浴`, /*6*/
  `Autumn leaves #ASMR #きゅん死 #尊死 #しんどい時見て #なうろく #休み時間 #推しが作ったみたい #かわいすぎる #癒し #安らぎ #毎日わんこ #ストレス解消 #かわいい #動物 #クオッカ #音フェチ #オーストラリア #森林浴`, /*7*/
  `#ASMR #きゅん死 #尊死 #しんどい時見て #なうろく #休み時間 #推しが作ったみたい #かわいすぎる #癒し #安らぎ #毎日わんこ #ストレス解消 #かわいい #動物 #クオッカ #音フェチ #オーストラリア #森林浴`, /*8*/
  `#ASMR #きゅん死 #尊死 #しんどい時見て #なうろく #休み時間 #推しが作ったみたい #かわいすぎる #癒し #安らぎ #毎日わんこ #ストレス解消 #かわいい #動物 #クオッカ #音フェチ #オーストラリア #森林浴`, /*9*/ 
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

export const quokka_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const quokka_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const quokka_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const quokka_array_of_posts = [
  ...quokka_images,
  ...quokka_videos
];
