
var path = require("path");
module.exports={
    entry:"./src/js/app.jsx",
    output: { path: `${__dirname}/dist/js`, filename: 'script.min.js' },
    devServer: {
        inline: true,
        contentBase: './',
        port: 8080
    },
    mode: "development", watch: true,
    module: {
        rules: [{
            test: /\.jsx$/, exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: { presets: ["es2015", "stage-2", "react"] }
            }
        }]
    }
}