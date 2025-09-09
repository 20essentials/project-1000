import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'thomas_blanchard';
const userId = '';
const prefixUrl = '';
const followers = 108_720;
const followed = 50;
const profileDescription = `Crystallizations, pigments, Inks, moving worlds`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#cosmos #chemistry #chemical #science #ink #inkart #macro`, /*1*/
  `#oppenheimer #oppenheimermovie #macro #macroateam #nuclear #art #movie`, /*2*/
  `Imagine if one of the frames was from fifty shades of grey`, /*3*/
  `#ink #paint #motiongraphics #motiondesign #motion #slowmotion #macro #newmediaart #newmediaartist #new #art #artanddesign #artandscience`, /*4*/
  `Cosmic Loop & The Final Flash. An audiovisual experience in collaboration with @ocular.sounds Organic textures captured in macro, expanding cosmos. 🎧 Best experienced with headphones for full immersion. #macro #newmediaart #science #chemical #chemistry #sounddesign #ink #macroart #cosmos #inkart #nova`, /*5*/
  `End`, /*6*/
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

export const thomas_blanchard_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const thomas_blanchard_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const thomas_blanchard_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const thomas_blanchard_array_of_posts = [
  ...thomas_blanchard_images,
  ...thomas_blanchard_videos
];
