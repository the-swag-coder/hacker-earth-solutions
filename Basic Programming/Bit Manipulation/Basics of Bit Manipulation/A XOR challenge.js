const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    const number = BigInt(input[0]);
    console.log(xorChallenge(number).toString());
});

function xorChallenge(number) {
    let result = 0n;
    let a = 0n, b = 0n;
    let c = countBits(number);
    c--;

    a = b = 1n << BigInt(c);
    b--;

    for (let i = 0; i < c; i++) {
        let mask = 1n << BigInt(i);
        if ((mask & number) === 0n) {
            a |= mask;
        }
    }

    result = a * b;
    return result;
}

function countBits(number) {
    let c = 0;
    while (number !== 0n) {
        number >>= 1n;
        c++;
    }
    return c;
}
