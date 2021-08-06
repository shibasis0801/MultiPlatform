const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const webReact = path.resolve(__dirname, "../src")

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".json", "web.js", "web.jsx" ],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?/,
                include: [webReact],
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ]
}
