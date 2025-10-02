import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gzilbalodis';
const userId = '';
const prefixUrl = '';
const followers = 161_832;
const followed = 467;
const profileDescription = `Director of Flow(2024) and Away(2019)`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Ok, here’s another example of the animatic from Flow. As you can see, it doesn’t match exactly with the final version. In this case I had to adjust the camera after the first pass of the animation to have it react more naturally to the action. Animation by Maxime Leclerc and Florian Durand.`, /*1*/
  `Flow - An animated feature film made by a small indie team using Blender. Oscar winner for Best Animated Feature`, /*2*/
  `Ok, this is the last one`, /*3*/
  `The Flow Oscar statue is exhibited at the Latvian National Museum of Art and people are waiting for more than an hour to see it!`, /*4*/
  `In almost all of my films there’s at least one scene featuring rain. All kinds of emotions can be expressed with it. Rain can be calming, scary, unpleasant, cozy, joyful etc..`, /*5*/
  `FLOW is soaring back into more than 150 theaters across the country this weekend. Catch Gints Zilbalodis’ Golden Globe winner and double Oscar nominee (Best Animated Feature, Best International Feature) on a big screen near you!`, /*6*/
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

export const gzilbalodis_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gzilbalodis_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gzilbalodis_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gzilbalodis_array_of_posts = [
  ...gzilbalodis_images,
  ...gzilbalodis_videos
];
