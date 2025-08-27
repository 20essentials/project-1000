import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'custom_rugs';
const userId = '';
const prefixUrl = '';
const followers = 241_720;
const followed = 123;
const profileDescription = '😉';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `MY BIGGEST RUG EVER 🙂‍↕️ Where would you place a rug like that? Homer Simpson in the bushes handmade custom carpet 🧶🧶 . . . . . . . . . . . . #homersimpson #simpsons #thesimpson #simpson #asmr #asmrvideo #customrugs #tufting #tuftingart #rugdesign #tufted #woolrug #rugmaking #rugs #handmadeart #smallshopsupporter #commission #giftideas #livingroomideas #livingroomdesign #bedroomideas #bedroomdecor #rugshop #rugsale #rugsusa #luxuryrugs`, /*1*/
  `What a wonderful rugs I have just made 🙂 . . . . . . . . . . . . . . . . #adventuretime #adventuretimefanart #adventuretimeart #jakethedog #tuftingrug #rugshop #rugsale #asmr #asmrvideo #rugmaking #woolart #livingroominspo #etsysale #handmaderugs #carpetdesign #tufted #tufting #customrugs #luxuryrugs #bedroomdecoration #tuftingart`, /*2*/
  `Shaving 3d abstract tufted rug 💚💙 . . . . . . . . . . . #asmr #asmrvideos #abstractart #abstractaddict #tufting #tuftingrug #rugmaking #smallshopsupporter #woolart #fiberarts #fiberartist #customrugs #rugsusa #carpetdesign #carpetcleaning #tuftedrug #abstractartists #livingroomdecor #bedroomdecor #decorinspo #decorideas #giftideas`, /*3*/
  `Chillest rugs ever 😎✌️ For him and now for her 😉 . . . #asmr #asmrsounds #visualasmr #asmrcommunity #rugmaking #asmrvideo #custommade #chillgirl #chillguy #chillguymeme #carpetdesign #handmaderug #handmadecarpet #woolart #woolen #fiberartist #rugsusa #fiberart #rugtufting #fluffyrug #tuftingrug #rugdesign #rugshop #memes #smallbusinesssupport #rugtufting #customrug #woolrug #handmadecarpet`, /*4*/
  ` #customrugs #handmaderug #rugtufting #rugsusa #pokemonart #pokemon #spongebob #carpetdesign #carpetcleaning #spongebobmemes #spongebobandpatrick #patrickstar #staryu #starmie #asmrcommunity #asmrsounds #asmr #christmasgift`, /*5*/
  `🪒 3D Devil Fruit carpet shaving 🍈😈 . . . . . . . #tufted #tufting #rug #etsyshop #etsyfinds #etsyseller #rugs #carpet #rugmaking #customrug #rugdesign #commission #tuftingart #tuftinggun #handtufted #handmaderug #handmadegifts #onepiece #onepiecefan #onepieceanime #rugmaking #woolrug #livingroomdecor #giftidea #bedroomdecor #livingroomdecoration #luffy #luxuryrugs`, /*6*/
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

export const custom_rugs_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const custom_rugs_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const custom_rugs_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const custom_rugs_array_of_posts = [
  ...custom_rugs_images,
  ...custom_rugs_videos
];
