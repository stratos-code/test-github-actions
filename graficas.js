const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const fs = require('fs');

const width = 800; // Ancho del gráfico
const height = 600; // Alto del gráfico

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

async function generarGrafico(nombreArchivo, labels, data, options) {
    const configuration = {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Datos',
                data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }]
        },
        options
    };

    const image = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync(nombreArchivo, image);
}

modulue.exports = {
    generarGrafico
};