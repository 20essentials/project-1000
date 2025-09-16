import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'neonsense_oc';
const userId = '';
const prefixUrl = '';
const followers = 387_922;
const followed = 257;
const profileDescription = `MI`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#synthwaveart #retrofuture #trippyartwork #abstract #glitchartistscollective #glitchart #abstractart #psychedelicart #trippy #trippyart #aesthetic  #aesthetics #vaporwaveaesthetic #mirrorlab #glitchlab #chromalab #liminalspace #surrealism #surrealart #glitchlabapp #mirrorlabapp #glitchlabart #symmetryart #artistsoninstagram #art #digitalart #digitalpainting #vaporwave #colorfulartwork #opticalillusion`, /*1*/
  `#synthwaveart #retrofuture #trippyartwork #abstract #glitchartistscollective #glitchart #abstractart #psychedelicart #trippy #trippyart #aesthetic  #aesthetics #vaporwaveaesthetic #mirrorlab #glitchlab #chromalab #liminalspace #surrealism #surrealart #glitchlabapp #mirrorlabapp #glitchlabart #symmetryart #artistsoninstagram #art #digitalart #digitalpainting #vaporwave #colorfulartwork #opticalillusion`, /*2*/
  `#synthwaveart #retrofuture #trippyartwork #abstract #glitchartistscollective #glitchart #abstractart #psychedelicart #trippy #trippyart #aesthetic  #aesthetics #vaporwaveaesthetic #mirrorlab #glitchlab #chromalab #liminalspace #surrealism #surrealart #glitchlabapp #mirrorlabapp #glitchlabart #symmetryart #artistsoninstagram #art #digitalart #digitalpainting #vaporwave #colorfulartwork #opticalillusion`, /*3*/
  `#onelab_app #geometricart #generative #geometry #fractalsart #fractals #glitchart #trippyart #patternsart #surfacepattern #psychedelicart #psyart #psychedelic #digitalart #modernart #chromalab #mirrorlab #glitchlab #picsart #symmetry #symmetryart #abstract #abstractart
#kaleidoscope #mandala`, /*4*/
  `#onelab #abstractart #trippyart #kaleidoscope #psychedelicart #symmetry #onelab_app`, /*5*/
  `#onelab #onelab_app #geometricart #generative #geometry #fractalsart #fractals #glitchart #trippyart #patternsart #surfacepattern #psychedelicart #psyart #psychedelic #digitalart #modernart #chromalab #mirrorlab #glitchlab #picsart #symmetry #symmetryart #abstract #abstractart
#kaleidoscope #mandala #psytrance`, /*6*/
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

export const neonsense_oc_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const neonsense_oc_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const neonsense_oc_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const neonsense_oc_array_of_posts = [
  ...neonsense_oc_images,
  ...neonsense_oc_videos
];
