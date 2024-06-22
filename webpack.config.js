function getStyleUse(bundleFilename) {
    return [
      {
        loader: 'file-loader',
        options: {
          name: bundleFilename,
        },
      },
      { loader: 'extract-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          // fiber: require('fibers'),
          // See https://github.com/webpack-contrib/sass-loader/issues/804
          webpackImporter: false,
          sassOptions: {
            includePaths: ['./node_modules']
          }
        }
      },
    ];
  }
  
  module.exports = [
    {
      entry: ['./public/sass/app.scss', './public/scripts/app.js'],
      output: {
        // This is necessary for webpack to compile, but we never reference this js file.
        filename: 'bundle.js',
      },
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: getStyleUse('styles/style.css')
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          }
        ]
      },
    }
    // {
    //   entry: './home.scss',
    //   output: {
    //     // This is necessary for webpack to compile, but we never reference this js file.
    //     filename: 'style-bundle-home.js',
    //   },
    //   module: {
    //     rules: [{
    //       test: /home.scss$/,
    //       use: getStyleUse('bundle-home.css')
    //     }]
    //   },
    // },
    // {
    //   entry: "./login.js",
    //   output: {
    //     filename: "bundle-login.js"
    //   },
    //   module: {
    //     loaders: [{
    //       test: /login.js$/,
    //       loader: 'babel-loader',
    //       query: {presets: ['env']}
    //     }]
    //   },
    // },
    // {
    //   entry: "./home.js",
    //   output: {
    //     filename: "bundle-home.js"
    //   },
    //   module: {
    //     loaders: [{
    //       test: /home.js$/,
    //       loader: 'babel-loader',
    //       query: {presets: ['env']}
    //     }]
    //   },
    // }
  ];
  