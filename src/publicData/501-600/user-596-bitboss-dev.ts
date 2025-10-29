import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'bitboss_dev';
const userId = '9f13b607-dea3-41d9-9ceb-678745e13673';
const prefixUrl = 'https://dominicnikolai.github.io/project-375/assets/bitboss-dev/';
const followers = 72_382;
const followed = 233;
const profileDescription = `💻 Facciamo prodotti digitali`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#softwarehouse #dev #developer #sviluppo #webagency #gestionale #softwaredeveloper #softwaredevelopment`, /*1*/
  `#softwarehouse #dev #developer #sviluppo #webagency #gestionale #manager #softwaredeveloper #softwaredevelopment`, /*2*/
  `Se entri ORA nel mondo della UX, potresti avere un grosso problema 👀 #software #sviluppo #uxdesign #ux #softwarehouse
`, /*3*/
  ` #software #sviluppo #dev #softwarehouse #sviluppoweb`, /*4*/
  ` #software #softwarehouse #dev #sviluppo #uxdesign`, /*5*/
  `#bitboss #sofware #dev #sviluppo #softwarehouse #developer #sviluppoweb`, /*6*/
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

export const bitboss_dev_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const bitboss_dev_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const bitboss_dev_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const bitboss_dev_array_of_posts = [
  ...bitboss_dev_images,
  ...bitboss_dev_videos
];
