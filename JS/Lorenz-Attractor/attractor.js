let x, y, z;
let sigma = 10;
let rho = 28;
let beta = 8/3;

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    let dx = sigma * (y - x);
    let dy = x * (rho - z) - y;
    let dz = x * y - beta * z;

    x += dx;
    y += dy;
    z += dz;
}