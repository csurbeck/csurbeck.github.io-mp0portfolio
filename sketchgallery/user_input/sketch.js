function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (var x = 10; x < windowWidth; x = x + 20) {
    line(x, 0, x, windowHeight);
    let ratio = abs(mouseX - x);
    let grad = (ratio / windowWidth) * 20;
    strokeWeight(grad);
  }
}
