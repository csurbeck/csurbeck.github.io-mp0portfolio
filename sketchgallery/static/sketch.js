function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(120, 30, 200, 100);
  
  var y = 15;
  for (var x = 15; x < windowWidth; x = x + 30) {
    ellipse(x, y, 25, 25);
    y = y + 30;
  }
  
  fill(120, 30, 200, 200);
  y = 15;
  for (x = windowHeight; x > 0; x = x - 30) {
    ellipse(x, y, 25, 25);
    y = y + 30;
  }
}