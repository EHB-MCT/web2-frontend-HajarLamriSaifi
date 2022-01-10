const path = require('path');

module.exports = {
    entry: [
        './src/script.js',
        './src/item.js',
        './src/museum.js',
        './src/saveditems.js',
    
    ],

    output: {
        filename: 'webpack.js',
        path: path.resolve(__dirname, 'docs'),
    },
    mode: 'production',
    watch: true
};