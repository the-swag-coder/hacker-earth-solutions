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
        const arr = input[currentLine++].split(' ').map(Number);
        const s = parseInt(input[currentLine++]);

        let res = 0;
        let found = false;

        for (let i = 0; i < (1 << n); i++) {
            res = 0;
            for (let j = 0; j < n; j++) {
                if (i & (1 << j)) {
                    res += arr[j];
                }
            }
            if (res === s) {
                found = true;
                break;
            }
        }

        console.log(found ? "YES" : "NO");
    }
}