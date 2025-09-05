import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'traveler';
const userId = '741d6b96-807b-4dd8-af94-878858fd17b4';
const prefixUrl = 'https://dominicnikolai.github.io/project-310/assets/traveler/';
const followers = 2_720_723;
const followed = 50;
const profileDescription = 'Discover extraordinary places and unforgettable stays.';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Oahu, Hawaii 🌺 Where the Koʻolau Mountains rise through the mist and nature steals the show. Explore through the lush trails of Hoʻomaluhia Botanical Garden, where towering palms and vibrant tropical plants make every corner feel like a hidden paradise. After a day of exploring, settle into a nearby restaurant, sip a handcrafted cocktail and watch the sunset. `, /*1*/
  `Gorges du Verdon, France 🇫🇷 A stunning canyon with emerald, crystal clear water winding through cliffs up to 700 meters high. Known as the “Grand Canyon of Europe,” it’s perfect for paddling, swimming, or simply taking in the peaceful views. One of Provence’s top natural wonders! Who would you visit with?`, /*2*/
  `Lake Tahoe, USA 🇺🇸 One of the clearest lakes in the world. This mountain gem lets you see over 70 feet beneath the surface. White sand beaches meet smooth stones and tall pines, while the sun lights up every shade of blue. A peaceful place full of natural beauty. Who would you explore Tahoe with? `, /*3*/
  `Flores, Portugal 🇵🇹 A cliffside retreat where Ponta Delgada gazes out to the endless Atlantic, framed by steep green bluffs and wind-carved stone. Crashing waves echo through the village’s narrow lanes, while the scent of hydrangeas drifts on ocean air. A rugged haven on the edge of Europe! Who would you explore Flores with? #traveler`, /*4*/
  `Banff National Park, Canada 🇨🇦 A glacier carved valley where Moraine Lake shimmers bright blue beneath the towering Ten Peaks. Fed by ancient ice and rich in rock flour, its color changes with the sun. Trails like Larch Valley wind through alpine forests, golden larches, and quiet meadows. A place of wild beauty and calm! Who would you visit Banff with?🌲⛰️ #traveler video by Baileykaldrich on tt`, /*5*/
  `Chamonix Mont Blanc, France 🇫🇷 An alpine escape where soaring peaks meet the tranquil waters of QC Terme. Its thermal baths are a haven, framed by glaciers and deep green forests, while nearby villages offer rich cuisine and cozy charm. A destination of crisp air and calm beauty, who would you visit with this summer? #traveler`, /*6*/
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

export const traveler_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const traveler_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const traveler_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const traveler_array_of_posts = [
  ...traveler_images,
  ...traveler_videos
];
