let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

function Fruit(x, y) {
  this.x = x;
  this.y = y;
  this.dx = randomX(x);
  this.dy = -4;
  this.visibility = true;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
  }

  this.update = function() {
    // random position for y coordinate
    let randomY = Math.random() * ( (150 - 0) + 0);
    
    // begin gravitation force 
    if (y < randomY) {
      this.dy += 0.5863;
    }

    // set visibility to false if ball dropped off canvas
    if (y > canvas.height + 100) {
      this.visibility = false;
    }

    x += this.dx;
    y += this.dy;
  }
}

// set random pos for x coordinate
function randomX(x) {
  if (x > ( canvas.width / 2 )) {
    return Math.random() * (0 - 3) + 0;
  } else {
    return Math.random() * (3 - (0)) + 1;
  }
}

// logic to save fruits in array
let fruits = [];

for (let i = 0; i < 10; i++) {
  // set random x position for each instance of a fruit
  let x = Math.random() * innerWidth;
  // set random y position for each instance of a fruit
  let y = canvas.height;

  fruits.push(new Fruit(x, y));
}

// logic for animation
function animate() {
  // clear the canvas
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  
  for (let i = 0; i < fruits.length; i++) {
    // if fruit is dropped off canvas then reinitialize fruit with new fruit
    if (fruits[i].visibility === false) {
      let x = Math.random() * innerWidth;
      let y = canvas.height;

      fruits[i] = new Fruit(x, y);
    }

    fruits[i].update();
    fruits[i].draw();
  }

  requestAnimationFrame(animate);
}

// begin animation
animate();