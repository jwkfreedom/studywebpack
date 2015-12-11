# studywebpack
Note of learn [webpack](https://github.com/fakefish/react-webpack-cookbook)

## note1
To use ES6 correctly, you should not just install babel-loader, and also install babel-core babel-preset-es2015 babel-preset-react.[npm babe-loader](https://www.npmjs.com/package/babel-loader)
And, you should set the webpack.config.js 
>          {
>            test: /\.jsx?$/,
>            exclude: /node_modules/,
>            loader: 'babel', 
>            query: {
>              presets: ['react', 'es2015']
>            }
>          }
>

