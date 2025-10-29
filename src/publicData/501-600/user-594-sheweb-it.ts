import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'sheweb_it';
const userId = '05e954c5-bd07-4265-9767-91b17b6282a5';
const prefixUrl = 'https://dominicnikolai.github.io/project-375/assets/sheweb-it/';
const followers = 45_832;
const followed = 210;
const profileDescription = `Ti creo il sito web, ti rendo indipendent | Formazione web designer | Solo donne
`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Come creare uno shop online per lanciare il tuo small business.
#realizzazionesitiweb #ecommercebusiness #ecommerceitalia #vendereonline #comeiniziare #ecommercetips`, /*1*/
  `E-commerce quanto deve costare? Qual è il prezzo giusto per uno shop online?

#ecommerce #donneimprenditrici #sheweb #imprenditricedigitale #businessalfemminile #shoponline`, /*2*/
  `Come mettere un sito a norma con il GDPR. Cosa devi indicare sul sito web per essere a norma con il GDPR #sitowebprofessionale #sitoweb #sheweb #imprenditricedigitale #liberaprofessionista #gdpr #website #greenscreen #solodonne`, /*3*/
  `#sitoweb #sitowebprofessionale #sheweb #imprenditricedigitale #businessalfemminile #sitiwebperdonne #solodonne`, /*4*/
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

export const sheweb_it_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const sheweb_it_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const sheweb_it_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const sheweb_it_array_of_posts = [
  ...sheweb_it_images,
  ...sheweb_it_videos
];
