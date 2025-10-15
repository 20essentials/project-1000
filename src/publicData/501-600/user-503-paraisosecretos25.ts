import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'paraisosecretos25';
const userId = '';
const prefixUrl = '';
const followers = 102_832;
const followed = 116;
const profileDescription = ` Explorando cada canto do planeta`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Vulcão de Fogo, na Guatemala, sendo atingido por uma tempestade de raios. Este vulcão, que tem 3,7 mil metros de altura, é um dos mais ativos das Américas e está em contínua atividade. #guatemala #exploretheworld #naturelovers #nature #travelphotography #volcano #ray #wanderlust #explore #travel #trip #exploreguatemala #tourism #turismo #natureza #vulcão #viagens #viagem #viajareviver`, /*1*/
  `#todotoronto #the6ix #fall #6ixgrams #livelovecanada #city_features #canadanature #flight #ontariosummer #toronto #niagara #canada`, /*2*/
  `Partiu 🔥`, /*3*/
  `#LondonVibes #VisitLondon #TravelEurope #BigBen #LondonEye #Wanderlust #ExploreTheWorld #UKTrip #TravelGoals #InstaTravel`, /*4*/
  `Céu cinza, alma colorida 🌧✨ A Catedral da Espanha ainda mais encantadora sob a chuva — cada gota reflete sua grandeza. ⛪💫 #SpainVibes #CatedralDeSevilla #RainyDayMood #TravelEurope #VisitSpain #ArquiteturaHistórica #DestinoDosSonhos #ViagemPelaEuropa

`, /*5*/
  `#ViagemPelaEuropa`, /*6*/
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

export const paraisosecretos25_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const paraisosecretos25_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const paraisosecretos25_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const paraisosecretos25_array_of_posts = [
  ...paraisosecretos25_images,
  ...paraisosecretos25_videos
];
