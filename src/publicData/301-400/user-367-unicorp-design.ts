import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'unicorp_design';
const userId = '';
const prefixUrl = '';
const followers = 342_435;
const followed = 50;
const profileDescription = `🚀 Empowering designers to build full websites
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` #animation #webdesigner #figmadesign #figmatips #website #marvel #marvelrivals #gaming #uxdesign #uidesign #uiux #uitrends #webdesignertips #websitedesigner #designtips #battle #uiinspiration #motion #websites`, /*1*/
  `#webdesign #figma #figmatutorial #animation #webdesigner #figmadesign #figmatips #website #gtavi #gta #uxdesign #uidesign #uiux #uitrends #webdesignertips #websitedesigner #designtips #behindthescenes #uiinspiration #motion #websites`, /*2*/
  `#webdesign #figma #figmatutorial #animation #webdesigner #figmadesign #figmatips #website #valorant #riot #fps #riotgames #uxdesign #uidesign #uiux #uitrends #webdesignertips #websitedesigner #designtips #design #uiinspiration #motion #websites`, /*3*/
  `#posterdesign #figma #figmatutorial #animation #graphicdesigner #figmadesign #figmatips #posters #marathon #bungie #gaming #uxdesign #uidesign #uiux #uitrends #webdesignertips #websitedesigner #designtips #design #uiinspiration #motion #graphicdesign`, /*4*/
  `Want some crazy animations like this on your website ? DM us 😎 Images generated with Midjourney. Follow for more. . #webdesign #figma #figmatutorial #animation #webdesigner #figmadesign #figmatips #website #balenciaga #fashion #clothing #ai #midjourney #uxdesign #uidesign #uiux #uitrends #webdesignertips #websitedesigner #designtips #design #uiinspiration #motion #websites

`, /*5*/
  `#webdesign #figma #figmatutorial #animation #webdesigner #figmadesign #figmatips #website #nike #backbag #evangelion #midjourney #ai #uxdesign #uidesign #uiux #uitrends #webdesignertips #websitedesigner #designtips #behindthescenes #uiinspiration #motion #websites`, /*6*/
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

export const unicorp_design_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const unicorp_design_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const unicorp_design_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const unicorp_design_array_of_posts = [
  ...unicorp_design_images,
  ...unicorp_design_videos
];
