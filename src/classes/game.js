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
    // clear the canvas
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);
  
    for (let i = 0; i < this.fruits.length; i++) {
      // If fruit is dropped off canvas then reinitialize fruit with new fruit
      this.reinitializeNewFruit();
      // reset this.fruits with this.nextFruits
      this.resetWithNextFruits();

      document.addEventListener('keypress', logKey);
      let that = this.fruits;
      let thatFunc = this.generateMoreFruit;
      let myCtx = this.ctx;
      let thatLevel = "";

      function logKey(e) {        
        for (let i = 0; i < that.length; i++) {
          if (that[i]["letter"] === e.key) {
            that.splice(i, 1);
          }
        }

        if (that.length === 0) {
          if (thatLevel === "") {
            thatLevel = 0;
          }
          
          thatLevel += 1;
          that = thatFunc(that, myCtx, thatLevel);
        }
      }
      
      // update and draw if defined
      this.updateAndDraw(i);
    }
    
    let x = requestAnimationFrame(this.animate);
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
    for (let i = 0; i < 3; i++) {
      // set random x position for each instance of a fruit
      let x = Math.random() * innerWidth;
      // set random y position for each instance of a fruit
      let y = canvas.height;

      // this.fruits.push(new Fruit(x, y, this.ctx));
      this.fruits.push(new Fruit(x, y, this.ctx));
    }

    for (let i = 0; i < this.fruits.length; i++) {
      this.fruits[i].draw();
    }
  }

  generateMoreFruit(that, ctx, thatLevel) {
    let x = Math.random() * innerWidth;
    let y = canvas.height;

    thatLevel += 1;
    for (let i = 0; i < 7; i++) {
      that.push(new Fruit(x, y, ctx, thatLevel));
    }

    return that;
  }

  updateAndDraw(i) {
    if (this.fruits[i] !== undefined) {
      this.fruits[i].update();
      this.fruits[i].draw();
    }
  }

  playGame() {
    this.animate();
  }
}

export default Game;