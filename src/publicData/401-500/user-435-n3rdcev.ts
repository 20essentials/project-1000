import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'n3rdcev';
const userId = '';
const prefixUrl = '';
const followers = 83_832;
const followed = 50;
const profileDescription = `bip bup ba`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Coding and gaming on the GPD win 4 🎮 #gpd #gpdwin4 #coding #gaming #vscode #handheldconsole #handheldgaming #psvita`, /*1*/
  `Console Cyberdeck Haven’t had the uConsole for long, but it’s quickly become my favorite little cyberdeck for on the go. Perfect mix of portable and customizable #uconsole #cyberdeck #portabletech #techgear #embeddedtech #makerlife #nerdlife #codingonthego #minipc #techsetup #opensourcehardware #geekgear #diytech #fieldtools #linux #ubuntu`, /*2*/
  `#gpdwin4 #handheldgaming #pcgaming #deadspace3 #gamingonthego
#portablepc #techgear #minipc #horrorgames #gamingsetup #steamos #windowsgaming #techreel #gamerlife #gadgetlife`, /*3*/
  `
#HackRF #SDR #PortaPack #cybersecurity #infosec #ethicalhacking #hacking #tech #technology #linux #programming #kalilinux #cybersecurityawareness #pentesting`, /*4*/
  `Coding on the GPD win 4🎮

#gpd #gpdwin4 #coding #gaming #vscode #handheldconsole #handheldgaming #psvita`, /*5*/
  `#gadgets #tech #organise #techorganizer #flipperzero #m5stack #electronics #nerd #setup`, /*6*/
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

export const n3rdcev_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const n3rdcev_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const n3rdcev_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const n3rdcev_array_of_posts = [
  ...n3rdcev_images,
  ...n3rdcev_videos
];
