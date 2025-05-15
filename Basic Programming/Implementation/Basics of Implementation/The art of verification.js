process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});

process.stdin.on('end', function () {
  const constants = ["username", "pwd", "profile", "role", "key"];
  const queryStart = input.indexOf('?');

  if (queryStart === -1) return;

  const query = input.slice(queryStart + 1);
  const tokens = query.split('&');

  const result = {};
  let currentKey = null;

  tokens.forEach(token => {
    if (token.includes('=')) {
      const [key, ...rest] = token.split('=');
      const value = rest.join('=');

      if (constants.includes(key)) {
        currentKey = key;
        result[currentKey] = value;
      } else if (currentKey) {
        result[currentKey] += '&' + key + '=' + value;
      }
    } else if (currentKey) {
      result[currentKey] += '&' + token;
    }
  });

  constants.forEach(key => {
    if (result[key] !== undefined) {
      console.log(`${key}: ${result[key]}`);
    }
  });
});
