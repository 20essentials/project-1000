import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'crumb_studio';
const userId = '';
const prefixUrl = '';
const followers = 128_832;
const followed = 33;
const profileDescription = `Story-first motion design for tech brands ready to stand out`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#animation #motiongraphics #2danimation #3danimation #aftereffects #cinema4d #redshift #redshiftrender #c4d #animationart #animated #animators #design #creativedesign #animationindustry #animationlife #digitalanimation #animationcommunity #animationlovers #creativeanimation

`, /*1*/
  `We just launched our new website.`, /*2*/
  `#cinema4d #aftereffects #illustrator #animation #2d #2danimation #3d #3danimation #layers #redshift #redshiftrender #render #motiondesign #merrychristmas`, /*3*/
  `#motiondesign #mgcollective #3d #3danimation #animation #animatorsofinstagram #aftereffect #cinema4d #adobeanimate #dribbblersofinstagram #dribbble #dribbblers #itsnicethat #framebyframe #2danimation #adobeillustrator #illustrator #behance #animators #digitalart #2d3d`, /*4*/
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

export const crumb_studio_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const crumb_studio_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const crumb_studio_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const crumb_studio_array_of_posts = [
  ...crumb_studio_images,
  ...crumb_studio_videos
];
