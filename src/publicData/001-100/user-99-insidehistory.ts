import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'insidehistory';
const userId = '';
const prefixUrl = '';
const followers = 100_000;
const followed = 50;
const profileDescription = 'Hello';
const prefixLetterVideos = 'v';
const quantityOfVideos = 20;
const prefixLetterImages = 'n';
const quantityOfImages = 20;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Incredible real-time footage captures the mesmerizing beauty of the Northern Lights as they dance and swirl across the night sky in Alaska. Vibrant waves of green, purple, and pink shimmer overhead, moving gracefully in a breathtaking natural display. Filmed in real time, this stunning video lets you experience the magic of the aurora borealis just as it appeared—raw, powerful, and unforgettable! (Via: @wewerethetide) #history #beautiful #northernlights #wildlife #reels`, /*1*/
  `Many people are surprised to learn that you can’t see the Earth’s curvature with the naked eye from the ground—or even from a typical airplane. That’s because Earth is enormous, with a circumference of about 40,000 kilometers, making its curve incredibly gradual. To the human eye, the horizon looks flat simply because the scale is far beyond our everyday perception. At sea level, the horizon is only about 5 kilometers away, and even at cruising altitude (around 10,000 meters), the curvature is still too subtle to notice without special equipment. To clearly see the curve, you need a much higher vantage point—such as images from weather balloons, high-altitude jets, or spacecraft. That’s why astronauts aboard the International Space Station, orbiting more than 400 kilometers above Earth, can easily see the planet’s curved edge. From where we stand, however, Earth’s vastness hides its shape. The planet is round—it’s just so big that its curve is almost invisible from the surface! #history #space #explore #science #reels`, /*2*/
  `During the Victorian era, mirrors were commonly produced through a technique known as silvering, which involved the use of silver nitrate. In this process, artisans applied a mixture of silver nitrate and other chemicals—such as ammonia and sugar—to the back of a glass sheet. These ingredients caused a chemical reaction that reduced the silver ions to metallic silver, forming a thin, reflective layer on the glass surface. After the coating dried and was polished, the result was a bright, clear mirror. This method was not only safer than earlier mercury-based techniques but also produced superior reflections! #history #science #reels #trending #storytelling`, /*3*/
  `Pineapples don’t grow on trees—they grow from the ground. These tropical plants have spiky, sword-shaped leaves arranged in a rosette. From the center, a tall stem emerges and produces a cluster of small red or purple flowers. These flowers fuse together to form a single fruit: the pineapple. Each “eye” on the pineapple’s surface marks an individual flower that became part of the whole. Growing a pineapple is a slow process, typically taking 18 to 24 months to fully mature and ripen! #history #science #timelapse #didyouknow #reels`, /*4*/
  `If the Sun were to explode, the Earth and the rest of the solar system would be obliterated in an instant. The explosion would unleash an immense burst of light, heat, and radiation, followed by a powerful shockwave that would rip through space. Any remaining core could collapse into a neutron star or even a black hole. But here’s the reality: the Sun isn’t massive enough to explode. Instead, billions of years from now, it will gradually expand into a red giant, engulfing nearby planets, before shedding its outer layers and settling into a quiet life as a white dwarf—a dense, glowing remnant of its former self! #space #scary #history #reels #wildlife`, /*5*/
  `I feel so bad for Tobey 🥺❤️‍🩹 Tobey Maguire’s so-called “real-life spider sense” refers to his uncanny ability to detect when he’s being filmed or photographed—even without looking directly at the camera. Fans and paparazzi have documented several instances where he seems to instinctively know he’s being watched. One notable moment occurred during a museum visit, when a fan attempted to discreetly film him. Maguire abruptly turned and stared straight into the camera, as if he had sensed it. This odd talent has been compared to Spider-Man’s iconic “spider-sense”—a fictional ability that alerts him to danger. While Maguire’s reflexes are likely just the result of years of public attention and heightened awareness, the phenomenon remains both impressive and entertaining! #funny #spiderman #trending #history #movies`, /*6*/
  `In Vanilla Sky (2001), directed by Cameron Crowe, one of the film’s most iconic scenes features Tom Cruise’s character walking alone through a deserted Times Square! 🎬 Amazingly, this haunting moment was filmed without any CGI—the production shut down the normally packed landmark for three hours early one Sunday morning. The scene, which cost over $1 million and required precise coordination with city officials, became a striking visual that perfectly reflects the film’s surreal, dreamlike atmosphere. #history #cinema #reels #tomcruise #timessquare`, /*7*/
  `On August 10, 2018, Richard “Beebo” Russell — later known online as Sky King — captured global attention when he stole a Horizon Air Q400 from Seattle-Tacoma International Airport. A 29-year-old ground crew worker with no formal flight training, Russell took off solo and maintained a calm, often humorous conversation with air traffic controllers for over an hour! Mid-flight, he performed a barrel roll over Puget Sound, then deliberately crashed the plane on Ketron Island. No one else was harmed. His final words and the haunting nature of the event left a lasting impression, turning him into a tragic folk figure — a stark symbol of the silent struggles people often carry beneath the surface. #history #reels #cinema #trending #plane`, /*8*/
  `One of the greatest masterpieces of European furniture craftsmanship, this cabinet stands as the most significant creation from the renowned workshop of Abraham (1711–1793) and David Roentgen (1743–1807). A writing cabinet topped with a chiming clock, it showcases exquisite marquetry panels and intricate mechanisms that allow doors and drawers to open automatically at the press of a button. Once owned by King Frederick William II, the Berlin cabinet is exceptional for its lavish decoration, mechanical sophistication, and impressive scale! On view at the Kunstgewerbemuseum, Staatliche Museen zu Berlin. (Via: VideoART GmoH and Kunstgewerbemuseum, Staatliche Museen zu Berlin) #history #technology #engineering #reels #explore`, /*9*/ 
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

export const insidehistory_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const insidehistory_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const insidehistory_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const insidehistory_array_of_posts = [
  ...insidehistory_images,
  ...insidehistory_videos
];
