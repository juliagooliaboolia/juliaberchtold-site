// Photography data. Photos live in public/img/p/. To swap photos, edit these lists.
// o = orientation: 'p' portrait (tall), 'l' landscape (wide).

// Gallery titles, words and blurbs live in src/content/site-copy.yml
import { COPY } from './copy.js';
export const CATEGORIES = Object.fromEntries(Object.entries(COPY.photography.galleries).map(([k, g]) => [k, {
  title: g.title, word: g.word, link: g.link, blurb: g.blurb, story: { title: g.story_title, meta: g.story_meta },
}]));

// The set shown on each category page (and its story page), in order: [file, o, alt]
export const SETS = {
  weddings: [
    ['p/wed-ko-1.jpg', 'p', "Bride laughing with a bright bouquet"],
    ['p/wed-ko-3.jpg', 'p', "The couple laughing together, bouquet in hand"],
    ['p/wed-ko-2.jpg', 'p', "Couple kissing behind the bouquet as confetti falls"],
    ['p/wed-ko-4.jpg', 'p', "Bride laughing against a stone wall"],
    ['p/wed-ko-5.jpg', 'p', "The couple walking down a city street, seen from behind"],
  ],
  family: [
    ['p/fam-hayly-1.jpg', 'p', "Mother smiling down at her newborn in golden light"],
    ['p/fam-hayly-8.jpg', 'p', "Father, newborn and dog asleep on the sofa, in black and white"],
    ['p/fam-hayly-7.jpg', 'l', "Father and newborn asleep, in black and white"],
    ['p/fam-hayly-4.jpg', 'p', "Parents leaning in over their newborn"],
    ['p/fam-hayly-6.jpg', 'l', "Tiny feet beside the family dog"],
    ['p/fam-hayly-2.jpg', 'p', "New parents smiling, baby carrier on his chest, in black and white"],
    ['p/fam-hayly-5.jpg', 'p', "Newborn asleep, in black and white"],
    ['p/fam-hayly-3.jpg', 'p', "Newborn on a checked blanket, in black and white"],
  ],
  people: [
    ['p/por-laurel-2.jpg', 'p', "Woman smiling, in black and white"],
    ['p/por-madeline.jpg', 'p', "Woman lit by projected flowers"],
    ['p/por-italy.jpg', 'p', "Two friends with a scarf caught in the wind above Rome"],
    ['p/por-ni.jpg', 'p', "A couple cheek to cheek, in black and white"],
    ['p/por-moz-3.jpg', 'p', "Woman laughing in a patterned skirt, Mozambique"],
    ['p/por-kat-1.jpg', 'p', "Woman mid-jump on a snowy terrace, in black and white"],
    ['p/por-melandsof.jpg', 'p', "Two friends embracing at sunset"],
    ['p/por-teamlab.jpg', 'p', "Woman in a room of projected flowers"],
    ['p/por-centralpark.jpg', 'p', "Accordion player in Central Park"],
    ['p/por-billandgma.jpg', 'p', "Two people laughing, one in novelty glasses, in black and white"],
    ['p/por-dad-1.jpg', 'p', "A man raising a glass by the water"],
  ],
  community: [
    ['p/evt-aca-6.jpg', 'p', "Honoree holding her award at a charity gala"],
    ['p/evt-aca-1.jpg', 'l', "Guests posing together at a charity gala"],
    ['p/evt-aca-3.jpg', 'p', "Two women with a bouquet at a charity gala"],
    ['p/evt-aca-2.jpg', 'p', "A speaker at the podium beside a screen"],
    ['p/evt-aca-4.jpg', 'p', "Guests laughing at a charity gala"],
    ['p/evt-aca-5.jpg', 'p', "A couple in pink and green on a lantern-lit terrace"],
  ],
  travel: [
    ['p/trv-tofo-1.jpg', 'p', "Three friends walking into the sea at sunset, Tofo"],
    ['p/trv-italy-trecime-1.jpg', 'l', "The Dolomites framed by a cave mouth, Tre Cime"],
    ['p/trv-italy-rome-4.jpg', 'p', "Ponte Sisto at golden hour, Rome"],
    ['p/trv-chefchaouen-2.jpg', 'l', "Mother and child in a blue alley, Chefchaouen"],
    ['p/trv-kruger-3.jpg', 'p', "Lioness stalking through the grass, Kruger"],
    ['p/trv-wyoming-1.jpg', 'l', "Jagged peaks above the clouds at dusk, Wyoming"],
    ['p/trv-italy-rome-1.jpg', 'p', "Piazza del Popolo from above, Rome"],
    ['p/trv-italy-sardegna-1.jpg', 'p', "Black horse among the shrubs, Sardinia"],
    ['p/trv-utah-4.jpg', 'l', "Red sandstone slot canyon, Utah"],
    ['p/trv-moz-1.jpg', 'p', "Woman carrying a child, Mozambique"],
    ['p/trv-italy-emiliaromagna.jpg', 'p', "Dark grapes on the vine, Emilia-Romagna"],
    ['p/trv-italy-rome-5.jpg', 'p', "Bernini sculpture, in black and white, Rome"],
  ],
};

