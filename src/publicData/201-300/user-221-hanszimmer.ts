import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hanszimmer';
const userId = '817dad1b-eca1-421b-8cb6-69362f21da0a';
const prefixUrl = 'https://dominicnikolai.github.io/project-319/assets/hansz1mmer/';
const followers = 2_720_322;
const followed = 463;
const profileDescription = `I can’t wait for you`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `One of my favorite parts from my upcoming film is the never-before-seen performances, and today I’m excited to give you a first look at one I know you will love...INTERSTELLAR.  Throughout the film, you’ll see the band and I perform some of your favorite scores in extraordinary settings throughout the city of Dubai, specially designed by our director pauldugdale for the big screen with dynamic sound. I can’t wait for you to see (and hear!) it.  `, /*1*/
  `45 seconds of perfection as Hans Zimmer and his orchestra performed the Inception theme, ‘Time.’`, /*2*/
  `hanszimmer newly composed soundtrack “Diamond in the Desert” is a sweeping tribute to the city of Dubai, capturing its spirit of innovation, cultural richness, and timeless beauty. Inspired by his immersive journey through the city, the piece reflects Dubai’s blend of tradition and futurism—from the echoes of its desert origins to the soaring ambition of its skyline. Now, experience the music like never before through the official visual companion; a cinematic interpretation that brings Zimmer’s homage to life on screen. Now available on all streaming platforms. #VisitDubai #HansZimmer`, /*3*/
  `Here is the first glimpse of our brand new PIRATES OF THE CARIBBEAN performance, recorded exclusively for our film. Get tickets today to see this never-before-seen performance (along with many others! 😁) and listen in on conversations with my closest collaborators.`, /*4*/
  `Don’t miss your chance to join us for our tour throughout Asia in 2025! Tickets are on sale NOW for China! Tickets for Japan and South Korea available Feb 28 local time at hanszimmerlive.com #HansZimmerLive`, /*5*/
  `Our North American tour is underway, and we are looking forward to the upcoming shows in Canada! Thanks again to everyone who made the show at @thegarden unforgettable 🗽🎥#HansZimmerLive`, /*6*/
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

export const hanszimmer_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hanszimmer_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hanszimmer_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hanszimmer_array_of_posts = [
  ...hanszimmer_images,
  ...hanszimmer_videos
];
