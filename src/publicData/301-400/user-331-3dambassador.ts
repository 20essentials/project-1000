import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ambassador3d';
const userId = 'ccbc0606-fbb7-4836-b192-34dea5601880';
const prefixUrl = 'https://dominicnikolai.github.io/project-341/assets/3dambassador/';
const followers = 333_989;
const followed = 160;
const profileDescription = `#blender`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `How much has Blender grown? If you ask me, a lot. And it’s still growing. Blender used to be “that free open-source tool you mess around with for fun" to one of the most powerful 3D softwares out there. It’s not just popular with indie artists anymore, but also big studios and major productions are using it too. Movies & shows made with Blender: Flow (entirely in Blender), Maya and the Three, Next Gen, Love, Death & Robots and Game studios are also using Blender: Ubisoft, Epic Games, Activision Blizzard, CD Projekt RED… And now, with Blender for iPad even more people will jump in. Companies like Wacom, Nvidia, Apple, Epic, AMD, Intel, Adobe, are supporting it too which honestly says a lot. Blender isn’t that “cool little hobby software” anymore. We’re way past that. Blender nowadays isn’t another 3D software, no, Blender is THE 3D software. For beginners, freelancers, students, hobbyists, indie studios, big studios. For everyone. Blender’s mission to “Get the world’s best 3D CG technology in the hands of artists as free/open-source software” is closer than ever. Let's go Blender! Let's go Open Source! UAAAAAGHHHH!!! 🔥🥇 #blender #3d`, /*1*/
  `#blender #b3d #opensource #flow`, /*2*/
  `Huge win for 3D artists who love to make NPR stylized rendering!!! Dillongoo Studios, a studio that specializes in NPR animation in Blender and has worked for clients like Genshin Impact and Blizzard, has decided to take the step and start contributing to the native code of Blender. Before that, they used their own engine called "Goo Engine," based on Blender code. Now, thanks to the funding from Blender and their patrons, they will be able to contribute to the code and the overall ecosystem of Blender. For more information, check out the video of "Professor Goo," where he explains in detail.`, /*3*/
  `Why do we delete the cube only to create another one immediately? A mystery of the universe, I guess`, /*4*/
  `It's not that bad... But scary at first 👻 #3d #blender #maya

`, /*5*/
  `Being a digital artist is exhausting`, /*6*/
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

export const ambassador3d_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ambassador3d_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ambassador3d_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ambassador3d_array_of_posts = [
  ...ambassador3d_images,
  ...ambassador3d_videos
];
