class Timer {
  constructor(ctx) {
    this.ctx = ctx;
    this.time = 41;
    this.pause = false;
  }

  draw() {
    this.ctx.font = '20px sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText('TIMER', 10, 50);
    this.ctx.font = '48px sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(Math.floor(this.time), 10, 110);
  }
}

export default Timer;
