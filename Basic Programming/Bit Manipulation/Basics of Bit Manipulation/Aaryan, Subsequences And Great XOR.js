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
    const n = parseInt(input[currentLine++]);
    const numbers = input[currentLine++].split(' ').map(Number);

    let cnt = 0;
    for (let i = 0; i < n; i++) {
        cnt |= numbers[i];
    }

    console.log(cnt);
}