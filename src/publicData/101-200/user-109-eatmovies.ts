import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'eatmovies';
const userId = '';
const prefixUrl = '';
const followers = 823_765;
const followed = 344;
const profileDescription = 'What to watch, what to stream🍿';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `"In the film Coraline, a subtle yet chilling clue appears during the dinner scene in the Other World. The cake reads ‘Welcome Home,’ but there’s something off. The ‘o’ in ‘Welcome’ is a plain capital letter, while the ‘o’ in ‘Home’ is written in a cursive loop. It’s an intentional design choice, and in graphology, a looped ‘o’ can signify dishonesty or hidden intentions. This small detail quietly reveals the truth behind the Other Mother’s illusion. She isn't welcoming Coraline home, she’s luring her into a prison disguised as paradise.`, /*1*/
  `The incinerator scene in Toy Story 3 is easily one of Pixar’s most devastating moments. As the toys realize there’s no escape, they stop struggling and simply hold hands, ready to face the end together. For a generation that grew up with them, it felt like watching our own childhood slip away. Even though “the Claw” saves them at the last second, the scene remains one of the darkest, most heartbreaking moments in Pixar history. `, /*2*/
  `When Hugh Jackman wasn't acting 😅 Hugh Jackman said he really was done playing the character of Wolverine after Logan (2017). He then said he regretted that statement after watching the first Deadpool (2016) and expressed to Ryan his interest in the two characters meeting on the big screen. When asked why he chose to return for this film, he simply said, "I just wanted to do it, and I felt it in my gut", adding that he wanted to have the best possible time ever on a movie set together with Ryan Reynolds. Likewise, Reynolds wanted to work alongside Jackman since the first Deadpool film and was saddened when he (Jackman) retired from the role.`, /*3*/
  `'Flow' is nothing short of a cinematic marvel. A dialogue-free animated journey where every frame feels alive. What makes it even more extraordinary is that the entire film was created and rendered using the free, open-source software Blender, proving that imagination and artistry transcend expensive tools. Its breathtaking visuals and emotional storytelling not only captivated audiences worldwide but also earned it the ultimate recognition: the Academy Award for Best Animated Feature.`, /*4*/
  `According to a January 2018 article by Business Insider, a team of psychiatrists (led by Belgian psychiatry professor Samuel Leistedt) analyzed 400 movies from 1915 to 2010 and identified 126 psychopathic characters. Among all of those, they concluded that Javier Bardem’s portrayal of Anton Chigurh in No Country for Old Men (2007) was the most clinically accurate depiction of a psychopath.`, /*5*/
  `Some films don’t just tell a story, they stay with you. Bridge to Terabithia is one of those rare childhood treasures, blending the magic of imagination with the sting of growing up too soon. Jess and Leslie’s adventures feel like a portal back to the days when friendship was everything and the world was full of wonder. Until life reminded us that even the most magical stories can break our hearts.`, /*6*/
  `The New York Times just crowned Bong Joon Ho’s Parasite the best film of the 21st century, after polling over 500 filmmakers, actors, critics, and industry insiders. And honestly, it’s hard to argue. This is a film that keeps you hooked, flips itself on its head, and leaves you thinking about class, greed, and survival long after the credits roll. Cinema doesn’t get more gripping than this.`, /*7*/
  `The line-up scene in The Usual Suspects was scripted as a serious scene, but after a full day of filming takes where the actors couldn't keep a straight face, director Bryan Singer decided to use the funniest takes. A making-of documentary shows Singer becoming furious at the actors for the constant cracking-up. In an interview (on the Special Edition DVD), Kevin Pollak states that the hilarity came about when Benicio Del Toro "farted, like 12 takes in a row." Del Toro himself said "somebody" farted, but no one knew who.`, /*8*/
  `This shot from 'The Dark Knight' is absolute cinema 🦇 The towering shot of Batman perched high above the glittering city is Christopher Nolan at his most iconic. Filmed on location atop the Sears Tower, Chicago, it captures Gotham not as a comic book backdrop but as a living, breathing metropolis. Vast, dangerous, and full of shadows. Christian Bale really stood there in full costume, suspended in the wind, while cinematographer Wally Pfister framed the city in sweeping, crystalline detail. The result is a single image that distills the essence of The Dark Knight: a lone figure, watching over a city`, /*9*/ 
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

export const eatmovies_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const eatmovies_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const eatmovies_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const eatmovies_array_of_posts = [
  ...eatmovies_images,
  ...eatmovies_videos
];
