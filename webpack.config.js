const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules: [{
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
            filename: '[name].css',
            ignoreOrder: false
        })

        // new CopyPlugin({
        //     patterns: [
        //         { from: 'src/assets', to: 'assets/' },
        //     ],
        // })
    ]


}