## Setup

* Project Description: https://frontend.turing.io/projects/module-1/romcom-pair.html
* Project Original GitHub Repo: https://github.com/turingschool-examples/romcom
* Team GitHub Repo: https://github.com/stevecalla/romcom
* GitHub Hosted URL: https://github.com/stevecalla/romcom

Repo:
1. Fork, Clone the Repo
2. Need Matt to pull the repo

Setup:
1. As a team, send a Slack message to your assigned instructor (PM) with: the forked GitHub repo
2. the GitHub Pages deployed site
    Under your repo’s settings, scroll down to GitHub Pages and set it up to deploy your main branch
3. The DTR
4. Create PR template from this slack in the frontend 2011 help channel - done https://turingschool.slack.com/archives/C01GYDQT316/p1607530613013700?thread_ts=1607478903.006800&cid=C01GYDQT316


## Iteration 0

Goal: When the page loads, we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors

1. Where are the current cover image, title, tagline sourced?
- These resources (image et al) are HARDCODED in the index.html file

2. Can we change the current current page (w/out randomness)

- we weren't able to use a reference to Cover.js yet
- we decided to move the Cover class to the main.js file temporarily
- we also needed to move the variable arrays from the data.js temporarily into main.js
- then declared variable mainCover to create instances of Cover(s)
- to do so we declared a variable mainCover
- mainCover creates new instances of Cover with 4 parameters
- each parameter used a hardcode index call to getRandomIndex
- 4 parameters are covers, titles, description1, description2

3. Variable mainPage that assigns the mainPage info
- could not achieve b/c we don't know how to reference main.js to data.js et al
- will tackle tomorrow (see list below)

4. Can we randomize
- we console.log the getRandomIndex array to fully understand the output (see below)
// var randNum = (Math.random() * covers.length);
// console.log(covers.length);
// console.log(randNum);
// console.log(Math.floor(randNum));
- we discussed how to make the mainCover instance creation process dynamic
- decided we need to make the index dynamic
- matt suggested we'd need an array

5. When page loads we should see random load of cover, title, descriptors
- TBD
- Need to understand the connection b/ main.js and cover.js - done
- Need to understand the connection b/ main.js and index.html - done
- Need to understand the connection b/ main.js and index.html - done
- Files linked via html last three lines and need to use browser console to access integration
- Sample of variable pulling the HTML element

var coverImage = document.querySelector(".cover-image"); - need to revisit
var tagline1 = document.querySelector(".tagline-1"); //row21
var tagline2 = document.querySelector(".tagline-2"); // row21
var coverTitle = document.querySelector(".cover-title"); - need to revisit

- Do homework to help with understanding
- First iteration

function getRandomIndex(array) {
     return Math.floor(Math.random() * array.length);
   }

var mainCover = document.querySelector('.main-cover')

mainCover.innerHTML = `
  <img class="cover-image" src=${covers[getRandomIndex(covers)]}>
  <h2 class="cover-title">${titles[getRandomIndex(titles)]}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${descriptors[getRandomIndex(descriptors)]}</span> and <span class="tagline-2">${descriptors[getRandomIndex(descriptors)]}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">
  `;

- Second Iteration
  - var coverImage1 = document.querySelector("img");  //row19
  var tagline1 = document.querySelector(".tagline-1"); //row21
  var tagline2 = document.querySelector(".tagline-2"); // row21
  var coverTitle = document.querySelector(".cover-title"); // row 20

- Final Iteration
 - var coverImage1 = document.querySelector("img");  //row19
 var tagline1 = document.querySelector(".tagline-1"); //row21
 var tagline2 = document.querySelector(".tagline-2"); // row21
 var coverTitle = document.querySelector(".cover-title"); // row 20

function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
 }

coverImage1.src = `${covers[getRandomIndex(covers)]}`;
tagline1.innerText = descriptors[getRandomIndex(descriptors)];
tagline2.innerText = descriptors[getRandomIndex(descriptors)];
coverTitle.innerText = titles[getRandomIndex(titles)];

coverImage1.src = `${covers[1]}`
tagline1.innerText = descriptors[1];
tagline2.innerText = descriptors[2];
coverTitle.innerText = titles[0]


## Iteration 1 - Show Random Cover

Goals:
A) Every time the user clicks the Show New Random Cover button, a new random cover is created
hint: you may need to update the value of the provided currentCover variable
hint: use that Cover class!

Pseudo Code:
1) create variable for the button referencing the html element
2) create an event listeners for the click action calling the event handler

B) Every time the user clicks the Show New Random Cover button, the random cover is displayed
hint: you may need to create a function that displays information on the DOM
3) create event handle/function to trigger cover change (with cover, title, descriiptor embedded)

Pseudo Code:
1) ABC
2) ABC

Date/Time: Thursday, 12/10 from 2:30p-4:00p & 6:30 -8:00p

## Iteration 2 - Switching Views: Goals

