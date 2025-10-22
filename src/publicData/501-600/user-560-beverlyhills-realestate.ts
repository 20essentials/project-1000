import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'beverlyhills_realestate';
const userId = '';
const prefixUrl = '';
const followers = 367_932;
const followed = 234;
const profileDescription = `discover the finest estates`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `📍Beverly Hills, CA • $200,000/mo Step into the lap of luxury at this breathtaking museum Modern estate nestled in prestigious Trousdale Estates, once home of the legendary Dean Martin himself. Beyond the grand gates and up the private 200-ft driveway, discover an oasis of tranquility boasting almost an acre of lush grounds overlooking serene canyon views. Every detail of this new construction masterpiece pays homage to the glamour of the ‘Rat Pack’ era, inviting you to indulge in lavish entertaining and the epitome of high-end living. Spanning over 10,000 sqft of opulent interiors, this estate redefines sophistication with its soaring 12ft ceilings, expansive art gallery hallways, and seamless indoor-outdoor. A magnificent great room, gourmet kitchen, theater, gym, office, and spa retreat await, while the luxurious master suite and four additional bedrooms provide ultimate comfort and style. Includes: 24/7/365 Concierge Private chef Butler Driver Security Housekeeping And more.. —— #BeverlyHillsRealEstate`, /*1*/
  `#BeverlyHillsRealEstate`, /*2*/
  `#BeverlyHillsRealEstate`, /*3*/
  `#BeverlyHillsRealEstate`, /*4*/
  `#BeverlyHillsRealEstate`, /*5*/
  `#BeverlyHillsRealEstate`, /*6*/
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

export const beverlyhills_realestate_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const beverlyhills_realestate_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const beverlyhills_realestate_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const beverlyhills_realestate_array_of_posts = [
  ...beverlyhills_realestate_images,
  ...beverlyhills_realestate_videos
];
