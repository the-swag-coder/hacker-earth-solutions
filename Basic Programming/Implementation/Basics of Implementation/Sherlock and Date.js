const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const t = parseInt(input[0]);
  const monthMap = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3,
    'May': 4, 'June': 5, 'July': 6, 'August': 7,
    'September': 8, 'October': 9, 'November': 10, 'December': 11
  };

  const reverseMonthMap = Object.fromEntries(
    Object.entries(monthMap).map(([k, v]) => [v, k])
  );

  for (let i = 1; i <= t; i++) {
    const [dayStr, monthStr, yearStr] = input[i].split(' ');
    const day = parseInt(dayStr);
    const month = monthMap[monthStr];
    const year = parseInt(yearStr);

    const date = new Date(year, month, day);
    date.setDate(date.getDate() - 1);

    const prevDay = date.getDate();
    const prevMonth = reverseMonthMap[date.getMonth()];
    const prevYear = date.getFullYear();

    console.log(`${prevDay} ${prevMonth} ${prevYear}`);
  }
});
