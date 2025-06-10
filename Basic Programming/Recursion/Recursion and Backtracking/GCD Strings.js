const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MOD = 1000000007n;
let xx, yy, tmp;

function power(x, y) {
    let res = 1n;
    x = BigInt(x);
    y = BigInt(y);

    while (y > 0n) {
        if (y % 2n === 0n) {
            y /= 2n;
            x = (x * x) % MOD;
        } else {
            y -= 1n;
            res = (res * x) % MOD;
            y /= 2n;
            x = (x * x) % MOD;
        }
    }
    return res;
}

function calculateGP(firstTerm, numberOfTerms, len) {
    let commonRatio = power(2n, len);
    let summationGP = ((power(commonRatio, numberOfTerms) - 1n) * power(commonRatio - 1n, MOD - 2n)) % MOD;
    return (summationGP * firstTerm) % MOD;
}

function g(a, b) {
    a = BigInt(a);
    b = BigInt(b);

    if (a % b !== 0n) {
        g(b, a % b);
        tmp = xx;
        xx = (calculateGP(xx, a / b, b) * power(2n, a % b) + yy) % MOD;
        yy = tmp;
    } else {
        yy = power(2n, b - 1n);
        xx = power(2n, a - 1n);
    }
}

let input = [];
let lineCount = 0;

rl.on('line', (line) => {
    input.push(line.trim());

    if (lineCount === 0) {
        lineCount = parseInt(input[0]);
    } else {
        let [x, y] = input[input.length - 1].split(' ').map(Number);
        g(x, y);
        console.log(xx.toString());
        lineCount--;

        if (lineCount === 0) {
            rl.close();
        }
    }
});