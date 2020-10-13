const path = require('path');
const webpack = require('webpack')
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    devServer: {
        port: "8035",
        open: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
                'assets': path.join(__dirname, './src/assets')
            }
        }
    },
}