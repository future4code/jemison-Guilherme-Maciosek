const temperatura = +prompt("Digite a temperatura em ºC");
const escalaMedida = prompt("Digite F ou K");

function convertTempoCtoF(temperatura, escalaMedida) {
  const tempF = temperatura * 33.8;
  const tempK = temperatura * 274.15;
  if (escalaMedida === "F") {
    return `A temperatura ${temperatura} em F é de ${tempF}.`;
  } else {
    return `A temperatura ${temperatura} em K é de ${tempK}.`;
  }
}
console.log(convertTempoCtoF(temperatura, escalaMedida));