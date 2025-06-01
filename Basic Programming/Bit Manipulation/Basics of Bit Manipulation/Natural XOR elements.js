const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    let t = parseInt(input[0]);
    let idx = 1;

    for (let i = 0; i < t; i++) {
        let n = BigInt(input[idx++]);
        let x = n % 4n;

        if (x === 0n) {
            console.log(`1 ${n}`);
        } else if (x === 1n) {
            console.log("1 1");
        } else if (x === 2n) {
            console.log(`2 ${n} 1`);
        } else {
            console.log("0");
        }
    }
});
