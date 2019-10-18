import Fruit from './Fruit';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.fruits = [];
    this.nextFruits = [];
    this.animate = this.animate.bind(this);
  }

  // logic for animation
  animate() {
    let x = requestAnimationFrame(this.animate);

    // clear the canvas
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);
  
    for (let i = 0; i < this.fruits.length; i++) {
      // If fruit is dropped off canvas then reinitialize fruit with new fruit
      this.reinitializeNewFruit();
      // reset this.fruits with this.nextFruits
      this.resetWithNextFruits();

      let that = this.fruits;
      let thatX = x;
      let thatFunc = this.generateMoreFruit;
      let thatLevel = "";
      let myCtx = this.ctx;

      document.addEventListener('keypress', (e) => {
        const keyPressed = e.key.toUpperCase();
        for (let i = 0; i < that.length; i++) {
          if (that[i]["letter"] === keyPressed) {
            if (that[i]["typeOfFruit"] === 'bomb') {
              cancelAnimationFrame(thatX);
              myCtx.clearRect(0, 0, innerWidth, innerHeight);
              document.getElementById('gameOver').style.display = "block";
            } else {
              that.splice(i, 1);
            }
          }
        }

        if (that.length === 0) {
          if (thatLevel === "") {
            thatLevel = 0;
          }

          thatLevel += 1;
          that = thatFunc(that, myCtx, thatLevel);
        }
      });
      
      // update and draw if defined
      this.updateAndDraw(i);
    }
  }

  reinitializeNewFruit() {
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits.length) {
        if (this.fruits[i].visibility === false) {
          let x = Math.random() * innerWidth;
          let y = canvas.height;
          this.nextFruits.push(new Fruit(x, y, this.ctx));
          this.fruits.splice(i, 1);
        }
      }
    }
  }

  resetWithNextFruits() {
    if (this.fruits.length === 0) {
      this.fruits = this.nextFruits;
      this.nextFruits = [];
    }
  }

  generateFruits() {
    for (let i = 0; i < 6; i++) {
      // set random x position for each instance of a fruit
      let x = Math.random() * innerWidth;
      // set random y position for each instance of a fruit
      let y = canvas.height;

      // this.fruits.push(new Fruit(x, y, this.ctx));
      this.fruits.push(new Fruit(x, y, this.ctx));
    }

    this.removeDups();

    for (let i = 0; i < this.fruits.length; i++) {
      this.fruits[i].draw();
    }
  }

  generateMoreFruit(that, ctx, thatLevel) {
    thatLevel += 1;
    for (let i = 0; i < thatLevel; i++) {
      let x = Math.random() * innerWidth;
      let y = canvas.height;
      that.push(new Fruit(x, y, ctx, thatLevel));
    }

    return that;
  }

  removeDups() {
    let freqs = {};

    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i]['letter'] in freqs) {
        freqs[this.fruits[i]['letter']] += 1;
      } else {
        freqs[this.fruits[i]['letter']] = 1;
      }
    }

    for (let i = 0; i < this.fruits.length; i++) {
      if (freqs[this.fruits[i]['letter']] > 1) this.fruits.splice(i, 1);
    }
  }

  // mouseDown() {
  //   document.getElementById("player").play();
  // }

  updateAndDraw(i) {
    if (this.fruits[i] !== undefined) {
      this.fruits[i].update();
      this.fruits[i].img.onload = this.fruits[i].draw();
    }
  }

  playGame() {
    this.animate();
  }
}

export default Game;