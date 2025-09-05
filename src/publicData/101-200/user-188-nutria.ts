import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'nutria';
const userId = '';
const prefixUrl = '';
const followers = 1_720_723;
const followed = 50;
const profileDescription = 'Safari🙈🦘🦦';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Junior LOVES Her Soooo Much!! Come Visit Our AMAZING Animals & Humans.. See The Bond We All Have! Make Some Fur Friends Of Your Own.. Book Now at AnimalEDventures.com`, /*1*/
  `Harrison Is Doing AMAZING! Come Visit Our Amazing Animals Book A walkthrough Safari tour at AnimalEDventures.com`, /*2*/
  `It’s The Most AMAZING Time Of The Year To Visit or Gift Someone A VISIT… RESERVATION ONLY Book A Tour NOW at AnimalEDventures.com - Play With Otters, Hold A Sloth, Kuddle With A Kangaroo, Feed Camels + Soooooo Much More`, /*3*/
  `My Otter Life ❤️ Visit Our AMAZING Animals! Reservation Only! Book Now At AnimalEDventures.com`, /*4*/
  `My Guard Otter.. ❤️❤️ Love These Guys! Come visit our AMAZING Animals! Book now at AnimalEDventures.com`, /*5*/
  `They Just Want Kisses ❤️❤️ So Freaking Cute! Come Visit! Book Now at AnimalEDventures.com`, /*6*/
  `I think we ALL need this right now! Want more? Come visit! Book now at AnimalEDventures.com`, /*7*/
  `Want to HOLD & PLAY with our OTTERS🦦 This is your once-in-a-lifetime shot!🐾 Book Now at AnimalEDventures.com Snap pics • Bottle-feed baby kangaroos • Meet capybaras • Hug a sloth • Hand-feed porcupines! 🎟️ VIP Behind-the-Scenes Tours — Small groups. Big memories. Use code FREEDOM for 15% OFF any tour or add-on! Promo Code Expires Tonight! Add an OTTER SWIM! 👉 Book now at AnimalEDventures.com On a budget? $25 Safari Walkthrough tours available Need Merch? We Got You! Located in Boynton Beach fl`, /*8*/
  `Otter Around & Find Out 🤣 I Did LMAO My Otter Life 🦦 Want To Meet Our AMAZING Animals? Book A Walkthrough Safari Tour at AnimalEDventures.com`, /*9*/ 
  `I had one job LMAO 🤣🤣`, /*10*/
  `They Make So Many Different Sounds! Come hear for yourself! Book a Walkthrough Safari Tour at AnimalEDventures.com`, /*11*/
  `JR Is The Smartest Otter In The WORLD! Come visit him and the rest of our Animals! Book Now at AnimalEDventures.com`, /*12*/
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

export const nutria_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const nutria_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const nutria_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const nutria_array_of_posts = [
  ...nutria_images,
  ...nutria_videos
];
