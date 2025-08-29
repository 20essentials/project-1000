import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'navanimator';
const userId = 'e3e7ed8c-59f8-47f9-ac5e-a877517aaf15';
const prefixUrl = 'https://dominicnikolai.github.io/project-298/assets/navanimator/';
const followers = 47_892;
const followed = 50;
const profileDescription = 'Professor and Animator';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `This Mamuna tribe song has been stuck in my head for days, so I thought I should remix it with my muscle setup work. 🙂 I know many of you kind people are waiting for this rig, and rigging to muscle course, Its all done and 80 Level is on final steps on packaging and releasing it. It should be out in a week or two. 🙂 Creature Asset from one and only `, /*1*/
  `I've been wracking my brain for a while trying to nail this wing setup. After many failed attempts, I finally created this design that's simple yet advanced. Here's a first look! Going to do some further testing next weekend before releasing it with new courses.`, /*2*/
  `October newsletter/video is out, Here are some additions, announcements and the amazing creations that were made using Creature Station assets, more details on website: creaturestation.com We want to say thanks to the creators who took out time to make their creations. their profile details are on this page: creaturestation.com/ news Thank you Philippe MEDINA , Vadim Lenskiy , Nina Fischer , siddhartha kuri , Gaurang Dighe , Gregory Bergot , Ricardo Leon , and Arbaz Malik`, /*3*/
  `I'm excited to share my tutorials that I was preparing since January. It took me 3 years to prepare my brain with correct Information to make these. Please check them out on my website: creaturestation.com I will be posting more free tutorials on my YouTube channel to show how to use these cycles for complex body mechanics. Creature Station is a new website, Please do let me know if I can improve it in any way, Thanks :)`, /*4*/
  `Are you guys watching new Goosebumps TV show?, I was Fortunate to contribute in the creation of this monster. Here are some of my Anims 🙂.`, /*5*/
  `Ares de Nanke 🙂. Spent amazing week with my wife's family and explored beautiful city of Churachandpur. I wish we had more time to explore and spend time with family. You need at least couple months to experience Manipur. It was a perfect way for me to celebrate 12th meeting anniversary with my wife.

`, /*6*/
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

export const navanimator_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const navanimator_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const navanimator_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const navanimator_array_of_posts = [
  ...navanimator_images,
  ...navanimator_videos
];