NOTE: in this iteration, you are not worrying about making the form WORK, and you are not
worrying about saving or displaying covers. You simply want to make sure the views can be s
witched when you click the appropriate buttons.

Form View:
When a user clicks the “Make Your Own Cover” button, we should see the form, and the homepage view should be hidden
1. created var for each page homeview & makecoverview class with document querySelector
2. created var for makecoverbutton using querySelector
3. created event listener for makecoverbutton with a function call to viewSwitch
4. created function viewSwitch to "add" and "remove" based on classList functions

var homeView = document.querySelector(".view.home-view");
var makeCoverView = document.querySelector(".view.form-view.hidden");
var makeCoverButton = document.querySelector(".make-new-button");

“Show New Random Cover” and “Save Cover”
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector("save-cover-button")

makeCoverButton.addEventListener("click", viewSwitch);

function viewSwitch() {
  // homeView.classList.remove('.view.home-view');
  homeView.classList.add('hidden');
  makeCoverView.classList.remove('hidden');//reminder
  randomCoverButton.classList.add('xxxx')
  saveCoverButton.classList.add('xxxxx')

};

When the Form view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden
1) hide new random cover and save covers
2) var for random cover & save cover use document queryselector to grab buttons
3) add these variables to the viewSwitch function with possible conditions based on page started
- home page button is hidden...did not need a conditional b/c the button fires the function with all actions required


When the Form view is visible, the “Home” button should be visible

1. var a variable for the home button using document query querySelector
2. add this variable to the viewSwitch function removing the "hidden" key word

When a user clicks the “View Saved Covers” button, we should see the saved covers section, and the homepage view should be hidden

1. Hide the cover pages
2. Change title of current viewSwitch to viewSwitchMakeCover
3. Use homepage variable in viewSwitch for saved covers to hide the homepage
4. Created event listener for the view saved covers buttons
5. reate a new function for the click actions on the saved covers buttons
6. use classList add/remove methods to add and remove hidden key

When the Saved Covers view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden

1. Click view saved button.....saved cover page = visible, show random cover = hidden, saved cover = hidden
2. Create event listener- use current event listener for view saved covers
3. Check or make variables for make your own cover & new random covers
4. Within the for viewSwitchCover Button = add and remove hidden for the button variables

When the Saved Covers view is visible, the “Home” button should be visible

1. Use homecoverbutton classlist with a visible call

For both the Make New Cover form section and the Saved Covers section:

In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

1. review the function for view saved covers & add something to invoke the page
2. home button functionality
3. make your cover - ensure it works

When a user clicks the “Home” button, we should only see the Home section
1. need variable to access the buttons...homeCoverButton
2. need an event listener DONE
3. need handle for actions

When a user clicks the “Home” button, the home button should be hidden
1. complete based on logic for the other buttons

When a user clicks the “Home” button, the “Show New Random Cover” and “Save Cover” buttons should be visible again
1. complete based on logic for the other buttons

Hint: go check out the HTML and CSS files to see how the form and saved covers sections are being hidden in the first place

## Iteration 3 - Creating a New Cover

In the new cover form view, users should be able to fill out the four input fields and then hit the save button
1. var, event listener and a function  for the buttons
2. need text input field for value input using "value"
3. push the input into respective arrays
4. create a new instance of the covers class
5. display the newly created cover image...

When the save button is clicked, several things will happen:

Save the submitted data into the respective arrays (cover URL into the covers array,
  title string into the titles array, etc) so that future random covers can use the user-created
  data

1. add a push in the createNewBook function for each variable in the array

Use the values from the inputs to create a new instance of the Cover class
1. added a instance creator to the last line of the createNewBook function

Change back to the main home view (hiding the form view again)
1. view the main home page... added classList.remove for homeView
2. hide the makeCoverView page... added classList.add hidden
3. decided to call on the viewSwitchHomeCover function

Display the newly created cover image, title, and descriptors in the main cover
1. home page should display the newly created cover

Example Cover:
The Lone Lover
assassination
betrayal
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBB9hLlCXFD8uDm5SXz_vP6Jnjd8qqkgXrA&usqp=CAU


## Iteration 4 - Saving & Viewing Covers

When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array

1. Add currentCover to the savedCover arrays = created a function with call to the new Cover class
2. Var button saveCoverButton = button already exists
3. Event listen = created saveCoverButton

If a user clicks the “Save Cover” more than once on a single cover, it will still only be saved once (no duplicates)

1. if currentCover includes new Cover instance then don't add (return), otherwise push

When a user clicks the “View Saved Covers” button, we should see the saved covers section

1. Did this earlier step.

All the covers in the savedCovers array should be displayed in the saved covers section

1. TBD

Note: None of this needs to persist on page load

# Iteration 5 - Deleting Saved Covers

From the saved covers view, if a user double clicks a saved poster, it will be deleted
1. TBD

Hint: How will you update the data model to achieve this? Hint: Look into this user event Note: None of this needs to persist on page.