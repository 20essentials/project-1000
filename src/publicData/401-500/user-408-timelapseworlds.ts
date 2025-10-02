import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'timelapseworlds';
const userId = '';
const prefixUrl = '';
const followers = 338_898;
const followed = 50;
const profileDescription = `bending reality`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Little edit I made in Vienna this weekend! Shot this using the handheld hyperlapse technique. Some of the transitions already worked out just by scrolling through the images on my camera. Quick and easy edit. Took me about half a day to finish. I shot this on my Sony a7iii with 16mm and 24mm lens. Edited in After Effects.`, /*1*/
  `#Bundesliga | #Goaltoberfest`, /*2*/
  `making berlin look artsy.`, /*3*/
  `I only had 3 days to make it happen, so I used my gimbal + monopod setup. It’s the best hyperlapse setup so I was able to capture everything super clean with smooth flowmotion style transitions, even on 8mm.`, /*4*/
  `Something exciting is coming…`, /*5*/
  `New Berlin 360 lapses 🤘`, /*6*/
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

export const timelapseworlds_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const timelapseworlds_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const timelapseworlds_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const timelapseworlds_array_of_posts = [
  ...timelapseworlds_images,
  ...timelapseworlds_videos
];
