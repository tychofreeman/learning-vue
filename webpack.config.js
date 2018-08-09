const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
                   'vue$': 'vue/dist/vue.esm.js'
               },
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        }
               ]
    },
    output: {
                filename: 'main.js',
                path: path.resolve(__dirname, 'dist'),
            },
    plugins: [
        new VueLoaderPlugin()
    ]
};
