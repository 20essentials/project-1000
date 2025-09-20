import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'helnium';
const userId = '';
const prefixUrl = '';
const followers = 392_899;
const followed = 23;
const profileDescription = `Geneva 🇨🇭| Protected Concept`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `The universe is really fascinating… Discover more of this beauty on my website helnium.com! ❤️ All of these crystals are also available as limited edition fine art prints link in bio 🖼️ #universe #life #inspiration #motivation #viral #explorepage #fyp #artoflife #fractalart #fractalsinnature #fractaltones #scienceart #chemistryart #microscopyart #crystals #crystallography #periodictable #natureisart #elementsofthesoul #helniumart #theuniverse #invisiblevisible #deepthoughts #philosophy #consciouness #theuniversewithin #elements #science`, /*1*/
  `When iron(III) nitrate [Fe(NO₃)₃] reacts with sodium hydroxide (NaOH), it forms iron(III) hydroxide [Fe(OH)₃], a brown solid. ⚛️This compound is unstable and slowly transforms into iron oxides and oxyhydroxides what we call rust. 🍂 This compound reminds me of leaves changing color in autumn! 🥰 Thats why I gave it the title “Autumn Rust” 🍁 Iron in its way also goes through this visible transformations reminding us that matter, like nature, is always in transition and cycles. • • • #scienceart #chemistryart #microscopeart #microscopy #crystalart #sciencetok #chemistartist #HelniumArt #learnontiktok #chemistry #iron #ironcrystals #crystallography #artfromscience #scientificart #fractals #satysfying #beautifulscience #artandscience #naturesart #scientificartist #helnium #theuniverse #elements #autumncolours #viral #trending #fypage`, /*2*/
  `#Crystallization #ScienceAndArt #Microscopy #ScientificArtist #ScientificArt #VitaminB #Biochemistry #Chemistry #HealthScience #Fractals #ScienceMeetsArt #fractalsinnature #MicroscopicWorld #Beauty #Reels #learnoninstagram #ChemistryArt #viralvideos #Trending #SatisfyingVideo`, /*3*/
  `#chemistry #scientificartist #chemist #helnium #quantumart #artandscience #scientist #scienceart #theartoftheuniverse #crystals #scienceartist #microphotography #artistoftheyear #dailyart #newartconcept #alchemyofthesoul #chemicalreaction #swissartist #chemicalart #helniumart #crystallography #science #scienceandart #artoutofchemistry`, /*4*/
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

export const helnium_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const helnium_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const helnium_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const helnium_array_of_posts = [
  ...helnium_images,
  ...helnium_videos
];
