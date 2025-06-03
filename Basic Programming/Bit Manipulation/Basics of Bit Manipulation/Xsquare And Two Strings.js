const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
    let t = parseInt(input[0]);
    let idx = 1;

    for (let i = 0; i < t; i++) {
        const str1 = input[idx++];
        const str2 = input[idx++];

        const freq = new Array(26).fill(0);
        for (const ch of str1) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        let status = false;
        for (const ch of str2) {
            if (freq[ch.charCodeAt(0) - 97] > 0) {
                status = true;
                break;
            }
        }

        console.log(status ? "Yes" : "No");
    }
});
