const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const src = path.join(__dirname, 'src');

module.exports = {
  // mode
  mode: 'production',
  // target
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        exclude: ['dependencies'],
        include: ['devDependencies'],
      },
    }),
  ],
  // entry point
  entry: {
    index: path.resolve(__dirname, 'src/index.ts'),
  },
  // output
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },

  // resolve
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.ts'],
  },
  // loaders
  module: {
    rules: [
      // ts-loader
      {
        test: /\.(ts)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      // eslint-loader
      {
        test: /\.(js|ts)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnError: true,
        },
      },
    ],
  },
  // plugins
  plugins: [
    // CleanWebpackPlugin
    new CleanWebpackPlugin(),
  ],
};
