import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'capibara';
const userId = '321f301d-a400-48b5-b53f-6a73cc86d103';
const prefixUrl = 'https://dominicnikolai.github.io/project-307/assets/cap1bara/';
const followers = 32_720_323;
const followed = 50;
const profileDescription = 'UwU';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#bobbycapybara #capybara`, /*1*/
  `Like Tom&Jerry 🤣😆 #bobbycapybara #capybara #capybaramemes #คาปิบาร่า #หมามะพร้าว #animallovers #exoticpets #anilmals #คาปิบารา #capybarasofinstagram #thailand #สัตว์เลี้ยงน่ารัก #แมว #cat #cats_of_world`, /*2*/
  `#capybara #capybaracafe #samui #kohsamuiisland #thailand🇹🇭 #capyfamily`, /*3*/
  `Being so chill, being a capy #capybara #capybaracafe #kohsamui #samui #thailand🇹🇭`, /*4*/
  `So Cute🥰 Thank you capybarahouse.t from Tiktok for the great video ⚠ All rights® are reserved & belong to the video owner Please send us your IG in DM if you aren't tagged ✌ #capybara #capybaras #capy #capybarasofinstagram #capybaralove #capys #bapycapybaras #babycapybara #coconutdog #animalmemes #animalmeme #capybarawalk #capybarashow #carpincho #carpinchos #zoo #capybaramemes #capybarameme #catmemes #raccoonmemes #capyworld #capybaralove #capycute #dailycapybara #cutecapybaras #cutecapybara #cute #capybaby #bapybara #chigüiro #chigüire
`, /*5*/
  `#capybara #capybarameme #capy #capybaras #capybarasofinstagram #capybara_camera #capybaralove #capybarababies #capi #animal #animallovers #coconutdog #carpincho #carpinchos #gort #capybaras_for_life #capybaramemes #capivara #chigüire #chigüiro #capybarasofinstagram #capyworld`, /*6*/
  ` #capybara #capybaras #capy #capybarasofinstagram #capybaralove #capys #bapycapybaras #babycapybara #coconutdog #animalmemes #animalmeme #capybarawalk #capybarashow #carpincho #carpinchos #zoo #capybaramemes #capybarameme #catmemes #raccoonmemes #capyworld #capybaralove #capycute #dailycapybara #cutecapybaras #cutecapybara #cute #capybaby #bapybara #chigüiro #chigüire`, /*7*/
  `#capybara #capybaras #capybara_camera #capybarafunny #capybarashow #capybarawalks #capybaraedit #capybarajoke #capybaramama #capybaravideos #animallovers #animallove #animalpolis #animalgram #animalvideos #funnyanimalvideosas

`, /*8*/
  `#animalvideos #funnyanimalvideosas`, /*9*/ 
  `#goatlife #capybaraforever #capybara #capy #capybaras #cutecapybara #cutecapy #cuteanimals #capybaralove #capybarasofinstagram #capybaramemes #capybaras_for_life #capybaralover #capybarasrule #capys #capybarafamily #capybarasan #capybarababies #capybaraink #capyclub #capybara_camera #coconutdog #coconuts #okipullup #capybarawatch #capybaralife #capybara_meme #capybarafunny`, /*10*/
  `#capybara_camera #capybaralove #capybarababies #capi #animal #animallovers #coconutdog #carpincho #carpinchos #gort #capybaras_for_life #capybaramemes #capivara #chigüire #chigüiro #animalkingdom #animalvideos #animalrights #animalelite #animalworld #reels #viral #cuteanimals #memescapybara`, /*11*/
  `#capybarasofinstagram #capybaralove #capys #bapycapybaras #babycapybara #coconutdog #animalmemes #animalmeme #capybarawalk #capybarashow #carpincho #carpinchos #zoo #capybaramemes #capybarameme #catmemes #raccoonmemes #capyworld #capybaralove #capycute #dailycapybara #cutecapybaras #cutecapybara #cute #capybaby #bapybara #chigüiro #chigüire`, /*12*/
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

export const capibara_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const capibara_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const capibara_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const capibara_array_of_posts = [
  ...capibara_images,
  ...capibara_videos
];
