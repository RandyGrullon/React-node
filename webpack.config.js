//webpack.config.js

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/src/public",
        filename: "bundle.js"
    }
};