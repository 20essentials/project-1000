import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'klsrav';
const userId = 'e5efede8-0877-4319-b24c-5285b7f96379';
const prefixUrl = 'https://dominicnikolai.github.io/project-314/assets/klsr-av/';
const followers = 215_720;
const followed = 50;
const profileDescription = '📧';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `12.365 Audio + Visuals by me #audiovisual #digitalart #sounddesign #newmediaart #av #newmusic #creativecodeart #touchdesigner #electronicmusic #livevisuals`, /*1*/
  `#audiovisual #digitalart #sounddesign #newmediaart #av #newmusic #creativecodeart #electronicmusic #touchdesigner #livevisuals`, /*2*/
  `Empty Space Audio + Visual by me #audiovisual #digitalart #sounddesign #newmediaart #av #newmusic #creativecodeart #electronicmusic #touchdesigner #livevisuals`, /*3*/
  `An Endless Ocean Audio + Visual by me #audiovisual #digitalart #sounddesign #newmediaart #av #newmusic #creativecodeart #electronicmusic #touchdesigner #livevisuals`, /*4*/
  `Don’t close your eyes Audio + Visual by me #audiovisual #digitalart #sounddesign #newmediaart #av #newmusic #creativecodeart #electronicmusic #touchdesigner #livevisuals`, /*5*/
  `Whatever can happen will happen Audio + Visual by me #audiovisual #digitalart #sounddesign #newmediaart #av #newmusic #creativecodeart #electronicmusic #touchdesigner #livevisuals`, /*6*/
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

export const klsrav_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const klsrav_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const klsrav_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const klsrav_array_of_posts = [
  ...klsrav_images,
  ...klsrav_videos
];
