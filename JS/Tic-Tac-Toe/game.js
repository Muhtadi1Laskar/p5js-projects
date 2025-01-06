let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  let human = 'O';
  let ai = 'X';
  let currentPlayer = human;
  
  function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, CENTER);
    textSize(32);
    noLoop();
    frameRate(30);
  }
  
  function draw() {
    background(220);
    drawGrid();
    drawBoard();
    if (checkWinner() !== null) {
      noLoop();
      let result = checkWinner();
      let msg = result === 'tie' ? 'It\'s a Tie!' : `${result} Wins!`;
      createP(msg).style('font-size', '32px').style('text-align', 'center');
    }
  }
  
  function drawGrid() {
    strokeWeight(4);
    line(width / 3, 0, width / 3, height);
    line(2 * width / 3, 0, 2 * width / 3, height);
    line(0, height / 3, width, height / 3);
    line(0, 2 * height / 3, width, 2 * height / 3);
  }
  
  function drawBoard() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let x = j * width / 3 + width / 6;
        let y = i * height / 3 + height / 6;
        let spot = board[i][j];
        if (spot === human) {
          noFill();
          ellipse(x, y, width / 6);
        } else if (spot === ai) {
          line(x - width / 12, y - height / 12, x + width / 12, y + height / 12);
          line(x + width / 12, y - height / 12, x - width / 12, y + height / 12);
        }
      }
    }
  }
  
  function mousePressed() {
    if (currentPlayer === human) {
      let i = floor(mouseY / (height / 3));
      let j = floor(mouseX / (width / 3));
      if (board[i][j] === '') {
        board[i][j] = human;
        currentPlayer = ai;
        loop();
        setTimeout(() => {
          aiMove();
          loop();
        }, 500);
      }
    }
  }
  
  function aiMove() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          board[i][j] = ai;
          let score = minimax(board, 0, false);
          board[i][j] = '';
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    board[move.i][move.j] = ai;
    currentPlayer = human;
  }
  
  function checkWinner() {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
        return board[i][0];
      }
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
        return board[0][i];
      }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
      return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
      return board[0][2];
    }
    // Check tie
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          openSpots++;
        }
      }
    }
    if (openSpots === 0) {
      return 'tie';
    }
    return null;
  }
  
  function minimax(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {
      if (result === ai) return 10 - depth;
      else if (result === human) return depth - 10;
      return 0;
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            board[i][j] = ai;
            let score = minimax(board, depth + 1, false);
            board[i][j] = '';
            bestScore = max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === '') {
            board[i][j] = human;
            let score = minimax(board, depth + 1, true);
            board[i][j] = '';
            bestScore = min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }
  