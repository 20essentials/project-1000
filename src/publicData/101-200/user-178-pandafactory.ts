import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pandafactory';
const userId = 'a16fc873-5422-4442-a0b5-93f7c138d2ec';
const prefixUrl = 'https://dominicnikolai.github.io/project-308/assets/pandafactory/';
const followers = 136_720;
const followed = 392;
const profileDescription = '🐼 Ultra-Realistic 1:1 Handmade Panda Plushies 🐾';
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#pandafactoryshop #BabyMenglan #RuaAddict #PandaBaby #pandaplush #lifelike #realisticpanda #CutenessOverload #CantStopRua`, /*1*/
  `Warning: This baby panda will melt your heart in 3 seconds 🐼💖 Help… I think I’m addicted 🐼😂 Ever since I adopted 3-month-old baby Menglan from Panda Factory Shop, I literally can’t stop rua-ing this little fluffball! He’s so round, soft, and real-looking that my hand just refuses to let go 🐾✨ Cuteness level: dangerous → once you start, you can’t stop!!! #pandafactoryshop #BabyMenglan #RuaAddict #PandaBaby #pandaplush #lifelike #realisticpanda #CutenessOverload #CantStopRua`, /*2*/
  `🎀 “Yu Ai’s day starts with bamboo... and ends in your arms?” 💕 Just woke up… but bamboo shoots? I’m coming!! 🎋😋 All dressed up and ready to meet my foster mama 🐼💖 Hey—come take me home, pretty please? 🎀 Your daily dose of panda cuteness → Yu Ai is waiting! #YuAiPanda #PandaPlush #TakeMeHome #CuteStuffedAnimals #KawaiiAlert #PandaVibes #yuai #realisticpanda #lifelikepanda #handmadepanda #pandafactory #pandafactoryshop`, /*3*/
  `🎉🐼 Celebrate Yu Ai & Yu Ke’s 3rd Birthday with Us! 🎂🎈 The Yu Ai Panda Plush is officially LIVE at pandafactoryshop.com — the perfect cuddly friend for panda lovers! 🐾✨ 🎁 Birthday Special: 🛍️ Get $50 OFF on any order over $599 (July 22–29) 🎉 FREE Birthday Cake Hat + Exclusive Yu Ai Kindergarten Uniform with every Yu Ai plush purchase! 🎀👕 Hurry — these adorable birthday gifts won’t last long! Treat yourself or surprise a loved one today! 💝 👉 #YuAiBirthday #PandaFactoryShop #YuAiPlush #PandaLove #BirthdaySale #LimitedEdition #pandalover`, /*4*/
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

export const pandafactory_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pandafactory_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pandafactory_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pandafactory_array_of_posts = [
  ...pandafactory_images,
  ...pandafactory_videos
];
