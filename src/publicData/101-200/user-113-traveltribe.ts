import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'traveltribe';
const userId = '6dd46aa3-149b-4052-98ac-77e57a5572ca';
const prefixUrl = 'https://dominicnikolai.github.io/project-292/assets/traveltribe/';
const followers = 391_989;
const followed = 42;
const profileDescription = 'Thailand | J&K | UP | Delhi | Goa';
const prefixLetterVideos = 'v';
const quantityOfVideos = 7;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#TravelTribeIndia #ThemeParkThrills #AdrenalineRush #SantaCatarinaBrazil #RadicalRides #ExtremeAdventure #WanderlustVibes #BucketListTrip #ExploreBrazil #DizzyHeights #WorldOfThrills #TravelAddict #RideTheRush #AdventureCalling #HighEnergyTrips #ThemeParkGoals #UnleashYourWild #ThrillSeekersUnite #TravelDreams #HeartRacingFun #BrazilDiaries #LiveTheAdventure #JetSetGo #NextStopBrazil #ParkOfDreams #RadicaisNosParques #TravelNow #GlobeTrotterLife #ExploreWithUs`, /*1*/
  `#suspensionbridge #wanderlust #exploremore #traveladdict #mountainadventures #traveltribedmc #turquoisewaters #spainadventures #travellifestyle #bucketlisttravel #epicadventure #cliffwalk #adventuretime #traveldreams #gorgesuspension #extremetravel #outdooradventures #wanderwithus #adrenalinerush #explorers #naturelovers #discoverearth #mountainvibes #huescaspain #europeadventures`, /*2*/
  `#PaddleBoarding #KnikGlacier #AlaskaTrip #HelicopterTour #IceCaves #TravelGoals #BucketListTravel #TravelTips #AdventureSeeker #TravelExperience #HikingAdventure #NatureLovers #UniqueTravel #GlacierHike #FrozenBeauty #TravelAddict #ExploreAlaska #ScenicViews #TravelGuide #ColdAdventure #TravelWithUs #WanderlustVibes #UnforgettableTrips #TravelReels #AlaskaVibes #NatureExploration #RoadtripVibes`, /*3*/
  `#BungyJump #AdventureTravel #CoupleGoals #TravelWithLove #ThrillSeekers #ExtremeAdventure #BucketListExperience #CoupleAdventure #TravelIndia #TravelThailand #TravelDubai #TravelGoa #TravelVietnam #AdventureTime #AdrenalineRush #JumpTogether #UnforgettableTravel #CoupleTravel #LoveAndAdventure #TravelAgencyIndia #ExploreWithTravelTribe #SkyHighLove #ThrillTravel #CoupleBucketList #AdventurousSouls #GlobalTravel #BungyLife #DareToJump #TravelExperiences`, /*4*/
  ` #TravelTribe #MonsterSwing #ExtremeAdventure #ThrillRide #FreeFallSwing #AdrenalineRush #MountainMonsters #AdventureLovers #ThrillSeekers #UltimateAdventure #ExtremeSports #SwingAdventure #TravelWithTribe #TravelIndia #AdventureGoals #ThrillingExperience #ExtremeFun #SkySwing #AdrenalineAdventure #ScaryRide #AdventureTravel #DareToTry #SwingDrop #FreeFallRide #TravelInStyle #ThrillAdventure #MountainThrill #TravelVibes #ExploreWithTribe #AdventureBucketList`, /*5*/
  `#GansuChina #WaterParkAdventure #FamilyTravel #ExploreChina #TravelWithUs #TravelCommunity #AdventureTime #TravelGoals #GlobalDestinations #TravelVibes #Wanderlust #ExploreTheWorld #TravelExperience #TravelFun #TravelLife #NatureAndAdventure #VacationMode #TravelStyle #JourneyWithUs #DiscoverChina #ScenicAdventures #TravelInspiration #FamilyAdventure #FunGetaway #TravelWithTribe #CulturalExploration #HiddenGemChina #AdventureSeekers #traveltribedmc`, /*6*/
  `#FamilyTravel #CulturalExperience #TravelWithUs #GlobalDestinations #ThrillRides #ExploreChina #TravelVibes #WorldCulturePark #AdventureTime #TravelMoments #DreamDestinations #TravelExperience #TravelCommunity #Wanderlust #ExploreTheWorld #TravelGoals #JourneyWithUs #DiscoverChina #ThemeParkLovers #FamilyAdventure #TravelLife #VacationMode #CulturalHeritage #TravelFun #TravelTribeDM`, /*7*/
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

export const traveltribe_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const traveltribe_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const traveltribe_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const traveltribe_array_of_posts = [
  ...traveltribe_images,
  ...traveltribe_videos
];
