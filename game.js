class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.helicopter = new Helicopter(this.ctx)
    this.background = new Background(this.ctx)
  }

  start() {
    this.draw()
    this.move()
  }

  clearObstacles() {
  }

  addObstacle() {
  }

  clear() {
  }

  draw() {
  }
  
  move() {
  }

  checkCollisions() {
  }

  gameOver() {
  }
}