const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // Buena opción para desarrollo
  devServer: {
    static: './dist', // Asegúrate de que apunte al directorio correcto
    hot: true, // Activa el Hot Module Replacement
    watchFiles: ['./src/**/*.{js,css,html}'], // Observa los archivos especificados
    open: true, // Abre el navegador automáticamente al iniciar el servidor
    // Puedes agregar más configuraciones si es necesario
  },
});
