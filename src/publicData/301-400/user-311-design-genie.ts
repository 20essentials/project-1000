import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'design_genie';
const userId = '';
const prefixUrl = '';
const followers = 898_896;
const followed = 50;
const profileDescription = `Brand Identity Designer 🎨`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#LogoReveal
#BrandIdentity
#AcaiBrand
#TropicalBranding
#DesignInspo
#MinimalLogo
#CreativeStudio
#illustrationlogo`, /*1*/
  `#BrandReveal #VisualIdentity #LogoDesign #RestaurantBranding #FoodBranding #StartupBranding #BrandIdentity
#USABusiness #EntrepreneurMindset #CreativeBranding #DesignStudio #BrandingExpert #MinimalBranding
#DonutLover #Entrepreneurs`, /*2*/
  `#LogoDesign #BrandingWithFlavor #CreativeDesign #DesignProcess #VisualBranding #SweetDesigns #DonutLogo #BoldBranding #EyeCandyDesign #brandidentity`, /*3*/
  `#LogoDesign #BehindTheLogo #DesignProcess #BrandDesign #LogoInspiration #BTSDesign #ChocolateBranding #GraphicDesignReel #CreativeProcess`, /*4*/
  `#graphicdesign #Playboy #BunnyLogo #VectorIllustration #IconicLogos #RetroDesign #DesignInspiration #CreativeThinking #PopCulture #Branding`, /*5*/
  `#graphicdesign #Spotify #MusicDesign #SoundWaves #VectorArt #BrandingPerfection #IllustrationProcess #CreativeDesign #SocialMediaBranding #branding`, /*6*/
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

export const design_genie_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const design_genie_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const design_genie_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const design_genie_array_of_posts = [
  ...design_genie_images,
  ...design_genie_videos
];
