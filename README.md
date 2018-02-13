# Pong Game

This is my third project with the Red Academy, which consists of a simple pong game built almost entirely on Javascript. 

## How to play:
First to 11 wins!
You can change the winning score on Game.js by changing the winningScore property. 

**Player 1 Keys:**
* a: up
* z: down

**Player 2 Keys:**
* ▲ : up
* ▼: down

Refresh browser once a winner has been declared.

##How this was built:
This was the first time I used ocject oriented programming to build anything. The game uses 5 classes to build everything: a game class, a ball class, a board class, a paddle class, and a score class. 

Each class sets the properties and methods for each element of the game and everything is compiled and rendered under the game class at Game.js. 

The index.js file is used to import the css styles and instantiate the game class and the game loop which makes the game run. The global settings for the game, like the SVG namespace and the game keys are found at settings.js. 

##What next?
Most of this game was built as a code-along in class. The only features I added to this version of the game are the declaring of the winner, the sounds for scoring and the cheers when the winner is declared. 

I attempted to create a user settings menu where users could change the ball speed, ball size, paddle size and the score required to win the game. Some of the markup for that attempt can be found at the pong-stretch branch of this repo. I did not include that in this version, because I could not get it to work using vanilla Javascript. 

Over the coming days, I will be working to get that up and running and will be updating the master branch once the menu settings is complete. Once that's done, the game will look something like this:

![Settings Menu Screenshot](images/settings-screenshot.png)

##Setup repo locally

To set up a clone of the game locally:
**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`
