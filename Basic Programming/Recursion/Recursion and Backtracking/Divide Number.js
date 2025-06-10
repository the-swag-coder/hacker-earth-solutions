const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let testCases = 0;
let currentTest = 0;

rl.on('line', (line) => {
    input.push(line.trim());

    if (currentTest === 0) {
        testCases = parseInt(input[0]);
        currentTest++;
    } else {
        let n = BigInt(input[currentTest]);

        if (n & 1n || n < 4n) {
            console.log("-1");
        } else if (n % 4n === 0n) {
            let quarter = n >> 2n;
            console.log((quarter * quarter * quarter * quarter).toString());
        } else if (n % 6n === 0n) {
            let sixth = n / 6n;
            let third = n / 3n;
            console.log((sixth * sixth * third * third).toString());
        } else if (n % 10n === 0n) {
            let tenth = n / 10n;
            let fifth = n / 5n;
            let half = n >> 1n;
            console.log((tenth * fifth * fifth * half).toString());
        } else {
            console.log("-1");
        }

        currentTest++;

        if (currentTest > testCases) {
            rl.close();
        }
    }
});