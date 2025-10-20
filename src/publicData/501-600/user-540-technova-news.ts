import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'technova_news';
const userId = 'd4eba7e4-8519-4e1a-9d03-4992a68be53f';
const prefixUrl = 'https://dominicnikolai.github.io/project-368/assets/technova_news/';
const followers = 372_832;
const followed = 386;
const profileDescription = `Tecnologia, innovazione e futuro`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#engineering #design #lights #karaoke #texture #wall #architecture #art #digitalart`, /*1*/
  `#engineering #technology #device #digital`, /*2*/
  `#nike #shoes #technology #engineering #news
#upgrade #design`, /*3*/
  `#exibition #live #drone #device #technology #computer #lightingdesign #china`, /*4*/
  `Le immagini vengono proiettate su membrane elastiche ultraveloci che rispondono ai movimenti della mano. La tecnologia è già in fase di preparazione per l'implementazione in musei e mostre.

#technology #hologram #engineering #device
#digital #computer`, /*5*/
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

export const technova_news_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const technova_news_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const technova_news_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const technova_news_array_of_posts = [
  ...technova_news_images,
  ...technova_news_videos
];
