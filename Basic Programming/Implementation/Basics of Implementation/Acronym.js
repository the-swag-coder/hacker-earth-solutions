const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => input.push(...line.trim().split(/\s+/)));
rl.on('close', () => {
  let index = 0;

  // Read number of known words
  const n = parseInt(input[index++], 10);

  // Collect known words into a set
  const knownWords = new Set();
  for (let i = 0; i < n && index < input.length; i++) {
    knownWords.add(input[index++]);
  }

  // Read number of words to check
  const m = parseInt(input[index++], 10);

  const result = [];
  for (let i = 0; i < m && index < input.length; i++) {
    const word = input[index++];
    if (word && !knownWords.has(word)) {
      result.push(word[0].toUpperCase());
    }
  }

  console.log(result.join('.'));
});
