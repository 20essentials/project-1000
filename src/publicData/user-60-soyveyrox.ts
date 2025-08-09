import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'soyveyrox';
const userId = '';
const prefixUrl = '';
const followers = 137_720;
const followed = 23;
const profileDescription = 'Nothing ✅';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 8;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  "Real 🫱🏻‍🫲🏽 . . . #real #bros #frases #viralreels #reels #viral #instagram #reelsinstagram #fyp #corecore #viralvideos #mejoresamigos #bro",
  "real hah . . . . #frases #viralreels #reels #viral #instagram #reelsinstagram #fyp #corecore #real #viralvideos #feed",
  "Real . . . . #frases #viralreels #reels #viral #instagram #reelsinstagram #fyp #corecore #real #viralvideos",
  "haha . . . . #frases #viralreels #reels #viral #instagram #reelsinstagram #fyp #corecore #real #viralvideos #fype #soyveyrox",
  "real . . . #frases #viralreels #reels #viral #instagram #reelsinstagram #fyp #corecore #real #viralvideos #fype",
  "real😂 . . . #frases #viralreels #reels #viral #instagram #reelsinstagram #fyp #corecore #real #viralvideos #chisme",
  "real . . . . #frases #viralreels #reels #viral #instagram #reelsinstagram #fyp #corecore #real #motivacion #viralvideos #motivacional"
];
const arrayDescriptionOfImages = []

export const soyveyrox_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const soyveyrox_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const soyveyrox_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const soyveyrox_array_of_posts = [
  ...soyveyrox_images,
  ...soyveyrox_videos
];
