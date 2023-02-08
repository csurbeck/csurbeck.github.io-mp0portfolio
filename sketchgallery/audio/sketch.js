let osc;
let amp;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  osc = new p5.Oscillator();
  osc.freq(220);
  osc.setType('sine');
  osc.amp(amp);
  osc.start();
}
function draw() {
  let middle = windowWidth / 2;
  line(middle, 0, middle, windowHeight);
  let displacement = abs(middle - mouseX);
  let vol = displacement / middle;
  osc.amp(vol);
}