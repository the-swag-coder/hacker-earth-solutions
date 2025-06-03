const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
    let currentLine = 0;
    const t = parseInt(input[currentLine++]);

    for (let test = 0; test < t; test++) {
        const n = parseInt(input[currentLine++]);
        let res = 0;
        for (let i = 2; i <= n; i++) {
            for (let j = 1; j < i; j++) {
                if ((i ^ j) <= n) {
                    res++;
                }
            }
        }
        console.log(res);
    }
});
