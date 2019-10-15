class Fruit {
  constructor(x, y, ctx, level) {
    let fruitImgs = ['cherry', 'greenApple', 'pineapple', 'strawberry', 'watermelon', 'bomb'];
    let randomFruitIdx = Math.floor(Math.random() * Math.floor(6));
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.dx = this.randomX(x);
    this.dy = -4;
    this.letter = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
    this.sliced = false;
    this.visibility = true;
    this.keyPressed = false;
    this.typeOfFruit = fruitImgs[randomFruitIdx];
    this.img = new Image(60, 45);
    this.img.src = fruitImgs[randomFruitIdx] + '.png';

    if (level === undefined) {
      this.level = "1";
    } else {
      this.level = level;
    }
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, 100, 100);
    this.ctx.beginPath();
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.letter, this.x + 50, this.y + 70);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(this.level, 50, 50);
    this.ctx.fill();
  }

  update() {
    // random position for y coordinate
    let randomY = Math.random() * ((150 - 0) + 0);
  
    // begin gravitation force 
    if (this.y < randomY) {
      if ((this.x < this.ctx.canvas.width && this.x > this.ctx.canvas.width - 100) || 
        (this.x > this.ctx.canvas.width && this.x < this.ctx.canvas.width + 100)) {
        this.dy += 0.6863;
      } else {
        this.dy += 0.5863;
      }
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
      return Math.random() * (3 - (0)) + 0;
    }
  }
}

export default Fruit;