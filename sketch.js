let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys = [];
let goodguy = [];


function setup() {
  createCanvas(400, 400);

  soundFormats("mp3");
  mySound = loadSound("Jotaro'sTheme.mp3");
  img = loadImage("ora.gif");
  img2 = loadImage("knife.jpeg");
  img3 = loadImage("CD.jpg");
  bckrgnd = loadImage("bridge.gif");
  start = loadImage("start.jpeg");
  won = loadImage("win.jpg");
  lost = loadImage("lose.jpg")
  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.01);

  for (let i = 0; i < 100; i++) {
    enemys.push(new Baddies(img2));
  }
  for (let i = 0; i < 20; i++) {
    goodguy.push(new Healer(img3));
  }
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -1);
    hero.applyForce(jump);
  }
  if (key == "m") {
    mySound.play();
  }
  if (key == "n") {
    mySound.stop();
  }
}

function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum % 3 === 0) {
    open();
  } else if (sNum % 3 === 1) {
    game();
    if (hero.hp < 1) {
      lose();
    }
    if (hero.pos.x > 2000 && hero.hp>0) {
      win();
    }
  } else if (sNum % 3 === 2) {
    pause();
  }
}

function open() {
  background(start);
  textSize(30);
  fill("blue");
  text("Left Click to Start!", 100, 400);
  textSize(10);
  text("Press M for music, and N to stop!", 20, 360);
}

function pause() {
  background(200, 20, 10);
  text("Game Paused", 100, 100);
}
function lose() {
  background(lost)
}
function win() {
  background(won);
  
}
function game() {
  background(bckrgnd);

  hero.applyForce(gravity);
  translate(-hero.pos.x + 100, 0);
  // if (mouseIsPressed) {
  //    hero.applyForce(force);
  //  }
  hero.update();
  hero.show();
  hero.edges();

  //activates enemys on screen
  for (let i = 0; i < enemys.length; i++) {
    enemys[i].show();
    enemys[i].update();
    hero.hit(enemys[i]);
  }

  for (let i = 0; i < goodguy.length; i++) {
    goodguy[i].show();
    goodguy[i].update();
    hero.heal(goodguy[i]);
  }
}
