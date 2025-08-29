import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'olivervisualfx';
const userId = '7a41b3d4-85cc-4406-b054-d0a47f996985';
const prefixUrl = 'https://dominicnikolai.github.io/project-294/assets/olivervisualfx/';
const followers = 142_720;
const followed = 322;
const profileDescription = '🎬 Hollywood VFX Artist | CGI Artist | Creative Director🪐';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🎥 Not your typical Columbia Pictures moment 🍿 A behind-the-scenes CGI take on that legendary torch shot 😋 . `, /*1*/
  `As promised, presenting the true scale of the Universal magic. It's showtime in a whole new dimension! 🌟🚀 . CGI by olivervisualfx . #UniversalStudios #universalpictures #dubai #dubaiuae #cgi #vfx #desert #ue5 #unreal`, /*2*/
  `2024: Rendered, exported, and uploaded. Good night!❤️❤️🧨💥 CGI by @olivervisualfx . Big thanks to everyone who contributed to these amazing projects—love you all❤️`, /*3*/
  `#visitdubai #mydubai #lovindubai #vfx #3D #animation`, /*4*/
  `Behind the scenes of my fan-made CGI take on the iconic Columbia Pictures intro logo 100 percent recreated in 3D for fun 🫡 . CGI by @olivervisualfx . not affiliated with Columbia Pictures or Sony.`, /*5*/
  `Dexter’s Laboratory fans, this one's for you! 🔧Just finished my own CGI remake of the iconic intro, with a little 3D Dexter moment! 🧪 . This is a fan-made tribute, not affiliated with Cartoon Network, just celebrating the nostalgia and fun of Tartakovsky’s creation. ✨️ . CGI by @olivervisualfx . Environment Modeling.`, /*6*/
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

export const olivervisualfx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const olivervisualfx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const olivervisualfx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const olivervisualfx_array_of_posts = [
  ...olivervisualfx_images,
  ...olivervisualfx_videos
];
