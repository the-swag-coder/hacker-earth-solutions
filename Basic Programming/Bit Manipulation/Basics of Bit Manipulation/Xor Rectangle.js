const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
let lineIndex = 0;

rl.on('line', (line) => {
    lines.push(line.trim());
});

rl.on('close', () => {
    solve();
});

function solve() {
    const n = parseInt(lines[lineIndex++]);
    const numbers = lines[lineIndex++].split(' ').map(Number);

    const arr = Array(n + 1).fill(null).map(() => Array(20).fill(0));

    for (let i = 1; i <= n; i++) {
        const x = numbers[i - 1];

        for (let j = 0; j < 20; j++) {
            arr[i][j] = arr[i - 1][j] + ((x >> j) & 1);
        }
    }

    const q = parseInt(lines[lineIndex++]);

    for (let query = 0; query < q; query++) {
        const [x1, y1, x2, y2] = lines[lineIndex++].split(' ').map(Number);

        let res = 0;

        const xtot = x2 - x1 + 1;
        const ytot = y2 - y1 + 1;

        for (let j = 0; j < 20; j++) {
            const countX = arr[x2][j] - arr[x1 - 1][j];

            const countY = arr[y2][j] - arr[y1 - 1][j];

            const bitValue = 1 << j;
            const pairs = countX * (ytot - countY) + countY * (xtot - countX);

            res += bitValue * pairs;
        }

        console.log(res);
    }
}