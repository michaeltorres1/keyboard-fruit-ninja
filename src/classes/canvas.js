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
    let randomY = Math.random() * ( (150 - 0) + 0);
    
    if (y < randomY) {
      this.dy += 0.5863;
    }

    if (y > canvas.height + 100) {
      this.visibility = false;
    }

    // if (y > (canvas.height + 40)) {
    //   ctx.clearRect(0, 0, innerWidth, innerHeight);
    //   y = canvas.height;
    //   this.dy = -4;
    // }

    x += this.dx;
    y += this.dy;

    // this.draw();
  }
}

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
  let x = Math.random() * innerWidth;
  let y = canvas.height;

  fruits.push(new Fruit(x, y));
}

function animate() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  
  for (let i = 0; i < fruits.length; i++) {
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

animate();