import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'z_artsync';
const userId = '31b92a47-ca83-4a3b-969b-a4a66872c48d';
const prefixUrl = 'https://dominicnikolai.github.io/project-344/assets/z-artsync/';
const followers = 29_322;
const followed = 108;
const profileDescription = `Explainer Animations for SaaS & Startups`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#explorepage #motiongraphics #aftereffects #aftereffectstutorial #mographedit #edit #edits #motiondesign #aftereffectsanimation #tutorial #motiondesigner #editing #aftereffectsindonesia #premierepro #editingtutorial #premiereprotips #adobe #adobeaftereffects #animationart #typography #mixedmedia #illustrator #gfx #design #graphicdesign #motiongraphicscollective #motiongraphicsanimation #editingtutorial #ae #mograph #mographedit`, /*1*/
  `#explorepage #motiongraphics #aftereffects #aftereffectstutorial #mographedit #edit #edits #motiondesign #aftereffectsanimation #tutorial #motiondesigner #editing #aftereffectsindonesia #premierepro #editingtutorial #premiereprotips #adobe #adobeaftereffects #animationart #typography #mixedmedia #illustrator #gfx #design #graphicdesign #motiongraphicscollective #motiongraphicsanimation #editingtutorial #ae #mograph #mographedit`, /*2*/
  `Last few days were really hectic so I am now sharing Day 10 of learning Motion design using after effect Share your thoughts 👇 . . . #explorepage #motiongraphics #aftereffects #aftereffectstutorial #mographedit #edit #edits #motiondesign #aftereffectsanimation #tutorial #motiondesigner #editing #aftereffectsindonesia #premierepro #editingtutorial #premiereprotips #adobe #adobeaftereffects #animationart #typography #mixedmedia #illustrator #gfx #design #graphicdesign #motiongraphicscollective #motiongraphicsanimation #editingtutorial #ae #mograph #mographedit

`, /*3*/
  `#c4d #Cinema4D #productanimation #cgianimation #cgi #viewport #beforeandafter #marketingdigital #ecommerce #ecommercebusiness #redshift #RedshiftRender #animation #visualization`, /*4*/
  `#RedshiftRender #animation #visualization`, /*5*/
  `#Blender3D #3DArt #CreativeJourney #DigitalArtist #MadeWithBlender #BlenderCommunity #GraphicDesign #3DAnimation #ArtInspiration #DesignMagic #LearnBlender #CreatorsOnInstagram`, /*6*/
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

export const z_artsync_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const z_artsync_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const z_artsync_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const z_artsync_array_of_posts = [
  ...z_artsync_images,
  ...z_artsync_videos
];
