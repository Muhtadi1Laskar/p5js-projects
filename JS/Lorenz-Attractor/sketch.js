let x = 0.01, y = 0, z = 0;
let sigma = 10, rho = 28, beta = 8.0 / 3.0;
let points = [];

function setup() {
    createCanvas(800, 800, WEBGL);
    colorMode(HSB);
    background(0);
}

function draw() {
    background(0, 0.1);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    let dt = 0.01;


    let dx = sigma * (y - x) * dt;
    let dy = (x * (rho - z) - y) * dt;
    let dz = (x * y - beta * z) * dt;

    x += dx;
    y += dy;
    z += dz;

    points.push([x, y, z]);


    scale(10);
    noFill();
    beginShape();
    for (let i = 0; i < points.length; i++) {
        let px = points[i][0];
        let py = points[i][1];
        let pz = points[i][2];
        let hue = map(i, 0, points.length, 0, 255);
        stroke(hue, 255, 255);
        vertex(px, py, pz);
    }
    endShape();

    if (points.length > 10000) {
        points.shift();
    }
}