import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'coding_elf';
const userId = '';
const prefixUrl = '';
const followers = 109_234;
const followed = 243;
const profileDescription = 'AI, Tech & Your Career: What’s Next? 🤖';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 20;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Frontend Developer who lives in Sweden 🇸🇪, travels the world, and makes ~€5000/monthly net👩🏻‍💻 We hit the streets of Berlin to ask creatives, coders, baristas, teachers, entrepreneurs – humans – how they feel about the future of work, technology, AI, work, and what makes us human in a world of machines. Some are worried. Some are hopeful. All are still human. - What’s the future of your career? Share your thoughts below 👇 - 📍 Berlin Street Interviews 🎤 Follow for more real answers in the AI era. IG: @coding_elf 🚀 Join our broadcast channel to stay updated!💫 - 🎤 #streetinterview #futureofwork #berlinvoices #techandhumanity #artificialintelligence #futureoftech #berlinlife #tech #techcommunity #codingelf #peopleintech #ai #digitalnomads #entrepreneurs #finances #howmuchdoyoumake #successstory #dreamcareer #womenintech #remoteworker`, /*1*/
  `#futureofwork #berlinvoices #techandhumanity #artificialintelligence #futureoftech #berlinlife #tech #techcommunity #codingelf #peopleintech #ai #digitalnomads #entrepreneurs #finances #howmuchdoyoumake #successstory #dreamcareer #womenintech #remoteworker`, /*2*/
  `Reggie, Typographer/Graphic Designer & Coffee Shop Cofounder, from Washington D.C. 🇺🇸, who makes $3,000-10,000 monthly, and travels the world 🌍 We hit the streets of Berlin to ask creatives, coders, baristas, teachers, entrepreneurs – humans – how they feel about the future of career, technology, AI, remote work, and what makes us human. Some are worried. Some are hopeful. All are still human. - What’s your dream career? Share your thoughts below 👇 - 📍 Berlin Street Interviews 🎤 Follow for more real answers in the AI era. - 🎤 #streetinterview #streetinterviewgermany #streetinterviewberlin #futureofwork #futureofcareers #howmuchmoneydoyoumake #enterpreneurs #finances #successstory #dreamcareer #remoteworker #digitalnomad #digitalwork #aiandjobs`, /*3*/
  `Fabian, 37, Restaurateur🧑‍🍳 from Germany🇩🇪 We hit the streets of Berlin to ask creatives, coders, baristas, teachers, entrepreneurs – humans – how they feel about the future of work, technology, AI, work, and what makes us human in a world of machines. Some are worried. Some are hopeful. All are still human. - What’s the future of your career? Share your thoughts below 👇 - 📍 Berlin Street Interviews 🎤 Follow for more real answers in the AI era. IG: @coding_elf 🚀 Join our broadcast channel to stay updated!💫 - 🎤 #streetinterview #futureofwork #berlinvoices #techandhumanity #ai2025 #workandai #artificialintelligence #futureoftech #berlinlife #tech #techcommunity #codingelf #tech #peopleintech #ai #techcommunity #digitalnomads #entrepreneurs #finances #howmuchdoyoumake #successstory #dreamcareer`, /*4*/
  `🚀Join our broadcast channel to stay updated! Marc, 25, photo- and video-studio owner. We hit the streets of Berlin to ask creatives, coders, baristas, teachers, entrepreneurs – humans – how they feel about AI, work, and what makes us human in a world of machines. Some are worried. Some are hopeful. All are still human. 👇 What’s one thing AI will never replace? Drop it in the comments. - 📍 Berlin Street Interviews 🎤 Follow for more real answers in the AI era. IG: @coding_elf - 🎤 #stillhuman #aiinterviews #futureofwork #berlinvoices #humansvsmachines #streettalkai #whatmakesushuman #techandhumanity #ai2025 #workandai #artificialintelligence #futureoftech #openai #chatgpt #berlinlife #realpeoplerealanswers #tech #techcommunity #codingelf`, /*5*/
  `Will AI take your job?👾 Voice Actress 🎙️ We hit the streets of Berlin to ask creatives, coders, baristas, teachers, entrepreneurs - humans - how they feel about AI, work, and what makes us human in a world of machines. Some are worried. Some are hopeful. All are still human. 👇 What’s one thing AI will never replace? Drop it in the comments. - 📍 Berlin Street Interviews 🎤 Follow for more real answers in the AI era. IG: @coding_elf - 🎤 #stillhuman #aiinterviews #futureofwork #berlinvoices #humansvsmachines #streettalkai #whatmakesushuman #techandhumanity #ai2025 #workandai #artificialintelligence #futureoftech #openai #chatgpt #berlinlife #realpeoplerealanswers #tech #techcommunity #codingelf`, /*6*/
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

export const coding_elf_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const coding_elf_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const coding_elf_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const coding_elf_array_of_posts = [
  ...coding_elf_images,
  ...coding_elf_videos
];
