function promedio(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function desviacionEstandar(arr) {
  const mean = promedio(arr);
  const squaredDiffs = arr.map(x => Math.pow(x - mean, 2));
  return Math.sqrt(promedio(squaredDiffs));
}

module.exports = { promedio, desviacionEstandar };