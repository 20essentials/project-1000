import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'julias_wildlife';
const userId = '54ca5e34-5407-4274-98de-22678ef3f8a0';
const prefixUrl = 'https://dominicnikolai.github.io/project-315/assets/julias-w1ldlife/';
const followers = 367_720;
const followed = 50;
const profileDescription = `Wildlife Advocate`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `This is Mongoose-heaven! ☀️ These Banded Mongooses are wild and decided to visit the farm on a regular basis. Here, they can dig for food and even spoil the Warthog and remove parasites from her. A classic win-win situation. 🤗 (For licensing or usage, contact licensing@viralhog.com) #animallover #africanwildlife #wildplanet #tiere #tierwelt #tierisch #mongoose #bandedmongoose #warthog #pumba #timonandpumba #listen #skills #wildlife #wildlifeonearth #animalsdoingthings #animals_in_world`, /*1*/
  `Just a Spotted Hyena enjoying some chin scratches 🥰🥺 Some people already feel a shiver of disgust over their body when they hear the word "hyena".. I get that the Lion King didn't really positively contribute to the already bad reputation of hyenas, but ugly?.. disgusting? 🤨🤔 Have a look at that face and tell me if you still find them ugly - with these brown button eyes, the black whiskers that grow from their cute nose. 🥺 I see an animal that deserves our respect and our understanding for taking a part in the ecosystem, no other animal can replace. 🙏🏻 Thank you for spreading some hyena love today. 🐾❤️ P.S. Yes, hyenas are closer related to cats than to dogs, but this does not make them cats. Their closest relatives are mongooses and civets, which are genetically closer to cats. 😊 #animallover #wildplanet #africanwildlife #hyena #spottedhyena #hyäne #wildlifeconservation #tierisch #tierwelt #tiere #hyenalove #hyenas #crocutacrocuta #southernafrica #bosveld #hiena #bush #workwithwildlife #respect #reputation #lionking #cute #sweet #chinscratches`, /*2*/
  `#animallover #wildplanet #africanwildlife #tiere #tierwelt #tierisch #wildlifeconservation #meerkat #erdmännchen #suricate #namibia🇳🇦 #southernafrica #bosveld #animalsounds #soundon #toocute #adorable #wildlifefacts #animalsdoingthings #funnyanimals`, /*3*/
  `🐆 Cheetahs do not belong to the genus Panthera and are thus not considered to be big cats, like lions, tigers, jaguars, and leopards. The cheetah is the only remaining species of the genus Acinonyx - and this comes with a lot of specialized adaptations and differences compared to big cats. 🐾 The main differences are: 🐆 Cheetahs cannot retract their claws. 🐆 Cheetahs lack the ability to roar and meow and purr instead. 🐆 Cheetahs are active during the day. #cheetahs #cheetah #animallover #africanwildlife #wildplanet #gepard #cats #feline #bigcats #meow #animalsdoingthings #chirp #animalsounds #cuteanimals #fascinating #africanbush #mammal #carnivore #hunter #predator #animalfacts #wildlifeconservation #endangered`, /*4*/
  `#animallover #wildplanet #squirrel #redsquirrel #eichhörnchen #eichhörnchenfüttern #squirrellove #squirrellife #botanicalgarden #botanischergarten #cute #adorable #newfriend #animalfriend #europeanwildlife #germanwildlife #hannover #cutiepie #cuteanimals #sweetanimals #happyanimals #tiere #tierwelt #happy`, /*5*/
  `The lights are on, but no one is home.. 💡👀 Dassies, also known as Rock Hyraxes, love rocky habitats. No wonder, that they have adapted to coexist with humans in the city of Windhoek. 🇳🇦 Even though Dassies have a chunky appearance, they are excellent climbers, jumpers and can run very fast! 🏃‍♂️🧗‍♀️ This is even more surprising given the fact that they are the closest living relative of African Elephants! 🐘 #dassie #klippschliefer #hyrax #hyraxes #windhoek #namibia #animallover #africanwildlife #wildplanet #tiere #animalsdoingthings #funny #stalker #alwayswatching #brainfart #chunky #fluffy #eyes #cuddlebuddy #garden #mygardentoday🍃🌻🍃 #funnyreel #lol #funnyanimals #animalelite`, /*6*/
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

export const julias_wildlife_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const julias_wildlife_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const julias_wildlife_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const julias_wildlife_array_of_posts = [
  ...julias_wildlife_images,
  ...julias_wildlife_videos
];
