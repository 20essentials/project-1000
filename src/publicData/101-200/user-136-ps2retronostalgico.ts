import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ps2retronostalgico';
const userId = 'c89bdb1a-5590-4e05-9170-09390ecd74ce';
const prefixUrl = 'https://dominicnikolai.github.io/project-298/assets/ps2retronostalgico/';
const followers = 63_400;
const followed = 126;
const profileDescription = 'Aquí verás tu infancia resumida 🫶🏻';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🎮 Revive tu infancia con los mejores clásicos de PS2 🕹️ Si te gustaban estas joyas… esta cuenta es para ti. ¿Te acuerdas de este nivel de Toy Story 3? 👀 Sígueme para más juegos que marcaron época 🚀🔥 #PS2Classics #JuegosRetro #ToyStory3 #GamersNostálgicos #PlayStation2 #RetroGaming #ClásicosPS2 #GamerLatino #JuegosDeLaInfancia #VideojuegosRetro`, /*1*/
  `Clásico de clásicos en PS2 🎮🔥 Mortal Kombat Armageddon, el juego que reunió a todos los luchadores en una batalla épica llena de fatalities y acción sin límites. #MortalKombat #PS2Classics #Gamers #Fatality #RetroGaming  `, /*2*/
  `🔥 Urban Reign, uno de los beat’em up más intensos de PlayStation 2 💥 Peleas callejeras, combos brutales y un modo multijugador que marcó época 🎮 ¿Quién más lo jugó hasta el amanecer? 👊 #UrbanReign #PS2 #RetroGaming #BeatEmUp #PlayStation2 #Gamers #RetroGames #ClásicosPS2 #GamingLife`, /*3*/
  `🔥 Nostalgia pura en la pista 🏁✨ Crash Nitro Kart 🚗💨 uno de los clásicos más épicos de PS2, donde cada carrera era pura adrenalina, risas y competitividad con amigos. 🦊🍑 ¿Quién más pasó horas intentando ser el número 1? 🔥🎮 #CrashNitroKart #PS2Classics #GamersDeCorazón #RetroGaming #CrashBandicoot #Videojuegos #GamingTime #AdrenalinaGamer #PlayStation2`, /*4*/
  `Reviviendo la adrenalina de los clásicos de PS2 🎮🔥 Mx Unleashed y Mtx Mototrax marcaron una época donde las acrobacias y la velocidad lo eran todo 🏍️💨 ¿Quién más los jugó hasta gastar el control? 🚀 #PS2Classics #GamersRetro #Mototrax #MXUnleashed #RetroGaming #PlayStation2 #Adrenalina #Motocross #JuegosLegendarios #GamersLatam`, /*5*/
  `Correr por la selva, saltar lianas y pelear con fieras 🐆🌴 Tarzán en PS2 era pura adrenalina que nos tenía pegados al control 🎮🔥 #TarzanPS2 #RetroGaming #AventuraSelvática #JuegosPS2 #Gamers`, /*6*/
  `🔥 Reviviendo la leyenda de Kratos en la mejor época del PS2 🎮⚔️ #GodOfWar2 #PS2 #GamerNostalgia`, /*7*/
  `💣 Un clásico de PS2 que redefinió los shooters 🎮 En Black, cada bala se siente real, cada explosión retumba en el pecho y cada misión es puro caos 🔫🔥 👉 Para muchos, fue el FPS más épico de la consola, con gráficos que parecían de otra generación. ¿Lo jugaste en su tiempo o apenas lo conoces? 👀 #PS2 #Black #ShooterLegendario #RetroGaming #Gamer`, /*8*/
  `Desata la furia verde en las calles de la ciudad 🏙💥 Salta entre rascacielos, destruye todo a tu paso y siente el poder de Hulk en su máxima expresión 🟢🔥 #PS2 #Hulk #TheIncredibleHulk #RetroGaming #GamersColombia #Videojuegos #Acción #OpenWorld #GamingTime`, /*9*/ 
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

export const ps2retronostalgico_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ps2retronostalgico_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ps2retronostalgico_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ps2retronostalgico_array_of_posts = [
  ...ps2retronostalgico_images,
  ...ps2retronostalgico_videos
];
