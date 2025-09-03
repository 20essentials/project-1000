import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kammerflagekreations';
const userId = '6c7d7b73-fb48-4f3e-98fc-12e548b19cbb';
const prefixUrl = 'https://dominicnikolai.github.io/project-307/assets/kammerflagekreations/';
const followers = 226_720;
const followed = 72;
const profileDescription = '🦎Panther Chameleons';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#PantherChameleon #Furciferpardalis #familybusiness #chameleon #pets #instapet`, /*1*/
  `Ny-nofy aka “The Dream” is here to wish you all a happy September and to remind you that we are in the midst of our Labor Day Event!! Through tomorrow (Tuesday 9/2) @ 11:59pm! Link in bio ❤️! #KammerflageKreations #PantherChameleon #familybusiness`, /*2*/
  `You can’t tell me chameleons don’t know they are funny 😂. Liet-Kynes here CERTAINLY seems to know it. He has a lot of personality and is exceptionally good at making us laugh! He is what you would call a Nosy Be panther chameleon (#nosybepantherchameleon). Mr. Kynes was hatched.`, /*3*/
  `Wait for it…🪰‼️😳😂! It’s not uncommon for a few flies to make their escape on fly feeding day at Kammerflage. Completely obsessed with this sassy little queen and her reaction to that brazen fly trying to get in her shot, 😂😭. It’s her face at the end like “woah, did just see that?!” that does it for me! 🙅‍♀️🚫🪰📸 #KammerflageKreations #PantherChameleon #funnypets #petsofinstagram #animals #cutepets #babylizard #chameleon`, /*4*/
  `A rare moment of “chill” for our Roborobo-ony (Malagasy for “Flaming River”) 🌶️. I still can’t believe he is officially a dad 🥹! #ambilobe #PantherChameleon #Furciferpardalis #pets #instapet`, /*5*/
  `#KammerflageKreations #PantherChameleon #reptilesofinstagram #instapet #reptileexpo #reptileshow #chameleon #cutepets #exoticpet`, /*6*/
  ` #PantherChameleon #Furciferpardalis #uniquepets #prettycolors #lizardsofig`, /*7*/
  `My Mom’s pick! His little walk and that tiny tail curl, I cannnnot! We will do a name reveal soon. Something with “lemon” in it, for sure 🥲🍋! Shown here at 4 months, he is an Ambilobe panther chameleon, son of our “Ready Freddy” 🩷 #KammerflageKreations #PantherChameleon #cutepets #babylizard`, /*8*/
  `🍹 #KammerflageKreations #PantherChameleon #ambilobe #chameleon #exoticpets #petsofig #lemonlime`, /*9*/ 
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

export const kammerflagekreations_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kammerflagekreations_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kammerflagekreations_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kammerflagekreations_array_of_posts = [
  ...kammerflagekreations_images,
  ...kammerflagekreations_videos
];
