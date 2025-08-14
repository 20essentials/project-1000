import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'slinky_josh';
const userId = '';
const prefixUrl = '';
const followers = 728_720;
const followed = 62;
const profileDescription = '🕉 I slink, therefore I am.';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` #hyperspring #springbending #slinky #edinburgh #edinburghfringe`, /*1*/
  `Partner HyperSpring tricks with 奔哥 😀 Tag who you would try this with! #hyperspring #springbending #slinkytricks #slinky #slinkymanipulation`, /*2*/
  `Partner slink with 奔哥! I came up with the simultaneous bounce swap technique at the beginning here! I think springbending has a lot of potential for partner techniques like in pass juggling, that has not been fully explored yet. Want to learn springbending? Click my link in bio! #springbending `, /*3*/
  `4 foot slinky ASMR Yesterday I visited the factory in China that makes my HyperSprings (among many many other slinkies that are sold around the world) and saw their showroom which included some very interesting slinkies, like this behemoth!`, /*4*/
  `British children react to #slinkytricks 😀 This is from last August when I was in Edinburgh, Scotland for the Fringe (world famous street performing festival) 🏴󠁧󠁢󠁳󠁣󠁴󠁿 #hyperspring #springbending #slinky #edinburgh #edinburghfringe`, /*5*/
  `This art car’s blacklights were sooo perfect for this 😛 I may need to find them again next year… #burningman`, /*6*/
  `Wait for the children’s laughter at the end 🥹 This was shot at the Okinawa Churaumi Aquarium in Okinawa, Japan when I was there in April! 🇯🇵 #slinkymanipulation #slinkytricks #slinky #hyperspring #okinawa #okinawajapan #aquarium #okinawaaquarium #沖縄 #沖縄旅行 #沖縄水族館 #japantravel`, /*7*/
  ` (S)link in bio if you wanna be able to slink kitties too! #slinkytricks #slinkymanipulation #shibuya #tokyo `, /*8*/
  `Whew, that boss battle was tough 😮‍💨 Link in bio to get a HyperSpring and learn how to do these tricks! 🧠💪 📍 Kyoto, Japan 🇯🇵 #slinkytricks #slinkymanipulation #hyperspring #slinky #cutebaby #cutekids`, /*9*/ 
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

export const slinky_josh_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const slinky_josh_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const slinky_josh_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const slinky_josh_array_of_posts = [
  ...slinky_josh_images,
  ...slinky_josh_videos
];
