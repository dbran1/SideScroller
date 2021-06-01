class Healer {
  constructor(img) {
    this.pos = createVector(random(2000), random(50,350));
    this.vel = createVector(0, random(-1,1));
    this.acc = createVector(0, 0);
    this.pic = img;
    this.size=25;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    image(this.pic, this.pos.x, this.pos.y, this.size, this.size);
  }
}
