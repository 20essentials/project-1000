import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hyperspace_lighting';
const userId = 'bcd70cd0-ee8c-482c-b946-6bef7e193944';
const prefixUrl = 'https://dominicnikolai.github.io/project-351/assets/hyperspace-lighting/';
const followers = 372_832;
const followed = 876;
const profileDescription = `Ultra-chromatic infinity lighting. Home of the HyperCube.`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Black Friday deals are here! Inventory is limited - get yours while you still can. Welcome to hyperspace! ✨ 95 patterns & 3 modes 🎶 30 sound-reactive patterns 📲 App-controlled 🔧 Scratch-resistant 💡 Syncable 💙 Custom-designed in the US Don’t miss out on this chance to bring a piece of infinity into your world!

`, /*1*/
  `#Hypercube #Mesmerizing #Psychedelic #OddlySatisfying #LEDLights #RoomDecor #Art #Lighting #RGB`, /*2*/
  `A sound reactive hyper-portal to get lost in for a few moments 🎶🌌 Slow down and watch till the end. Just one of over 30 sound reactive patterns all our tech has to offer! These patterns analyze musical lows, mids, and highs to create an ultra-responsive audio-visual lightshow for any kind of music. We've put a ton of time into making this feature special, and its one of the accomplishments we're most proud of 🌟 #TechArt #OddlySatisfying #Hypercube #rgb #VisualStimming #SmartLighting #Mesmerizing #SoundReactive

`, /*3*/
  `#InfinityMirror #Trippy #LightArt #GlitchArt #VisualASMR #AestheticRoom #KineticArt #Satisfying #RoomDecor`, /*4*/
  `#InfinityMirrorCube #Visuals #Relaxing #AbstractArt #KineticArt #DIYProject #LEDCubeArt #Mesmerizing`, /*5*/
  `Mesmerizing HyperCube-SE 🤩 We're just about to finish the first batch of ~800 of these new cubes. We can't wait for you to see them in person! #Hypercube #Mesmerizing #Art #LEDLights #Satisfying #Creative #RoomDecor #InfinityMirrors`, /*6*/
  `#Hypercube #Mesmerizing #Art #LEDLights #Satisfying #Creative #RoomDecor #infinitymirror #visualASMR`, /*7*/
  `#deserthearts #psychonaut #festival #festivalseason #rave #festivals #ravelife #musicfestival #housemusic #burningman #electronicmusic #techno`, /*8*/
  `#deserthearts #trippyart #festival #festivalseason #festivallife #rave #festivals #ravelife #musicfestival #housemusic`, /*9*/ 
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

export const hyperspace_lighting_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hyperspace_lighting_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hyperspace_lighting_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hyperspace_lighting_array_of_posts = [
  ...hyperspace_lighting_images,
  ...hyperspace_lighting_videos
];
