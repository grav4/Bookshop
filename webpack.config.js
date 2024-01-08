const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
    filename: 
            'main.js'
    },
    mode: 'production',

    module: {
      rules: [
        { test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"] }
      ],
    },
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
        ],
      },
      plugins: [new MiniCssExtractPlugin()],
};