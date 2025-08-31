import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'artdomains';
const userId = '7ba9ef54-f8d3-41c5-9aa9-4e3f95d5fb54';
const prefixUrl = 'https://dominicnikolai.github.io/project-299/assets/artdomains/';
const followers = 172_232;
const followed = 77;
const profileDescription = 'The domain for 300,000+ creatives worldwide.';
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Sometimes, instead of just starting, we invent 100 “brilliant” ways to avoid it. - Spending hours coding a website… instead of using a free website builder that takes 15 minutes. - Sending clients a random cloud folder instead of a website. - Keeping your portfolio buried in Instagram highlights. - Thinking websites are only for “real” artists or big studios. - Waiting for the perfect project, the perfect timing, or the perfect version of yourself. You don’t need a diploma, a massive following, or a perfect portfolio to call yourself an artist or to show your work. 🖥️ Having your own website is simply having a place where your art lives, on your terms. It’s easier than you think: you can build it in 15 minutes with a free website builder that comes with your .ART domain. Even if you have just one artwork, create it, give yourself a deadline, and put it out there. Because sometimes, publishing that first piece on your website is the real start of your career. 💬 Check out our highlight “Website in 15 min”, we’ve put together the easiest way to build your site and finally share your work with the world.`, /*1*/
  `Art`, /*2*/
  `For legal reasons, this is a joke`, /*3*/
  `Where do you keep your references?`, /*4*/
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

export const artdomains_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const artdomains_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const artdomains_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const artdomains_array_of_posts = [
  ...artdomains_images,
  ...artdomains_videos
];
