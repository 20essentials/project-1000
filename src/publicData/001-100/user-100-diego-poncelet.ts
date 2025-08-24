import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'diego_poncelet';
const userId = '92672560-018d-4fca-abfe-f966559431f0';
const prefixUrl = 'https://dominicnikolai.github.io/project-288/assets/di3go-ponc3lete/';
const followers = 467_720;
const followed = 236;
const profileDescription = '2x World Champion & Filmmaker';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `almost made it Giving it everything and more at over 100 km/h. I feel like I’ve reached a new gear and I’m excited to get more consistent in it - I’m heavier than ever and yet more precise, although as you can tell it’s getting harder to slow down haha. Will be posting the make soon, but in the meantime, enjoy this one. Road was closed of course`, /*1*/
  `pushing to 100 km/h at dawn Yesterday we got up at 4:00am to skate one of my favourite spots ever and film it for the first time. Still in disbelief at the light we got, which was not what we expected due to the clouds and yet it felt like another planet. This section right here is real intense with speeds brushing 100 km/h and all you can see is the guardrail coming up, followed by a beautiful hairpin. My trip over here is coming to an end and I’m excited to share all of the mad footage we captured 🤝 Road is closed, thank you to the homies helping with safety.`, /*2*/
  `fastest I’ve ever gone without getting into tuck When we made it to the U.S., we kept hearing about a spot named silver surfer that no one had tried to full send because of how gnarly it is. When we got there it made sense, it’s about 25% gradient with off-camber turns and bumps throughout. The first few runs I was doing two huge slides on that top section, but once I started dialing the line, I realised that I could enter late and almost grip them. By the time you get to the right hairpin the asphalt becomes super smooth, so it was all about fighting to stay on your board until then. It felt like going 100 km/h without even having to get into tuck, something I’d never felt before. Definitely a highlight of the year 4 me so far!`, /*3*/
  `red hot skills (just ask his friend)`, /*4*/
  `maximum commitment`, /*5*/
  `legendary road`, /*6*/
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

export const diego_poncelet_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const diego_poncelet_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const diego_poncelet_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const diego_poncelet_array_of_posts = [
  ...diego_poncelet_images,
  ...diego_poncelet_videos
];
