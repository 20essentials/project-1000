import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'molly_zombie';
const userId = '3c6220f6-7112-4aab-83c1-d8e3fa2ae160';
const prefixUrl = 'https://dominicnikolai.github.io/project-258/assets/moll1y-zomb1e/';
const followers = 104_700;
const followed = 523;
const profileDescription = 'Scaring one soul at a time🧟‍♀️ Tampa Florida. Social media influencer For Vfxcreates.com';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 4;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Scaring one soul at a time 😳 funhouse clown illusion box from VFXcreates baby!🤡 #clown #jumpscare #illusion #vfxcreates #halloweencostume #fyp #igers`, /*1*/
  `They don’t know what to do?! 🤣 VFXcreates baby!! #mollyzombie2022 #Zombie #puppets #halloweencostume #Halloween #igers #fyp #vfxcreates #parati`, /*2*/
  `It’s OK she won’t bite 😂 VFXcreates baby!! #zombie #puppet #vfxcreates #halloweencostume #mollyzombie2022 #fyp #igers `, /*3*/
  `Molly getting some sun 😁🧟‍♀️ VFXcreates baby!! #mollyzombie2022 #puppets #zombie #vfxcreates #reels #halloweencostume #fyp #slingshot #igers`, /*4*/
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

export const molly_zombie_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const molly_zombie_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const molly_zombie_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const molly_zombie_array_of_posts = [
  ...molly_zombie_images,
  ...molly_zombie_videos
];
