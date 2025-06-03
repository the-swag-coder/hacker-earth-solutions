const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", (line) => {
    input.push(line.trim());
});

rl.on("close", () => {
    const t = parseInt(input[0]);
    let output = [];

    for (let i = 1; i <= t; i++) {
        const [m, p] = input[i].split(" ").map(Number);
        let x = m ^ p;
        let count = 0;

        while (x) {
            x &= (x - 1);
            count++;
        }

        output.push(count);
    }

    console.log(output.join("\n"));
});
