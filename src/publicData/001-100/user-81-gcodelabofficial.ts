import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gcodelabofficial';
const userId = '583f806d-7dec-47dd-9742-70d06dbc0dd0';
const prefixUrl = 'https://dominicnikolai.github.io/project-271/assets/gcodelabofficial/';
const followers = 111_720;
const followed = 50;
const profileDescription = 'Printing cool stuff in 3D!';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `3D printed Shoes Printer: Bambu Lab A1 Filament: TPU 95A Blue and TPU 95A Rainbow STL file: Makerworld, Crocs Shoes and Slide Shoes by MakerVerse Designs #3dprinting #satisfying #asmr #timelapse #shoes`, /*1*/
  `3D printed Rainbow Katana Printer`, /*2*/
  `100k Subs 3D printed Trophy Thank you so much to all of my 100 000 subscribers here on Instagram! I really appreciate your support! STL file found here: https://makerworld.com/en/models/105003#profileId-112061 Printer: Bambu Lab A1 Filament: PLA Silk Gold + PLA Black #3dprinting #3d #shorts #reels #satisfying #timelapse #100k`, /*3*/
  `3 Satisfying 3D Printed Swords 1/3 Collapsing Drill Sword Printer`, /*4*/
  `3D printed Shiny Labubu Printer: Creality K2 Plus Combo + Bambu Lab A1 Filament`, /*5*/
  `3D printed Super Mario Music Box Printer: Bambu Lab A1 Filament: PLA Matt by EXTRUDR STL file: Makerworld, Musical Fidget - Video Game Edition by kida AD: You can buy EXTRUDR filaments using my affiliate link here: https://extrudr.com/en/fi/?ref=mdlkntz use code GCODELAB for 15% OFF, code available for one time purchase in July. Link is also found through my bio or linktree.com/gcodelab #3dprinting #timelapse #nintendo #supermario #music`, /*6*/
  `3D printed Planetary Gears Fidget Spinner Printer: Creality K2 Plus Combo Filament: PLA NX2 MATT Yellow and Light Blue by EXTRUDR STL file: https://makerworld.com/en/models/871854-razor-geometric-planetary-gears-fidget-spinner?from=search#profileId-823892 #3dprinting #fidget #fidgettoys #fidgetspinner #spinner`, /*7*/
  `3D printed FIFA World Cup Printer: Bambu Lab A1 Filament: PLA Silk Gold & PLA Green STL file`, /*8*/
  `3D printed Sandy the Sea Star Printer: Bambu Lab A1 Filament: PLA Silk rainbow + PLA White/Black/Green`, /*9*/ 
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

export const gcodelabofficial_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gcodelabofficial_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gcodelabofficial_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gcodelabofficial_array_of_posts = [
  ...gcodelabofficial_images,
  ...gcodelabofficial_videos
];
