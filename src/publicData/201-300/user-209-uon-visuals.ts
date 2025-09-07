import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'uon_visuals';
const userId = '';
const prefixUrl = '';
const followers = 1_270_832;
const followed = 365;
const profileDescription = `I'm pushing the limits of technology`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `[ULTRA HDR] SEE PAST THE SCREEN, NOT WITH YOUR EYES BUT WITH YOUR MIND! THERE IS NO PHONE, ONLY A COLLECTION OF PHOTONS SO VIVID YOU’LL FEEL IT WITH EVERY SENSE YOU GOT. Happy birthday to this animation, I rendered it a year ago and have now updated it to hit peak HDR without igniting your screen and/or face! Enjoy 🔥`, /*1*/
  `[HDR COLOR] Feast your eyes on 1 billion of the most delicious colors they’ve ever tasted, a bubbling soup of fully pathtraced photons bouncing off the smoothest animated geometric curves that’ll tickle your mind in all the right ways!`, /*2*/
  `[Ultracolor HDR] Experience the stunning beauty of several mathematical formulas creating a hypervivid 3D symphony of color and motion! Multiple layers each consisting of 1 billion colors, all spiralling throughout this portal at different patterns and frequencies for maximum visual satisfaction for your eyes and mind! This is the latest iteration of my formula portal series, boosting it to new stimulating heights! Music by @officialvirtualriot - I heard you like polyrhythms (the ultimate mathematical track describing some of my formulas in audio form)`, /*3*/
  `[HDR10 MAX SPEC] WATCH THIS COSMIC HOLOGRAPHIC FRACTAL UNFOLD ITSELF INSIDE-OUT AS THE BEAUTIFUL COLORS RAMP UP IN DEPTH AND BRIGHTNESS LEVELS WELL PAST TODAY’S HDR LIMITS! OVER A BILLION VIVID HUES AND SPECTRUM EXPLODING IN VISUAL INTENSITY SO HARD YOU’LL SWEAR THESE PHOTONS HAVE MASS!`, /*4*/
  `[HDR 1B COLORS] One of my most popular animations ever JUST GOT A SUPERCHARGED VISUAL REMAKE THAT’LL EJECT THE MOST VIVID ULTRA DYNAMIC RANGE BLINDINGLY BEAUTIFUL PARTICLE PATTERNS YOUR SCREEN HAS EVER BURST FORTH. EVERY MOTH IN THE KNOWN UNIVERSE SHALL FLOCK TOWARDS YOUR SCREEN WITH THE HDR LIMITS IM BREAKING THROUGH WITH THIS ONE!`, /*5*/
  `[HDR] MINIMALIST LINES BUT MAXIMALIST COLORS AND MATHEMATICAL TRANSFORMATIONS THAT ARE BEAUTIFUL TO COOK RETINAS TO! Watch these swirling spirals twist turn and unfold while a billion HDR colors race along them at different speeds creating beautiful shapes and patterns! This one definitely goes hard 🫠 Music by Terrafractyl - fc(z)=z2+c`, /*6*/
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

export const uon_visuals_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const uon_visuals_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const uon_visuals_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const uon_visuals_array_of_posts = [
  ...uon_visuals_images,
  ...uon_visuals_videos
];
