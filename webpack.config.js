const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { type } = require("os");

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production";
}

const plugins = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
    }),
];

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode,
    plugins,
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[name][ext]",
        clean: true,
    },

    resolve: {
        alias: {
            components: path.resolve(__dirname, "src/components"),
        },
        extensions: [".js", ".jsx"],
    },

    devServer: {
        hot: true,
    },

    module: {
        rules: [
            { test: /\.(html)$/, use: ["html-loader"] },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === "production" ? "asset" : "asset/resource",
            },
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                type: "assets/fonts",
                dependency: { not: ["url"] },
            },
        ],
    },
};
