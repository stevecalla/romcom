//----   Iteration 0 -----//

/* Goal: When the page loads, we should see a cover with a
randomly selected image, title, and tagline which
includes two random descriptors */

Date/Time: Tuesday, 12/8 from 4p-5p & 6p-8p

Repo:
1) Forked, cloned the Repo
2) Need Matt to pull the repo

Setup:
1) As a team, send a Slack message to your assigned instructor (PM) with: the forked GitHub repo
2) the GitHub Pages deployed site
    Under your repo’s settings, scroll down to GitHub Pages and set it up to deploy your main branch
3) the DTR

Iteration 0
1) Where are the current cover image, title, tagline sourced?
- these resources (image et al) are HARDCODED in the index.html file

2) Can we change the current current page (w/out randomness)
- we weren't able to use a reference to Cover.js yet
- we decided to move the Cover class to the main.js file temporarily
- we also needed to move the variable arrays from the data.js temporarily into main.js
- then declared variable mainCover to create instances of Cover(s)
- to do so we declared a variable mainCover
- mainCover creates new instances of Cover with 4 parameters
- each parameter used a hardcode index call to getRandomIndex
- 4 parameters are covers, titles, description1, description2

2a)Variable mainPage that assigns the mainPage info
- could not achieve b/c we don't know how to reference main.js to data.js et al
- will tackle tomorrow (see list below)

3) Can we randomize
- we console.log the getRandomIndex array to fully understand the output (see below)
// var randNum = (Math.random() * covers.length);
// console.log(covers.length);
// console.log(randNum);
// console.log(Math.floor(randNum));
- we discussed how to make the mainCover instance creation process dynamic
- decided we need to make the index dynamic
- matt suggested we'd need an array

4) When page loads we should see random load of cover, title, descriptors
- TBD
- Need to understand the connection b/ main.js and cover.js
- Need to understand the connection b/ main.js and index.html
- Need to understand the connection b/ main.js and index.html


Date/Time: Wednesday, 12/9 from 6p-8p
1) git commit/push/pull
2) create PR template from this slack in the frontend 2011 help channel
https://turingschool.slack.com/archives/C01GYDQT316/p1607530613013700?thread_ts=1607478903.006800&cid=C01GYDQT316
2) retro
2a) Did we complete Iteration 0
2b) let Matt drive 60 min  git commit/push/pull; Steve
3) pseudo control and code quality file
4) review code from yesterday (what is getRandomIndex(covers) actually pulling?)
5) Next Step - Did we complete iteration 0; how to complete
6) Next Step - Get into iteration 0
7) READme file
8) Other

Iteration 0
- See Step 4 above

Iteration 1 - Show Random Cover
Goals:
A) Every time the user clicks the Show New Random Cover button, a new random cover is created
hint: you may need to update the value of the provided currentCover variable
hint: use that Cover class!

Pseudo Code:
1) ABC
2) ABC

B) Every time the user clicks the Show New Random Cover button, the random cover is displayed
hint: you may need to create a function that displays information on the DOM

Pseudo Code:
1) ABC
2) ABC



*/
