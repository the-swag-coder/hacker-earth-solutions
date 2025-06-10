const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function f(n) {
    let ans = "";
    while (n > 0n) {
        if (n % 2n === 1n) {
            ans = "1" + ans;
        } else {
            ans = "0" + ans;
        }
        n = n / 2n;
    }
    if (ans === "") {
        return "0";
    }
    return ans;
}

function g(s) {
    let n = s.length;
    let ans = 0n;
    for (let i = 0; i < n; i++) {
        if (s[i] === '1') {
            ans += 1n << BigInt(n - 1 - i);
        }
    }
    return ans;
}

// Pre-generate all palindromic numbers
let v = [];
v.push(0n);

for (let i = 1; i <= 31; i++) {
    let j = Math.floor((i + 1) / 2);
    let start = 1n << BigInt(j - 1);
    let end = 1n << BigInt(j);

    for (let k = start; k < end; k++) {
        let a = f(k);
        let b = a;
        if (i % 2 === 1) {
            b = b.slice(0, -1); // Remove last character (equivalent to pop_back)
        }
        b = b.split('').reverse().join(''); // Reverse string
        a += b;
        v.push(g(a));
    }
}

// Sort the array
v.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
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

        // Find lower_bound (first element >= n)
        let l = 0;
        let r = v.length - 1;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (v[mid] >= n) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        let lowerBound = l;

        // Find upper_bound (first element > n) - 1
        l = 0;
        r = v.length - 1;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (v[mid] > n) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        let upperBound = (v[l] > n) ? l - 1 : l;

        if (v[lowerBound] === n) {
            console.log("0");
        } else {
            let diff1 = n - v[upperBound];
            let diff2 = v[lowerBound] - n;
            console.log((diff1 < diff2 ? diff1 : diff2).toString());
        }

        currentTest++;

        if (currentTest > testCases) {
            rl.close();
        }
    }
});