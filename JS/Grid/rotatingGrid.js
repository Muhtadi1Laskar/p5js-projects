let angle = 0;
let mouseDistance = 50;
let size = 25;
let cols = 0;
let rows = 0;
let blocks = [];

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    angleMode(DEGREES);

    cols = width / size;
    rows = height / size;

    for (let i = 0; i < cols; i++) {
        blocks[i] = [];
        for (let j = 0; j < rows; j++) {
            blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
        }
    }
}

function draw() {
    background(220);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            blocks[i][j].move();
            blocks[i][j].display();
        }
    }
}