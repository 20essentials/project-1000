import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'graphicdesignpark';
const userId = '';
const prefixUrl = '';
const followers = 1_334_325;
const followed = 50;
const profileDescription = `Logo designer | Visual identity`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Sketch -> Logo, using illustrator . 👉Are you looking to create impactful branding for your business ?? Dm/Email to get a quote . . Follow us to learn logo design . . #logoprocess #logovideo #logotutorial #logolearn #learnlogo #brandingstudio #brandingdesigner #visualidentitydesign #newbusinessowner #logoforbusiness #illustratortutorial #logodesignersclub #creativelogo #logodesigner`, /*1*/
  `#luxurycarrental #carrentalbrand #luxurycarrentallogo #brandingforstartups #logodesignersclub #timelessdesigns #logogrid #automotivelogo #branddesigner #logotutorials #logomark #logoconcept #creativelogo #logoforbusiness #brandingstudio`, /*2*/
  `#branding #brandsesigner #logocreator #creativelogo #spicysaucebranding #arabicbrand #logoforbusiness #businesslogo #logodaily #logodesinger #visualidentitydesign #packagingdesigner`, /*3*/
  `#OrcaLogo #ConservationDesign #MinimalLogo #BrandIdentity #LogoDesign #GraphicDesignPark #PurposeDrivenDesign #SustainableBranding #logoforbusiness #creativelogo #logofolio #logomark #logoconcept #logotutorial #logoprocess`, /*4*/
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

export const graphicdesignpark_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const graphicdesignpark_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const graphicdesignpark_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const graphicdesignpark_array_of_posts = [
  ...graphicdesignpark_images,
  ...graphicdesignpark_videos
];
