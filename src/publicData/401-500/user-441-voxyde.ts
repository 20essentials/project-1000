import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'voxyde';
const userId = 'c888e3ea-5b42-479d-949e-9c85c9ba6e5f';
const prefixUrl = 'https://dominicnikolai.github.io/project-354/assets/voxyde/';
const followers = 234_832;
const followed = 210;
const profileDescription = `The ultimate training grounds for VFX.`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#sidefx #sidefxhoudini #houdini #houdinifx
`, /*1*/
  `Nuke isn’t just for finishing shots, it’s in fact extremely useful for overall Look-dev. You can push renders way further without constantly re-rendering. Testing lighting, color, and atmosphere becomes fast and flexible, letting you focus on creativity instead of waiting on heavy scene updates. All renders, particles, volumes, destruction passes can be fine-tuned, layered, and balanced directly in comp. This means faster iterations, and more granular control over the final shot. Nuke and compositing is not just the last step in production, I really believe it's part of the whole process.`, /*2*/
  `Lightning Spear - The final update for Ultimate FX Workshop. In this bonus shot we will create an epic lightning spear throwing scene. We'll build and expand on the techniques we learned in the previous modules, but also learn how to create new FX like pulsating smoke, directional smoke and particles and much more. A big part of this shot are the procedural effects driven entirely through noise, without any simulations. We also create a few FX layers directly in nuke through compositing, speeding up the workflow. This update is available for everyone who enrolls now or is currently enrolled. Thank you for all the support!`, /*3*/
  `Simple method to detangle curves by calculating a vector for each point. Extremely useful for procedural modeling.

This setup is part of our newest course Cinematic Environments in Houdini.`, /*4*/
  `Awesome work by Nikifor, one of the first to complete the Ultimate FX Challenge. Creating this entire shot by himself, only referencing the lessons from the main course. Well done!`, /*5*/
  `Galaxy Particles - New Free Houdini course! Another one of my favorite setups to achieve cool looking FX without simulations. Learn how to create particle effects using 100% procedural techniques. Fast, flexible, and ideal for motion graphics or VFX workflows. Perfect for artists looking to expand their procedural toolset.`, /*6*/
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

export const voxyde_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const voxyde_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const voxyde_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const voxyde_array_of_posts = [
  ...voxyde_images,
  ...voxyde_videos
];
