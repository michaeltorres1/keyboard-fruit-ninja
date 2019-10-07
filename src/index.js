import Game from './classes/Game';

let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');
let newGame = new Game(ctx);
newGame.generateFruits();
newGame.playGame();