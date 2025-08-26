import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'flip_happygallery';
const userId = '34d88e1e-d2ed-4fa0-b0a4-8d2177470951';
const prefixUrl = 'https://dominicnikolai.github.io/project-289/assets/fl1p-happygallery/';
const followers = 178_790;
const followed = 120;
const profileDescription = 'Hello';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `From Drawings to Screen : Beauty And The Beast #animation by the master James Baxter ♥️ #AnimationMagic #DisneyArt #AnimationProcess #BehindTheScenes #DisneyAnimation #ClassicAnimation #HandDrawnAnimation #AnimationInspiration #CharacterDesign #DisneyClassics #VintageDisney #2DAnimation #AnimationHistory #ArtOfAnimation #FilmAnimation #AnimationLegend #CharacterAnimation #WaltDisney #AnimationArt #animationdrawing #behindthescenes #artoftheday #beautyandthebeast #jamesbaxter #flipgallery #waltdisney #animationart #animationdrawing
`, /*1*/
  `From Drawings to Screen : The Lion King Scar #animation by Andreas Deja #AnimationMagic #DisneyArt #AnimationProcess #BehindTheScenes #DisneyAnimation #ClassicAnimation #HandDrawnAnimation #AnimationInspiration #CharacterDesign #DisneyClassics #VintageDisney #2DAnimation #AnimationHistory #ArtOfAnimation #FilmAnimation #AnimationLegend #CharacterAnimation #WaltDisney #AnimationArt #animationdrawing #behindthescenes #artoftheday #animationart #waltdisney #andreasdeja #flipgallery`, /*2*/
  `From Drawings to Screen : Tarzan #animation breakdown ♥️ #AnimationMagic #DisneyArt #AnimationProcess #BehindTheScenes #DisneyAnimation #ClassicAnimation #HandDrawnAnimation #AnimationInspiration #CharacterDesign #DisneyClassics #VintageDisney #2DAnimation #AnimationHistory #ArtOfAnimation #FilmAnimation #AnimationLegend #CharacterAnimation #WaltDisney #AnimationArt #animationdrawing #behindthescenes #artoftheday #instart #tarzan #tarzandisney #jane #flipgallery`, /*3*/
  `From Drawings to Screen : Shere Khan #animation by the master Milt Kahl ♥️ #AnimationMagic #DisneyArt #MiltKahl #ShereKhan #JungleBook #AnimationProcess #BehindTheScenes #DisneyAnimation #ClassicAnimation #HandDrawnAnimation #AnimationInspiration #CharacterDesign #DisneyClassics #VintageDisney #2DAnimation #AnimationHistory #ArtOfAnimation #FilmAnimation #AnimationLegend #CharacterAnimation #WaltDisney #AnimationArt #animationdrawing #behindthescenes #artoftheday #instart`, /*4*/
  `Wonderful Animation breakdown from The Prince of Egypt (DreamWorks, 1998) #AnimationMagic #AnimationProcess #BehindTheScenes #ClassicAnimation #HandDrawnAnimation #AnimationInspiration #CharacterDesign #2DAnimation #AnimationHistory #ArtOfAnimation #FilmAnimation #AnimationLegend #CharacterAnimation #AnimationArt #animationdrawing #behindthescenes #artoftheday #instart #animationartist #animationartwork #animation #animation2d #dreamworks #princeofegypt`, /*5*/
  `From Drawings to Screen : Spirit #animation by the master James Baxter ♥️ #spirit #spiritstallionofthecimarron #dreamworks #dreamworksanimation #animation #animationmagic #animationart #animationartist #jamesbaxter #animationprocess #behindthescenes #classicanimation #characterdesign #animation2d #characteranimation #animationdrawing #artgallery #filmmaking #animationfan #conceptart #animator #animationstudio`, /*6*/
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

export const flip_happygallery_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const flip_happygallery_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const flip_happygallery_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const flip_happygallery_array_of_posts = [
  ...flip_happygallery_images,
  ...flip_happygallery_videos
];
