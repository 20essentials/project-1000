import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pandas';
const userId = '';
const prefixUrl = '';
const followers = 8_720_832;
const followed = 50;
const profileDescription = '🐼 Relax';
const prefixLetterVideos = 'v';
const quantityOfVideos = 16;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Panda Qiying: Slides are so much fun - I could play on them all day! 🐼 𝐁𝐫𝐢𝐧𝐠 𝐭𝐡𝐞 𝐩𝐚𝐧𝐝𝐚 𝐦𝐚𝐠𝐢𝐜 𝐡𝐨𝐦𝐞! 🧸 𝐒𝐡𝐨𝐩 𝐧𝐨𝐰 𝐯𝐢𝐚 𝐥𝐢𝐧𝐤 𝐢𝐧 𝐛𝐢𝐨. 🌍 𝐖𝐨𝐫𝐥𝐝𝐰𝐢𝐝𝐞 𝐬𝐡𝐢𝐩𝐩𝐢𝐧𝐠 & 𝟏𝟓-𝐝𝐚𝐲 𝐟𝐫𝐞𝐞 𝐫𝐞𝐭𝐮𝐫𝐧𝐬! #panda #giantpanda #goviral #pandabear #pandalovers #panda🐼 #goviralchallenge #pandaworld #pandalover #pandalife`, /*1*/
  `Wulin, are your paws ticklish? 🐼🦶✨ #panda #giantpanda #goviral #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*2*/
  `Lingyan, do you like the smell of these flowers? #panda #giantpanda #goviral #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*3*/
  `Beichen, how’s that green treat? Yummy? #panda #giantpanda #goviral #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*4*/
  `Mengmeng: Seriously… what’s up with this little one? I’m lost. #panda #giantpanda #goviral #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*5*/
  `With each step and a gentle smile, panda Xiyue steals hearts effortlessly. #panda #giantpanda #goviral #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*6*/
  `Bamboo tastes even better when you’re snuggled up with mom. #panda #giantpanda #goviral #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*7*/
  `Guoqing: oops, just pretend you didn't see that. #panda #goviral #giantpanda #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*8*/
  `#pandalover`, /*9*/ 
  `Long Pan, you’re irresistible! How about coming home with me? #panda #giantpanda #goviral #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*10*/
  `No bamboo shoot drama today—Mengmeng and Meizhu sat together in harmony. Such a sweet mother-daughter moment! 🥰 #panda #giantpanda #goviral #pandalovers #pandabear #goviralchallenge #panda🐼 #pandaworld #pandalife #pandalover`, /*11*/
  `Feiyun: Who needs power when you’ve got this face? 😏✨🐼 #panda #giantpanda #goviral #pandalovers #pandabear #panda🐼 #goviralchallenge #pandaworld #pandalife #pandalover`, /*12*/
  `Yayi carefully admired the lotus flowers, moving so gently as if afraid of damaging them. #panda #giantpanda #goviral #pandalovers #pandabear #panda🐼 #goviralchallenge #pandaworld #pandalife #pandalover`, /*13*/
  `Meizhu, are you kissing your mom? #panda #giantpanda #goviral #pandalovers #pandabear #panda🐼 #goviralchallenge #pandaworld #pandalife #pandalover`, /*14*/
  `Never thought I’d see a giant panda look so shocked, wronged, and in total disbelief. 🐼 𝐂𝐚𝐧’𝐭 𝐫𝐞𝐬𝐢𝐬𝐭 𝐭𝐡𝐞 𝐜𝐮𝐭𝐞𝐧𝐞𝐬𝐬? 🔗 𝐓𝐚𝐩 𝐭𝐡𝐞 𝐥𝐢𝐧𝐤 𝐢𝐧 𝐨𝐮𝐫 𝐛𝐢𝐨 𝐭𝐨 𝐬𝐡𝐨𝐩! 🌍 𝐒𝐡𝐢𝐩𝐬 𝐰𝐨𝐫𝐥𝐝𝐰𝐢𝐝𝐞 | 𝐅𝐫𝐞𝐞 𝟏𝟓-𝐝𝐚𝐲 𝐫𝐞𝐭𝐮𝐫𝐧𝐬! #panda #giantpanda #goviral #pandalovers #pandabear #panda🐼 #goviralchallenge #pandaworld #pandalife #pandalover`, /*15*/
  `With just her beauty, Feiyun could easily take over the world. 💁‍♀️🐼✨ 🐼 𝐂𝐚𝐧’𝐭 𝐫𝐞𝐬𝐢𝐬𝐭 𝐭𝐡𝐞 𝐜𝐮𝐭𝐞𝐧𝐞𝐬𝐬? 🔗 𝐓𝐚𝐩 𝐭𝐡𝐞 𝐥𝐢𝐧𝐤 𝐢𝐧 𝐨𝐮𝐫 𝐛𝐢𝐨 𝐭𝐨 𝐬𝐡𝐨𝐩! 🌍 𝐒𝐡𝐢𝐩𝐬 𝐰𝐨𝐫𝐥𝐝𝐰𝐢𝐝𝐞 | 𝐅𝐫𝐞𝐞 𝟏𝟓-𝐝𝐚𝐲 𝐫𝐞𝐭𝐮𝐫𝐧𝐬! #panda #giantpanda #goviral #pandalovers #pandabear #panda🐼 #goviralchallenge #pandaworld #pandalife #pandalover`, /*16*/
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

export const pandas_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pandas_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pandas_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pandas_array_of_posts = [
  ...pandas_images,
  ...pandas_videos
];
