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
    const t = parseInt(input[currentLine++]);

    for (let test = 0; test < t; test++) {
        const n = parseInt(input[currentLine++]);
        const numbers = input[currentLine++].split(' ').map(Number);

        let odd = 0, even = 0;

        for (let i = 0; i < n; i++) {
            if (numbers[i] & 1) {
                odd++;
            } else {
                even++;
            }
        }

        console.log(odd * even);
    }
}