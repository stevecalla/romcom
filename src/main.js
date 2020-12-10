// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }


//----------- CODE PREP----------------------
var covers = [
  './assets/bluebrocade.jpg',
  './assets/dance.jpg',
  './assets/embrace.jpg',
  './assets/fire.png',
  './assets/frock.png',
  './assets/glorious.jpg',
  './assets/golden.jpg',
  './assets/maskedmeeting.jpg',
  './assets/masquerade.jpg',
  './assets/moonlitmeadow.jpg',
  './assets/office.png',
  './assets/picnic.jpg',
  './assets/pirate.jpg',
  './assets/prairie.jpg',
  './assets/redrenaissance.jpg',
  './assets/regency.jpg',
  './assets/ribbons.jpg',
  './assets/roses.jpg',
  './assets/ruffles.jpg',
  './assets/scroll.jpg',
  './assets/shine.png',
  './assets/smolder.png',
  './assets/snow.jpg',
  './assets/sparkles.jpg',
  './assets/stripes.png',
  './assets/wildwest.jpg',
  './assets/windswept.jpg',
];

var titles = [
  "Passionate Moonlight",
  "Love's Misery",
  "Roses and Flame",
  "Innocent Roses",
  "Silk and Sense",
  "Hearts Aflame",
  "Fiery Passion",
  "Stolen Hearts",
  "Secrets and Silk",
  "Dreams of Fire",
  "Lovers and Enemies",
  "Passion's Embrace",
  "Harbinger by Moonlight",
  "Rouge Red",
  "Moonlit Mysteries",
  "Crimson Roses",
  "Destiny's Fires",
  "Proposals and Passion",
  "Silk Wedding",
  "Masked Seduction",
  "Crimson Masquerade",
  "Stolen Rubies",
  "Emerald Eyes",
  "Sapphire Skies",
  "Opal Passions"
];

var descriptors = [
  "passion",
  "glory",
  "romance",
  "woe",
  "sorrow",
  "pain",
  "ardor",
  "devotion",
  "excitement",
  "fervor",
  "rage",
  "spirit",
  "zeal",
  "ecstasy",
  "fire",
  "storms",
  "tempests",
  "rapture",
  "ire",
  "jealousy",
  "exhilaration",
  "bliss",
  "enchantment",
  "paradise",
  "calamity",
  "disaster",
  "heartache",
  "misfortune",
  "agony",
  "curses",
  "blessings",
  "melancholy"
];

class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var randNum = (Math.random() * covers.length);
console.log(covers.length);
console.log(randNum);
console.log(Math.floor(randNum));

var mainCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
console.log(mainCover);

// console.log(covers.length)
// console.log(titles.length)
// console.log(descriptors.length)
// console.log(getRandomIndex(covers));
// console.log(getRandomIndex(titles));
// console.log(getRandomIndex(descriptors));
