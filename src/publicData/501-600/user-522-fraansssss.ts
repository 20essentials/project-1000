import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'fraansssss';
const userId = '5529fe6e-2a92-4f38-b06e-7f1bc15b9bda';
const prefixUrl = 'https://dominicnikolai.github.io/project-366/assets/fraansssss/';
const followers = 12_832;
const followed = 567;
const profileDescription = `Ilustrador 🖌🥤`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `I cant 🧐 #illustrationartists #diseños #ilustraciondigital #trabajo #procreate #motivation #illustration #diseños #illustrator #trabajo`, /*1*/
  `#diseñografico #design #gym #illustration #dibujo #motivation #diseños #illustrator #ilustracion #trabajo #gymbro`, /*2*/
  `#procreate #diseños #illustrationartists #superaciónpersonal #ilustraciondigital #illustration #diseñografico #diseños #illustrator`, /*3*/
  `#procreate #diseños #illustrationartists #superaciónpersonal #ilustraciondigital #illustration #diseñografico #diseños #illustrator`, /*4*/
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

export const fraansssss_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const fraansssss_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const fraansssss_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const fraansssss_array_of_posts = [
  ...fraansssss_images,
  ...fraansssss_videos
];
