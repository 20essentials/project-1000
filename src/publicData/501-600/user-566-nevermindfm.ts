import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'nevermindfm';
const userId = '9f946bfa-4598-4007-953b-fd292bfcb1bc';
const prefixUrl = 'https://dominicnikolai.github.io/project-371/assets/nevermindfm/';
const followers = 3_732_832;
const followed = 148;
const profileDescription = `Music and...`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 152;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Daft Punk - Get Lucky ft. Pharrell Williams, Nile Rodgers`, /*1*/
  `Arctic Monkeys - Why'd You Only Call Me When You're High`, /*2*/
  `Hozier - Take Me To Church`, /*3*/
  `Red Hot Chili Peppers - Dark Necessities`, /*4*/
  `Milky Chance - Stolen Dance`, /*5*/
  `Portugal. The Man - Feel It Still
`, /*6*/
  `Rag'n'Bone Man - Human`, /*7*/
  `Kate Bush - Running up that Hill`, /*8*/
  `Heart - Alone`, /*9*/ 
  `Whitney Houston - I Wanna Dance With Somebody
`, /*10*/
  ` Madonna - Like a Virgin`, /*11*/
  `Cyndi Lauper - Girls Just Wanna Have Fun
`, /*12*/
  `Laura Branigan - Self Control`, /*13*/
  `Kim Wilde - You Keep Me Hangin On
`, /*14*/
  `Alphaville - Forever Young`, /*15*/
  `The Police - Every Breath You Take
`, /*16*/
  `a-ha - Take On Me`, /*17*/
  `Michael Jackson - Smooth Criminal`, /*18*/
  `Madonna - La Isla Bonita`, /*19*/
  `Toto - Africa`, /*20*/
  `Modern Talking - Brother Louie`, /*21*/
  `Bon Jovi - Livin’ On Prayer
`, /*22*/
  `Culture Club - Karma Chameleon
`, /*23*/
  `Wham! - Wake Me Up Before You Go-Go`, /*24*/
  `Berlin - Take My Breath Away
`, /*25*/
  `Journey - Don’t Stop Believin’
`, /*26*/
  `Roxette - Listen To Your Heart
`, /*27*/
  `The Outfield - Your Love
`, /*28*/
  `Simple Minds - Don’t You
`, /*29*/
  `Earth, Wind & Fire - Let’s Groove`, /*30*/
  `Starship - Nothing’s Gonna Stop Us Now
`, /*31*/
  `Richard Marx - Right Here Waiting
`, /*32*/
  `Tears For Fears - Shout`, /*33*/
  `Gipsy Kings - Bamboléo`, /*34*/
  `Nino Bravo - Un Beso y una Flor
`, /*35*/
  `Santana - Corazon Espinado ft. Mana
`, /*36*/
  `Sound of Silence - Disturbed`, /*37*/
  `Hurt - Johnny Cash`, /*38*/
  `Bananarama - Venus`, /*39*/
  `Dead Or Alive - You Spin Me Round
`, /*40*/
  `Kim Wilde - Kids in America
`, /*41*/
  `Harold Faltermeyer - Axel F
`, /*42*/
  `Midnight Oil - Beds Are Burning
`, /*43*/
  `Adele - Rolling in the Deep part 1`, /*44*/
  `Adele - Rolling in the Deep part 2`, /*45*/
  `Enrico Macias - Zingarella
`, /*46*/
  `Edith Piaf - La Vie En Rose
`, /*47*/
  `Edith Piaf - La Foule
`, /*48*/
  `Corynne Charby - Boule de flipper
`, /*49*/
  `Desireless - Voyage, Voyage
`, /*50*/
  `Phil Collins - Another Day in Paradise
`, /*51*/
  `Whitesnake - Is This Love
`, /*52*/
  `Bryan Adams - Heaven
`, /*53*/
  `Tears For Fears - Everbody Wants To Rule The World
`, /*54*/
  `Alphaville - Big In Japan
`, /*55*/
  `Michael Jackson - Beat It
`, /*56*/
  `Kool & The Gang - Celebration
`, /*57*/
  `Bruce Springsteen - Dancing In The Dark
`, /*58*/
  `Madonna - Like A Prayer
`, /*59*/
  `Billy Idol - Eyes Without A Face
`, /*60*/
  `Billy Ocean - Caribbean Queen
`, /*61*/
  `Foreigner - I Want To Know What Love Is
`, /*62*/
  `The Human League - Don’t You Want Me
`, /*63*/
  `Phil Collins - In The Air Tonight
`, /*64*/
  `Darly Hall & John Oates - Maneater
`, /*65*/
  `Paul Anka - Diana
`, /*66*/
  `The Chordettes - Lollipop`, /*67*/
  `Gene Kelly - Singin In The Rain
`, /*68*/
  `Bill Haley & His Coment - Rock Around The Clock
`, /*69*/
  `Jerry Lee Lewis - Great Balls of Fire
`, /*70*/
  `Paul Anka - Put Your Head on My Shoulder
`, /*71*/
  `The Animals - The House of the Rising Sun
`, /*72*/
  `The Mamas & the Papas - California Dreamin'
