import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'voidlore_art';
const userId = '';
const prefixUrl = '';
const followers = 14_322;
const followed = 87;
const profileDescription = `CONCEPT VISUALS | ART | IMAGINATION`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `✧ Fragments of Eternity ✧ #AIart #digitalart #artificialintelligence #generativeart #midjourneyart #instagood #explorepage #reels #artwork`, /*1*/
  `✧ Crown of Circuits ✧ #AIart #digitalart #artificialintelligence #generativeart #midjourneyart #instagood #explorepage #reels #artwork`, /*2*/
  `Endru Van & Voidlore - "Time Elapsed" ​Endru Van's latest release is the song "Time Elapsed." It was released on October 17, 2025, and garnered attention for its collaboration with his Visualizer partner, Voidlore. ​"Time Elapsed" marks an important milestone in Endru Van's journey as it is the latest release to arrive on Row Records. This collaboration with Voidlore is expected to bring a new dimension to Endru Van's music, enriching the sound presented under the new label. ​Row Records Label is Endru Van's new home, and the label has served as the platform for the release of "Holding" and the latest single "Time Elapsed."`, /*3*/
  `The Last Genesis ✧ #AIart #digitalart #artificialintelligence #generativeart #midjourneyart #instagood #explorepage #reels #artwork`, /*4*/
  `“Echoes of Defeat” Just “Let it Happen” #AIart #digitalart #artificialintelligence #generativeart #midjourneyart #instagood #explorepage #reels #artwork`, /*5*/
  `Stellar Sentinel

#AIart #digitalart #artificialintelligence #generativeart #midjourneyart #instagood #explorepage #reels #artwork`, /*6*/
  `Celestial Pulse

#AIart #digitalart #artificialintelligence #generativeart #midjourneyart #instagood #explorepage #reels #artwork`, /*7*/
  `⌘ THE ASTRAL AWAKENING ⌘ #AIart #digitalart #artificialintelligence #generativeart #midjourneyart #instagood #explorepage #reels #artwork`, /*8*/
  `⌬ ETERNITY WITHIN ⌬

#AIart #digitalart #artificialintelligence #generativeart #midjourneyart #instagood #explorepage #reels #artwork`, /*9*/ 
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

export const voidlore_art_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const voidlore_art_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const voidlore_art_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const voidlore_art_array_of_posts = [
  ...voidlore_art_images,
  ...voidlore_art_videos
];