// The 21 photos floating on the Photography landing page, in Julia's order:
// [category, file, orientation, handwritten word, alt]
export const FIELD = [
  ["weddings", 'p/wed-ko-1.jpg', 'p', "romance", "Bride laughing with a bright bouquet"],
  ["travel", 'p/trv-wyoming-1.jpg', 'l', "grandeur", "Jagged peaks above the clouds at dusk, Wyoming"],
  ["family", 'p/fam-hayly-4.jpg', 'p', "new life", "Parents leaning in over their newborn"],
  ["travel", 'p/trv-utah-4.jpg', 'l', "hidden pictures", "Red sandstone slot canyon, Utah"],
  ["people", 'p/por-moz-3.jpg', 'p', "joy", "Woman laughing in a patterned skirt, Mozambique"],
  ["travel", 'p/trv-tofo-1.jpg', 'p', "sunrises", "Three friends walking into the sea at sunset, Tofo"],
  ["travel", 'p/trv-italy-trecime-1.jpg', 'l', "natural frames", "The Dolomites framed by a cave mouth, Tre Cime"],
  ["community", 'p/evt-aca-6.jpg', 'p', "change-makers", "Honoree holding her award at a charity gala"],
  ["family", 'p/fam-sd-2.jpg', 'p', "love", "Family of four in a tangle of hugs, in black and white"],
  ["travel", 'p/trv-italy-rome-1.jpg', 'p', "history", "Piazza del Popolo from above, Rome"],
  ["travel", 'p/trv-italy-sardegna-1.jpg', 'p', "wild animals", "Black horse among the shrubs, Sardinia"],
  ["weddings", 'p/wed-ko-2.jpg', 'p', "new chapters", "Couple kissing behind the bouquet as confetti falls"],
  ["travel", 'p/trv-chefchaouen-2.jpg', 'l', "new corners", "Mother and child in a blue alley, Chefchaouen"],
  ["family", 'p/fam-hayly-1.jpg', 'p', "a mother's love", "Mother smiling down at her newborn in golden light"],
  ["travel", 'p/trv-kruger-3.jpg', 'p', "nature", "Lioness stalking through the grass, Kruger"],
  ["travel", 'p/trv-moz-1.jpg', 'p', "global community", "Woman carrying a child, Mozambique"],
  ["people", 'p/por-laurel-2.jpg', 'p', "who you are", "Woman smiling, in black and white"],
  ["travel", 'p/trv-italy-rome-5.jpg', 'p', "stories", "Bernini sculpture, in black and white, Rome"],
  ["community", 'p/evt-aca-4.jpg', 'p', "community", "Guests laughing at a charity gala"],
  ["family", 'p/fam-sd-6.jpg', 'l', "curiosity", "Baby smiling up at the camera"],
  ["travel", 'p/trv-italy-rome-4.jpg', 'p', "Rome", "Ponte Sisto at golden hour, Rome"],
];

// Homepage "notice" panel: [file, alt, handwritten word]
export const NOTICE = [
  ['p/wed-ko-1.jpg', 'Bride laughing with a bright bouquet', 'love'],
  ['p/fam-sd-2.jpg', 'Family of four in a tangle of hugs, in black and white', 'new life'],
  ['p/trv-moz-1.jpg', 'Woman carrying a child, Mozambique', 'our global community'],
  ['p/trv-kruger-3.jpg', 'Lioness stalking through the grass, Kruger', 'wild life'],
  ['p/por-moz-3.jpg', 'Woman laughing in a patterned skirt, Mozambique', 'joy'],
  ['p/trv-tofo-1.jpg', 'Three friends walking into the sea at sunset, Tofo', 'sunrises'],
];

// Homepage "make" panel: watercolors in repaint order
export const WATERCOLORS = ['wc-gold-smoke.jpg', 'wc-ink-color.jpg', 'wc-ember-indigo.jpg', 'wc-gold-indigo.jpg', 'wc-red-green.jpg', 'wc-jewel.jpg'];
export const MAKE_UNDER = 'j/sacred-feminine.jpg';
