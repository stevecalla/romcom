//Create variables targetting the relevant DOM elements here 👇

var coverImage1 = document.querySelector("img");  //row19
var tagline1 = document.querySelector(".tagline-1"); //row21
var tagline2 = document.querySelector(".tagline-2"); // row21
var coverTitle = document.querySelector(".cover-title"); // row 20
var randomButtonCover = document.querySelector('.random-cover-button'); //row 12

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

randomButtonCover.addEventListener('click', randomCover);

function randomCover() {
  coverImage1.src = `${covers[getRandomIndex(covers)]}`;
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
}

var homeView = document.querySelector(".view.home-view");
var makeCoverView = document.querySelector(".view.form-view.hidden");
var saveCoverView = document.querySelector(".view.saved-view.hidden");

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
};

homeCoverButton.addEventListener("click", viewSwitchHomeCover);

function viewSwitchHomeCover() {
  homeView.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeCoverButton.classList.add('hidden');
}



// We've provided a few variables below


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

var coverInput = document.getElementById("cover");
var titleInput = document.getElementById("title");
var descriptor1Input = document.getElementById("descriptor1");
var descriptor2Input = document.getElementById("descriptor2");

createNewSavedBook.addEventListener("click", createNewBook);

function createNewBook() {
  event.preventDefault()
  var coverInputImage = coverInput.value;
  var titleInputText = titleInput.value;
  var descriptor1Text = descriptor1Input.value;
  var descriptor2Text = descriptor2Input.value;
  var currentCover = new Cover(coverInputImage, titleInputText, descriptor1Text, descriptor2Text);
  savedCovers.push(currentCover);
};


// Add your event listeners here 👇


// Create your event handlers and other functions here 👇

// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
