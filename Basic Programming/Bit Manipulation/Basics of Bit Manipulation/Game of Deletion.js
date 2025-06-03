const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", line => input.push(...line.trim().split(/\s+/)));

rl.on("close", () => {
    let idx = 0;
    const n = parseInt(input[idx++], 10);

    let or1 = 0, or2 = 0, s1 = 0, s2 = 0;

    for (let i = 0; i < n; i++) {
        const x = parseInt(input[idx++], 10);
        or1 |= x;
        s1 += x;
    }

    for (let i = 0; i < n; i++) {
        const x = parseInt(input[idx++], 10);
        or2 |= x;
        s2 += x;
    }

    const r1 = s1 - or1;
    const r2 = s2 - or2;

    if (r1 > r2) {
        console.log(`1 ${r1 - r2}`);
    } else {
        console.log(`2 ${r2 - r1}`);
    }
});
