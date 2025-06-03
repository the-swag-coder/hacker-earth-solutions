const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let currentLine = 0;

rl.on('line', (line) => {
    input.push(line.trim());
});

rl.on('close', () => {
    solve();
});

function solve() {
    const tt = parseInt(input[currentLine++]);

    for (let test = 0; test < tt; test++) {
        const [a, b] = input[currentLine++].split(' ').map(Number);

        let ans = 0;
        ans = (b & 1) ? b - 1 : b - 2;

        console.log(ans >= a ? ans : a & b);
    }
}