# Pong Game

A basic pong game using SVGs.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down

Notes:
- minute 8:30 in video 19 to fix keydown delay
- explored delay or timeout to give some time between score and when next ball starts
- score.js has a method that lets me select the winner, but I can't pause the game. In game.js I called a this.h2 property to try to render the pause through game.js using return, but didn't work. If you can't figure it out, delete that property. 