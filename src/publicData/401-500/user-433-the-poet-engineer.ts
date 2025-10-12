import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'the_poet_engineer';
const userId = '82ef5a79-2975-4ab3-bbe6-2c2e52de5dfd';
const prefixUrl = 'https://dominicnikolai.github.io/project-353/assets/the-poet-engineer/';
const followers = 83_832;
const followed = 128;
const profileDescription = `⡷neural interface•.⠐⢾`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#touchdesigner #touchdesignerlearning #touchdesignercommunity #handtracking #augmentedreality #newmediaart #creativecoding`, /*1*/
  `#touchdesigner #touchdesignerlearning #touchdesignercommunity #newmediaart #creativecoding #generativeart #augmentedreality #interface`, /*2*/
  `#touchdesigner #touchdesignerlearning #touchdesignercommunity #newmediaart #creativecoding #augmentedreality #chinesecharacters #hanzi #kanji`, /*3*/
  `#touchdesigner #touchdesignerlearning #touchdesignercommunity #newmediaart #creativecoding #augmentedreality #generativeart #tutting #dance #kinetic`, /*4*/
  `#touchdesigner #touchdesignercommunity #touchdesignerlearning #creativecoding #generativeart #newmediaart #augmentedreality #handtracking #userinterface #scifi #futuristic`, /*5*/
  `#touchdesigner #touchdesignerlearning #touchdesignercommunity #creativecoding #generativeart #handtracking #mixedreality #graphicsesign #designinspiration #digitalart`, /*6*/
  `#touchdesigner #touchdesignercommunity #touchdesignerlearning #newmediaart #videoart #digitalart #creativecoding #generativeart #dataviz #dataart`, /*7*/
  `#touchdesigner #touchdesignercommunity #touchdesignerlearning #newmediaart #videoart #digitalart #creativecoding #generativeart #dataviz #dataart`, /*8*/
  `#touchdesigner #touchdesignercommunity #touchdesignerlearning #newmediaart #videoart #digitalart #creativecoding #generativeart #dataviz #dataart`, /*9*/ 
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

export const the_poet_engineer_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const the_poet_engineer_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const the_poet_engineer_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const the_poet_engineer_array_of_posts = [
  ...the_poet_engineer_images,
  ...the_poet_engineer_videos
];
