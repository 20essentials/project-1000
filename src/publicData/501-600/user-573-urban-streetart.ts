import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'urban_streetart';
const userId = '4f5e6934-fa28-4cea-98da-38e5c9877723';
const prefixUrl = 'https://dominicnikolai.github.io/project-372/assets/urb4n-streetart/';
const followers = 4_832_832;
const followed = 50;
const profileDescription = `URBAN STREET ART®️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#streetart #artwork #drawing #sketch #painting #tattoo #ink #digitalart #design #instagood #picoftheday #artist #portrait #graffiti #art #photography #illustration #streetartphotography #streetarteverywhere #amazing #beautiful #reels #baseball #skills`, /*1*/
  ` #art`, /*2*/
  `#art #streetart`, /*3*/
  ` 💥 #art`, /*4*/
  `💥 #art`, /*5*/
  `💥 #art`, /*6*/
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

export const urban_streetart_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const urban_streetart_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const urban_streetart_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const urban_streetart_array_of_posts = [
  ...urban_streetart_images,
  ...urban_streetart_videos
];
