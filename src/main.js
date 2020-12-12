//Create variables targetting the relevant DOM elements here 👇

var coverImage1 = document.querySelector("img");  //row19
var coverTitle = document.querySelector(".cover-title"); // row 20
var tagline1 = document.querySelector(".tagline-1"); //row21
var tagline2 = document.querySelector(".tagline-2"); // row21
var randomButtonCover = document.querySelector('.random-cover-button'); //row 12

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

randomButtonCover.addEventListener('click', randomCover);

function randomCover() {
  coverImage1.src = `${covers[getRandomIndex(covers)]}`;
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage1, coverTitle, tagline1, tagline2);
}

var homeView = document.querySelector(".view.home-view");
var makeCoverView = document.querySelector(".view.form-view.hidden");
var saveCoverView = document.querySelector(".view.saved-view.hidden");
var savedCoversSection = document.querySelector(".saved-covers-section");

var makeCoverButton = document.querySelector(".make-new-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button")
var savedViewCoverButton = document.querySelector(".view-saved-button")
var homeCoverButton = document.querySelector(".home-button.hidden")
var createNewSavedBook = document.querySelector(".create-new-book-button");

makeCoverButton.addEventListener("click", viewSwitchMakeCover);

function viewSwitchMakeCover() {
  // homeView.classList.remove('.view.home-view');
  homeView.classList.add('hidden');
  makeCoverView.classList.remove('hidden');//reminder
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeCoverButton.classList.remove('hidden');
  saveCoverView.classList.add('hidden')
};

savedViewCoverButton.addEventListener("click", viewSwitchSaveCover);

function viewSwitchSaveCover() {
  homeView.classList.add('hidden');
  saveCoverView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeCoverButton.classList.remove('hidden');
  makeCoverView.classList.add('hidden');
  // display saved covers array
  // savedCoversSection.innerHTML =
  //   `<img class="cover-image" src="./assets/prairie.jpg">
  //   <h2 class="cover-title">Windswept Hearts</h2>
  //   <h3 class="tagline">A tale of <span class="tagline-1">passion</span> and <span class="tagline-2">woe</span></h3>
  //   <img class="price-tag" src="./assets/price.png">
  //   <img class="overlay" src="./assets/overlay.png">`;
};

homeCoverButton.addEventListener("click", viewSwitchHomeCover);

function viewSwitchHomeCover() {
  homeView.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeCoverButton.classList.add('hidden');
  makeCoverView.classList.add('hidden');
}

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

var coverInput = document.getElementById("cover");
console.log('what is this =', coverInput);
var titleInput = document.getElementById("title");
var descriptor1Input = document.getElementById("descriptor1");
var descriptor2Input = document.getElementById("descriptor2");

createNewSavedBook.addEventListener("click", createNewBook);

function createNewBook() {
  event.preventDefault()
  coverInputImage = coverInput.value;
  titleInputText = titleInput.value;
  descriptor1Text = descriptor1Input.value;
  descriptor2Text = descriptor2Input.value;
  currentCover = new Cover(coverInputImage, titleInputText, descriptor1Text, descriptor2Text);
  coverImage1.src = coverInputImage;
  covers.push(coverInputImage);
  titles.push(titleInputText);
  descriptors.push(descriptor1Text, descriptor2Input);
  coverTitle.innerText = titleInputText;
  tagline1.innerText = descriptor1Text;
  tagline2.innerText = descriptor2Text;
  viewSwitchHomeCover()

//these are probably out order
//create a new instance (input values, create new instance,
//store new instance, switch to homepage, display, then if user likes
//it they'll save it, then push into poster)
};

saveCoverButton.addEventListener("click", saveDisplayCurrentCover);

function saveDisplayCurrentCover() {
  console.log('current cover', currentCover);
  console.log('saved cover =', savedCovers);
  if (!savedCovers.includes(currentCover)) {  //! is the same as "=== false"
      savedCovers.push(currentCover);
  }
  console.log('after push = ', savedCovers);
};

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
