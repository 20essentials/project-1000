import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'johal_geometrics';
const userId = '';
const prefixUrl = '';
const followers = 141_720;
const followed = 272;
const profileDescription = `Chromesthetic geometric paintings inspired by music`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#opticalart #chromestheticart #hardedgepainting #colortheory #geometricart #geometricpainting #galleryart #johalgeometrics #angelajohalart #angelajohal #moberggallery `, /*1*/
  `#chromestheticart #musicandpainting #bendergallery #apotheosismediallc #hardedgepainting #geometricart #geometricpainting #geometricabstraction #opticalart #colorfieldpainting #artcollecting #artadvisory #artconsulting #artforhome #midcenturymod #interiorspaces #designer #artforoffices #abstractart #ashevilleart #contemporaryart #contemporarypainting #neopsychedelia #angelajohalgeometry #angelajohalart #johal_geometrics #johalgeometrics #angelajohal`, /*2*/
  `#bendergallery #soloexhibition #chromestheticart #musicandpainting #geometricart #geometricpainting #hardedgepainting #geometricabstraction #artgallery #opticalart #neopsychedelia #colorfieldpainting #artforhome #interiorspaces #designer #artforoffices #corporateartconsulting #artconsulting #artcollecting #artadvisory #abstractart #contemporaryart #contemporarypainting #angelajohalgeometry #angelajohalart #johal_geometrics #johalgeometrics #angelajohal`, /*3*/
  `#interfacedesign #geometricart #geometricpainting #hardedgepainting #chromestheticart #musicandpainting #opticalart #opart #colortheory #colorfieldpainting #artgallery #contemporaryart #contemporaryartist #contemporarypainting #abstractart #minimalart #aestheticism #sfbayareaartist #angelajohalgeometry #johalgeometrics #johal_geometrics #angelajohalart #angelajohal`, /*4*/
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

export const johal_geometrics_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const johal_geometrics_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const johal_geometrics_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const johal_geometrics_array_of_posts = [
  ...johal_geometrics_images,
  ...johal_geometrics_videos
];
