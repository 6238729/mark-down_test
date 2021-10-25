const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const marked = require("marked");
const renderer = new marked.Renderer();

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'main.js')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      loader: 'vue-markdown-loader/lib/markdown-compiler',
      options: {
            raw: true,
      }
    }
  ],
  rules: [{
    test: /\.md$/,
    use: [
        {
            loader: "html-loader"
        },
        {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              renderer
            }
        }
    ]
}]
  },

  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.md']}
};