import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'highviplife';
const userId = 'c39c795b-274c-44af-852f-932629d69cb0';
const prefixUrl = 'https://dominicnikolai.github.io/project-346/assets/highviplife/';
const followers = 722_832;
const followed = 50;
const profileDescription = `Home of Gentlemen, a Legacy of Luxury`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#luxurywatches #luxury #luxurylifestyle #safe #watches #watchwinder #luxurywatch #wealth`, /*1*/
  `#buggati #bugattitourbillon #cars #carsofinstagram #supercars #luxury #luxurylifestyle #classy`, /*2*/
  `#gordonramsay #ferrari #luxurycars #ferraridaytonasp3 #supercars #luxury #luxurylifestyle #luxurycar #london #supercar #daytonasp3 #wealth`, /*3*/
  `#carlossainz #ferrari #ferraridaytonasp3 #luxury #luxurylifestyle #luxurycars #supercar #monaco #luxurycar #supercars #daytonasp3 #wealth`, /*4*/
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

export const highviplife_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const highviplife_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const highviplife_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const highviplife_array_of_posts = [
  ...highviplife_images,
  ...highviplife_videos
];
