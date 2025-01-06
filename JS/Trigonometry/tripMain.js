let x; 
let y; 
let angle = 0;
let r = 150

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(220);
    angle = map(mouseX, 0, width, 0, 360);

    x = r * cos(angle);
    y = r * sin(angle);

    translate(width / 2, height / 2);
    noFill();
    ellipse(0, 0, r * 2, r * 2);
    fill(255, 0, 0);
    ellipse(x, y, 20, 20);
}