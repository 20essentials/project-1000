import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'artviral';
const userId = '';
const prefixUrl = '';
const followers = 5_720_830;
const followed = 50;
const profileDescription = '🎨 ';
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#art #drawing #creativity`, /*1*/
  `#ArtDailyDose #KillerAcid #art #textile #psychedelic #design`, /*2*/
  `Lei Ge Shi Yi is a Chinese artist celebrated for transforming ordinary foods like watermelons, cheese, and carrots into intricate sculptural works. With remarkable knife precision and imagination, he reshapes fruits and vegetables into elegant portraits, legendary figures, and ornate designs—all carefully carved by hand. Artist: 磊哥食艺 / dashu2409 on Douyin #art #foodart #carving #sculpture`, /*3*/
  `#art #colorpencilart #hyperrealism`, /*4*/
  `Ziyang is a Chinese cake artist renowned for creating beautifully decorated cakes with highly detailed buttercream floral patterns that appear lifelike. He blends refined artistry with culinary expertise to turn ordinary cakes into breathtaking edible works of art. Artist: 紫阳 / dydditzmp6lw on Douyin #art #cake #artist`, /*5*/
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

export const artviral_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const artviral_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const artviral_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const artviral_array_of_posts = [
  ...artviral_images,
  ...artviral_videos
];
