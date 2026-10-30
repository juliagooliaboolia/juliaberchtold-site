// Photography data. To swap photos: drop files in public/img/ and edit these lists.
// o = orientation: 'p' portrait, 'l' landscape.

export const CATEGORIES = {
  weddings: {
    title: 'Weddings', word: 'love', link: 'All weddings',
    blurb: "Vows, toasts, and everything in between. I'm the friend with the camera who gets the whole room laughing, which is when the real moments happen.",
    story: { title: 'Love, mid-laugh', meta: 'Wedding' },
  },
  families: {
    title: 'Families & newborns', word: 'new life', link: 'All families',
    blurb: "First weeks home, big sisters, and the dog who won't leave the baby's side. I come to you, follow the family's rhythm, and photograph what's already there.",
    story: { title: 'First weeks home', meta: 'Newborn session' },
  },
  portraits: {
    title: 'Portraits', word: 'who you are', link: 'All portraits',
    blurb: 'Headshots and portraits that look like you on a good day, because by the end of the shoot you’ve forgotten the camera is there.',
    story: { title: 'Who you are', meta: 'Portrait session' },
  },
  events: {
    title: 'Events', word: 'the room', link: 'All events',
    blurb: 'Galas, launches and gatherings for causes I care about. I move through the room so the photos feel like being there.',
    story: { title: 'The room', meta: 'Event' },
  },
  travel: {
    title: 'Travel', word: 'the world', link: 'All travel',
    blurb: 'The places that shape us, and the beauty hiding in plain sight along the way.',
    story: { title: 'The world', meta: 'Travel' },
  },
};

// The set shown on each category page (and its story page), in order.
export const SETS = {
  weddings: [
    ['wed-couple.jpg', 'p', 'A couple laughing with a bright bouquet'],
    ['wed-confetti.jpg', 'p', 'A kiss behind the bouquet as confetti falls'],
    ['wed-bride.jpg', 'p', 'A bride laughing on a city street'],
  ],
  families: [
    ['fam-wil-mom.jpg', 'p', 'A mother smiling down at her newborn in late-afternoon backlight'],
    ['fam-wil-dog.jpg', 'p', 'A father asleep with his newborn and the dog beside them, in black and white'],
    ['fam-wil-dad.jpg', 'l', "A newborn asleep on her father's chest, in black and white"],
    ['fam-dd-siblings.jpg', 'p', 'A girl hugging her baby brother'],
    ['fam-dd-kiss.jpg', 'p', 'A family of four in a tangle of kisses'],
  ],
  portraits: [
    ['por-lj-16.jpg', 'p', 'A woman glancing down, smiling'],
    ['por-lj-12.jpg', 'p', 'A black-and-white headshot'],
  ],
  events: [
    ['evt-acs-group.jpg', 'l', 'Guests at a charity gala'],
    ['evt-acs-speaker.jpg', 'p', 'A speaker at a charity event'],
    ['evt-rooftop.jpg', 'p', 'Four friends on a rooftop at night'],
  ],
  travel: [
    ['trv-chefchaouen.jpg', 'l', 'A mother and child in a blue alley'],
    ['trv-poppies.jpg', 'p', 'Poppies on a misty hillside'],
    ['trv-horses.jpg', 'l', 'Six horses running along the horizon'],
    ['trv-torii.jpg', 'p', 'A tunnel of red torii gates'],
    ['trv-elephant.jpg', 'p', 'An elephant crossing the grass'],
  ],
};

// The 21 photos floating on the Photography landing page: [category, file, o, alt]
export const FIELD = [
  ['weddings', 'wed-couple.jpg', 'p', 'Wedding: a couple laughing with a bright bouquet'],
  ['travel', 'trv-horses.jpg', 'l', 'Travel: six horses running along the horizon'],
  ['families', 'fam-wil-mom.jpg', 'p', 'Family: a mother smiling down at her newborn'],
  ['events', 'evt-acs-group.jpg', 'l', 'Event: guests at a charity gala'],
  ['portraits', 'por-lj-16.jpg', 'p', 'Portrait: a woman glancing down, smiling'],
  ['travel', 'trv-torii.jpg', 'p', 'Travel: a tunnel of red torii gates'],
  ['weddings', 'wed-confetti.jpg', 'p', 'Wedding: a kiss behind the bouquet as confetti falls'],
  ['families', 'fam-wil-dad.jpg', 'l', 'Family: a newborn asleep on her father'],
  ['travel', 'trv-puffin.jpg', 'l', 'Travel: a puffin on a rock'],
  ['events', 'evt-rooftop.jpg', 'p', 'Event: four friends on a rooftop at night'],
  ['families', 'fam-dd-siblings.jpg', 'p', 'Family: a girl hugging her baby brother'],
  ['portraits', 'por-lj-12.jpg', 'p', 'Portrait: a black-and-white headshot'],
  ['travel', 'trv-chefchaouen.jpg', 'l', 'Travel: a mother and child in a blue alley'],
  ['weddings', 'wed-bride.jpg', 'p', 'Wedding: a bride laughing on a city street'],
  ['families', 'fam-wil-dog.jpg', 'p', 'Family: a father, newborn and dog asleep together'],
  ['travel', 'trv-cave.jpg', 'l', 'Travel: mountains framed by a cave mouth'],
  ['events', 'evt-acs-speaker.jpg', 'p', 'Event: a speaker at a charity event'],
  ['travel', 'trv-poppies.jpg', 'p', 'Travel: poppies on a misty hillside'],
  ['families', 'fam-dd-kiss.jpg', 'p', 'Family: a family of four in a tangle of kisses'],
  ['travel', 'trv-elephant.jpg', 'p', 'Travel: an elephant crossing the grass'],
  ['travel', 'trv-tofo.jpg', 'p', 'Travel: three friends in the sea at sunset'],
];

// Homepage "notice" panel: [file, alt, handwritten word]
export const NOTICE = [
  ['wed-couple.jpg', 'A couple laughing with a bright bouquet', 'love'],
  ['fam-wil-mom.jpg', 'A mother smiling down at her newborn', 'new life'],
  ['por-lj-16.jpg', 'A woman glancing down, smiling', 'who you are'],
  ['evt-rooftop.jpg', 'Four friends on a rooftop at night', 'the room'],
  ['trv-poppies.jpg', 'Poppies on a misty hillside', 'the world'],
];

// Homepage "make" panel: watercolors in repaint order
export const WATERCOLORS = ['wc-gold-smoke.jpg', 'wc-ink-color.jpg', 'wc-ember-indigo.jpg', 'wc-gold-indigo.jpg', 'wc-red-green.jpg', 'wc-jewel.jpg'];
export const MAKE_UNDER = 'jw-faces.jpg';
