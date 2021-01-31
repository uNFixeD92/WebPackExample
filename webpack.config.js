var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './frontend/app.js',
    output: {
        path: path.resolve(__dirname, './backend/public'),
        filename: 'miarchivoEmpaquetadoporWebpack.js'
    },
    module: {
        rules: [
            {
                test: /\.css/, 
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html'
        })
    ]
};

