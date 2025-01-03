function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    background(220);
    rotate(mouseY);
    rect(width / 2, height / 2, 100, 100);
}