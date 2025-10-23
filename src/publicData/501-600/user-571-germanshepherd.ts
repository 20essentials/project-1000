import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'germanshepherd';
const userId = '';
const prefixUrl = '';
const followers = 53_832;
const followed = 195;
const profileDescription = `Smart, loyal, and always protective`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#dog #dogsofinstagram #dogs #germanshepherd #germanshepherdpuppy #pet #petsofinstagram #doglover`, /*1*/
  `My alarm clock has a whimper and an adorable head tilt. 🥺 #dog #dogsofinstagram #dogs #germanshepherd #germanshepherdpuppy #pet #petsofinstagram #doglover`, /*2*/
  `Just another day being a German Shepherd, AKA toddler’s personal chew toy 🫠

#dog #dogsofinstagram #dogs #germanshepherd #germanshepherdpuppy #pet #petsofinstagram #doglover`, /*3*/
  `That’s a championship level yawn. Back to sleep. 🏆

#dog #dogsofinstagram #dogs #germanshepherd #germanshepherdpuppy #pet #petsofinstagram #doglover`, /*4*/
  `He’s all talk, tiny teeth included. 😏

#dog #dogsofinstagram #dogs #germanshepherd #germanshepherdpuppy #pet #petsofinstagram #doglover`, /*5*/
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

export const germanshepherd_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const germanshepherd_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const germanshepherd_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const germanshepherd_array_of_posts = [
  ...germanshepherd_images,
  ...germanshepherd_videos
];
