import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'threedsav';
const userId = '';
const prefixUrl = '';
const followers = 232_720;
const followed = 78;
const profileDescription = ' Mechanical Engineer';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `HoloDesk DIY Computador Holográfico Tony Stark style #3dprinting #impresion3d #3dprinted #ironman #3d #ia #jarvis #impressao3d #bambulab #projetor #holographic #hologram #diy #holograms #pc #friday #arcreactor`, /*1*/
  `#ibai #short #venezuela 🇻🇪 #impresion3d #3dprinting #ironman #marvel #3dprinter`, /*2*/
  `#impresion3d #3dprinting #predator #mask #alienvspredator #impresora3d #3dprint #elegoo #polymaker #depredador`, /*3*/
  `#impressao3d #3dxav #nexprint`, /*4*/
  `#3DPrintedProps #DillingerGrid #TronLegacy #SciFiProps #Glowing3DPrint #Frikarte3D #TronFans #LightUpPrint #TronCosplay #BambuLab #LEDMods `, /*5*/
  `#impresion3d #3dprinting #impresora3d #impressao3d #makerworld #3dprinter #brasil`, /*6*/
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

export const threedsav_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const threedsav_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const threedsav_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const threedsav_array_of_posts = [
  ...threedsav_images,
  ...threedsav_videos
];
