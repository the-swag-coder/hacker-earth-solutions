const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let grid = [];

function isSafe(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
        if (grid[i][col]) return false;
    }

    // Check upper-left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (grid[i][j]) return false;
    }

    // Check upper-right diagonal
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (grid[i][j]) return false;
    }

    return true;
}

function solveQueen(row) {
    if (row >= n) return true;

    for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
            grid[row][col] = true;
            if (solveQueen(row + 1)) return true;
            grid[row][col] = false;
        }
    }

    return false;
}

rl.on('line', (input) => {
    n = parseInt(input.trim());

    // Initialize grid
    grid = Array(n).fill().map(() => Array(n).fill(false));

    if (solveQueen(0)) {
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j < n; j++) {
                row += (grid[i][j] ? 1 : 0) + " ";
            }
            console.log(row);
        }
    } else {
        console.log("Not possible");
    }

    rl.close();
});