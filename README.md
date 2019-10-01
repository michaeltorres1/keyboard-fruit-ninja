# Keyboard Fruit Ninja

## Overview
Keyboard Fruit Ninja is a simple and easy game to pick up quickly. The extent of the gameplay is pressing keys as the fruits show up to slice them, while trying to avoid bombs that shouldn't be sliced. If any fruit is missed a life is lossed and after 3 losses the game is over. If a bomb is sliced the game is over automatically.

This game is inspired by [Fruit Ninja](https://fruitninja.com/)

### Functionality
- users can press keys that correspond to the key that shows up on the fruit to slice fruits
- obstacles (fruits and bombs) will make their way from the bottom of the screen (with a thrown effect) and fall back down
- the game ends if a player misses 3 slices or slices a bomb

### Wireframes
- the app will consist of 3 pages
  - a landing page (with play/directions/github and linkedIn links)
  - a showpage to play the game
  - a directions page
- upon pressing the play button, it will take you to the showpage and a countdown will begin (3...2...1) and the game will start. A few fruits and bombs will spawn and quickly grow in numbers but never reaching an impossible amount to handle
- upon 'Game Over' a score will be displayed for the current session

### Technologies employed
- Vanilla JavaScript for game logic
- HTML5 Canvas for rendering
- some audio player for sound effects (not yet decided)
- webpack to bundle various scripts into a single source
- React.js for basic structure and functionality

### Main files
- to be decided on...

### MVPs
- Basic visuals and an interactive interface
- player can type a letter to perform an action
- obstacles generate coming from the bottom of the screen and fall back down
- obstacles cause game over if not sliced or if bomb is sliced
- window styling scoreboard modal