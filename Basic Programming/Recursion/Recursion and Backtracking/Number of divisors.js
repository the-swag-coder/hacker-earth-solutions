const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rans(n, k) {
    let sum = n * (n + 1n) / 2n;
    if (n < 1n) {
        return sum;
    }
    let x = n / k;
    sum -= k * x * (x + 1n) / 2n;
    return sum + rans(x, k);
}

let input = [];
let testCases = 0;
let currentTest = 0;

rl.on('line', (line) => {
    input.push(line.trim());

    if (currentTest === 0) {
        testCases = parseInt(input[0]);
        currentTest++;
    } else {
        let [n, k] = input[currentTest].split(' ').map(x => BigInt(x));
        console.log(rans(n, k).toString());
        currentTest++;

        if (currentTest > testCases) {
            rl.close();
        }
    }
});