const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [
  "class YabbaDabbaDoo",
  " def foo",
  "  if foo == 42",
  "   puts 'world hello'",
  "  elsif foo == 24",
  "   puts 'bk201'",
  "  else",
  "   puts 'congrats!'",
  "  end",
  " end",
  "end"
];

lines.forEach(line => console.log(line));

rl.close();
