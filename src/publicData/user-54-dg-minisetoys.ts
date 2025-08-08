import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'dg_minisetoys';
const userId = 'd69c574d-eb36-4419-8341-23fad4fd44d1';
const prefixUrl = 'https://dominicnikolai.github.io/project-243/assets/dg-minisetoys/';
const followers = 180_720;
const followed = 500;
const profileDescription =
  'Seja bem vindo ao multiverso do entretenimento!!! Miniaturas, Games, Colecionáveis Geek...';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 10;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  'JDM Anime Style 6!!! Honda NSX Senna... Wadada Dang Underground Style.  #dgminisetoys #jdmlifestyle #anime #jdmculture #senna #jdmnation #nsx #custom #wadadadang #japan #jdm #collectors #jdmlegend #hondansx #airtonsenna #japao #brasil #helsinkigamer',
  'JDM Anime Style 4!!! A saga continua... Wadada Dang Japan Underground #dgminisetoys #jdmlifestyle #anime #jdm #toys #japan #jdmlegend #lbwk #jdmnation #libertywalk #cars #carculture #wadadadang #japao #shibuya #tokyo #custom #brasil #helsinkigamer',
  'Vídeo game é uma terapia!!! #dgminisetoys #game #gamer #retrogames #nintendo #xbox #playstation #sega #brasil #geek #japan #nerd #usa #collectors #helsinkigamer',
  "Garagem com alguns carros icônicos da franquia 'Velozes e Furiosos' #dgminisetoys #velozesefuriosos #fastandfurious #nissan #skylinegtr #toyota #supra #mazda #rx7 #jdmlifestyle #toys #jdmculture #japan #cars #jdmnation #custom #jdmlegend #usa #cinema #filme #brasil #helsinkigamer",
  'Nissan Skyline GT-R 35 Liberty Walk!!! #dgminisetoys #libertywalk #jdm #nissan #jdmlifestyle #lbperformance #skyline #jdmculture #lbworks #jdmlegend #cars #gtr35 #custom #lbwk #japan #toys #jdmnation #skylinegtr #jdm #collectors #brasil #helsinkigamer',
  'Opel Kadett 1200S - No Brasil é conhecido como Chevette Tubarão #dgminisetoys #opel #kadett #gm #chevette #bbs #cars #chevrolet #custom #europe #tubarão #shark #chevy #1200s #brasil #collectors #race #helsinkigamer',
  'JDM Style!!! Japan Underground Race #dgminisetoys #cars #jdmculture #custom #jdmlegend #toys #japan #jdmnation #jdm #japao #jdmlegend #tokyo #shibuya #race #tokyoracing #brasil #helsinkigamer',
  'Aquela esticada!!! Voltinha básica com brinquedo de gente grande...🔥🔥🔥 #dgminisetoys #lamborghini #custom #toys #cars #race #motors #germany #racing #usa #collectors #turbo #v12 #brasil #helsinkigamer',
  'Toyota Supra - Anime e Mangá Style!!! #dgminisetoys #toyota #supra #cars #jdmnation #lbwk #anime #mangá #toys #jdmlifestyle #geek #toyotasupra #jdmlegend #libertywalk #custom #animeart #mangastyle #jdm #japan #jdmculture #japao #brasil #helsinkigamer',
  'JDM Anime Style!!! Japan Car Wadada Dang #dgminisetoys #cars #jdm #anime #wadadadang #lbwk #libertywalk #japan #custom #jdmlifestyle #geek #jdmlegend #japao#jdmnation #nerd #manga #toys #brasil #helsinkigamer'
];
const arrayDescriptionOfImages = [];

export const dg_minisetoys_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const dg_minisetoys_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const dg_minisetoys_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const dg_minisetoys_array_of_posts = [
  ...dg_minisetoys_images,
  ...dg_minisetoys_videos
];
