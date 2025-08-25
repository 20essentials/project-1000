import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'budderscopes';
const userId = '';
const prefixUrl = '';
const followers = 512_892;
const followed = 50;
const profileDescription = 'Kaleidoscope Wizard 💎';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Watts-scope Showing off a 10 Inch Decagon Budderscope today! This one is looking great, and is ready for the soldering portion of the process! Hope you enjoy!`, /*1*/
  `Sometimes you just have to let it flow. Such a beautiful day in Minneapolis to enjoy some sunshine in the park with this Budderscopes Sphere! Hope you enjoy the view!`, /*2*/
  `I’m waiting for someone to ask me to make one without added colors. Was putting together the very first 16 Inch 12 Pointed Star Budderscope ever, and figured I better go ahead and document the moment. Just about to slip this one together, but I wanted to share before I add the colors! #budderscopes #glassartist #fractals #kaleidoscope #mirrorart`, /*3*/
  `Showing off a work in progress today! The Thirteen Budderscope is a four mirror kaleidoscope set up to reflect thirteen sided objects! Hope you enjoy!

`, /*4*/
  `#kaleidoscope #mirrorart`, /*5*/
  `Diving head first into this Budderscopes Sphere! The kool aid is nice here. Hope you enjoy! #kaleidoscope #glassart #fractal`, /*6*/
  `Waking up to a little something special here! Today I’m showing off a piece I’m working on for the next release! Hope you all enjoy! Thanks!!
`, /*7*/
  `I can’t stop looking through this brand new Budderscopes Sphere! Too excited about this one! Hope you enjoy the views! #kaleidoscope #fractal #budderscopes #mandalaartist

`, /*8*/
  `Flipping out with this 12 Inch Star Budderscope! Hope you enjoy! #glassart #kaleidoscope #budderscopes #fractals`, /*9*/ 
  `One last video with this Dyson Sphere Budderscope before I send it to its forever home! Hope you enjoy!`, /*10*/
  `#kaleidoscope #glassart fractals`, /*11*/
  `Rocket to the moon and back with me and this Dyson Sphere Budderscopes! No trip to the park is complete without completely melting into world of fractals, colors, and in this case the smell of flowers! Hope you enjoy the views!`, /*12*/
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

export const budderscopes_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const budderscopes_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const budderscopes_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const budderscopes_array_of_posts = [
  ...budderscopes_images,
  ...budderscopes_videos
];
