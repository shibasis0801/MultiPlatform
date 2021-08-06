const path = require("path");
const baseWebpack = require("./webpack.base");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "bundle.js"
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    entry: baseWebpack.entry,
    resolve: baseWebpack.resolve,
    module: baseWebpack.module,
    plugins: [
        ...baseWebpack.plugins,
        new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: 'static', generateStatsFile: true }),
    ]
}
