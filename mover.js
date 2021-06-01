class Mover {
  constructor(img) {
    this.pos = createVector(30, 300);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
    this.pic = img;
    this.hp = 5;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    textSize(30);
    text("Health: " + this.hp, this.pos.x, 100);
    fill("green");
    // ellipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x, this.pos.y, 50, 50);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  edges() {
    if (this.pos.y > 350) {
      this.vel.y *= -0.5;
      this.pos.y = 350;
    } else if (this.pos.y < 0) {
      this.vel.y *= -0.5;
      this.pos.y = 10;
    }
    
  }
  hit(o) {
    if (
      this.pos.x > o.pos.x &&
      this.pos.x < o.pos.x + 40 &&
      this.pos.y > o.pos.y &&
      this.pos.y < o.pos.y + 40
    ) {
      o.pos.y = 400;
      this.hp--;
    }
  }
heal(h) {
    if (
      this.pos.x > h.pos.x &&
      this.pos.x < h.pos.x + 40 &&
      this.pos.y > h.pos.y &&
      this.pos.y < h.pos.y + 40
    ) {
      h.pos.y = 400;
      this.hp=5;
    }
  }
  
    
  
}

