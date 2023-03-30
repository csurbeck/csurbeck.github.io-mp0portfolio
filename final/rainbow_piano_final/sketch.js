let osc;
let amp;

function setup() {
  createCanvas(600, 360);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(amp);
  osc.freq(0);
  osc.start();
}

function draw() {
  background(220);
  if (mouseX < 50 || mouseX > 550 || mouseY < 50 || mouseY > 310) {
    osc.freq(0);
  }
  if (mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 300) {
    fill(249, 84, 227);
    rect(50, 55, 50, 240, 10);
    osc.freq(261.63);
  } else {
    fill(253, 165, 239);
    rect(50, 50, 50, 250, 10);
  }
  if (mouseX > 100 && mouseX < 150 && mouseY > 50 && mouseY < 300) {
    fill(250, 6, 46);
    rect(100, 55, 50, 240, 10);
    osc.freq(293.66);
  } else {
    fill(246, 82, 109);
    rect(100, 50, 50, 250, 10);
  }
  if (mouseX > 150 && mouseX < 200 && mouseY > 50 && mouseY < 300) {
    fill(249, 123, 41);
    rect(150, 55, 50, 240, 10);
    osc.freq(329.63);
  } else {
    fill(249, 159, 100);
    rect(150, 50, 50, 250, 10);
  }
  if (mouseX > 200 && mouseX < 250 && mouseY > 50 && mouseY < 300) {
    fill(249, 242, 24);
    rect(200, 55, 50, 240, 10);
    osc.freq(349.23);
  } else {
    fill(249, 244, 116);
    rect(200, 50, 50, 250, 10);
  }
  if (mouseX > 250 && mouseX < 300 && mouseY > 50 && mouseY < 300) {
    fill(137, 250, 24);
    rect(250, 55, 50, 240, 10);
    osc.freq(392.00);
  } else {
    fill(184, 250, 117);
    rect(250, 50, 50, 250, 10);
  }
  if (mouseX > 300 && mouseX < 350 && mouseY > 50 && mouseY < 300) {
    fill(26, 220, 110);
    rect(300, 55, 50, 240, 10);
    osc.freq(440);
  } else {
    fill(115, 228, 164);
    rect(300, 50, 50, 250, 10);
  }
  if (mouseX > 350 && mouseX < 400 && mouseY > 50 && mouseY < 300) {
    fill(37, 245, 224);
    rect(350, 55, 50, 240, 10);
    osc.freq(493.88);
  } else {
    fill(146, 245, 231);
    rect(350, 50, 50, 250, 10);
  }
  if (mouseX > 400 && mouseX < 450 && mouseY > 50 && mouseY < 300) {
    fill(48, 128, 236);
    rect(400, 55, 50, 240, 10);
    osc.freq(523.25);
  } else {
    fill(143, 191, 255);
    rect(400, 50, 50, 250, 10);
  }
  if (mouseX > 450 && mouseX < 500 && mouseY > 50 && mouseY < 300) {
    fill(104, 62, 242);
    rect(450, 55, 50, 240, 10);
    osc.freq(587.33);
  } else {
    fill(151, 122, 249);
    rect(450, 50, 50, 250, 10);
  }
  if (mouseX > 500 && mouseX < 550 && mouseY > 50 && mouseY < 300) {
    fill(183, 39, 245);
    rect(500, 55, 50, 240, 10);
    osc.freq(659.25);
  } else {
    fill(223, 152, 253);
    rect(500, 50, 50, 250, 10);
  }
}