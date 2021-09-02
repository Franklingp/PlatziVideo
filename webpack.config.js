const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
        clean: true,
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@styles": path.resolve(__dirname, "src/assets/styles"),
            "@components": path.resolve(__dirname, "src/components"),
            "@static": path.resolve(__dirname, "src/assets/static"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                },
            },
            {
                test: /\.(s*)css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif)/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "assets/static/[hash].[ext]"
                    }
                }
            }
        ],
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css",
        }),
    ],
}