const readline = require("readline");

class MyException extends Error {
  constructor(value) {
    super();
    this.name = "MyException";
    this.value = value;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => input.push(line.trim()));

rl.on("close", () => {
  try {
    // Parse 'n'
    const n = parseInt(input[0]);
    if (isNaN(n)) throw "Format mismatch";

    // Check we have at least n + 2 lines (n, 10 integers, and the string)
    if (input.length < 12) throw "Format mismatch";

    // Parse 10 integers
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      const val = parseInt(input[i]);
      if (isNaN(val)) throw "Format mismatch";
      arr.push(val);
    }

    // Read string and access 11th char (index 10)
    const s = input[11];
    if (s.length <= 10) throw "Index is invalid";

    console.log(s.charAt(10));

    // Call solve function
    solve(arr);

  } catch (err) {
    if (err instanceof MyException) {
      console.log(`MyException[${err.value}]`);
    } else if (err === "Invalid division") {
      console.log("Invalid division");
    } else if (err === "Format mismatch") {
      console.log("Format mismatch");
    } else if (err === "Index is invalid") {
      console.log("Index is invalid");
    } else if (err === "Array index is invalid") {
      console.log("Array index is invalid");
    } else {
      console.log("Exception encountered");
    }
  } finally {
    console.log("Exception Handling Completed");
  }
});

function solve(arr) {
  let ans = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
      if (arr[j] === 0) throw "Invalid division";
      ans += Math.floor(arr[i] / arr[j]);
    }
  }
  throw new MyException(ans);
}
