import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pragyamuthuraman';
const userId = '';
const prefixUrl = '';
const followers = 872_892;
const followed = 191;
const profileDescription = `Brand Strategist | Developer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Oh we did! Wanna know how? First of all my team is huge with their own way of creativity, we usually set a clear pipeline from ideation to deployment like figma — blender/threejs — code 🔺Using reusable components, shaders, or animations across projects saved time. 🔺Designers and developers worked in tandem, not sequentially. 🔺Three.js, Spline, or React Three Fiber were used — all of which speed up complex 3D interaction. 🔺GLTF exports & Blender presets helped rapidly render scenes for web. 🔺Daily standups, strict deadlines, and preplanned sprints ensured no phase took longer than it should. And ofcourse we all have the same vision ✨ #webdesigncompany #ticglobalservices #websitedevelopment #websiteinspiration #websitedesigner #website #uiuxdesign`, /*1*/
  `All the websites we coded and designed this week ✨
#websitedesigner #websitedevelopment #uiuxdesign #websitebuilder #deadpool #websitecompany #websiteinspiration`, /*2*/
  `Okay, first of all you need to accept the fact that 3D animated websites are hard and complex to develop. Its not a figma design to be delivered in a single day. It takes more time more complex code. However if your looking to use tools and platforms, it can be simplified even for beginners. 1. Use Web Builders with 3D Support Some website builders support 3D elements and animations without needing deep coding knowledge: Webflow: Offers an intuitive drag-and-drop interface and supports 3D transformations and animations. You can import 3D models and use Webflow’s interactions to animate them. Semplice: A portfolio-focused platform that allows for 3D animations and high levels of customization. Framer: Another easy-to-use website builder with support for complex animations and 3D effects. 2. Use 3D Web Editors Web-based 3D editors let you design, animate, and export 3D objects for the web: Spline: An easy-to-use tool that allows you to create 3D objects and interactive animations. You can export your work directly as code for websites. Tinkercad: A beginner-friendly 3D modeling tool that lets you create basic 3D objects and export them for use on websites. 3.3D Tools for Specific Elements If you just want to integrate a few 3D elements into your website, you can use: Lottie: Allows you to use lightweight animations (JSON-based) created in After Effects. These can include pseudo-3D effects and are very easy to integrate into websites. Canva: Offers some 3D graphic elements that you can use for banners or image-based 3D effects. #websitedevelopment #websitecompany #websiteinspiration #websitedesigner

`, /*3*/
  `#website #theinternetcompany #webdesigncompany #uiuxdesign #digitalmarketing`, /*4*/
  `Well, it’s a strategic luxury that becomes a necessity in specific use cases. 3-D is justified when it directly drives business outcomes, you can’t achieve as well as with 2D. Necessity : Product understanding needs spatial context: furniture, architecture, interiors, hardware, automotive, wearables, machinery, medical devices. (Exploded views, fit/scale, assembly, configurators.) High-stakes visualization: real-estate walkthroughs, factory layouts, simulation/demo of complex Saas (cybersecurity, robotics, CAD/PLM), education and training. Mass customization/configurators: real-time materials, colors, parts, pricing, and quote generation. Portfolio-first creative brands: studios, artists, gaming, VFX-where the medium is the message. Luxury : Content-led sites: blogs, documentation, news, B2B brochureware, landing pages where clarity and SEO are primary. Audience on low-end devices or spotty networks. If most traffic is low-GPU mobiles, load time and battery drain can hurt KPIs.

`, /*5*/
  `all our websites are not curated in a single day. It’s a huge team effort.`, /*6*/
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

export const pragyamuthuraman_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pragyamuthuraman_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pragyamuthuraman_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pragyamuthuraman_array_of_posts = [
  ...pragyamuthuraman_images,
  ...pragyamuthuraman_videos
];
