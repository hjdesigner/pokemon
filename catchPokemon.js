const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function catchPockemon(coordinates) {
  const path = Array.from(coordinates);
  const pathClear = path.sort().filter((item, pos, ary) => !pos || item != ary[pos - 1]);
  
  if (pathClear.length === 0) {
    return 1;
  }
  if (pathClear.length === 1) {
    return pathClear.length + 1;
  }

  return pathClear.length;
}

rl.question('>>Insira as coordenadas: N, E, S ou O ', (answer) => {
  console.log(`O Ash capturou: ${catchPockemon(answer)} pokemon`)
  rl.close();
});

module.exports = catchPockemon;