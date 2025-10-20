import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'nokttu';
const userId = '621b432a-d4b8-47f3-8bb1-8389cdefe78e';
const prefixUrl = 'https://dominicnikolai.github.io/project-364/assets/nokttu/';
const followers = 114_832;
const followed = 945;
const profileDescription = `Nokttu the black cat 🖤`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `sikonoko nokonoko koshitantan ✨️👀🦌`, /*1*/
  `#cat #gato #neko
#meme #toothlesscat #고양이
#귀여운사진 #고양이짤 #코숏고양이
#catmeme #코리안숏헤어 #검은고양이
#blackcat #meow #healing`, /*2*/
  `#cat #gato #neko #meme #toothlesscat #고양이 #귀여운사진 #고양이짤 #코숏고양이 #catmeme #코리안숏헤어 #검은고양이 #blackcat #meow #healing`, /*3*/
  `#cat #gato #neko #cowboy #cowboycat
#meme #toothlesscat #고양이
#귀여운사진 #고양이짤 #코숏고양이
#catmeme #코리안숏헤어 #검은고양이
#blackcat #meow #healing`, /*4*/
  `#cat #gato #neko
#meme #toothlesscat #고양이
#귀여운사진 #고양이짤 #코숏고양이
#catmeme #코리안숏헤어 #검은고양이
#blackcat #meow #healing`, /*5*/
  `#cat #gato #neko #meme #toothlesscat #고양이 #귀여운사진 #고양이짤 #코숏고양이 #catmeme #코리안숏헤어 #검은고양이 #blackcat #meow #healing`, /*6*/
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

export const nokttu_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const nokttu_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const nokttu_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const nokttu_array_of_posts = [
  ...nokttu_images,
  ...nokttu_videos
];
