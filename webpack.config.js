const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = env => {
  const isProd = env.mode === `production`;
  const isDev = env.mode === `development`;

  const getStyleLoaders = () => {
    return [isProd ? MiniCssExtractPlugin.loader : `style-loader`];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: `public/index.html`
      })
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: `main-[hash:8].css`
        })
      );
    }
    return plugins;
  };

  return {
    mode: isProd ? `production` : isDev && `development`,
    entry: `./src/index.js`,
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      filename: '[name].js'
    },
    devServer: {
      contentBase: path.join(__dirname, `public`),
      port: 3000,
      historyApiFallback: true,
      open: true,
      overlay: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`, `@babel/preset-react`],
            plugins: [`@babel/plugin-transform-runtime`, '@babel/plugin-proposal-class-properties']
          }
        },

        // Loading images
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                outputPath: `images`,
                name: `[name]-[sha1:hash:7].[ext]`
              }
            }
          ]
        },

        // Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                outputPath: `fonts`,
                name: `[name].[ext]`
              }
            }
          ]
        },
        // Loading CSS
        {
          test: /\.(css)$/,
          use: [`style-loader`, `css-loader`]
        },
        // Loading SASS/SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [
            ...getStyleLoaders(),
            {
              loader: `css-loader`,
              options: {
                importLoaders: 1,
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]-[hash:base64:5]'
                }
              }
            },
            `sass-loader`
          ]
        }
      ]
    },
    plugins: getPlugins(),
    devtool: `source-map`
  };
};
