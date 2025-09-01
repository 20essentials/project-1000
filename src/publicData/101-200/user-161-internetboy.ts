import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'internetboy';
const userId = '';
const prefixUrl = '';
const followers = 379_234;
const followed = 50;
const profileDescription = 'mp3/fbx/png allat (＞。☆)';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Blender 3d | How to Model a basic Shirt 😤🌎🧩👕 This might not seem like it at first but it’s a really cool way to get a good quality shirt, it’s not too power intensive on the pc and it’s easy to UV wrap as well, I can cover that in another video ! Enjoy 🤝❗️ #blender3d #blenderrender #blenderart #blendertutorial #blenderartist #blendereevee #blendercommunity #blenderanimation #b3d #fyp`, /*1*/
  `Blender 3d | How to Make Fur 😤🌎🧩

The particle system can seem really confusing but you just have to start as simple as possible, it is heavy on pc so adjust the settings to whatever doesn’t make your pc explode 💀🤝❗️

#blender3d #blendercommunity #blenderrender #blenderart #blendercycles #blenderartist #blenderanimation #blenderguru #blendertutorial #b3d #fyp #internetboy #blendereevee`, /*2*/
  `Blender 3d | Animated Tree 😤🌎🧩🎄 This was a cool trick, it’s actually a built in add on too. Blender has come so far, and honestly there’s so many things we try to do manually that they make really simple for us. 🤝❗️ #blender3d #blenderrender #blenderart #blendertutorial #blenderartist #blendereevee #blenderanimation #blendercommunity`, /*3*/
  `Blender 3d | Quick Liquid Effect 😤🌎🧩🍩 Who would’ve thought the donut tutorial was this easy? Jk! Also don’t just think of this as a way to make icing on a donut, think of other ways you can incorporate this into your workflow, practice it until you can think of other ways if you need to 🤝❗️ #blender3d #blenderrender #blenderart #blendertutorial #blenderartist #blendereevee #blenderanimation #blendercommunity`, /*4*/
  `Blender 3d | Compositing Tab 😤🌎🧩

DONT FORGET TO CLICK USE NODES ! I forgot to mention that. This tab is where you’ll do your post production editing, getting that final look that you want, this is a good way to get your renders to start to pop 🤝❗️

#blender3d #blenderrender #blenderart #blendertutorial #blenderartist #blendereevee #blenderanimation #blendercommunity`, /*5*/
  `Blender 3d | Make Camera Follow Path 😤🌎🧩🎥 Main important things I want you to take away are the camera constraints, track to, and follow path, notice exactly what these do and how you can use them in other scenario’s. #blender3d #blenderrender #blenderart #blendertutorial #blenderartist #blendereevee #blenderanimation #blendercommunity #fyp #b3d`, /*6*/
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

export const internetboy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const internetboy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const internetboy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const internetboy_array_of_posts = [
  ...internetboy_images,
  ...internetboy_videos
];
