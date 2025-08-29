import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mr_poster_design';
const userId = '';
const prefixUrl = '';
const followers = 99_720;
const followed = 79;
const profileDescription = 'graphic designer (freelancer)';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#visualart #sports #sportsposter #sportslover #rayanmaina001 #graphics #graphicdesigner #posterdesign #posterart #posterdesign #dailyupdates #graphicart #designinspiration #graphicdesigntutorial`, /*1*/
  `#serenawilliams #professional  #tennisstar #tennissport   #sports  #posterart #manipulation  # #sportsposter  #sportslover  #rayanmaina001 #graphics #posterdesign #posterart #posterdesign #dailyupdates #graphicart #designinspiration #graphicdesigntutorial`, /*2*/
  `#martinodegaard #arsenal #norwegian #footballposter #sports #posterart #manipulation #footballer #sportsposter #sportslover #rayanmaina001 #graphics #posterdesign #posterart #posterdesign #dailyupdates #graphicart #designinspiration #graphicdesigntutorial`, /*3*/
  `#carlossainz  #renaultRS17 #formula1 #2018season  #sports  #posterart #manipulation  #formula1car #sportsposter  #sportslover  #rayanmaina001 #graphics #posterdesign #posterart #posterdesign #dailyupdates #graphicart #designinspiration #graphicdesigntutorial`, /*4*/
  `Daily design update DAY #21 100 days poster design challenge Follow @rayanmaina001 for more #lenyyoro #centreback #manchesterunited #footballer #sports #posterart #manipulation #football #sportsposter #sportslover #rayanmaina001 #graphics #posterdesign #posterart #posterdesign #dailyupdates #graphicart #designinspiration #graphicdesigntutorial`, /*5*/
  `#newf1model #2026f1season #sports #posterart #manipulation #football #sportsposter #sportslover #rayanmaina001 #graphics #posterdesign #posterart #posterdesign #dailyupdates #graphicart #designinspiration #graphicdesigntutorial`, /*6*/
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

export const mr_poster_design_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mr_poster_design_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mr_poster_design_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mr_poster_design_array_of_posts = [
  ...mr_poster_design_images,
  ...mr_poster_design_videos
];
