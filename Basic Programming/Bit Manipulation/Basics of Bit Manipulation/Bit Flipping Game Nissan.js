const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
    const n = parseInt(input[0], 10);
    const a = new Array(1000001).fill(0);

    for (let i = 1; i <= n; i++) {
        const str = input[i];
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '1') {
                a[j]++;
            }
        }
    }

    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            count++;
        }
    }

    if (count % 2 === 0) {
        console.log("B");
        console.log(count);
    } else {
        console.log("A");
        console.log(count);
    }
});
