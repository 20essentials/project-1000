import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'thefilmthusiasts';
const userId = '0aee6b2d-1e3e-4d03-beaf-f416a33c3464';
const prefixUrl = 'https://dominicnikolai.github.io/project-302/assets/thefilmthusiasts/';
const followers = 1_600_722;
const followed = 50;
const profileDescription = 'Made by Film Enthusiasts for Film Enthusiasts';
const prefixLetterVideos = 'v';
const quantityOfVideos = 16;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `June 2005: Christopher Nolan changed everything. Batman Begins didn’t just reboot a franchise, it redefined what superhero movies could be. Christian Bale lost 63 pounds for The Machinist, then had just 6 months to bulk up into Batman. He gained so much muscle that Nolan had to tell him to slow down. Bale had gotten TOO big for the suit.`, /*1*/
  `While filming Tenet in 2019, Pattinson got called in to audition for The Batman - but there was one problem: he was already committed to Nolan’s ultra-secretive production. So Pattinson did what any reasonable actor would do: he lied to one of the most detail-oriented directors in Hollywood. Pattinson told Nolan he had a “family emergency” and needed to leave set, hoping to sneak away for his Batman screen test. But Nolan, the master of keeping secrets himself, saw right through it immediately. The irony wasn’t lost on Pattinson: “It’s funny because Chris is so secretive about everything to do with his movies. And then I had to be really secretive about Batman stuff.” Despite being caught in the act, Nolan was reportedly understanding about the situation.`, /*2*/
  `he story behind one of cinema’s most controversial “inspirations.” Darren Aronofsky bought the American remake rights to Satoshi Kon’s Perfect Blue specifically to recreate that iconic bathtub scene in Requiem for a Dream - an overhead shot of the character followed by her screaming underwater. When Kon saw it, he was less than thrilled, saying he was “a little embarrassed to see scenes I had seen somewhere before.” Aronofsky claimed it was an homage.`, /*3*/
  `Christopher Nolan has always been a filmmaker who chooses practical effects over CGI whenever possible, believing that what happens in front of the camera creates a more authentic experience. With Oppenheimer, he took this philosophy to the extreme - creating an entire film about the atomic bomb without using a single CGI shot. Instead of relying on digital effects, his team used massive cloud tanks filled with spinning beads on wires, aluminum flakes, pieces of wood, and burning thermites, all captured on 65mm IMAX cameras. They even used real explosives to recreate the Trinity test, experimenting with different shutter speeds and color techniques that Nolan described as “like a giant playground.`, /*4*/
  `That final race scene where Sonny is absolutely flying 🏎️💨 The way they shot his maiden victory with those camera angles and that pace... if you know, you know. Pure Senna Monaco ‘84 vibes when he drove that Toleman like it was on rails in the wet.

They actually used real modified F2 cars instead of CGI makes those high-speed sequences hit different.`, /*5*/
  `Wow`, /*6*/
  `Only Heath Ledger would stay perfectly in character when a $11 million explosion doesn’t go as planned. 💣

For The Dark Knight’s hospital destruction scene, the pyrotechnic sequence hit a brief delay - but Ledger never broke. While the Joker should have walked away from a seamless blast, the pause created an unexpected beat that Ledger filled with pure character instinct.

The slight hesitation and fidgeting with the detonator wasn’t scripted - it was Ledger’s split-second decision to stay as the Joker when the real world interrupted. Nolan kept the cameras rolling, recognizing that sometimes the best moments happen when plans go sideways.

What could have been a costly reshoot became the scene’s most memorable moment. Ledger turned a technical glitch into character gold, proving why his Joker remains unmatched.`, /*7*/
  `“The greatest trick the devil ever pulled...”

The Usual Suspects delivered one of cinema’s most jaw-dropping endings when we realize the seemingly disabled Verbal Kint drops his limp and transforms into the legendary Keyser Söze, revealing that everything we’ve been told was an elaborate lie fabricated from random objects in the police station. That iconic final line about the devil was actually pulled directly from French poet Charles Baudelaire, and Kevin Spacey even had his fingers glued together to make his disability seem more realistic!`, /*8*/
  `The show that changed TV forever and gave us the greatest anti-hero of all time!

James Gandolfini was so convincing as Tony Soprano that real wiseguys would call him to compliment his performance – one even critiqued his BBQ shorts in the pilot.`, /*9*/ 
  `“Literally me” in Ryan Gosling’s nameless Driver defined stoic cool in Nicolas Winding Refn’s neon-soaked masterpiece 🌃

Gosling did his own stunts after completing a crash course and literally rebuilt the iconic 1973 Chevelle Malibu himself, taking it apart piece by piece. Based on James Sallis’ 2005 noir novel about a Hollywood stuntman who moonlights as a getaway driver. The film won Best Director at Cannes and grossed over $75 million worldwide.`, /*10*/
  `M. Night Shyamalan’s breakthrough film hits its 26th anniversary today. What started as a $40 million budget became a $672 million worldwide phenomenon, earning six Oscar nominations including Best Picture.

The film’s twist ending became a cultural touchstone, proving that psychological horror could be both critically acclaimed and commercially successful. It launched Shyamalan’s career and remains his highest-grossing film to date.`, /*11*/
  `They don’t make comedies like this anymore 😂 Superbad (2007) One of the best comedy films of our`, /*12*/
  `While we’re all just living in linear time, Christopher Nolan’s been bending it, folding it, and making us question it for decades. From Memento’s reverse narrative to Inception’s layered dreams to Tenet’s temporal inversions. He doesn’t just tell stories, he reconstructs how we experience them.

The man who made us fall in love with confusion and left us googling “Nolan endings explained” at 2am. What do you think was his best film so far? 💭`, /*13*/
  `“I believe we did...” 🥶 That haunting final line from Oppenheimer hits different when you realize we’re living through AI’s atomic moment.

THE PARALLELS ARE EERIE:
- AI officially born in 1956 at Dartmouth - just 11 years after Hiroshima
- OpenAI’s CEO literally shares Oppenheimer’s birthday and compared his company to the Manhattan Project
- Alan Turing laid the foundation but died in 1954 - never seeing his vision realized

Christopher Nolan said there are “very strong parallels” between Oppenheimer and today’s AI scientists urging caution

Oppenheimer (2023) was released 2 years ago today`, /*14*/
  `24 years ago today, Hayao Miyazaki’s masterpiece Spirited Away first enchanted Japanese audiences before becoming a global phenomenon. The film went on to become the highest-grossing movie in Japanese history and the first anime to win an Academy Award for Best Animated Feature.

Miyazaki created this entire epic without ever writing a script. He famously said, “I don’t have the story finished and ready when we start work on a film,” allowing the story to evolve organically during production. The result was pure cinematic alchemy that transported millions into Chihiro’s mysterious spirit world. ✨

How much would you rate it? Is this Miyazaki’s best work?`, /*15*/
  `17 years ago today, The Dark Knight changed cinema forever 🃏

On July 18, 2008, Heath Ledger’s haunting portrayal of the Joker hit theaters, delivering a performance so transcendent it would earn him a posthumous Oscar just months later. At only 28, Ledger had created something truly legendary.

He became the second actor ever to win a posthumous Oscar for acting, and the first comic book movie actor to win an Oscar for their performance. His Joker wasn’t just a villain - it was a masterclass in acting that redefined what superhero cinema could be.`, /*16*/
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

export const thefilmthusiasts_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const thefilmthusiasts_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const thefilmthusiasts_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const thefilmthusiasts_array_of_posts = [
  ...thefilmthusiasts_images,
  ...thefilmthusiasts_videos
];
