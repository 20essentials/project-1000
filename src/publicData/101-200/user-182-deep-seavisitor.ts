import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'deep_seavisitor';
const userId = '';
const prefixUrl = '';
const followers = 332_720;
const followed = 176;
const profileDescription = 'Exploring the underwater world';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Megalodon spotted 🦈 - #megalodon #aigenerated #ocean #deepsea #shark`, /*1*/
  `Terrifying Ocean Sinkhole Captured on Camera! 🌊😱 ⸻ A massive sinkhole opened beneath the ocean, pulling water — and everything near it — into the depths. Witnesses say it formed without warning, creating a whirlpool that vanished as fast as it appeared. Is this a rare natural event… or a warning sign of something bigger? #ocean #river #sea #sinkhole #water #flood #naturaldisaster`, /*2*/
  `Unidentified Creature Spotted at Local Lake! 😱🛶 ⸻ Locals are reporting sightings of a strange creature emerging from the fog-covered lake — long limbs, glowing eyes, and movements that don’t match any known species. Is it a hoax, an undiscovered animal… or something far more terrifying? The footage is AI-generated, but the fear? 100% real. #lake #aigenerated #scary #monster #ai #horrortok #mysterycreature`, /*3*/
  `Asteroid Ryugu Collides with Europe — Realistic Impact Simulation 🌍☄️ ⸻ What if Asteroid Ryugu didn’t miss? This cinematic simulation shows the terrifying scale of impact if Ryugu collided with Europe — from the moment of entry to shockwaves, firestorms, and global fallout. This isn’t science fiction — it’s what could happen. Watch what the world would look like… in seconds. #asteroid #ryugu #impactsimulation #space #nasa #science #cinematic #disaster`, /*4*/
  `Mysterious Glowing Creature in the Snow… ❄️✨ In the silence of the night, deep in the frozen wilderness, a figure appeared. Its eyes glowed with an icy blue light, and its body seemed carved from the snow itself. It stood motionless — as if watching… or waiting. Was it an undiscovered species, a legend come to life, or something from another world? #mystery #snow #creature #glowing #paranormal`, /*5*/
  `Man Boards Ship Moments Before It Crashes! 🚢💥 ⸻ Caught on camera: A man steps onto a massive cargo ship just seconds before disaster strikes. The vessel loses control, crashing into the dock with terrifying force. Was it mechanical failure… or something else? Watch closely — you won’t believe the timing. #shipcrash #caughtoncamera #portaccident #maritime #viralvideo`, /*6*/
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

export const deep_seavisitor_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const deep_seavisitor_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const deep_seavisitor_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const deep_seavisitor_array_of_posts = [
  ...deep_seavisitor_images,
  ...deep_seavisitor_videos
];
