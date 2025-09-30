import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mangabankai_shop';
const userId = '';
const prefixUrl = '';
const followers = 45_832;
const followed = 99;
const profileDescription = `Light Box`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Sei un vero fan degli anime? La tua stanza ha bisogno di qualcosa di unico! ✨ Light Box che illuminano la tua passione per gli anime 🚚 Spedizione gratuita in 24-48 ore 🎉 Offerta 2+1 gratis: prendi due Light Box e la terza è gratis!`, /*1*/
  `MANGA BANKAI SHOP ⛩️
`, /*2*/
  `#animeitalia#mangaitalia#animebox#animeart#otakuitalia#animelover#lucianime#decorazioneanime#lampadaanime#animeitaliane#acquistianime#lightboxanime#stanzaotaku#animecollection#venditaanime`, /*3*/
  `#MajinVegeta #AnimeSetup #RoomGoals #DragonBallStyle #SaiyanOnly #BankaiDrop`, /*4*/
  `#anime #otaku #manga #weeb #animefan #animeedit #animeart #animeaesthetic #animeworld #animelover #onepiece #naruto #attackontitan #demonslayer #jujutsukaisen #chainsawman #dragonball #deathnote #hunterxhunter #berserk #spyxfamilia #bleach #myheroacademia`, /*5*/
  `#Anime #AnimeArt #AnimeLovers #OtakuLife #Manga #AnimeMerch #AnimeCollection #AnimeRoom #AnimeDecor #OtakuStyle #WeebLife #LightBoxAnime #AnimeLightBox #OtakuVibes #RoomDecor #AnimeSetup #AnimeFan #AnimeAddict #OtakuAesthetic #AnimeGift`, /*6*/
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

export const mangabankai_shop_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mangabankai_shop_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mangabankai_shop_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mangabankai_shop_array_of_posts = [
  ...mangabankai_shop_images,
  ...mangabankai_shop_videos
];
