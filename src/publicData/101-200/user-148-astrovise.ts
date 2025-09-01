import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'astrovise';
const userId = '3b586bb5-f422-48bc-a0e3-ea42af4e398f';
const prefixUrl = 'https://dominicnikolai.github.io/project-301/assets/astrovise/';
const followers = 47_720;
const followed = 393;
const profileDescription = 'Space | universe | knowledge';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `The Sun sends out a constant flow of solar material called the solar wind, which creates a bubble around the planets called the heliosphere. The heliosphere acts as a shield that protects the planets from interstellar radiation. #space #sun #protect #solarsystem #planets`, /*1*/
  `an enormous spinning hexagon in the clouds at its north pole – has fascinated scientists and the public alike since our first glimpse of it in the 1980s. A trove of images and data from the Cassini probe that orbited Saturn from 2004-2017 provided some surprising answers, but not all of them, heightening the mystery even more Scientists first observed the six-sided jet stream when the two Voyager spacecraft passed by Saturn in 1980 and 1981. But their trajectories prevented the Voyagers from capturing the entire monstrous hexagon – twice as wide as Earth – in a single image from above. As they flew past, their viewing angle offered only tantalizing glimpses of its edge. More than 20 years later, when Cassini arrived at Saturn in 2004, the planet’s northern hemisphere was in winter and the hexagon was hidden in shadow. Because Saturn’s seasons last so much longer than those on Earth, scientists had to wait a few more years to see the hexagon in visible light. So until then, they looked at it a different way. In 2006 (still winter in Saturn’s north), Cassini’s team studied the hexagon using the Visual and Infrared Mapping Spectrometer (VIMS) instrument on the spacecraft. VIMS could see the hexagon in the dark because it detects infrared wavelengths of light, basically heat generated in the warm interior of Saturn. Saturn is much farther from the Sun than Earth is, so its year – the time Saturn takes to complete one solar orbit – is about 29 Earth years. Consequently, each Saturnian season lasts more than seven Earth years. #gasgiant #saturn #space #planet #solarsystem #northpole`, /*2*/
  `Light pollution, or artificial light at night, is the excessive or poor use of artificial outdoor light, and it disrupts the natural patterns of wildlife, contributes to the increase in carbon dioxide (CO2) in the atmosphere, disrupts human sleep, and obscures the stars in the night sky. #space #earth #nightsky #beautiful #lightpollution #stars #universe`, /*3*/
  `🧑‍🚀🧑‍🚀 #space #training #astronaut #spacewalk #underwater`, /*4*/
  `INFO⚠️ In this view of a vortex near Jupiter’s north pole, NASA’s Juno mission observed the glow from a bolt of lightning. On Earth, lightning bolts originate from water clouds, and happen most frequently near the equator, while on Jupiter lightning likely also occurs in clouds containing an ammonia-water solution, and can be seen most often near the poles. In the coming months, Juno’s orbits will repeatedly take it close to Jupiter as the spacecraft passes over the giant planet’s night side, which will provide even more opportunities for Juno’s suite of science instruments to catch lightning in the act. Juno captured this view as Juno completed its 31st close flyby of Jupiter on Dec. 30, 2020. In 2022, Citizen scientist Kevin M. Gill processed the image from raw data from the JunoCam instrument aboard the spacecraft. At the time the raw image was taken, Juno was about 19,900 miles (32,000 kilometers) above Jupiter’s cloud tops, at a latitude of about 78 degrees as it approached the planet. #space #jupiter #lightning #gasgiant #solarsystem #storm`, /*5*/
  `🚀🚀 #space #rocket #rocketlaunch #earth #sunset`, /*6*/
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

export const astrovise_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const astrovise_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const astrovise_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const astrovise_array_of_posts = [
  ...astrovise_images,
  ...astrovise_videos
];
