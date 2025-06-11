const { promedio, desviacionEstandar } = require('@stratos-code/paquete-estadistica/estadistica');
const { generarGrafico } = require('@stratos-code/paquete-estadistica/graficas');

const datos = [12, 25, 33, 48, 60];

const etiquetas = ['Ene', 'Feb', 'Mar', 'Abr', 'May'];

console.log('Promedio:', promedio(datos));
console.log('Desviación Estándar:', desviacionEstandar(datos));

generarGrafico('./grafico.png', etiquetas, datos).then(() => {
  console.log('Gráfico generado: grafico.png');
})