import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ximu_cat';
const userId = '';
const prefixUrl = '';
const followers = 461_720;
const followed = 920;
const profileDescription = 'Record a beautiful moment📸';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 10;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  "手欠欠的小狸花😼 （📹from：Caf） #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos",
  "橘老板 我的手艺还可以吧🍊😻 #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos",
  "我家可爱的大白馒头😻 #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos",
  "天下第一最最好🥰😻 #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos",
  "人，你好，咪有点慌 #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos",
  "来自听泉猫的肯定 #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos",
  "悠闲的咪😼惬意的生活 #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos",
  "吃蛋糕🍰😻 #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos",
  "人，黑咪帮你驱走厄运🐈‍⬛🖤 #猫咪 #可爱 #萌宠 #cat #catlover #catlife #catlovers #貓 #cats #catvideos"
];
const arrayDescriptionOfImages = []

export const ximu_cat_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ximu_cat_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ximu_cat_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const ximu_cat_array_of_posts = [
  ...ximu_cat_images,
  ...ximu_cat_videos
];
