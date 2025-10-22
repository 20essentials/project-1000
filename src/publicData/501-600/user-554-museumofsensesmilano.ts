import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'museumofsensesmilano';
const userId = '';
const prefixUrl = '';
const followers = 72_832;
const followed = 79;
const profileDescription = `✨ Risveglia i tuoi sensi con esperienze immersive`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#mybabyvoyager #MilanoConBambini #FamilyTrip #FamilyExperience #MuseoMilano #MuseumOfSenses #FamilyFriendly #TravelWithKids #GiteInFamiglia #FamilyTime #WeekendInMilano #ViaggiConBambini #KidsActivities #MilanoFamily #invited #viral`, /*1*/
  `#MuseumOfSensesMilano #CompleannoBambini #FestaDiCompleanno #MilanoKids #FestaMilano #DivertimentoPerTutti #MilanoConBambini #BirthdayPartyMilano #FestaBambiniMilano #CompleannoDaSogno`, /*2*/
  `#cosafareamilano #museumofsenses`, /*3*/
  `#CosaFareAMilano #MilanoConLaPioggia #MuseoDeiSensi #EsperienzaSensoriale #WeekendMilanese #IndoorExperience #MilanoCreativa #ReelVirale #GiornataDiPioggia #TravelExperience
#vmelis81`, /*4*/
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

export const museumofsensesmilano_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const museumofsensesmilano_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const museumofsensesmilano_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const museumofsensesmilano_array_of_posts = [
  ...museumofsensesmilano_images,
  ...museumofsensesmilano_videos
];
