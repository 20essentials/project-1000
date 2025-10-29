import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'web_aura';
const userId = 'ceb19a4e-7f9f-41ed-a2f4-7acb9aa99c91';
const prefixUrl = 'https://dominicnikolai.github.io/project-375/assets/web-aura/';
const followers = 12_832;
const followed = 123;
const profileDescription = `🤍 Link in the future...`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#websiteforclients#onlinegrowth#buildyourbrandonline#websitestrategy#businessownertools#smartbusinessmoves#attractmoreclients#digitalmakeover#websitefix`, /*1*/
  `#websiteforclients #onlinegrowth #buildyourbrandonline #websitestrategy #businessownertools #smartbusinessmoves #attractmoreclients #digitalmakeover #websitefix`, /*2*/
  `Website Developer `, /*3*/
  `#websiteforclients #onlinegrowth `, /*4*/
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

export const web_aura_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const web_aura_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const web_aura_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const web_aura_array_of_posts = [
  ...web_aura_images,
  ...web_aura_videos
];
