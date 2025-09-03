import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'amUserPrivate';
const userId = '';
const prefixUrl = '';
const followers = 323_720;
const followed = 79;
const profileDescription = 'Nail Art';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` #nails #nailart #nailinspo #naildesign #notd #nailtech #diynails #neon #neonnails #summer #summernails #watermarble #watermarblenails #cirquecolors #nailsnailsnails #nailsofinstagram #nails2inspire`, /*1*/
  `#minimalnailart #naturalnails #almondnails #naildesigns #nailart #gelnails #handpaintednails #nailartinspo #nailinspo #minimalnails #abstractnailart #revolvebeauty #popsugarbeauty #refinery29 #hypebaebeauty #aesthetic #voguebeauty #nailinspiration #nailstyle #nailsofinstagram #nailsoftheday #nails #pleasing #watermarblenails #summernails #nailtutorial #nailvideo`, /*2*/
  `#nailstagram #nailsnailsnails #nailtech #diynails #cowprint #cowprintnails #fall #fallnails #autumn #autumnnails #fallnailinspo #essie #brownnails`, /*3*/
  `#nailtech #nailsnailsnails #nailstagram #nailsofinstagram #essie #fall #fallnails #fallnailinspo #autumn #autumnnails #brownnails`, /*4*/
  `#nails #nailart #nailinspo #naildesign #note #diynails #polkadots #polkadotnails #frenchtipnails #nailtech #fall #fallnails #autumn #fallnailinspo #nailsnailsnails`, /*5*/
  `#naildesign #notd #nailtech #bloominggel #nailsnailsnails #summernails #summer #fall #fallnails #autumn #nailstyle`, /*6*/
  `#naildesign #notd #nailtech #bloominggel #nailsnailsnails #summernails #summer #fall #fallnails #autumn #nailstyle`, /*7*/
  `#naildesign #notd #nailtech #bloominggel #nailsnailsnails #summernails #summer #fall #fallnails #autumn #nailstyle`, /*8*/
  `#minimalnailart #naturalnails #almondnails #naildesigns #nailart #gelnails #handpaintednails #nailartinspo #nailinspo #minimalnails #abstractnailart #revolvebeauty #popsugarbeauty #refinery29 #hypebaebeauty #aesthetic #voguebeauty #nailinspiration #nailstyle #nailsofinstagram #nailsoftheday #nails #pleasing #watermarblenails #summernails #nailtutorial #nailvideo`, /*9*/ 
  `#minimalnailart #naturalnails #almondnails #naildesigns #nailart #gelnails #handpaintednails #nailartinspo #nailinspo #minimalnails #abstractnailart #revolvebeauty #popsugarbeauty #refinery29 #hypebaebeauty #aesthetic #voguebeauty #nailinspiration #nailstyle #nailsofinstagram #nailsoftheday #nails #pleasing #watermarblenails #summernails #nailtutorial #nailvideo`, /*10*/
  `#naildesign #notd #nailtech #bloominggel #nailsnailsnails #summernails #summer #fall #fallnails #autumn #nailstyle`, /*11*/
  `#naildesign #notd #nailtech #bloominggel #nailsnailsnails #summernails #summer #fall #fallnails #autumn #nailstyle`, /*12*/
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

export const amUserPrivate_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const amUserPrivate_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const amUserPrivate_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const amUserPrivate_array_of_posts = [
  ...amUserPrivate_images,
  ...amUserPrivate_videos
];
