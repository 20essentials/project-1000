import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'roller_bearding';
const userId = '';
const prefixUrl = '';
const followers = 287_720;
const followed = 432;
const profileDescription = 'Certified skating instructor';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `It’s the smiles at the end for me 😁 Would you join the fun with us? This is when you find people of the same tribe.. `, /*1*/
  `Watch how they transform at the end 😱 Would you get a pair of these? `, /*2*/
  `Check at the end 🧐 You don’t need much space to perform it too. Have you learned the Power Slide yet? This is always the way I recommend for stopping fast and safely at high speed.. New York City is the best playground for street skating because it will make you stay alert for everything at all times 🙌🏽 Y’all be safe in these streets `, /*3*/
  `Casting a spell for y’all to skate with me 🧐 Would it work on you? `, /*4*/
  `Close call at the end 😱 Just trying to escape the crowd. Would you join us on a group skate? My favorite thing to do on a group skate is to start from the back of the group and try to reach the front 🫠 Sorry no smiles on this one just a focused face 🙃 📸`, /*5*/
  `They surprised me at the end 😱 Do you enjoy group skating? The reason why I love these once a year events is to find all my skate friends again from around the globe..`, /*6*/
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

export const roller_bearding_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const roller_bearding_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const roller_bearding_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const roller_bearding_array_of_posts = [
  ...roller_bearding_images,
  ...roller_bearding_videos
];
