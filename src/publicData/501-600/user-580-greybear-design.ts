import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'greybear_design';
const userId = '';
const prefixUrl = '';
const followers = 495_832;
const followed = 343;
const profileDescription = `random prototypes
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `keep trying. again and again.

#engineering #maker #buildinpublic #electronics
#diyprojects #arduino #raspberrypi #productdesign #techcreator
#creatorspace #creativeprocess #hardware #prototyping
#innovation #diytech #fyp`, /*1*/
  `What if you worked on the project you keep putting off?

#buildinpublic #maker #engineering #productdesign
#creativeprocess #diytech #tech #innovation #prototyping
#keepbuilding #growthmindset #startbuilding #focusmode #fyp #foryoupage`, /*2*/
  `Things are still breaking, but at least I'm starting to know why now.

#finallystarted #buildinpublic #juststart #maker #diytech
#creativeprocess #engineeringlife #productdesign #focusmode
#technology #electronics #growthmindset #motivation #keepbuilding
#fyp`, /*3*/
  `Sometimes starting is harder than finishing. #finallystarted #buildinpublic #juststart #maker #diytech #creativeprocess #engineeringlife #productdesign #focusmode #tech #electronics #growthmindset #motivation #keepbuilding #fyp`, /*4*/
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

export const greybear_design_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const greybear_design_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const greybear_design_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const greybear_design_array_of_posts = [
  ...greybear_design_images,
  ...greybear_design_videos
];
