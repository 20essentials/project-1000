import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'zixilceyy';
const userId = '90d7392d-f1c7-424f-b25c-bc5253ac63bc';
const prefixUrl = 'https://dominicnikolai.github.io/project-326/assets/zixilceyy/';
const followers = 62_720;
const followed = 73;
const profileDescription = `🎬 3D/CGI/VFX Artist`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `When the beat drops, the render begins 🎵 White model vs Final Render – which one hits harder? 📩DM FOR WORK #3DRender #ModelingAndRendering #DailyPost #ʀᴇɴᴅᴇʀɪɴɢ`, /*1*/
  `#MadeInBlender #DigitalCreation #ArtistLife #AnimationArt #blender3d`, /*2*/
  `Baking little fish biscuits in Blender 🐟✨ From clay-like base to final render here’s a glimpse into my animation workflow. #FromBlankToRender Hashtags: #3DAnimation #BlenderArt #DigitalCreation #DesignProcess #CGIartist`, /*3*/
  `Heather in her true vibe ✨🕯️💉
#HeatherVibes #DarkAesthetic #CandleTransformation #NurseMood`, /*4*/
  `#SelfMadeAnimation #Anime #3D #RenderVsClay #HealingVibes #WallpaperArt #AnimeEdit #LoveInFrames #everyframeislove`, /*5*/
  `Bringing a Chinese Demon Tale to Life Full Blender Animation PV in the Works! Hashtags: #OriginalAnimation #Blender3D #3DAnimation #AnimeStyle #OCArt`, /*6*/
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

export const zixilceyy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const zixilceyy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const zixilceyy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const zixilceyy_array_of_posts = [
  ...zixilceyy_images,
  ...zixilceyy_videos
];
