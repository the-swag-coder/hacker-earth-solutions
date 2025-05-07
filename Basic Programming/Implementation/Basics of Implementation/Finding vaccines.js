const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
});

rl.on('close', () => {
  let noOfVaccine = parseInt(input[0]);
  let lenOfVirus = parseInt(input[1]);
  let virus = input[2];

  let v = [0, 0]; // [C count, G count]

  for (let char of virus) {
    if (char === 'C') v[0]++;
    else if (char === 'G') v[1]++;
  }

  let maxScore = 0;
  let bestVaccineIndex = 0;

  let index = 3;
  for (let j = 0; j < noOfVaccine; j++) {
    let le = parseInt(input[index++]); // length of vaccine, not used
    let vacc = input[index++];

    let temp = [0, 0]; // [C count, G count]

    for (let char of vacc) {
      if (char === 'C') temp[0]++;
      else if (char === 'G') temp[1]++;
    }

    let score = v[0] * temp[1] + v[1] * temp[0];

    if (score > maxScore) {
      maxScore = score;
      bestVaccineIndex = j + 1;
    }
  }

  console.log(bestVaccineIndex);
});
