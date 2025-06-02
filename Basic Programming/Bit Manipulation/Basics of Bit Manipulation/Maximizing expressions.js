const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", line => {
    input.push(...line.trim().split(/\s+/));
});

rl.on("close", () => {
    let idx = 0;
    const n = parseInt(input[idx++], 10);

    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = BigInt(input[idx++]); // Read first array as BigInt
    }

    for (let i = 0; i < n; i++) {
        const x = BigInt(input[idx++]);
        arr[i] ^= x;
    }

    let res = 0n;
    for (let i = 0; i < n; i++) {
        const x = BigInt(input[idx++]);
        const notAnd = ~arr[i] & x;
        if (notAnd !== 0n) {
            res += arr[i] ^ notAnd;
        } else {
            res += arr[i] ^ (x & -x);
        }
    }

    console.log(res.toString());
});
