class Fruit {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.dx = this.randomX(x);
    this.dy = -4;
    this.visibility = true;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
  }

  update() {
    // random position for y coordinate
    let randomY = Math.random() * ((150 - 0) + 0);
  
    // begin gravitation force 
    if (this.y < randomY) {
      this.dy += 0.5863;
    }
  
    // set visibility to false if ball dropped off canvas
    if (this.y > this.ctx.canvas.height + 100) {
      this.visibility = false;
    }
  
    this.x += this.dx;
    this.y += this.dy;
  }

  // set random pos for x coordinate
  randomX() {
    if (this.x > (this.ctx.canvas.width / 2)) {
      return Math.random() * (0 - 3) + 0;
    } else {
      return Math.random() * (3 - (0)) + 1;
    }
  }
}

export default Fruit;