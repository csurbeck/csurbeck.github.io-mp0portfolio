let obstacle_top = [];
let obstacle_bottom = [];
let obstacle_rside = [];
let obstacle_lside = [];
let x = 10;
let y = 10;
let x1, y1;
let moveX = 1;
let moveY = 1;

function setup() {
  createCanvas(windowHeight, windowWidth);
  
  x1 = round(random(10, windowWidth - 40));
  y1 = round(random(10, windowHeight - 40));
  
  for (var a = 0; a < 40; a++) {
    append(obstacle_top, [x1 + a, y1]);
  }
  
  for (var a = 0; a < 40; a++) {
    append(obstacle_bottom, [x1 + a, y1 + 40]);
  }
  
  for (var a = 0; a < 40; a++) {
    append(obstacle_lside, [x1 + a, y1]);
  }
  
  for (var a = 0; a < 40; a++) {
    append(obstacle_rside, [x1 + 40, y1 + a]);
  }
  
  for (var a = 0; a < 40; a++) {
    append(obstacle_lside, [x1, y1 + a]);
  }
}

function draw() {
  background(240);
  rect(x1, y1, 40, 40);
  
  if (x <= 9 || x >= windowWidth - 9) {
    moveX *= -1;
  } else if (y <= 9 || y >= windowHeight - 9) {
    moveY *= -1;
  }
  
  for (var b = 0; b < obstacle_top.length; b++) {
    let check = obstacle_top[b];
    if (check[0] == x + 10 && check[1] == y + 10) {
      moveY *= -1;
    }
  }
  
  for (var b = 0; b < obstacle_bottom.length; b++) {
    let check = obstacle_bottom[b];
    if (check[0] == x - 10 && check[1] == y - 10) {
      moveY *= -1;
    }
  }
  
  for (var b = 0; b < obstacle_rside.length; b++) {
    let check = obstacle_rside[b];
    if (check[0] == x - 10 && check[1] == y - 10) {
      moveX *= -1;
    }
  }
  
  for (var b = 0; b < obstacle_lside.length; b++) {
    let check = obstacle_lside[b];
    if (check[0] == x + 10 && check[1] == y + 10) {
      moveX *= -1;
    }
  }
  
  ellipse(x, y, 20);
  x = x + moveX;
  y = y + moveY;
  
}