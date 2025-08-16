import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'morpheussosia';
const userId = 'c2735390-8261-4996-a74d-492ac7bf1090';
const prefixUrl = 'https://dominicnikolai.github.io/project-267/assets/morpheussosia/';
const followers = 207_720;
const followed = 322;
const profileDescription = 'Do universo de Matrix para sua tela!! 🔵🤲🏾🔴';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `wake up, last call #matrix`, /*1*/
  `🔴🤲🏾🔵2025⛓️‍💥#matrix #morpheussosia #morpheus`, /*2*/
  `O TEMPO PAROU⏳`, /*3*/
  `A procura do escolhido 🔵🤲🏾🔴`, /*4*/
  `Bugalu ficou me encarando 🤯🙌🏻#matrix #morpheussosia`, /*5*/
  `Isto não é real!?#matrix #morpheus`, /*6*/
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

export const morpheussosia_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const morpheussosia_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const morpheussosia_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const morpheussosia_array_of_posts = [
  ...morpheussosia_images,
  ...morpheussosia_videos
];
