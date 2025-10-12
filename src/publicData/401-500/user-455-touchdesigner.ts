import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'touchdesigner';
const userId = '162c4019-5778-49fc-a308-0e4cf65f05da';
const prefixUrl = 'https://dominicnikolai.github.io/project-356/assets/touchdesigner/';
const followers = 431_832;
const followed = 882;
const profileDescription = `Interactivity`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#gamedesign #creativecomputation #touchdesigner #touchdesignerlearning #gamedesigner #onlinelearning`, /*1*/
  `#aivision #machinevision #touchdesigner #audiovisualart #glitchart`, /*2*/
  `#blackbird #bird #datavisualization #touchdesigner #bioacoustics`, /*3*/
  `#graphicdesign #art #touchdesigner #datamosh #maximalism #vfx`, /*4*/
  `#electronicmusic #abstractart #touchdesigner #audiovisual #digitalart #musicproducer #sounddesign #glitch #av`, /*5*/
  `#touchdesigner #montrealmeetup #tdmeetup #live #av #creativecoding #generativeart #madewithtouchdesigner`, /*6*/
  ` Itérations exploratoires`, /*7*/
  `#touchdesigner, #creativecoding, #interactivedesign #audioreactive #ableton #music`, /*8*/
  `#touchdesigner #particles #newmediaart #realtimerendering #glsl #newmedia #generative #generativeart #generativedesign #abstractart #realtimegraphics #audiovisual #audioreactive #digitalart #zzoon`, /*9*/ 
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

export const touchdesigner_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const touchdesigner_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const touchdesigner_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const touchdesigner_array_of_posts = [
  ...touchdesigner_images,
  ...touchdesigner_videos
];
