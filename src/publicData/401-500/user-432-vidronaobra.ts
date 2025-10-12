import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'vidronaobra';
const userId = '2041c9d1-a63b-42d6-ab2c-1f4a46d7f7c4';
const prefixUrl = 'https://dominicnikolai.github.io/project-353/assets/vidronaobra/';
const followers = 332_324;
const followed = 427;
const profileDescription = `💚`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Teria coragem de um fazer um projeto desse ? #vidros #vidro #vidrosespeciais #vidroespecial #obras #arquitetos #designerdeinteriores #designerdeinterior #arquitetando #arquitretas #arquitetura #arquiteturadeinteriores #residencial #comercial

`, /*1*/
  `#VidroNaObra #ArquiteturaCriativa #InovaçãoEmVidros #DesignComVidro #ProjetosIncríveis #ConstruçãoCriativa #ReformaComEstilo #DecoraçãoComVidro #ObrasQueInspiram #GabrielBatista #DanielEstrela #VidrosEspeciais #PisoDeVidro #AquárioDeTubarões #ExperiênciaComVidro`, /*2*/
  `#GuardaCorpo #VidroLaminado #GuardaCorpoDeVidro #GuardaCorpoSlim #VidroDeSegurança #GuardaCorpoComVidro #SegurançaNaObra #DetalhesQueImportam #InstalaçãoRápida #PerfilSlim #EngenhariaCivil #ArquiteturaModerna #ObraResidencial #ObraComercial #EngenhariaDeObras #SoluçõesEmVidro #AcabamentoPerfeito #EstéticaEFuncionalidade #DesignEficiente #ArquiteturaContemporânea #ExecuçãoDeObra #EngenhariaEArquitetura`, /*3*/
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

export const vidronaobra_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const vidronaobra_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const vidronaobra_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const vidronaobra_array_of_posts = [
  ...vidronaobra_images,
  ...vidronaobra_videos
];
