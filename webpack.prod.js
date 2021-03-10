const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin()]
    },
    output: {
        filename: 'main.[fullhash].js', //crea el main con un hash para que asi no se guarde en memoria cache
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },

            {
                test: /\.css$/,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]

            },
            {
                test: /styles\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]

            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: 'assets/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        new MinifyPlugin(),
        new CleanWebpackPlugin()

        // new CopyPlugin({
        //     patterns: [
        //         { from: 'src/assets', to: 'assets/' },
        //     ],
        // })
    ]


}