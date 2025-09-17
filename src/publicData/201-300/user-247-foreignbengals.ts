import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'foreignbengals';
const userId = 'e8b725e4-e33d-4f62-b435-a38cf56e3b54';
const prefixUrl = 'https://dominicnikolai.github.io/project-325/assets/foreignbengals/';
const followers = 622_720;
const followed = 49;
const profileDescription = `Family raised bengal kittens`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Aventador kitty #foreignbengals #baki #bengalcat #catsofinstagram #snowbengal #silverbengal #leopardcat #bengalkitten`, /*1*/
  `#foreignbengals #baki #bengalcat#catsofinstagram #snowbengal #silverbengal
#leopardcat #bengalkitten`, /*2*/
  `Kitties socializing #foreignbengals #baki #bengalcat #catsofinstagram #snowbengal #silverbengal #leopardcat #bengalkitten`, /*3*/
  `#foreignbengals #baki #bengalcat #catsofinstagram #snowbengal #silverbengal
#leopardcat #bengalkitten`, /*4*/
  `Brabus Baki #foreignbengals #baki #bengalcat #catsofinstagram #snowbengal #silverbengal #leopardcat #bengalkitten`, /*5*/
  `#foreignbengals #baki #bengalcat #catsofinstagram #snowbengal #silverbengal
#leopardcat #bengalkitten`, /*6*/
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

export const foreignbengals_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const foreignbengals_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const foreignbengals_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const foreignbengals_array_of_posts = [
  ...foreignbengals_images,
  ...foreignbengals_videos
];
