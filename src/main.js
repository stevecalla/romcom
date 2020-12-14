//Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector("img");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var homeView = document.querySelector(".view.home-view");
var makeCoverView = document.querySelector(".view.form-view.hidden");
var saveCoverView = document.querySelector(".view.saved-view.hidden");
var savedCoversSection = document.querySelector(".saved-covers-section");
var makeCoverButton = document.querySelector(".make-new-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var savedViewCoverButton = document.querySelector(".view-saved-button");
var homeCoverButton = document.querySelector(".home-button.hidden");
var createNewCoverButton = document.querySelector(".create-new-book-button");
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = generateRandomCover();
var coverInput = document.getElementById("cover");
var titleInput = document.getElementById("title");
var descriptor1Input = document.getElementById("descriptor1");
var descriptor2Input = document.getElementById("descriptor2");
// Add your event listeners here :point_👇
randomCoverButton.addEventListener('click', generateRandomCover);
makeCoverButton.addEventListener("click", viewMakeACover);
savedViewCoverButton.addEventListener("click", viewSavedCovers);
homeCoverButton.addEventListener("click", viewHomeCover);
createNewCoverButton.addEventListener("click", createNewBook);
saveCoverButton.addEventListener("click", saveCurrentCover);
savedCoversSection.addEventListener('dblclick', deletor);
// Create your event handlers and other functions here :point_down:👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
function generateRandomCover() {
  coverImage.src = `${covers[getRandomIndex(covers)]}`;
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
};
function viewMakeACover() {
  homeView.classList.add('hidden');
  makeCoverView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeCoverButton.classList.remove('hidden');
  saveCoverView.classList.add('hidden');
};
function viewSavedCovers() {
  homeView.classList.add('hidden');
  saveCoverView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeCoverButton.classList.remove('hidden');
  makeCoverView.classList.add('hidden');
  displaySavedCovers();
};
function displaySavedCovers() {
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
    `<section class="mini-cover" id=${savedCovers[i].id}>
       <img class="cover-image" src=${savedCovers[i].cover}>
       <h2 class="cover-title">${savedCovers[i].title}</h2>
       <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
     </section>
    `;
  };
};
function viewHomeCover() {
  homeView.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeCoverButton.classList.add('hidden');
  makeCoverView.classList.add('hidden');
};
function createNewBook() {
  event.preventDefault();
  coverInputImage = coverInput.value;
  titleInputText = titleInput.value;
  descriptor1Text = descriptor1Input.value;
  descriptor2Text = descriptor2Input.value;
  currentCover = new Cover(coverInputImage, titleInputText, descriptor1Text, descriptor2Text);
  assignUserInput();
  pushNewBook();
  viewHomeCover();
};
function assignUserInput() {
  coverImage.src = coverInputImage;
  coverTitle.innerText = titleInputText;
  tagline1.innerText = descriptor1Text;
  tagline2.innerText = descriptor2Text;
};
function pushNewBook() {
  covers.push(coverInputImage);
  titles.push(titleInputText);
  descriptors.push(descriptor1Text, descriptor2Input);
};
function saveCurrentCover() {
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
  if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover);
  };
};
function deletor() {
    var clickedMiniCover = event.target.closest(".mini-cover");
    for (var i = 0; i < savedCovers.length; i++) {
      if(savedCovers[i].id === Number(clickedMiniCover.id)){
        savedCovers.splice(i, 1);
      };
    };
  displaySavedCovers();
};
