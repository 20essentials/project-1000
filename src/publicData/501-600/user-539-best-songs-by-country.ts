import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'best_songs_by_country';
const userId = '';
const prefixUrl = '';
const followers = 71_832;
const followed = 114;
const profileDescription = `Subscribe to see all of them 👀`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 48;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #iceland`, /*1*/
  `✨Lost in the beautiful sounds of Gaby Moreno's 'Quizás, Quizás, Quizás' 🎶✨ A timeless classic that captivates the heart and soul. Who else feels this vibe? 💖 #GabyMoreno #QuizásQuizásQuizás #MusicMagic #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry`, /*2*/
  `Artist - Juan Luis Guerra Song - Lámpara Pa' Mis Pies ✨ Let the rhythm of 'Lámpara Pa' Mis Pies' light up your day! 🎶💖 Celebrating the brilliance of Juan Luis Guerra and his timeless melodies. #JuanLuisGuerra #BachataMagic #LámparaPaMisPies #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry`, /*3*/
  `Artist - Eleni Foureira
Song - Fuego
🔥 Let the rhythm of 'Fuego' ignite your soul! ✨ Dance like no one’s watching and feel the heat of the moment! 💃🎶 #EleniFoureira #Fuego #DanceVibes
#songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry`, /*4*/
  `Artist - Bob Marley
Song - No Women No Cry
Feeling the vibes of resilience and love 🎶✨ 'No Woman, No Cry' reminds us to cherish the moments and keep holding on. Let the music heal your soul! 🌍❤️ #BobMarley #ReggaeVibes #NoWomanNoCry #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry`, /*5*/
  `Let the smooth vibes of Fiji-lia transport you to paradise 🌊✨ A perfect blend of rhythm and soul, this track feels like sunshine on your playlist. 🎶🌺 Who else is vibing to this? 🔥 Fiji-Lia(Audio) #Fijilia #GoodVibesOnly #MusicForTheSoul #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #fiji #fijilia`, /*6*/
  `The song talks about the feelings of attachment and emotional ties in a relationship, using the metaphor of a “magic rope” that binds two people together, even when things become difficult. It resonates with many listeners because of its powerful lyrics and melody. Labanoon is a well-known band in Thailand, recognized for blending rock music with Thai cultural elements. If you’re interested in hearing the song, it’s widely available on streaming platforms like YouTube, Spotify, and Apple Music. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry`, /*7*/
  `”Zuzulienka” is a popular song by the Slovak group Mafia Corner, released in 2016. Mafia Corner is known for their remixes and modern interpretations of traditional folk songs, blending them with contemporary pop and electronic music elements. “Zuzulienka” is a prime example of how traditional Slovak melodies and motifs can be reimagined and presented in a modern style, making them popular among younger audiences. The song gained widespread recognition in Slovakia and beyond, becoming a hit on various platforms, including YouTube, where it garnered millions of views. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #slovakia`, /*8*/
  `The song *”Mooz”* by **Ninety One** is one of the most popular tracks from this Kazakhstani Q-pop group, released in 2019. *”Mooz”* quickly gained popularity among the group’s fans, garnering millions of views on YouTube.

Ninety One, as pioneers of the Q-pop genre, have significantly contributed to the evolution of Kazakhstani pop music. *”Mooz”*, along with other hits like *”Ayaz”*, *”Su Asty”*, and *”Yeski Taspa”*, have become iconic songs representing a new musical direction in Kazakhstan, blending Western and Kazakhstani musical elements. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #kazakhstan`, /*9*/ 
  `”Waka Waka (This Time for Africa)” by Shakira was the official song of the 2010 FIFA World Cup held in South Africa. The song is based on the 1986 hit Zangaléwa” by the Cameroonian group Golden Sounds. It became a global hit, celebrating unity and diversity, and is one of the most iconic World Cup anthems ever. The music video features Shakira dancing and highlights from past World Cups, making it a massive success worldwide. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry`, /*10*/
  `«Despacito» by Luis Fonsi and Daddy Yankee, released in 2017, became a global sensation with its catchy reggaeton beat and romantic lyrics. The song topped charts worldwide, breaking records for streaming and viewership, and its remix featuring Justin Bieber further boosted its international success. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #puertorico`, /*11*/
  `«Me Rehúso» is the debut single by Venezuelan singer and songwriter Danny Ocean. The song was released in September 2016 and quickly became a global hit, gaining widespread popularity and going viral. An interesting fact about «Me Rehúso» is that Danny Ocean wrote the song as a dedication to a girl he left behind in Venezuela when he was forced to emigrate due to the political and economic situation in the country. In the song, he expresses his regret about the separation but refuses to let go of his feelings. «Me Rehúso» became especially popular in Latin America and Spain, and it also reached high positions on charts in many other countries. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #venezuela`, /*12*/
  `The song is a blend of rock and alternative music, characterized by its powerful vocals and guitar riffs. The lyrics, written in Filipino, describe intense emotions of love and longing, using the moon (“buwan”) as a metaphor for a lover who illuminates the singer’s life.

“Buwan” also became notable for its unique music video, which was praised for its artistic direction. The song’s success significantly boosted Juan Karlos’ career, establishing him as one of the leading young artists in the Philippine music scene. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #phillipines`, /*13*/
  `«Allegro Ventigo» is a song by Slovak rapper Majk Spirit featuring Ego, released in 2018. The track quickly gained popularity due to its energetic beat and catchy chorus, blending elements of pop and rap. It’s a notable example of contemporary Slovak music that resonated well with audiences, showcasing both artists’ dynamic styles. The song’s lively rhythm and memorable lyrics made it a hit on Slovak charts and among fans of modern Central European pop-rap music. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbystate #songbystate #musicbystate #moldova`, /*14*/
  `“Guantanamera” is one of the most famous Cuban songs and has become a symbol of Cuban national identity. The title translates to “The Girl from Guantánamo,” referring to the Guantánamo region in eastern Cuba.

Originally, “Guantanamera” was a simple folk song in the guajira genre (a traditional Cuban music style), but it gained worldwide recognition after Cuban composer Joséíto Fernández adapted it and incorporated verses by José Martí from his poetry collection “Versos Sencillos” (“Simple Verses”). Martí’s verses convey themes of freedom, justice, and patriotism, which resonate deeply with Cuban culture. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #cuba`, /*15*/
  `«Te Ka Lali Shpirt» is a popular Albanian song performed by Silva Gunbardhi, featuring Mandi and Dafi Derti.`, /*16*/
  `2Cellos’ rendition of «Thunderstruck» by AC/DC is a high-energy cover that showcases their unique style. The duo, consisting of Luka Šulić and Stjepan Hauser, brings a powerful and dynamic twist to the classic rock song using their cellos. Their performance is known for its intensity and impressive technique, blending classical elements with rock flair. The video of their performance often features a dramatic, high-octane style that complements the song’s electrifying energy. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #croatia`, /*17*/
  `Mongolia as i thought is very cool song 😎😎😎 yuve yuve yuuuuu #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #mongolia #yuveyuveyu`, /*18*/
  `Op op op op…. Gangnam style😎 Write your opinion in comments below ⬇️ #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #korea #southkorea`, /*19*/
  `The lyrics of the song sing about love and life, permeated with subtle lyrics and a unique melody that creates an atmosphere of immersion and thoughtfulness. #song #music #musicvideo #songs #bestsong #rec #fyp #bestsongbycountry #songbycountry #musicbycountry #Georgia

`, /*20*/
  `It is hard with Luxemburg due to it size. So I decided to take song from Eurovision. #songs #song #music #bestsongbycountry #musicvideo #bestsong #rec #fyp #songbycountry #musicbycountry #luxembourg`, /*21*/
  ` I think that’s song is something unique #songs #song #music #bestsongbycountry #musicvideo #bestsong #rec #fyp #songbycountry #musicbycountry #belgium`, /*22*/
  `#song #music #bestsongbycountry #musicvideo #bestsong #songbycountry #rec #fyp #musicbycountry #armenia`, /*23*/
  `#songs #song #music #bestsongbycountry #musicvideo #bestsong #songbycountry #fyp #rec #musicbycountry #chile`, /*24*/
  `#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #austria`, /*25*/
  `Of course sandstorm. Finland is crazy ! 😎#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #finland`, /*26*/
  `#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #indonesia`, /*27*/
  `#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #czechrepublic`, /*28*/
  `Hope that you are agree now. Argentina!!! 🇦🇷 #songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #argentina`, /*29*/
  `😎.#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #newzeland`, /*30*/
  `😅.#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry`, /*31*/
  `#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #australia`, /*32*/
  ` 😎👇#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #canada
`, /*33*/
  `#songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #malta`, /*34*/
  `👇 #songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #sweden`, /*35*/
  ` #songs #song #music #bestsongbycountry #musicvideo #rec #bestsong #songbycountry #fyp #musicbycountry #mexico`, /*36*/
  `#songs #song #music #bestsongbycountry #musicvideo #songbycountry #rec #bestsong #fyp #musicbycountry #estonia`, /*37*/
  `#songs #song #music #bestsongbycountry #musicvideo #songbycountry #rec #bestsong #fyp #musicbycountry #nirvana #usa  `, /*38*/
  `#songs #song #music #bestsongbycountry #musicvideo #songbycountry #rec #bestsong #fyp #musicbycountry #norway`, /*39*/
  `#songs #song #music #bestsongbycountry #musicvideo #songbycountry #rec #bestsong #fyp #musicbycountry #denmark`, /*40*/
  `#songs #song #music #bestsongbycountry #musicvideo #songbycountry #rec #bestsong #fyp #Japan`, /*41*/
  `#songs #song #music #bestsongbycountry #musicvideo #songbycountry #rec #bestsong #fyp`, /*42*/
  `🤘! #songs #song #music #bestsongbycountry #musicvideo #songbycountry #bestsong #rec #fyp`, /*43*/
  `#song #songs #music #songbycountry #bestsongbycountry #musicvideo`, /*44*/
  `#song #songs #music #musicvideo #bestsong #unitedkingdom`, /*45*/
  `#music #song #songbycountry #bestsongbycountry #germany #rec #fyp`, /*46*/
  `#song #music #musicvideo #france #songbycountry #bestsongbycountry #music`, /*47*/
  `#music #musicbycountry #bestsongbycountry #song #italy`, /*48*/
  ``, /*49*/
  ``, /*50*/
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

export const best_songs_by_country_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const best_songs_by_country_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const best_songs_by_country_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const best_songs_by_country_array_of_posts = [
  ...best_songs_by_country_images,
  ...best_songs_by_country_videos
];
