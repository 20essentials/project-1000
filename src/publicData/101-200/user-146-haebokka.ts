import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'haebokka';
const userId = '71de761c-4ab0-4a73-bf24-20915cdf3870';
const prefixUrl = 'https://dominicnikolai.github.io/project-299/assets/haebokka/';
const followers = 358_720;
const followed = 50;
const profileDescription = '비즈니스 문의';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `3D펜으로 몬스터대학교 마이크 와조스키 만들기!👁️ I made a Monsters University Mike Wazowski!👁️ #monstersuniversity #mike #mikewasowski #mikewazowskimemes #memes #meme #diseny #pixar #3dpen #haebokka #3dpen #3dpenart #art #making #howtomake #figure #monster #movie`, /*1*/
  `3d펜으로 인사이드아웃 까칠이 만들기!🥦 I made a Inside Out DISGUST!🥦 #insideout #insideout2 #인사이드아웃 #인사이드아웃2 #당황이 #embarrassment #불안이 #anxiety #cute #trend #만들기 #making #howtomake #피규어 #figure #해보까 #haebokka #3dpen #3dpenart #3d펜 #기쁨이 #joy #부럽이 #envy #까칠이 #disgust`, /*2*/
  `3d펜으로 스폰지밥 뚱이 만들기! I made a Patrick Star💓 #3dpen #3dpenart #haebokka #해보까 #3d펜 #spongebob #krabbypatty #cockroach #patrick #patrickstar #뚱이 #스폰지밥 #바선생 #만들기 #피규어 #figure #diy #youtube #youtuber`, /*3*/
  `3d펜으로 스폰지밥 바선생 만들기! 🍔🪳 I made a SpongeBob Cockroach!🪳🍔 #3dpen #3dpenart #haebokka #해보까 #3d펜 #spongebob #krabbypatty #cockroach #스폰지밥 #바선생 #만들기 #피규어 #figure #diy #youtube #youtuber`, /*4*/
  `3D펜으로 꼬질꼬질한 페드로 라쿤 만들기🐾 I made a shabby Pedro Raccoon🐾 #3dpen #3dpenart #haebokka #해보까 #3d펜 #pedro #pedropedro #raccoon #raccoons #pedroraccoon #페드로 #페드로라쿤 #라쿤 #밈 #meme #trend #유행 #만들기 #피규어 #figure #diy #youtube #youtuber`, /*5*/
  `3D펜으로 제리 인사 짤 만들기!🐹 I made a Jerry Mouse🐹 #3dpen #3dpenart #haebokka #해보까 #3d펜 #tomandjerry #jerry #mouse #톰과제리 #제리 #만들기 #피규어 #figure #diy #youtube #youtuber`, /*6*/
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

export const haebokka_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const haebokka_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const haebokka_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const haebokka_array_of_posts = [
  ...haebokka_images,
  ...haebokka_videos
];
