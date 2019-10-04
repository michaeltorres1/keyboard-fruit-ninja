import Fruit from './Fruit';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.fruits = [];
    this.animate = this.animate.bind(this);
  }

  generateFruits() {
    for (let i = 0; i < 10; i++) {
      // set random x position for each instance of a fruit
      let x = Math.random() * innerWidth;
      // set random y position for each instance of a fruit
      let y = canvas.height;

      this.fruits.push(new Fruit(x, y, this.ctx));
    }

    for (let i = 0; i < this.fruits.length; i++) {
      this.fruits[i].draw();
    }
  }

  // logic for animation
  animate() {
    // clear the canvas
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < this.fruits.length; i++) {
      // if fruit is dropped off canvas then reinitialize fruit with new fruit
      if (this.fruits[i].visibility === false) {
        let x = Math.random() * innerWidth;
        let y = canvas.height;

        this.fruits[i] = new Fruit(x, y, this.ctx);
      }

      this.fruits[i].update();
      this.fruits[i].draw();
    }

    requestAnimationFrame(this.animate);
  }
}

export default Game;