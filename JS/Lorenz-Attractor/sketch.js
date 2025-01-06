let x, y, z;
let sigma = 10;
let rho = 28;
let beta = 8/3;
let dt = 0.01;
let points = [];
let maxPoints = 100;

function setup() {
    createCanvas(600, 600, WEBGL);
    x = 1;
    y = 1; 
    z = 1;
}

function draw() {
    background(220);
    orbitControl();

    let dx = (sigma * (y - x)) * dt;
    let dy = (x * (rho - z) - y) * dt;
    let dz = (x * y - beta * z) * dt;

    x += dx;
    y += dy;
    z += dz;

    scale(5);

    let p = createVector(x, y, z);
    points.push(p);

    if(points.length > maxPoints) {
        points.shift();
    }

    strokeWeight(1);
    for(let i =1; i < points.length; i++) {
        let a = map(i, 0, points.length, 0, 255);
        stroke(0, a);
        
        let prev = points[i-1];
        let curr = points[i];

        line(prev.x, prev.y, prev.z, curr.x, curr.y, curr.z);
    }

    let endpoint = points[points.length - 1];
    strokeWeight(6);
    point(endpoint.x, endpoint.y, endpoint.z);
}