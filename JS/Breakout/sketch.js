let barWidth = 20;
let barHeight = 70;
let paddleX;
let paddleY;


function setup() {
    createCanvas(400, 400);
    paddleX = width - 30;
    paddleY = height / 2 - 70;
}


function draw() {
    background(220);
    

    rect(paddleY, paddleX, barHeight, barWidth);

    if (keyIsPressed) {
        if (keyCode === LEFT_ARROW) {
            paddleY -= 3;
        }
        if (keyCode === RIGHT_ARROW) {
            paddleY += 3;
        }
    }

    if (paddleY+barWidth > width || paddleY + barWidth < width) {
        paddleY = 3;
    }

    console.log(paddleX, paddleY)
}

function keyPressed() {
    console.log(key);
    
}