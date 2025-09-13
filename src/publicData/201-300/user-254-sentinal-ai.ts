import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'sentinal_ai';
const userId = '';
const prefixUrl = '';
const followers = 197_899;
const followed = 54;
const profileDescription = `𝐀𝐧𝐢𝐦𝐞 𝐑𝐞𝐞𝐥𝐬`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 18;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Was feeling the song! #anime #animeedits #90sanime #90sanimeaesthetic #fyp #fypシ #akira #cowboybebop #evangelion #yuyuhakusho #beserk #animeamv #retroanimeaesthetic #perfectblue`, /*1*/
  `A look at Ghost in the Shell (Anime) #anime #animedit #ghostintheshell #90sanime #retroanime #fyp #fypシ`, /*2*/
  `A look at Akira #animeedits #akira #anime #80sanime #animeworld #retroanime #animeamv #fyp #fypシ`, /*3*/
  `animeedits #yuyuhakusho #90sanime #retroanime #90sanimeaesthetic #animeedit #fyp #fypシ #animeamv #animeaesthetic #animeworld #animejapan #anime90s #yuyuhakushoedit`, /*4*/
  `#anime #animeedits #studioghibli #spiritedaway #castleinthesky #graveofthefireflies #howlsmovingcastle #nausicaa #retroanime #totoro #kikisdeliveryservice #90sanime #animeaesthetic #hayaomiyazaki #fyp #fypシ #animeart #animeworld #japan #animemanga #nostalgia #goodvibes`, /*5*/
  `Asuka #anime #endofevangelion #neongenesisevangelion #Evangelion #90sanime #90animeaesthetics #animeedits #animeedit #asuka #retroanime #retroanime #animegirl #fyp #evangelionedit #fypシ`, /*6*/
  `#anime #animeedit #berserk #90sanime #90sanimeaesthetic #gutsberserk #berserkanime #retroanime #griffith #animeedits #fyp #fypシ #manga #darkfantasy #animegirl #animemanga #vintage #90sanimevibes #90snostalgia #animeart #animeamv #japan #godhand #explorepage #explore #animeworld #animefan #animeartwork`, /*7*/
  `#anime #cyberpunkedgerunners #cyberpunk #animeedit #animeedits #dystopia #animeaesthetic #animeworld #fyp #fypシ`, /*8*/
  `The Classics Part One #anime #animeedits #animeedit #retroanime #80sanime #90sanime #akira #ghostintheshell #sailormoon #beserk #cowboybebop #studioghibli #animeworld #berserk #animeaesthetic #fyp #fypシ #artistic`, /*9*/ 
  `The Beauty of Sailor Moon #anime #animeedits #sailormoon #sailormoonedit #90sanime #retroanime #90sanimeaesthetic #animegirl #animeworld #fyp #fypシ`, /*10*/
  `The Beauty of Neon Genesis Evangelion #anime #evangelion #neongenesisevangelionedit #animeedit #animeedits #90sanime #90sanimeaesthetic #retroanime #animeworld #fyp #fypシ #animeamv`, /*11*/
  `The Beauty of Neon Genesis Evangelion.................#anime #animeedits #neongenesisevangelion #evangelion #90sanime #retroanime #retroanimeaesthetic #animeworld #fyp #fypシ #endofevangelion #chill #evangelionedit #neongenesisevangelionedit #explorepage✨ #animelover`, /*12*/
  `A look at Hunter X Hunter #anime #hunterxhunter #hxh #animeedits #animeedit #fyp #fypシ #90sanime #retroanime #90sanimeaesthetic #hxh1999 #killua #animeamv #hxhedit #hxhedits`, /*13*/
  `A look at Neon Genesis Evangelion #animeedits #anime #evangelion #fyp #fypシ #animeaesthetic #90sanime #retroanime #neongenesisevangelion #animeedit #endofevangelion #endofevangelionedit`, /*14*/
  `A look at Attack on Titan #animeedits #attackontitan #anime #fyp #fypシ #aot #animeamv #animeaesthetic #erenjaegeredit.`, /*15*/
  `#anime #animeedits #evangelion #neongenesisevangelion #90sanime #animeboy #animegirl #fyp #fypシ #90sanimeaesthetic #animeedit #netflix`, /*16*/
  `#90sanimeaesthetic #animeedit #netflix`, /*17*/
  `Neon Genesis Evangelion - Barricade #neongenesisevangelion #evangelion #evangelionedit #animeamv #animeamvs #animeedit #anime #animeedits #fyp #fypシ #90sanime #axwell #netflix #netflixseries #netflixanime #animegirl #animeedit #animeboy #90sanimeaesthetic #animeamvs`, /*18*/
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

export const sentinal_ai_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const sentinal_ai_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const sentinal_ai_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const sentinal_ai_array_of_posts = [
  ...sentinal_ai_images,
  ...sentinal_ai_videos
];
