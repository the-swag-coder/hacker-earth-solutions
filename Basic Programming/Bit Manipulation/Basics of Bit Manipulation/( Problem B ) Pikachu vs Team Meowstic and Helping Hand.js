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
    let k = parseInt(input[idx++], 10);

    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(input[idx++], 10);
    }

    if (k > 100) k = 100;

    for (let i = 1; i <= k; i++) {
        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1] | arr[j];
        }
    }

    console.log(arr.join(" "));
});
