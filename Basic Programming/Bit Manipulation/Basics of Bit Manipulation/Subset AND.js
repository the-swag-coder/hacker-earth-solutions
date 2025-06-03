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
        const [z, n] = input[currentLine++].split(' ').map(Number);
        const numbers = input[currentLine++].split(' ').map(Number);

        let f = 0;
        let current = z;

        for (let i = 0; i < n; i++) {
            current &= numbers[i];
            if (current === 0) {
                f = 1;
            }
        }

        console.log(f ? "Yes" : "No");
    }
}