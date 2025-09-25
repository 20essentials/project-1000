import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'piercarlotozzi';
const userId = '';
const prefixUrl = '';
const followers = 106_832;
const followed = 110;
const profileDescription = ` Graphic Designer e Video Editor Freelance`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Questa settimana, per la rubrica “Designer che devi conoscere” vi parlo di un altro dei miei studi preferiti: "studiokoto2 uno delle realtà più interessanti del momento, che merita di essere tenuta d’occhio #design #graphicdesign #branding #creativity`, /*1*/
  `#design #graphicdesign #jessicawalsh`, /*2*/
  `#design #graphicdesign #creativity #data`, /*3*/
  `In questo episodio di “Designer che devi conoscere” Vi parlo di uno dei miei studi preferiti: @porto_rocha Uno delle realtà, che chi è interessato al branding, deve sicuramente tenere d’occhio #design #graphicdesign #branding`, /*4*/
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

export const piercarlotozzi_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const piercarlotozzi_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const piercarlotozzi_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const piercarlotozzi_array_of_posts = [
  ...piercarlotozzi_images,
  ...piercarlotozzi_videos
];
