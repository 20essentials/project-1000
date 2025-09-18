import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'datoscuriosos';
const userId = '';
const prefixUrl = '';
const followers = 473_899;
const followed = 989;
const profileDescription = `𝘼𝙥𝙧𝙚𝙣𝙙𝙚 𝙖𝙡𝙜𝙤 𝙣𝙪𝙚𝙫𝙤 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙙𝙞́𝙖𝙨`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#datos #datoscuriosos #datosinteresantes #cosasinteresantes #cosasraras #datosquenosabias #aquenosabias #curioso #curiosos #curiosidades #datospsicologicos #datoshistóricos #datoscientificos #argentina #saber #misterio #saberdetodo #losabias #sabiasque #asombroso #hechosquenosabias #miedo #informate #información #informaciones`, /*1*/
  `#datos #datoscuriosos #datosinteresantes #cosasinteresantes #cosasraras #datosquenosabias #aquenosabias #curioso #curiosos #curiosidades #datospsicologicos #datoshistóricos #datoscientificos #argentina #saber #misterio #saberdetodo #losabias #sabiasque #asombroso #hechosquenosabias #miedo #informate #información #informaciones`, /*2*/
  `#datos #datoscuriosos #datosinteresantes #cosasinteresantes #cosasraras #datosquenosabias #aquenosabias #curioso #curiosos #curiosidades #datospsicologicos #datoshistóricos #datoscientificos #argentina #saber #misterio #saberdetodo #losabias #sabiasque #asombroso #hechosquenosabias #miedo #informate #información #informaciones`, /*3*/
  `#datos #datoscuriosos #datosinteresantes #cosasinteresantes #cosasraras #datosquenosabias #aquenosabias #curioso #curiosos #curiosidades #datospsicologicos #datoshistóricos #datoscientificos #argentina #saber #misterio #saberdetodo #losabias #sabiasque #asombroso #hechosquenosabias #miedo #informate #información #informaciones`, /*4*/
  `#datos #datoscuriosos #datosinteresantes #cosasinteresantes #cosasraras #datosquenosabias #aquenosabias #curioso #curiosos #curiosidades #datospsicologicos #datoshistóricos #datoscientificos #argentina #saber #misterio #saberdetodo #losabias #sabiasque #asombroso #hechosquenosabias #miedo #informate #información #informaciones`, /*5*/
  `#datos #datoscuriosos #datosinteresantes #cosasinteresantes #cosasraras #datosquenosabias #aquenosabias #curioso #curiosos #curiosidades #datospsicologicos #datoshistóricos #datoscientificos #argentina #saber #misterio #saberdetodo #losabias #sabiasque #asombroso #hechosquenosabias #miedo #informate #información #informaciones`, /*6*/
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

export const datoscuriosos_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const datoscuriosos_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const datoscuriosos_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const datoscuriosos_array_of_posts = [
  ...datoscuriosos_images,
  ...datoscuriosos_videos
];
