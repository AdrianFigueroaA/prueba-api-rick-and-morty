const path = require('path'); 
const config = 
{ 
    entry: './src/index.js', output: 
    { filename: 'main.js', 
    path: path.resolve(__dirname, 'dist'), }
    , module: 
    { rules: [ { test: /\.(js)$/, 
        exclude: /node_modules/, 
        use: ['babel-loader'] } ] },
         resolve: 
         { extensions: ['*', '.js'] } };
         module.exports = {
            //...
            devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
            }
            };
                