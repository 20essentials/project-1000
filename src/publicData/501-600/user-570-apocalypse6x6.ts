import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'apocalypse6x6';
const userId = 'a96cf8a4-efc5-4c8c-8248-3af1fc2c97c2';
const prefixUrl = 'https://dominicnikolai.github.io/project-372/assets/apocalypse6x6/';
const followers = 543_832;
const followed = 176;
const profileDescription = `4x4 and 6x6`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `haq’s Custom Apocalypse Super Truck 4x4 Apocalypsemanufacturing.com - (954)-231-4429 #apocalyspe #apocalypsetruck #supertruck #4x4 #shaq`, /*1*/
  `Apocalypse Juggernaut 6x6 - The Most Patriotic Truck Ever Built Apocalypse6x6.com - (954) 231 - 4429 #apocalypse #6x6 #juggernaut #apocalypse6x6`, /*2*/
  `Apocalypse Juggernaut 6x6 - Unstoppable ApocalypseManufacturing.com - (954) - 231 - 4429 #apocalypse6x6 #juggernaut #6x6 #hellcat`, /*3*/
  `#ApocalypseHellfire #6x6 #HellcatPower #ApocalypseManufacturing #Hellfire6x6 #CustomTruck #OffRoadBeast #Supercharged #TruckGoals #AutomotiveArt #AmericanMuscle #CustomBuild #LiftedTruck #Horsepower #OffRoadLife #BuiltNotBought #TruckEnvy #LuxuryPerformance #HellcatSwap #6x6Life #PowerAndPresence #TruckCulture`, /*4*/
  `Apocalypse Juggernaut 6x6 - Customize Your Own 6x6 Beast Today ApocalypseManufacturing.com - (954) 231-4429 #juggernaut #6x6 #apocalyspetruck #juggernauttruck #truckdynasty`, /*5*/
  `The Apocalypse Super Truck - Imagine This Monster In Your Garage ApocalypseManufacturing.com - (954) 231-4429 #supertruck #apocalyspetruck #4x4 #hellcat`, /*6*/
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

export const apocalypse6x6_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const apocalypse6x6_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const apocalypse6x6_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const apocalypse6x6_array_of_posts = [
  ...apocalypse6x6_images,
  ...apocalypse6x6_videos
];
