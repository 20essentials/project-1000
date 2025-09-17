import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'evangelionmk';
const userId = 'a085eb24-82f2-425a-a084-512bcdc0b506';
const prefixUrl = 'https://dominicnikolai.github.io/project-329/assets/ev4ngelionmk/';
const followers = 123_720;
const followed = 128;
const profileDescription = `𝗬𝗼𝘂𝗿 𝗱𝗮𝗶𝗹𝘆 𝗱𝗼𝘀𝗲 𝗼𝗳 𝗘𝘃𝗮𝗻𝗴𝗲𝗹𝗶𝗼𝗻`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#anime #manga #animanga #90sanime #evangelion #eva #retroanime #evangelionart #evangeliontattoo #aestheticanime #animeaesthetics #evangelioncosplay #nge #reiayanami #ayanamirei #endofevangelion #theendofevangelion #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*1*/
  `
(Tags) #anime #manga #animanga #90sanime #evangelion #eva #retroanime #evangelionart #evangeliontattoo #aestheticanime #animeaesthetics #evangelioncosplay #nge #reiayanami #ayanamirei #endofevangelion #theendofevangelion #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*2*/
  `#anime #manga #animanga #90sanime #evangelion #eva #retroanime #evangelionart #evangeliontattoo #aestheticanime #animeaesthetics #evangelioncosplay #nge #reiayanami #ayanamirei #endofevangelion #theendofevangelion #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*3*/
  `#evangelion #neongenesisevangelion #shinji #eva01 #graphicdesign #posters #posterdesign #wallpaper #evangelionedit #anime #animeedits
#90saesthetic`, /*4*/
  ` #anime #manga #animanga #90sanime #evangelion #eva #retroanime #evangelionart #evangeliontattoo #aestheticanime #animeaesthetics #theendofevangelion #nge #reiayanami #ayanamirei #endofevangelion #theendofevangelion #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*5*/
  `#90sanime #evangelion #eva #retroanime #evangelionart #evangeliontattoo #aestheticanime #animeaesthetics #theendofevangelion #nge #reiayanami #ayanamirei #endofevangelion #theendofevangelion #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*6*/
  `#90saesthetic #anime #manga #animanga #90sanime #90s #aesthetic #evangelion #eva #retroanime #mood #retro #aestheticanime #animeaesthetics #otaku #lofi #80s #2000 #neongenesisevangelion #nge #shinjiIkari #ikarishinji #endofevangelion #shinji #theendofevangelion #eva01 #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*7*/
  `Neon Genesis Evangelion (1995) `, /*8*/
  `The End of Evangelion (1997) . . . . . . . (Tags) #anime #manga #animanga #90sanime #evangelion #eva #retroanime #mood #retro #aestheticanime #animeaesthetics #otaku #2000 #nge #reiayanami #ayanamirei #shinjiIkari #evangelionmanga #endofevangelion #shinji #theendofevangelion #lilith #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*9*/ 
  `#90saesthetic #anime #manga #animanga #90sanime #90s #aesthetic #evangelion #eva #retroanime #mood #retro #aestheticanime #animeaesthetics #otaku #lofi #80s #2000 #neongenesisevangelion #nge #shinjiIkari #ikarishinji #endofevangelion #shinji #theendofevangelion #eva01 #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*10*/
  `#evangelion #eva #neongenesisevangelion #nge #shinjiIkari #endofevangelion #shinji #animeaesthetic #animeaesthetics #ikarishinji #theendofevangelion #rebuildofevangelion #新世紀エヴァンゲリオン #エヴァンゲリオン`, /*11*/
  `#90sanime #evangelion #eva  #neongenesisevangelion #nge #reiayanami #ayanamirei #endofevangelion #theendofevangelion #animequote #animequotes #新世紀エヴ`, /*12*/
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

export const evangelionmk_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const evangelionmk_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const evangelionmk_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const evangelionmk_array_of_posts = [
  ...evangelionmk_images,
  ...evangelionmk_videos
];
