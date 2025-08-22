import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'beitman';
const userId = 'c18e2baf-ccfa-4251-8971-a5dabe453f9f';
const prefixUrl = 'https://dominicnikolai.github.io/project-238/assets/beitman/';
const followers = 69_100;
const followed = 49;
const profileDescription = 'ALL MY EDITS ARE HERE';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 12;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  "The beauty of Alice in Wonderland #aliceinwonderland #aliceinwonderlandedit #aesthetic #aesthetics #fyp #viral #edit #4k",
  "The beauty of Princess and the Frog #princessandthefrog #princessandthefrogedit #theprincessandthefrog #disneyedit #cartoon #edit #fyp #aesthetic #aesthetics",
  "The beauty of Batman #batman #batmanedit #joker #jokeredit #edit #fyp #aesthetic #aesthetics",
  "🏴‍☠️ #piratesofthecaribbean #piratesofthecaribbeanedit #jacksparrow #edit #fyp #aesthetic #aesthetics",
  "The beauty of Inside Out #insideout #insideoutedit #cartoon #edit #fyp #aesthetics #aesthetic",
  "My favorite trilogy #hobbit #hobbitedit #lordoftherings #lordoftheringsedit #fyp #edit #aesthetics #aesthetic",
  "The beauty of Kung fu Panda #kungfupanda #kungfupandaedit #cartoon #edit #aesthetic #fyp #aesthetics",
  "The beauty of HTTYD #howtotrainyourdragon #howtotrainyourdragonedit #httyd #httydedit #cartoon #aesthetic #fyp #edit #aesthetics",
  "GOT #gameofthrones #gameofthronesedit #got #edit #fyp #aesthetic #aesthetics",
  "The beauty of Cars #cars #carsedit #cartoon #aesthetic #aesthetics #edit #fyp",
  "#spiderman #spidermanedit #edit #aesthetic #aesthetics #fyp",
  "My cc and quality settings in my bio #harrypotter #harrypotteredit #edit #aesthetic #aesthetics #fyp"

];
const arrayDescriptionOfImages = []

export const beitman_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const beitman_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const beitman_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const beitman_array_of_posts = [
  ...beitman_images,
  ...beitman_videos
];
