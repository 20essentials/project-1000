import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'amUserPrivate';
const userId = '';
const prefixUrl = '';
const followers = 446_720;
const followed = 232;
const profileDescription = 'Movies';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Oscar for Best Animated Feature Film (2002–2025) According to you, which movie truly deserved the Oscar? (Which hasn’t won)`, /*1*/
  `Oscar for Best Visual Effects (2001–2025) According to you, which movie truly deserved the Oscar for Visual Effects but hasn’t won till now?`, /*2*/
  `Some of the best Superhero Movie shots. . . . . . #superhero #marvel #dc #ironman #superman #captainamerica #batman #cinema #movies #viral #fyp`, /*3*/
  `“Battle of the Bastards” hit a perfect 10/10 on IMDb when it aired in June 2016, but the score didn’t last long. Breaking Bad fans downvoted it, dropping it to 9.9, sparking a ratings war with Ozymandias. For a brief time it stood as the top-rated episode, but the rivalry made sure it couldn’t hold the spot for long. What’s your opinion on this?`, /*4*/
  `Oscar for Best Director (2000–2025) According to you, which director truly deserved the oscar but hasn’t won till now?`, /*5*/
  `Breaking Bad’s Ozymandias (S5E14) is considered one of the greatest episode in TV history. It’s the only episode to ever hold a 10/10 rating on IMDb. Directed by Rian Johnson, it delivers pure tension and heartbreak as the story reaches its most powerful turning point. A masterpiece of writing, acting, and emotion that still leaves fans stunned.`, /*6*/
  `Oscar for the Best Picture (2001–2025) According to you, which movie truly deserved an Oscar?`, /*7*/
  `I’m the one who knocks!`, /*8*/
  `Oscar for the Best Actor (2005–2025) According to you, which actor deserves an Osca? (who hasn’t won)

`, /*9*/ 
  `Can’t skip this one!☝🏻 TV Show: Dark (2017-2020)`, /*10*/
  `EMMY FOR BEST DRAMA SERIES (2005–2024) What’s your prediction for the 2025 Emmys?`, /*11*/
  `The Beauty of Cinematography in Game of Thrones!`, /*12*/
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
