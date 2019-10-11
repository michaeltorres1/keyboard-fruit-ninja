# Keyboard Fruit Ninja

<a href="#"><img src="https://img.shields.io/badge/Powered%20by-JavaScript-blue.svg"/></a>
<a href="https://github.com"><img src="https://img.shields.io/badge/Hosted%20on-GitHub-brightgreen.svg"/></a>

Live on [Keyboard Fruit Ninja](https://michaeltorres1.github.io/keyboard-fruit-ninja/dist/landing.html)

## Background and Overview
Keyboard Fruit Ninja is a simple and easy game to pick up quickly. The extent of the gameplay is pressing keys as the fruits show up to slice them, while trying to avoid bombs that shouldn't be sliced. If any fruit is missed a life is lossed and after 3 losses the game is over. If a bomb is sliced the game is over automatically.

This game is inspired by [Fruit Ninja](https://fruitninja.com/)

### Technologies employed
- Vanilla JavaScript for game logic
- HTML5 Canvas for rendering
- webpack to bundle various scripts into a single source
- React.js for basic structure and functionality

### Functionality
- users can press keys that correspond to the key that shows up on the fruit to slice fruits
- obstacles (fruits and bombs) will make their way from the bottom of the screen (with a thrown effect) and fall back down
- the game ends if a player misses 3 slices or slices a bomb

### Wireframes
- the app will consist of 2 pages
  - a landing page (with play/directions/github and linkedIn links)
  - a showpage to play the game
- upon pressing the play button, it will take you to the showpage and a countdown will begin (3...2...1) and the game will start. A few fruits and bombs will spawn and quickly grow in numbers.

### Screenshots
## Landing
<img src="./src/assets/images/landingPage.png">

## Game page

# Future Implementations/Feature
- Fruit will actually slice rather than just disappear
- Fruit will splatter upon slicing
- Bomb will actually explode
