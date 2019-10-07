import Fruit from './Fruit';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.fruits = [];
    this.nextFruits = [];
    this.animate = this.animate.bind(this);
    
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

  // logic for animation
  animate() {
    // clear the canvas
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);
  
    for (let i = 0; i < this.fruits.length; i++) {
      // if fruit is dropped off canvas then reinitialize fruit with new fruit
      if (this.fruits.length) {
        if (this.fruits[i].visibility === false) {
          let x = Math.random() * innerWidth;
          let y = canvas.height;
          // this.fruits[i] = new Fruit(x, y, this.ctx);
          // this.nextFruits[i] = new Fruit(x, y, this.ctx);
          this.nextFruits.push(new Fruit(x, y, this.ctx));
          this.fruits.splice(i, 1);
        }
      }

      if (this.fruits.length === 0) {
        this.fruits = this.nextFruits;
        this.nextFruits = [];
      }

      document.addEventListener('keypress', logKey);
      var that = this.fruits;
      var thatFunc = this.generateMoreFruit;
      var myCtx = this.ctx;

      function logKey(e) {
        let i = 0;
        for (i; i < that.length; i++) {
          if (that[i]["letter"] === e.key) {
            that.splice(i, 1);
          }
        }

        if (that.length === 0) {
          i = 0;
          debugger
          that = thatFunc(that, myCtx);
          that[i].update();
          that[i].draw();
        }
      }

      if (this.fruits.length < 0) {
        let x = Math.random() * innerWidth;
        let y = canvas.height;
        this.fruits[0] = new Fruit(x, y, this.ctx);
        this.fruits[1] = new Fruit(x, y, this.ctx);
        this.fruits[2] = new Fruit(x, y, this.ctx);
      }

      if (this.fruits[i] !== undefined) {
        this.fruits[i].update();
        this.fruits[i].draw();
      }
    }
    
    requestAnimationFrame(this.animate);
  }

  generateMoreFruit(that, ctx) {
    let x = Math.random() * innerWidth;
    let y = canvas.height;

    that[0] = new Fruit(x, y, ctx);
    that[1] = new Fruit(x, y, ctx);
    that[2] = new Fruit(x, y, ctx);

    return that;
  }
}

export default Game;