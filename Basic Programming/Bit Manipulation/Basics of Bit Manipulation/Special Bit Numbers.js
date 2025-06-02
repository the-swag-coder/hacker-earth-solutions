const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", line => {
    input.push(line.trim());
});

rl.on("close", () => {
    const [n, q] = input[0].split(" ").map(Number);
    const a = input[1].split(" ").map(Number);

    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const hasDoubleOne = a[i].toString(2).includes("11") ? 1 : 0;
        prefix[i + 1] = prefix[i] + hasDoubleOne;
    }

    for (let i = 0; i < q; i++) {
        const [l, r] = input[i + 2].split(" ").map(Number);
        console.log(prefix[r] - prefix[l - 1]);
    }
});
