import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'dreamfall';
const userId = '4a64946b-f768-4d96-b173-4bb8fb3e6467';
const prefixUrl = 'https://dominicnikolai.github.io/project-249/assets/dreamfall/';
const followers = 241_720;
const followed = 72;
const profileDescription = 'AI Art';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 16;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  "Jelly crystal cake🍰 Want to learn how I make my AI visuals look this real? Comment “guide” and I’ll send you my FREE blueprint with prompts, lighting setups, and more! Animated with polloai #veo3 #polloai #Flux #klingai",


  "Diamond butterflies🦋 Interested in creating your own visuals? Comment “learn” and I’ll send you a link to my tutorials, tools, and behind-the-scenes process to help you get started. 🎨✨ Animated with klingai #midjourneyartwork #butterfly #nature #beauty #ai #aiart #aiartcommunity #midjourney #aicommunity #aiartwork",

  "Want to learn how I make my AI visuals look this real? Comment “guide” and I’ll send you my FREE blueprint with prompts, lighting setups, and more!",

  "Jelly Crystal Cake part 2 🍰 Want to learn how I make my AI visuals look this real? Comment “guide” and I’ll send you my FREE blueprint with prompts, lighting setups, and more! Animated with klingai #veo3 #midjourney #Flux #klingai",

  "Diamond butterflies🦋 Animated with polloai Want to learn how I make my AI visuals look this real? Comment “guide” and I’ll send you my FREE blueprint with prompts, lighting setups, and more! #veo3 #polloai #Flux #klingai",

  "Diamond-forged direwolves.🐺 Animated with polloai Your all-in-one platform for AI image & video generation. Explore KlingAI 2.0, Google Veo2, Imagen3, and more. Tried it today—loved the experience. #midjourney #ai #aiartcommunity #aiart #midjourneyart #aiartwork #digitalar...",

  "Butterflies in The Alps🏔️ Animated with klingai Want to learn how I make my AI visuals look this real? Comment “guide” and I’ll send you my FREE blueprint with prompts, lighting setups, and more! #midjourney #aiart #aiartcommunity #midjourneyart #aiartwork #conceptart #aicommunity #alps #nature #ai",

  "Continuation of my diamond collection💎 Animated with klingai Want to learn how I make my AI visuals look this real? Comment “guide” and I’ll send you my FREE blueprint with prompts, lighting setups, and more! #midjourney #aiart #aiartcommunity #midjourneyart #conceptart #aicommunity #...",

  "Flower Fashion Show🌹 What collection should I create next?🤔 #midjourney #aiart #klingai #conceptart #midjourneyart #fashion #fashionstyle #runway #model #dress #aiartcommunity #aiartwork #artist #aiartwork #aiartist #aidesign",

  "✨ #artist #midjourney #aiartcommunity #beauty #aesthetic #conceptart #midjourneyart #aiartwork #aidesign #digitalart #flowers #dreamfallart",

  "Futuristic villa in Seychelles🐚 #midjourney #klingai #aiart #villa #luxurydesign #villadesign #conceptart #aicommunity #housedesign #house #seychelles",

  "Glass fruit🥝 Animated with klingai #midjourney #klingai #aiart #ai #artistsoninstagram #conceptart #art #aiartcommunity #design",

  "Diamond Snakes💎 which one is your favorite? Interested in creating your own visuals? Comment “learn” and I’ll send you a link to my tutorials, tools, and behind-the-scenes process to help you get started. 🎨✨ #kling #aicommunity #snake #diamonds #midjourney #aiart #concert #aiartcommunity #fantas...",

  "It doesn’t bloom. It lingers. EISÉ — worn like space. This fragrance ad was created entirely with AI, from concept to visuals to motion. No cameras. No models. No physical set. Every scene was designed and generated using AI tools to explore atmosphere, light, and movement in a controlled digital s...",

  "Good evening ✨Good vibes ✨ I wish everyone a pleasant evening and a good rest!💖 Created with polloai #aiart #aivideo #flowers#blossom #relax #goodvibes #animation #basedlabsai #polloai #nature",

  "I no longer chase after elusive salvation",
];
const arrayDescriptionOfImages = []

export const dreamfall_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const dreamfall_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const dreamfall_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const dreamfall_array_of_posts = [
  ...dreamfall_images,
  ...dreamfall_videos
];
