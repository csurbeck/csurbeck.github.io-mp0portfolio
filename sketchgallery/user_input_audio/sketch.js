let osc;
let amp;
function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator();
  osc.freq(220);
  osc.setType('sine');
  osc.amp(amp);
  osc.start();
}
function draw() {
  let middle = windowWidth / 2;
  background(240);
  line(middle, 0, middle, windowHeight);
  let displacement = abs(middle - mouseX);
  let vol = displacement / middle;
  ellipse(mouseX, mouseY, (vol * 40) + 5);
  osc.amp(vol);
}