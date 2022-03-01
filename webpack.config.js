module.exports = {
    entry : './src/js/index.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        'useBuiltIns': 'usage',
                                        'corejs': {
                                            'version': 3,
                                            'proposal': false
                                        }
                                    }
                                ]
                            ],
                            plugins: [
                                [
                                    "@babel/plugin-transform-runtime",
                                    {
                                        'corejs': {
                                            'version': 3,
                                            'proposal': false
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                ]
            }
        ]
    },
}