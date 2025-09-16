import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'jzollerart';
const userId = '';
const prefixUrl = '';
const followers = 63_270;
const followed = 278;
const profileDescription = `Artist living and painting in Miami`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#JohnZoller #artwork #modernart #contemporaryart #fineart #artworld #artcollector #artadvisor #artgallery #artbasel #artmiami #artpalmbeach #palmbeach #interiordesign #decor #modern #modernhome #luxe #ad #vogueliving #miamiart #palmsprings #worthavenue #rollsroycedubai #parisinteriordesign #nycart #luxuryhome #luxuryinteriors #privatejet #luxurydesign`, /*1*/
  `#johnzoller #art #modernart #artgallery #ad100 #artworld #painting #artcollector #luxe #elledecor #interiordesign #artbasel #artmiami #contemporaryart #luxurylifestyle #entrepreneur #aspen #dubai #palmsprings #palmbeach #paradisevalley #moscow #nycart #artadvisor #luxurylistings #vogueliving #ad #miamibeach`, /*2*/
  `#modernart #artgallery #artcollector #painting #artworld #elledecor #luxe #ad100 #contemporaryart #palmbeach #artsy #artbasel #interiordesign #modern #modernhome #love #artadvisor #miamibeach #miamiart #luxurylifestyle #luxuryrealestate #luxuryhome #dubai #montecarlo #nycart #aspen #yacht #porsche`, /*3*/
  `#JohnZoller #paintings #art #modernart #artworks #fineart #artcollector #artgallery #artbasel #artsy #contemporarypainting #design #architecture #vogueliving #elledecor #luxe #hamptons #interior #nantucket #greenwitch #dubaidecor #lagunabeach #palmbeach #brickell #miamiart #homedecor #miamibeach #fortlauderdale #ad100`, /*4*/
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

export const jzollerart_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const jzollerart_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const jzollerart_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const jzollerart_array_of_posts = [
  ...jzollerart_images,
  ...jzollerart_videos
];
