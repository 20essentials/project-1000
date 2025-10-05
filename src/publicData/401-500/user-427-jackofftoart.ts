import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'jackofftoart';
const userId = '';
const prefixUrl = '';
const followers = 242_832;
const followed = 338;
const profileDescription = `J`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hamid Naderi Yeganeh is a mathematical artist and researcher at University College London, known for crafting intricate and visually stunning artworks entirely through mathematical equations. Using functions such as trigonometric and exponential formulas, he transforms abstract mathematics into precise and captivating designs.`, /*1*/
  `In Japan, there is a traditional horticultural practice known as nemawashi, which means “preparing the roots.” It involves carefully loosening and pruning a tree’s roots before transplanting it to a new location. This method helps the tree survive relocation by encouraging new root growth and minimizing shock. While not every tree in Japan is relocated instead of cut down, nemawashi reflects a broader cultural respect for nature and a preference for preservation when possible. The practice has also influenced Japanese language and culture more broadly, where nemawashi is used metaphorically to describe the process of laying groundwork or preparing for change with care and consideration.`, /*2*/
  `Peter Ondreička (born 1947, died 1990) was a Slovak painter known for his darkly poetic and surreal figurative works. His art explored psychological and existential themes through distorted human forms and dreamlike symbolism. Pieces such as The Prodigal Son (Ahasver) (1989–1990), Mozartiana (c. 1990), and Tight Mask (Man with a Mask) (1987–1988) reveal a fascination with inner conflict, mortality, and the boundaries between reality and imagination. Ondreička exhibited at the Dom umenia / Kunsthalle Bratislava and developed a style that balanced technical precision with emotional intensity. Known for his perfectionism and self-criticism, he reportedly destroyed or painted over much of his own work, contributing to his rarity and mystique today. His surviving paintings stand as haunting reflections of the human condition.`, /*3*/
  `Steve Fugate, a 76 year-old from Vero Beach, Florida, has spent over two decades walking across the United States carrying a sign that reads “Love Life.” He began his mission in 1999 after losing his son, turning his grief into a lifelong effort to spread kindness and hope. Fugate has since completed eight cross-country walks and begun his ninth, covering more than 51,000 miles. Along the way, he meets countless people, sharing his message of healing and reminding others to appreciate life. After also losing his daughter, Fugate continues walking as a tribute to both of his children. His motto “to mend the broken heart while it’s yet beating” captures the spirit of his travels. He also wrote a memoir titled Love Life Walk, chronicling his story of resilience and compassion.`, /*4*/
  `The Aquarium Booth is an urban art installation created by French artist Benedetto Bufalino and lighting designer Benoit Deseille. First presented at Lyon’s Fête des Lumières in 2007, the work transforms obsolete telephone booths into illuminated aquariums filled with fish and aquatic plants. By reimagining these outdated structures, the artists highlight how technology changes the cityscape and propose a poetic, playful reuse of public objects. The installation has since appeared at international light festivals, including in Belgium and the UK, where it continues to surprise passersby with its surreal presence. Combining art, ecology, and spectacle, the aquarium booth encourages reflection on urban transformation while offering moments of wonder in everyday environments. It stands as a striking example of how functional relics can be reinterpreted into living works of art.`, /*5*/
  `In 2016, Kevan Chandler, a man with spinal muscular atrophy, set out on a three-week journey across Europe without his wheelchair. Instead, a group of his close friends designed a custom backpack to carry him, allowing him to experience places that would otherwise have been inaccessible. Together, they traveled through France, England, and Ireland, visiting landmarks such as Sacré-Cœur in Paris and the remote island of Skellig Michael. Their adventure was documented in the film The View from Here, highlighting both the challenges and the creativity behind the trip. Following the experience, Chandler founded the nonprofit We Carry Kevan, which raises awareness about accessibility and provides resources to others with disabilities. His story has since inspired many to rethink how friendship, teamwork, and innovation can open doors to new possibilities in travel.`, /*6*/
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

export const jackofftoart_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const jackofftoart_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const jackofftoart_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const jackofftoart_array_of_posts = [
  ...jackofftoart_images,
  ...jackofftoart_videos
];
