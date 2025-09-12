import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'spherevegas';
const userId = '468d4ac6-4f2f-4e86-a092-e74039e62b2a';
const prefixUrl = 'https://dominicnikolai.github.io/project-324/assets/spherev3gas/';
const followers = 2_872_322;
const followed = 50;
const profileDescription = `Experience "The Wizard of Oz at Sphere" today`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Sphere & Backstreet Boys are written in the stars`, /*1*/
  `ARE WE IN YOUR FACE ENOUGH YET?!?! NO????!!!`, /*2*/
  `friday mood 🎉`, /*3*/
  `Night three was the perfect closing to our debut weekend of UNITY! ✨ THANK YOU to everyone that helped write the first pages of this story at @SphereVegas. Two communities merged into one this weekend and became family. From the production, to the staff, to all of the Headliners & People of Tomorrow, we couldn’t do this without all of you! 🤩 We will see you back in our multi-sensory dance experience in two weeks, as we pick back up our run of shows from Sep. 19 to Oct. 18! 🌐`, /*4*/
  `Entering the shimmering depths`, /*5*/
  `out of this world 👽 `, /*6*/
  `Deep in the neon jungle`, /*7*/
  `Bringing drum ‘n bass for the first time ever to Sphere, Las Vegas`, /*8*/
  `Ready for another Larger Than Life night with backstreetboys 💫`, /*9*/ 
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

export const spherevegas_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const spherevegas_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const spherevegas_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const spherevegas_array_of_posts = [
  ...spherevegas_images,
  ...spherevegas_videos
];
