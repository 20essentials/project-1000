import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'todd';
const userId = '';
const prefixUrl = '';
const followers = 139_720;
const followed = 50;
const profileDescription = 'Graphic';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#matvelrivals #spiderman #spiderverse #milemorales #rivals #jeff #peniparker #peterparker #edits #marvel #graphicdesign #poster #animation #sony #spidydoesntkill #postereveryday #visualgraphc #graphicindex`, /*1*/
  `Posters collection . #graphicdesign #typography #poster #tutorial #posterdesign #designtips #typeposter #graphicindex #expressiveart #visualgraphic #designinspiration #posteraday #designfeed #graphicartist #posterdesignartist #natureart #posterlabs #festivalposter #retrotypography #japanesetypography #artcollector #japaneseposter #creativity #evangelion #anime`, /*2*/
  `New person, same old mistakes . #neongenesisevangelion #graphicdesign #evangelion #eyeondesign #collectgraphics #visualgraphc #grqphiclounge #digitalarchive #japan #anime #postereveryday #selectedwork #postereveryday #animation #anime #animeedits #90saesthetic`, /*3*/
  `SOUL RESONANCE VOL.07 coming this September! Excited to share this new virtual live mix with you all soon 🔊🖤`, /*4*/
  `#neongenesisevangelion
#graphicdesign #evangelion #eyeondesign #collectgraphics #visualgraphc #grqphiclounge #digitalarchive #japan #anime #postereveryday
#selectedwork #postereveryday #animation #anime #animeedits
#90saesthetic
3 sett`, /*5*/
  `#evangelion #neongenesisevangelion #shinji #eva01 #graphicdesign #posters #posterdesign #wallpaper #evangelionedit #anime #animeedits
#90saesthetic`, /*6*/
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

export const todd_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const todd_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const todd_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const todd_array_of_posts = [
  ...todd_images,
  ...todd_videos
];
