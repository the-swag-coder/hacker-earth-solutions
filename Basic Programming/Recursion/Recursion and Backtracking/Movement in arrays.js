const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MX = 1000000;
let arr = [];
let n, m;
let factors = Array(MX + 1).fill().map(() => []);

function acceptArray(inputArr) {
    arr = inputArr.map(Number);
}

function printMat(matrix) {
    for (let row of matrix) {
        console.log(row.map(val => val ? 1 : 0).join(" "));
    }
}

function mulMat(a, b) {
    let r1 = a.length, r2 = b.length, c1 = a[0].length, c2 = b[0].length;
    let ans = Array(r1).fill().map(() => Array(c2).fill(false));

    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            for (let k = 0; k < r2; k++) {
                if (a[i][k] && b[k][j]) {
                    ans[i][j] = true;
                    break;
                }
            }
        }
    }
    return ans;
}

function powerMat(mat, p) {
    if (p === 1) return mat;
    let ans = powerMat(mat, Math.floor(p / 2));
    ans = mulMat(ans, ans);
    if (p % 2) ans = mulMat(mat, ans);
    return ans;
}

function solveMovement() {
    let mat = Array(n).fill().map(() => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        for (let f of factors[arr[i]]) {
            if (i + f < n) mat[i][i + f] = true;
            if (i - f >= 0) mat[i][i - f] = true;
        }
    }

    mat = powerMat(mat, m);
    return mat[0][n - 1];
}

// Precompute factors for all numbers up to MX
function precomputeFactors() {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
    for (let prime of primes) {
        for (let j = prime; j <= MX; j += prime) {
            factors[j].push(prime);
        }
    }
}

// Initialize factors
precomputeFactors();

let input = [];
let testCases = 0;
let currentTest = 0;
let lineIndex = 0;

rl.on('line', (line) => {
    input.push(line.trim());

    if (lineIndex === 0) {
        testCases = parseInt(input[0]);
        lineIndex++;
    } else {
        let testLineIndex = (lineIndex - 1) % 3;

        if (testLineIndex === 0) {
            // Read n
            n = parseInt(input[lineIndex]);
        } else if (testLineIndex === 1) {
            // Read array
            acceptArray(input[lineIndex].split(' '));
        } else if (testLineIndex === 2) {
            // Read m and solve
            m = parseInt(input[lineIndex]);
            console.log(solveMovement() ? "YES" : "NO");
            currentTest++;

            if (currentTest === testCases) {
                rl.close();
            }
        }

        lineIndex++;
    }
});