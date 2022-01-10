const path = require('path');

module.exports = {
    entry: {
        script:'./src/script.js',
        item:'./src/item.js',
        museum:'./src/museum.js',
        saveditems:'./src/saveditems.js',
    
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),
    },
    mode: 'production',
    watch: true
};