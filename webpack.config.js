const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8081,
        compress: true,
        overlay: {
            errors: true,
        },
        open: true,
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            // 它会应用到普通的 `.jsx` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.styl/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        }, {
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?name=iconfont/[name].[md5:hash:hex:7].[ext]'
        }]
    },
    plugins: [
        new VueLoaderPlugin(),

        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Development',
        })
    ],

}