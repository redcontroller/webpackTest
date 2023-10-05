const path = require('path');
const webpack = require('webpack');

// 모듈을 밖으로 빼내는 노드 JS문법입니다.
// 엔트리, 아웃풋, 번들링 모드를 설정할 수 있습니다.
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    
    module: {
        // 로더를 추가하는 장소입니다.
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset', // type: 'asset/inline'
                parser: {
                    dataUrlCondition: {
                        maxSize: 80 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
                    }
                }
            }
        ]
    },
        plugins : [
            new webpack.BannerPlugin ({
                banner: `마지막 빌드 시간은 : ${new Date().toLocaleString()} 입니다.`
            })
        ]
}