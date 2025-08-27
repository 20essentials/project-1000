import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hunter_howell';
const userId = '';
const prefixUrl = '';
const followers = 107_720;
const followed = 72;
const profileDescription = 'One Wheel Guy';
const prefixLetterVideos = 'v';
const quantityOfVideos = 20;
const prefixLetterImages = 'n';
const quantityOfImages = 20;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#motorcycle #auto #onewheel #moto #tech`, /*1*/
  `Just out here wheelin’ around… 🔥🛞 #bikelife #moto #biker #wheelie #dirtbikes #stunts #bikerrally #wheelies #gadgets #wheeliewednesday #automotive #monowheel #onewheel #starwars #technology #inventions #motorcycle #monocycle #parade #stunts #rider`, /*2*/
  `Rolling deep on one wheel, no matter the ride. 🔥 🎥: @brianslawsonphotography @mister_mke @i39supply @i39graphics #monowheel #onewheel #bikelife #moto #biker #wheelie #starwars #hunterhowell #technology #inventions #motorycle #monocycle`, /*3*/
  `Urban Rides ⚠️ #onewheel #motorcycle Summer’s here, and it’s time to hit the road and create some epic content! 🎥 Make sure to subscribe to my YouTube channel—long-form videos are on the way! I’ll be answering your questions about monowheels and showcasing some wild builds you won’t want to miss. DM me if you’re interested in collaborating! #technology #wheelie #bikelife #monowheel #biker`, /*4*/
  `Monday mashup 🫠 #onewheel #motorcycle`, /*5*/
  `Tuesday rollers in the monster-mono 🔥 #bikelife #moto #biker #wheelie #dirtbikes #stunts #bikerrally #wheelies #gadgets #automotive #monowheel #onewheel #starwars #technology #inventions #motorcycle #monocycle #stunts #rider #automotive`, /*6*/
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

export const hunter_howell_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hunter_howell_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hunter_howell_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hunter_howell_array_of_posts = [
  ...hunter_howell_images,
  ...hunter_howell_videos
];
