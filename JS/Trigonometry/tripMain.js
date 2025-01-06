let x; let y; let angle = 0; 
let r = 150;
let shiftingAngle = [];
let numAxis = 10;

let x2 = [];
let y2 = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  for (let i=0; i<numAxis; i++) {
    shiftingAngle[i] = i*90/numAxis;
  }
}

function draw() {
  background(79, 148, 167);
  stroke(255, 100);
  x = r*cos(angle);
  y = r*sin(angle);
  
  translate(width/2, height/2);
  noFill();
  ellipse(0, 0, r*2, r*2);
  fill(0);
  ellipse(x, y, 20, 20);

  
  for (let i=0; i<numAxis; i++) {
    x2[i] = r*cos(angle + shiftingAngle[i]);
    y2[i] = r*sin(angle + shiftingAngle[i]);
    push();
    rotate(-shiftingAngle[i]);
    line(-r, 0, r, 0);
    line(0, -r, 0, r);
    fill(255);
    ellipse(x2[i], 0, 20, 20);
    ellipse(0, y2[i], 20, 20);
    pop();
  }
  
  angle += 1;
}
