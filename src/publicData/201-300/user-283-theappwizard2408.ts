import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'theappwizard2408';
const userId = '';
const prefixUrl = '';
const followers = 7_923_322;
const followed = 444;
const profileDescription = `📱 SwiftUI | Flutter | Python | AI🎨`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#programming #tech #apple #coding #xcode #iosdesign #iosdevelopement #appdeveloper #appdevelopment #developerlife #programminglife #swiftlang #ui #ux #appdesign #uidesign #code #coder #swiftdev #swiftdeveloper #microinteractions #theappwizard #uidesigner #flutter`, /*1*/
  `#swiftui #swift #mobiledeveloper #ios #iosdeveloper #dev #programming #tech #apple #coding #xcode #iosdesign #iosdevelopment #appdeveloper #appdevelopment #flutterdeveloper #flutter #swiftlang #ui #ux #appdesign #uidesign #code #coder #swiftdev #swiftdeveloper #microinteractions #theappwizard #uidesigner #uxdesigner`, /*2*/
  `#swiftui #swift #mobiledeveloper #ios #iosdeveloper #dev #programming #tech #apple #coding #xcode #iosdesign #iosdevelopment #appdeveloper #appdevelopment #developerlife #programminglife #swiftlang #ui #ux #appdesign #uidesign #code #coder #swiftdev #swiftdeveloper #microinteractions #theappwizard #uidesigner #uxdesigner`, /*3*/
  `#swiftui #swift #mobiledeveloper #ios #iosdeveloper #dev #programming #tech #apple #coding #xcode #iosdesign #iosdevelopment #appdeveloper #appdevelopment #developerlife #programminglife #swiftlang #ui #ux #appdesign #uidesign #code #coder #swiftdev #swiftdeveloper #microinteractions #theappwizard #uidesigner #uxdesigner`, /*4*/
  `#swiftui #swift #mobiledeveloper #ios #iosdeveloper #dev #programming #tech #apple #coding #xcode #iosdesign #iosdevelopment #appdeveloper #appdevelopment #developerlife #programminglife #swiftlang #ui #ux #appdesign #uidesign #code #coder #swiftdev #swiftdeveloper #microinteractions #theappwizard #uidesigner #uxdesigner`, /*5*/
  `. #swiftui #swift #mobiledeveloper #ios #iosdeveloper #dev #programming #tech #apple #coding #xcode #iosdesign #iosdevelopment #appdeveloper #appdevelopment #developerlife #programminglife #swiftlang #ui #ux #appdesign #uidesign #code #coder #swiftdev #swiftdeveloper #microinteractions #theappwizard #uidesigner #uxdesigner`, /*6*/
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

export const theappwizard2408_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const theappwizard2408_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const theappwizard2408_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const theappwizard2408_array_of_posts = [
  ...theappwizard2408_images,
  ...theappwizard2408_videos
];
