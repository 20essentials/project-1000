import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'thefigurehideout';
const userId = '91a01421-b803-492c-bf84-2bd36e969ccd';
const prefixUrl = 'https://dominicnikolai.github.io/project-302/assets/thefigurehideout/';
const followers = 1_200_720;
const followed = 50;
const profileDescription = 'Play with a STYLE👌';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `*Quick Look* JND Studios The Dark Knight - The Joker (Type C) UNBOXING🃏🃏🃏 #hottoyscollector #actionfigures #hottoyscollection #hottoyscollectibles #toys #unboxing #toy #hottoysphotography #sideshow #sideshowcollectibles #jndstudios #thedarkknight #joker #heathledger #dc #dcuniverse #dccomics #onesixth #onesixthfigure #onesixthrepublic #collectible #collection`, /*1*/
  `#hottoyscollection #hottoyscollector #hottoyscollectibles #hottoysphotography #thejoker #joker #batman #thedarkknight #toy #toyphotography #toys #actionfigures #unboxing #onesixthscale #onesixthfigure #sideshowcollectibles`, /*2*/

  `*FIRST LOOK* Hot Toys Deadpool 3 - Kidpool UNBOXING🔫🔫🔫
#hottoyscollector #actionfigures #hottoyscollection #hottoyscollectibles #toys #unboxing #toy #hottoysphotography #sideshow #sideshowcollectibles #marvel #marveledit #marvelcomics #deadpool #wolverine #xmen #ladypool #kidpool #dogpool #onesixth #onesixthfigure #onesixthrepublic #ryanreynolds`, /*3*/
  `*FIRST LOOK* Hot Toys Iron Man Mark 3 (Stealth Mode Version) UNBOXING🤯🤯🤯 #hottoyscollector #actionfigures #hottoyscollection #hottoyscollectibles #toys #unboxing #toy #hottoysphotography #sideshow #sideshowcollectibles #ironman #marvel #captainamerica #thor #spiderman #figure #onesixth #onesixthfigure #onesixthrepublic`, /*4*/
  `#hottoyscollector #actionfigures #hottoyscollection #hottoyscollectibles #toys #toy #unboxing #hottoysphotography #sideshow #sideshowcollectibles #spiderman #milesmorales #peterparker #prowler #marvelsspiderman #onesixthfigure #onesixth #onesixthrepublic #marvel #venom #marvelcomics`, /*5*/
  `*FIRST LOOK* Hot Toys Deadpool & Wolverine - Deadpool (Battling Version) UNBOXING🤯🤯🤯 #hottoyscollector #actionfigures #hottoyscollection #hottoyscollectibles #toys #toy #unboxing #hottoysphotography #sideshow #sideshowcollectibles #marvel #deadpool #wolverine #onesixth #onesixthfigure #ryanreynolds #hughjackman #superhero #byebyebye @vancityreynolds

`, /*6*/
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

export const thefigurehideout_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const thefigurehideout_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const thefigurehideout_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const thefigurehideout_array_of_posts = [
  ...thefigurehideout_images,
  ...thefigurehideout_videos
];
