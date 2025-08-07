import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'jiraiya_fanboy';
const userId = '';
const prefixUrl = '';
const followers = 78_720;
const followed = 108;
const profileDescription = 'Edits';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 14;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  `Sunflower - - - #spidermanintothespiderverse #spidermanacrossthespiderverse #spidermanbeyondthespiderverse #spidermanacrossthespiderverseedit #milesmorales #milesmoralesedit #gwenstacy #gwenstacyedit #spiderman #cooperation #vertical #amv #animedrawing #aesthetics #fanart #wallpaper #xybca #aiart #generativeai #explorepage✨ #fyp #fypviral #reels #newbeginnings #enjoy`,
  "greatest spiderman of all time",
  "Mysterious Void. Song : LONOWN, riserayss - jessie (slowed) #maisonmargiela #angelcore #aesthetic #aesthetics #aestheticedits #darkcore #dreamcore #radiohead #grain #mixedmedia #edit #edits #vfx #sfx #xybca #explorepage #fyp #reels #enjoy",
  "For 6 months, I couldn’t sleep. #fightclub #bradpitt #aesthetic #aesthetics #aestheticedits #darkcore #explorepage #fyp #reels #enjoy",
  "Trance ♾️ - Like, comment & reshares rly appreciated 🖤 - - Olddd hc edit, which I finished :p - - - Tags 🏷 : #jjk #jujutsukaisen #jujustukaisenedit #jujutsukaisenseason2 #satorugojo #gojosatoru #gojo #itadori #sukuna #ryomensukuna #gojosatoruedit #xybca #fanart #fanedit #manga #jjkmanga #amv #vibe #edit #fyp #fypシ #reels #explorepage✨ #enjoy",
  "New Beginnings. - - Smt light to stay active. Just me doing sfx :) This game trailer looks insane @bungie - - - Tags 🏷 : #marathon #marathongame #bungiemarathon #frankocean #blonde #frankoceanedit #crt #retro #sfx #sounddesign #graphicdesign #gmv #vibe #videoedit #edit #xybca #fanedit #fanart #aesthetic #aestheticedits #instagood #omgpage #viral #fyp #fypシ #reels #explorepage✨ #enjoy",
  "Remember Me. - Like, comment and reshares r rly appreciated 🖤 - - Smth to get me back into editing again :p - - - - Tags 🏷 : #aot #attackontitan #attackontitanseason4 #shingekinokyojin #erenjaeger #mikasaackerman #levi #eren #mikasa #erenyeager #otaku #kof #xybca #fanart #manga #aotmanga #amv #vibe #edit #fyp #fypシ #reels #explorepage✨ #enjoy",
  "Desolate - - - #tokyoghoul #tokyoghouledit #kaneki #kanekiedit #rizekamishiro #rizekamishiroedit #tokyoghoulmanga #fyp #amv #animeedits #animedrawing #animetan #explorepage✨ #aesthetics #fanart #xybca #aiart #generativeai #manga #fypp #fypviral #fypシ゚#enjoy",
  " #sasuke #sasukeuchiha #sasukeuchihaedit #killerbee #eighttails #akatuski #xybca #fanart #manga #art #amv #typography #hyp...",
  "| 1995 - Like comment and reshares r rly appreciated 🖤 - - Ib : @neptunecowboy - - - - Tags 🏷 : #jujutsukaisen #jujutsukaisenedit #xybca #fanart #manga #art #amv #typography #hype #edit #fyp #fypシ #explorexplore #enjoy #retroaesthetic #1995 #retro",
  " #bleach #bleachthousandyearsbloodwar #unohana #fanart #manga #aftereffects #amv #amvedit #edit #aftere...",
  " #vibeedit #dandadan #dandadanmanga #dandadanedit #okarun #ayasemomo #jiji #aira #fanart #manga #aftereffects #amv #amvedit #edit #aftereffectsedit #ex",
  "#hirodarlinginthefranxx #darlinginthefranxx #darling_in_the_franxxx #darlinginfranxxx #darlinginthefranxxcosplay #ae #twixtor #animevibes #animeboy #amvflow #aftereffects #amvedit #anime #edit #aftereffectsedit #explorexplore #amveditor #aftereffects #aeedit",
  "#madara #uchihaedit #narutoedit #madarauchiha #sasuke #sasukeuchiha #kakashi #naruto #narutoshippuden #narutoamvs #narutoamv #narutoedit #narutoedits #madaraedit #sasukeedit #ae #twixtor #animevibes #animeboy #opm #opmedit #aftereffects #amv #amvedit #anime #edit #aftereffectsedit #explorexplore #amveditor #aftereffects #aeedit"
];
const arrayDescriptionOfImages = []

export const jiraiya_fanboy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const jiraiya_fanboy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId
});

const jiraiya_fanboy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const jiraiya_fanboy_array_of_posts = [
  ...jiraiya_fanboy_images,
  ...jiraiya_fanboy_videos
];
