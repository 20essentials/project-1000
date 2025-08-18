import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pala3d';
const userId = '581d34b1-ecb5-481b-8cdc-7c43b7deb062';
const prefixUrl = 'https://dominicnikolai.github.io/project-270/assets/pala3d/';
const followers = 32_720;
const followed = 322;
const profileDescription = '3D | VFX Artist';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Roots of Code At the heart of the forest rises an immense structure intertwined with nature. It doesn’t seem man-made. It breathes like an organism, yet resembles the circuitry of an ancient machine. At its center, there’s a pure and fluid motion. Is it a message, or nature’s way of restoring itself? No one is certain. But stories say that those who pass through this blue vortex are never the same again. When nature speaks through technology, it reveals more than just a scene. It awakens something deeper. #UnrealEngine #Mountains #FantasyArt #3Dart #3DAnimation #DigitalArt #Surrealism #Art`, /*1*/
  `Data Loom is a real-time digital system designed to behave like a weaving machine. It doesn’t play back visuals or reuse patterns. Instead, it generates color and form live, using AI-generated data as thread. Everything unfolds as you watch it. What appears on the screen is not pre-rendered. It is stitched moment by moment, driven by a collaboration between computational simulation, human intention, and machine behavior. This is not a static image. It’s a living process. `, /*2*/
  `The Hand of the Ancients As the storm brews and lightning cracks open the sky, a lone wanderer stares at the colossal stone hand rising from the sea. No one knows who carved it or if it was ever carved at all. Some say it was left behind by gods, others believe it’s the last piece of a titan buried beneath the ocean floor. What awakens when storms gather around it remains a mystery. But one thing is certain: this is not a place you stumble upon. #unrealengine #ocean #marvel #eternal #godofwar`, /*3*/
  `Core Remnant Between two towering mountains, hidden from satellites and untouched by time, a sphere pulses with silent energy. Nestled in a cocoon of black tendrils and faint bioluminescence, it defies classification. The researcher approaches with calculated caution, every movement recorded, every reading a step closer to truth. This is not natural, not recent. It may be a remnant of a civilization that walked this planet long before us. A weapon? A seed? A message? The truth doesn’t scream it hums, waiting to be understood. And the sphere, buried in the silence of eons, listens back. #ue5 #cave #Mountains #unrealengine #cinematic`, /*4*/
  `Ethereal Connection I’ve been creating this kind of content at the studio I’ve worked at for years, but I had never made one to share on my own account. `, /*5*/
  `The Forgotten Gate Carved into the heart of the earth, a monumental entrance stands in silence, its purpose long lost to time. The wind carries the echoes of an ancient past, while the shifting sands veil the secrets buried within. A threshold to another world or a warning never to cross #UE5 #Mountains #Temple #Petra`, /*6*/
  `Awakening of the Guardian #UnrealEngine #Portal #Mystical #Mountain #hero #UE5 #3DArt #3DAnimation #DigitalArt`, /*7*/
  `#3DArt #3DAnimation #Arrival #DigitalArt #Movie #cgi #ue5 #render #3d`, /*8*/
  `Color Waves This artwork features a vibrant digital sculpture created using real-time capture, blending colors in a flowing, abstract #Realtime #Touchdesigner #Particles #Colors #Sculpture #Art #ArtGallery`, /*9*/ 
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

export const pala3d_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pala3d_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pala3d_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pala3d_array_of_posts = [
  ...pala3d_images,
  ...pala3d_videos
];
