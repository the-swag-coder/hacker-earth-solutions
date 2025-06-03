const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    const [n, m, k] = input[0].split(' ').map(Number);
    const arr = [];

    for (let i = 1; i < input.length; i++) {
        if (input[i].trim()) {
            arr.push(input[i].split(' ').map(Number));
        }
    }

    const rows = arr.length;
    const cols = arr[0].length;

    let maxResult = 0;

    for (let mask = 0; mask < (1 << cols); mask++) {
        let selectedCols = 0;
        for (let j = 0; j < cols; j++) {
            if ((mask >> j) & 1) {
                selectedCols++;
            }
        }

        if (selectedCols > k) continue;

        const remaining = k - selectedCols;

        const rowScores = [];
        for (let i = 0; i < rows; i++) {
            let score = 0;
            for (let j = 0; j < cols; j++) {
                if ((mask >> j) & 1 && arr[i][j] === 1) {
                    score++;
                }
            }
            rowScores.push(score);
        }

        rowScores.sort((a, b) => b - a);

        let sum = 0;
        const take = Math.min(remaining, rows);
        for (let i = 0; i < take; i++) {
            sum += rowScores[i];
        }

        maxResult = Math.max(maxResult, sum);
    }

    console.log(maxResult);
});