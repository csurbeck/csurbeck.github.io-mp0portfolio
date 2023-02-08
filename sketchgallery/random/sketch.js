let x, y;
let r, g, b, a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
}

function draw() {
  let totalPixelsWide = round(windowWidth / 20);
  let totalPixelsTall = round(windowHeight / 20);
  x = random(totalPixelsWide);
  x = round(x) * 20;
  y = random(totalPixelsTall);
  y = round(y) * 20;
  r = random(255);
  g = 0;
  b = random(255);
  a = (50, 200);
  noStroke();
  fill(r, g, b, a);
  rect(x, y, 20, 20);
}