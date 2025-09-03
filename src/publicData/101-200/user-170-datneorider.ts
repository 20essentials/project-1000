import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'datneorider';
const userId = 'e7d44641-c13c-401d-8f31-9f8887b53d73';
const prefixUrl = 'https://dominicnikolai.github.io/project-305/assets/datneorider/';
const followers = 322_720;
const followed = 50;
const profileDescription = 'NRX Creator | SoCal Based ☀️';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` #motorcycle #moto #bmw #reels #bmws1000rr #fyp #foryou #twowheels #bikelife #nature #explore #explorepage #city #comicon #fypppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp #tron #disney #tronares #cosplay #trending #neon`, /*1*/
  `ASMR - #fyp #motorcycle #bmw #bmws1000rr #explore #explorepageًًً`, /*2*/
  `#reels #moto #bmw #bmws1000rr #fyp #foryou #bikelife #twowheels #explore #explorepage✨ #starwars #city`, /*3*/
  `#bmw #bmws1000rr #moto #motorcycle #real #foryou #explorepage✨`, /*4*/
  ` #motorcycle #bmw #instareels #supercar #mclaren #explore #explorepage #foryou #fyp #underglow #custom #tron #space`, /*5*/
  `#bmw #bmwmottorad #bmws1000rr
#motorcycle #reels #moto #fyp #twowheels #foryou #tron #disney #starwars #explore #explorepage`, /*6*/
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

export const datneorider_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const datneorider_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const datneorider_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const datneorider_array_of_posts = [
  ...datneorider_images,
  ...datneorider_videos
];
