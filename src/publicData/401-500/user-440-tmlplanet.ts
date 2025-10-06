import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'tmlplanet';
const userId = '';
const prefixUrl = '';
const followers = 5_700_832;
const followed = 32;
const profileDescription = ` Intrattenimento, curiosità, news, e tante altre cosine belline`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  ` Microsoft Excel World Championship celebrano la maestria nell’uso di uno degli strumenti più conosciuti di Microsoft. Ma non stiamo parlando solo di fogli di calcolo: questi campionati sfidano i partecipanti a risolvere problemi complessi usando funzioni avanzate e tecniche di analisi dei dati.
`, /*1*/
  `Oggi AOL ci saluta: ha infatti annunciato che il 30 settembre 2025 disattiverà il suo servizio di Internet in dial‑up. ￼
 Chi se lo ricorda? 🥲 AOL sta per America Online, ed è stato uno dei colossi che ha contribuito a portare Internet nelle case negli anni ’90. Negli anni d’oro, molti utenti accedevano a Internet con la “connessione telefonica” (dial‑up) tramite AOL: un modem, la linea telefonica, il tipico suono di collegamento.`, /*2*/
  `Tagga il tuo amico in fissa con LOTR 💍`, /*3*/
  `Dal 18 al 24 settembre La Tomba delle Lucciole torna al cinema in versione originale e con un nuovo doppiaggio del team artistico del Ragazzo e l’Airone.`, /*4*/
  `È la performance di #litteredmvmnts , l’artista che prende la forma della spazzatura che trova lungo la strada. L’obiettivo? Sensibilizzare la riflessione ecologica ♻️`, /*5*/
  `Nel 2025: Il Signor Kellogg poteva ormai comprarsi 946 milioni di confezioni di Kellogg’s 🐔.
Aveva raggiunto un accordo che aveva definito “più di una semplice acquisizione”: Giovanni Ferrero era consapevole della portata storica della compravendita.
Costata 3,1 miliardi di dollari, aveva fatto compiere un balzo del 30% in borsa alla Kellogg.
Dopo giorni di trattative, l’accordo era stato comunicato dal gruppo italiano, che così aveva ampliato la sua presenza a scaffale, fino ad allora dominata principalmente da cioccolato e creme.
La fusione aveva riguardato due marchi iconici, simbolo della colazione nell’intero continente, e aveva rappresentato la volontà della famiglia Ferrero di affermarsi sempre di più in America.`, /*6*/  
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

export const tmlplanet_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const tmlplanet_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const tmlplanet_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const tmlplanet_array_of_posts = [
  ...tmlplanet_images,
  ...tmlplanet_videos
];
