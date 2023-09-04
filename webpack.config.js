const path = require('path');

module.exports = {
    entry: ['./src/index.js', "./src/styles.css"],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
      //     rule for handling css files
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
      ],
    },
};
