let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// var x = canvas.width / 8;
// var y = canvas.height;
// var dx = 2;
// var dy = -2;
// var speedX = 0;
// var speedY = 0;
// var gravity = 0.05;
// var gravitySpeed = 0;

// function drawFruit() {
//   ctx.beginPath();
//   ctx.arc(x, y, 10, 0, Math.PI * 2); // to make circle
//   ctx.fillStyle = "#0095DD"; // fill circle with color
//   ctx.fill();
//   ctx.closePath();
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawFruit();
//   x += dx;

//   if (y === canvas.height - 20) {
//     dy *= -1;
//   }
//   y += dy;
// }

// setInterval(draw, 10);
// // requestAnimationFrame(draw);