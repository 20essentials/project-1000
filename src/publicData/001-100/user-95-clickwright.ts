import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'clickwright';
const userId = '7cbd3550-680a-4822-b557-ef670ff1a7d1';
const prefixUrl = 'https://dominicnikolai.github.io/project-285/assets/click-wright/';
const followers = 520_720;
const followed = 122;
const profileDescription = '🎬 Daily Car Boot Videos';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `How was this still there?? #Carboot #carbootsale #carbootfind #carbootfinds #carbooting #fleamarket #yardsale #garagesale #thrifting #thrift #thriftshopfinds #thriftshop #charityshop #charityshopfind

`, /*1*/
  `This box travelled 6,000 miles from Japan… and inside are some Pokémon pieces that I guarantee you’ve never seen before 👇 #Pokemon #RarePokemon #VintagePokemon #PokemonCollector #Unboxing #FromJapan`, /*2*/
  `Pokemon hiding #UKReseller #CarBootFinds #FlipLife #SoldOnEbay #SideHustle #FoundReselling`, /*3*/
  `She loved it #UKReseller #CarBootFinds #FlipLife #SoldOnEbay #SideHustle #FoundReselling`, /*4*/
  `I should have bought more!! #UKReseller #CarBootFinds #FlipLife #SoldOnEbay #SideHustle #FoundReselling`, /*5*/
  `Car boot sale finds uk #UKReseller #CarBootFinds #FlipLife #SoldOnEbay #SideHustle #FoundReselling`, /*6*/
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

export const clickwright_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const clickwright_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const clickwright_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const clickwright_array_of_posts = [
  ...clickwright_images,
  ...clickwright_videos
];
