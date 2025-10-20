import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'vertex_cgi';
const userId = 'e73ca3b1-1b36-46aa-bb4b-84a979b05b96';
const prefixUrl = 'https://dominicnikolai.github.io/project-366/assets/vertex-cgi/';
const followers = 1_432_323;
const followed = 848;
const profileDescription = `▶︎ 20 billion organic views for enterprises`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#CGI #SMM #marketing #viralcampaigns #football
`, /*1*/
  `#CGI #SMM #marketing #viralcampaigns #football
`, /*2*/
  `#CGI #SMM #marketing #viralcampaigns #football
`, /*3*/
  `#CGI #SMM #marketing #viralcampaigns #football
`, /*4*/
  `#CGI #SMM #marketing #viralcampaigns #football
`, /*5*/
  `#CGI #SMM #marketing #viralcampaigns #football
`, /*6*/
  `#CGI #SMM #marketing #viralcampaigns #football
`, /*7*/
  `Dubai luxury anti-flood technologies 🚤 #dubai #uae #luxury #cars #bugatti #mercedes #lamborghini`, /*8*/
  `Our XXL Human Tennis 🎾 #usopen #tennis #paris #sports #travel #eiffeltower`, /*9*/ 
  `“Just One Suitcase” - OK 🧳 #travel #airport #fashion #vacation`, /*10*/
  `Luxury shipping hits different 🛍️`, /*11*/
  `Would you ride this? 🛞 #astonmartin #applevisionpro`, /*12*/
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

export const vertex_cgi_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const vertex_cgi_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const vertex_cgi_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const vertex_cgi_array_of_posts = [
  ...vertex_cgi_images,
  ...vertex_cgi_videos
];
