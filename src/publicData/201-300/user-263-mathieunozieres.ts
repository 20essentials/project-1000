import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mathieunozieres';
const userId = '';
const prefixUrl = '';
const followers = 2_720_322;
const followed = 50;
const profileDescription = ` The journey of a modern fine artist`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#drawing #art #artist #artistsoninstagram #artwork`, /*1*/
  `#mhoilpaints #westernart #oilpainting #westernartist #southwestart #train #steamlocomotive #westernartscene #oldwest`, /*2*/
  `Painting is ready to start, finally!! All the drawing, perspective, composition changes and such are done. It took me a hell of a time. But today is a big day—I’ll apply the first oil strokes to my first Western painting 🌵🤘 . . . . #oilpainting #drawing #artwork #westernart

`, /*3*/
  `This underpainting will send me straight to the ophthalmologist 🤒 Usually, I don’t prepare an oil painting so precisely, but since there’s a significant perspective here, everything must be accurate before starting to paint. Otherwise, it will be a mega chaos if I make any mistakes later on. Anyways, the train is done, now time to work on the environment 🌵🌵 . . . . #drawing #painting #drawingsketch #perspective #westernart`, /*4*/
  `Working on the underpainting, I consistently cover the pencil lines with acrylic. This ensures that: 1️⃣ They won’t vanish with the first wash 2️⃣ It allows me to correct any mistakes obscured by the pencil messiness on the canvas (btw I really hate using a pencil on linen, it’s chaos). I’m dedicating my utmost effort to every stage of this painting, aiming for a robust image as my entry ticket to the Western art market 🎟️ Let’s see how it goes! . . . . #pencilart #westernart #pencildrawing #sketch #artoftheday`, /*5*/
  `#anatomy #drawing #draw #pencildrawing #anatomy4sculptors`, /*6*/
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

export const mathieunozieres_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mathieunozieres_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mathieunozieres_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mathieunozieres_array_of_posts = [
  ...mathieunozieres_images,
  ...mathieunozieres_videos
];
