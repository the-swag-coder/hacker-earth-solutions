const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(...line.trim().split(/\s+/));
}).on("close", () => {
    const n = parseInt(input[0]);
    const arr = input.slice(1, n + 1).map(Number);

    const temp = new Array(1000000).fill(0);

    for (let i = 0; i < arr.length; i++) {
        temp[arr[i]]++;
    }

    const result = [];

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === 1) {
            result.push(i);
        }
    }

    console.log(result.join(" "));
});