`, /*73*/
  `Neil Diamond - Sweet Caroline
`, /*74*/
  `Elvis Presley - Hound Dog
`, /*75*/
  `James Brown - I Feel Good
`, /*76*/
  `The Beatles - Yesterday
`, /*77*/
  `The Jackson 5 - I Want You Back
`, /*78*/
  `Bee Gees - Stayin’ Alive
`, /*79*/
  `Boney M - Rasputin
`, /*80*/
  `ABBA - Gimme! Gimme! Gimme!
`, /*81*/
  `Kiss - I Was Made For Lovin’ You
`, /*82*/
  `Toto - Hold The Line
`, /*83*/
  `Earth, Wind & Fire - September
`, /*84*/
  `Michael Jackson - Rock With You
`, /*85*/
  `Kool & The Gang - Ladies’ Night
`, /*86*/
  `Chic - Le Freak
`, /*87*/
  `Donna Summer - Hot Stuff
`, /*88*/
  `Fleetwood Mac - Dreams
`, /*89*/
  `Bobby Caldwell - What You Won’t Do for Love`, /*90*/
  `Blondie - One Way Or Another
`, /*91*/
  `Eruption - One Way Ticket
`, /*92*/
  `Electric Light Orchestra - Last Train To London
`, /*93*/
  `Tina Charles - I Love To Love
`, /*94*/
  `Linkin Park - In The End`, /*95*/
  `Evanescence - My Immortal
`, /*96*/
  `Green Day - 21 Guns
`, /*97*/
  `Red Hot Chilli Peppers - Can’t Stop
`, /*98*/
  `Audioslave - Be Yourself
`, /*99*/
  `Keane - Everybody’s Changing
`, /*100*/
  `Coldplay - Clocks
`, /*101*/
  `Muse - Starlight
`, /*102*/
  `Avril Lavigne - Complicated
`, /*103*/
  `Nickelback - How You Remind Me
`, /*104*/
  `My Chemical Romance - Helena
`, /*105*/
  `Kings Of Leon - Sex On Fire
`, /*106*/
  `Hoobastank - The Reason
`, /*107*/
  `Paramore - Decode`, /*108*/
  `The Calling - Wherever You Will Go
`, /*109*/
  `MAGIC! - Rude
`, /*110*/
  `Foster The People - Pumped Up Kicks
`, /*111*/
  `Linkin Park - Crawling
`, /*112*/
  `Three Days Grace - I Hate Everything About You
`, /*113*/
  `Green Day - Wake Me Up When September Ends
`, /*114*/
  `Depeche Mode - Enjoy The Silence`, /*115*/
  `Red Hot Chili Peppers - Californication
`, /*116*/
  `Scorpions - Wind Of Change
`, /*117*/
  `Nirvana - Smells Like Teen Spirit
`, /*118*/
  `Oasis - Wonderwall
`, /*119*/
  `AC/DC - Thunderstruck
  `, /*120*/
  `Aerosmith - I Don't Want to Miss a Thing
`, /*121*/
  `The Black Eyed Peas - Shut Up
`, /*122*/
  `M.I.A. - Paper Planes
`, /*123*/
  `Nelly Furtado - Promiscuous
`, /*124*/
  `Madcon - Beggin'
`, /*125*/
  `Corona - The Rhythm Of The Night
`, /*126*/
  `Londonbeat - I've Been Thinking About You
`, /*127*/
  `Eiffel 65 - Blue (Da Ba Dee)
`, /*128*/
  `Darude - Sandstorm
`, /*129*/
  `La Bouche - Be My Lover
`, /*130*/
  `Culture Beat - Mr. Vain
`, /*131*/
  `The Prodigy - Smack My Bitch Up
`, /*132*/
  `SNAP! - The Power
`, /*133*/
  `C+C Music Factory - Gonna Make You Sweat
`, /*134*/
  `The Verve - Bitter Sweet Symphony`, /*135*/
  `Keane - Somewhere Only We Know
`, /*136*/
  `Muse - Uprising
`, /*137*/
  `Radiohead - No Surprises
`, /*138*/
  `Gorillaz - Clint Eastwood
`, /*139*/
  `Arctic Monkeys - Do I Wanna Know?
`, /*140*/
  `The Cure - Friday I’m in Love`, /*141*/
  `Blur - Song 2
`, /*142*/
  `Franz Ferdinand - Take Me Out
`, /*143*/
  `The Smiths - Heaven Know I’m Misarable Now
`, /*144*/
  `Kaiser Chiefs - Ruby
`, /*145*/
  `Kasabian - Fire
`, /*146*/
  `Stereophonics - Maybe Tomorrow
`, /*147*/
  `utting Crew - (I Just) Died In Your Arms`, /*148*/
  `Kenny Loggins- Danger Zone
`, /*149*/
  `Ice Cube - You Know How We Do It
`, /*150*/
`Dr. Dre & Snoop Dogg - The Next Episode` /* 151 */,
`Darly Hall & John Oates - Out of Touch
` /* 152 */,
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

export const nevermindfm_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const nevermindfm_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const nevermindfm_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const nevermindfm_array_of_posts = [
  ...nevermindfm_images,
  ...nevermindfm_videos
];
