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

const MOD = 1000000007n;
const MX = 32;

function power(x, y) {
    let res = 1n;
    x = BigInt(x) % MOD;
    y = BigInt(y);

    while (y > 0n) {
        if (y % 2n === 0n) {
            y = y / 2n;
            x = (x * x) % MOD;
        } else {
            y = y - 1n;
            res = (res * x) % MOD;
            y = y / 2n;
            x = (x * x) % MOD;
        }
    }
    return res;
}

function solve() {
    const t = parseInt(lines[lineIndex++]);

    for (let test = 0; test < t; test++) {
        const n = parseInt(lines[lineIndex++]);
        const numbers = lines[lineIndex++].split(' ').map(x => parseInt(x));

        const arr = new Array(MX).fill(0);

        for (let num of numbers) {
            for (let i = 0; i < 32; i++) {
                if ((num >>> i) & 1) {
                    arr[i]++;
                }
            }
        }

        let res = 0n;

        for (let i = 0; i < 32; i++) {
            const x = arr[i];
            if (x > 0) {
                const pow2x = power(2, x);
                const term1 = (pow2x - 1n + MOD) % MOD;
                const term2 = power(2, i);
                const contribution = (term1 * term2) % MOD;
                res = (res + contribution) % MOD;
            }
        }

        console.log(res.toString());
    }
}