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
    let t = parseInt(input[0], 10);
    let line = 1;

    while (t--) {
        let k = parseInt(input[line++], 10);
        if (k > 1e9) throw new Error("k exceeds 1e9");

        let len = 1;
        let curr = 0;
        let next = 4;

        while (curr + next < k) {
            curr += next;
            next *= 4;
            len++;
        }

        k -= curr;
        k -= 1;

        let temp = '';
        let tmp = len;

        while (tmp--) {
            const to = k % 4;
            k = Math.floor(k / 4);
            temp += String.fromCharCode(to + 'a'.charCodeAt(0));
        }

        const put = temp;
        const reversed = temp.split('').reverse().join('');
        console.log(reversed + put);
    }
});
