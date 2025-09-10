import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'metronovon';
const userId = '9cc9c24b-b9ff-498c-a6ab-3f5e492c73bc';
const prefixUrl = 'https://dominicnikolai.github.io/project-316/assets/metronovon/';
const followers = 79_720;
const followed = 523;
const profileDescription = 'Japan-born AI sci-fi artist crafting AI';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `At the edge of the universe, what does it mean to remain human? In stations where gravity is an illusion—gyms, pools, and cafés designed to recreate Earth’s touch—we cling to the familiar. Yet, as our bodies adjust to space, our bond with nature fades, and with it, our sense of identity. Science pushes forward, but can technology ever replace the essence of being human? Drifting through the silence of the cosmos, we are left with one question: When the stars feel distant, what truly defines us? 💬What do you think? Drop your thoughts in the comments 📣Know someone who’d love this? Tag them & share! @metronovon 🚀 Explore the unknown worlds—follow for more! ✉️ DM for visual projects & commissions 🛒 Metronovon downloads await! Access exclusive sci-fi designs through the link in bio. ＊お仕事のご依頼はDMでご連絡ください #spaceexploration #artificialgravity #humanityinspace #futureoflife #beyondtheearth #spacephilosophy #techandhumanity #cosmicjourney #humancondition #livinginspace`, /*1*/
  `#metropolis #metropolitan #architecture #cityscape #landscape #architect #aiart #architecturelovers #architecturedesign #spacestation #spaceship #scifi #scifiart #spaceart #futuristicart #sciencefiction #copper #electromagneticstorm`, /*2*/
  `#metropolis #metropolitan #architecture #cityscape #landscape #architect #aiart #architecturelovers #architecturedesign #spacestation #spaceship #scifi #scifiart #spaceart #futuristicart #sciencefiction #rescue #snow`, /*3*/
  `#humanstory#spaceliving#quietfutures#deepconnection#metronovon#scifidream#futurenostalgia#interstellarharmony#postearthlife#sentientdesign`, /*4*/
  `#humanwillremains #quietresistance #beyondpredicted #choicewithinpatterns #cosmicfiction #posthumanera #sfvisualpoetry #astrophilosophy #newmythmaking`, /*5*/
  `#futurevisions#quietintelligence#coldcivilization#beyondthought#humanityrising#speculativescience#cosmicwonder#technohumanism#starseedstories#futuremythologies`, /*6*/
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

export const metronovon_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const metronovon_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const metronovon_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const metronovon_array_of_posts = [
  ...metronovon_images,
  ...metronovon_videos
];
