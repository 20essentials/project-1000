import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ui_yess';
const userId = '';
const prefixUrl = '';
const followers = 11_832;
const followed = 25;
const profileDescription = `ux/ui, tips, vlogs y recursos ☻
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `UX writing no es solo “poner textos bonitos”, es guiar al usuario con intención 💬 ¿Ya habías escuchado este término? 👀 #uxui #uxwriting #uxdesign #uxdesigner`, /*1*/
  `#uxui #uxdesign #uxdesigner #appdesign #login
`, /*2*/
  `Estaba aburrida por eso jajaj, alguien más jugó bomberman?? #gameui #gamedesign #gamedeveloper #gamedesigner`, /*3*/
  `Mockup animados para tu portafolio ✨📈 #portfolio #mockups #mockupsanimados #portafolio`, /*4*/
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

export const ui_yess_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ui_yess_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ui_yess_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ui_yess_array_of_posts = [
  ...ui_yess_images,
  ...ui_yess_videos
];
