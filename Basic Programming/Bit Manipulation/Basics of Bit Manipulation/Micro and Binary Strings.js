const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
    let currentLine = 0;
    const t = parseInt(input[currentLine++]);

    for (let i = 0; i < t; i++) {
        const n = parseInt(input[currentLine++]);
        const str = input[currentLine++];
        const countOnes = [...str].filter(ch => ch === '1').length;
        console.log(countOnes);
    }
});
