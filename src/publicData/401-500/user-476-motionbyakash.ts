import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'motionbyakash';
const userId = '';
const prefixUrl = '';
const followers = 249_832;
const followed = 156;
const profileDescription = `Transforming brands with logo animation & design`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `“From Vision to Reality: Behind the Scenes of a Powerful Logo Animation” ✨ Ever wondered how a simple idea transforms into a masterpiece? Here’s a glimpse into one of the most impactful logo animations I recently created for a client who wanted their brand to make a strong, lasting impression. ➡️ Watch as I take you through: 1️⃣ My viewpoint during the process—raw, unpolished, but full of potential. 2️⃣ The final render—sleek, dynamic, and designed to captivate audiences. 💡 The secret to a memorable animation? It’s not just about movement—it’s about intention. Every frame is crafted with purpose to reflect the client’s vision and elevate their brand identity. When this client approached me, they had one goal: to make their logo stand out in a crowded digital world. And that’s exactly what we achieved! What’s your favorite part—seeing the process unfold or the final result? Let me know in the comments! 👇 #LogoAnimation #MotionDesign #BrandIdentity #CreativeProcess #DesignInspiration #logoreveal #animation #sneekpeek #bts

`, /*1*/
  `Logo Animation for Hestia🔥🏛️`, /*2*/
  `#logodesign #SanDenims #brandidentity #denimculture #fashionbranding #fashionbrands #moderndesign #explorepage #mograph #adobevideo #VisualIdentity #creativedirection #motiondesign #logoanimation`, /*3*/
  `Zepacks – With Care in Minutes`, /*4*/
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

export const motionbyakash_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const motionbyakash_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const motionbyakash_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const motionbyakash_array_of_posts = [
  ...motionbyakash_images,
  ...motionbyakash_videos
];
