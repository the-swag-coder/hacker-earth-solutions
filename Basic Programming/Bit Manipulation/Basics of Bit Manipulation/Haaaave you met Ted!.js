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

function popcount(x) {
    let count = 0;
    while (x) {
        count += x & 1;
        x >>>= 1;
    }
    return count;
}

function solve() {
    const t = parseInt(input[currentLine++]);

    for (let test = 0; test < t; test++) {
        const n = parseInt(input[currentLine++]);
        const numbers = input[currentLine++].split(' ').map(Number);

        let ans = popcount(numbers[0]);

        for (let i = 1; i < n; i++) {
            const count = popcount(numbers[i]);
            if (count < ans) {
                ans = count;
            }
        }

        console.log(ans);
    }
}