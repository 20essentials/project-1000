import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'aurora_boreal';
const userId = 'e39b399a-a5f2-4d2f-8fb1-24cf87b739f2';
const prefixUrl = 'https://dominicnikolai.github.io/project-318/assets/aurora-boreal/';
const followers = 495_720;
const followed = 224;
const profileDescription = `#AuroraBoreal`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Seeing the aurora in Fairbanks, Alaska`, /*1*/
  `The auroras last night were UNREAL 🥹 . #nightsky #auroraborealis #auroraboreal #auroraboreale #auroraborealisnotifications #northernlights #northernlight #northernlightsphotos #northernliving #arctic #canada #arcticcircle #space #spaceporn #nightskyphotography #night_shooterz #aurora`, /*2*/
  `Full moon aurora vs new moon aurora. Which one do you prefer?`, /*3*/
  `Fairbanks, Alaska with majestic autumn auroras…`, /*4*/
  `This is what September looks like where I live in Alaska. Amazing auroras every night!`, /*5*/
  `This is what peace looks like - watching the aurora above the Arctic Circle in Alaska`, /*6*/
  `September magic in Lapland 💚✨ The first auroras are back — no snow, no freezing, just you, the open skies, and reflections on still lakes. Who knew autumn could look like this? 🌌🍂 📍Lapland, Finland #AuroraSeasonStarts #SeptemberLights #LaplandMagic #NorthernLightsHunt #ArcticRoadTrips #FallUnderTheStars`, /*7*/
  `Heads up people!!! Might see aurora at middle latitudes again tonight ❤️ #DreamTravel #BucketListTrip #NatureMagic #OnceInALifetime #SkyPorn #NaturePerfection #UniverseToday #MagicalMoments`, /*8*/
  `Last year this was the first aurora storm of the season ❤️ Will we get our first tonight or tomorrow?😜 #Aurora #AuroraBorealis #NorthernLights #AuroraHunting #AuroraChasing #AuroraMagic #AuroraExplosions #AuroraPhotography`, /*9*/ 
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

export const aurora_boreal_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const aurora_boreal_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const aurora_boreal_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const aurora_boreal_array_of_posts = [
  ...aurora_boreal_images,
  ...aurora_boreal_videos
];
