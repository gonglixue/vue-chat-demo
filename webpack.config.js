/**
 * Created by chenjun on 2016/12/29.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname, './dist'),
        publicPath:'/dist/',
        filename:'build.js'
    },
    resolve:{
        extensions:['','.js','.vue'],
        alias:{
            components:path.join(__dirname,'./src/components'),
            'vue$': 'vue/dist/vue.js'
        },
    },
    resolveLoader:{
        root: path.join(__dirname, 'node_modules')
    },

    module:{
        loaders:[
            { test:/\.vue$/, loader:'vue' },
            { test:/\.js$/, loader:'babel-loader',query:{presets:['es2015']}, exclude:/node_modules/ },
            { test:/\.css$/, loader:'vue-style-loader!css-loader'},
            { test:/\.less$/, loader:'vue-style-loader!css-loader!less-loader'},
            { test:/\.(png|jpg|gif|svg)$/, loader:'file',
                query:{
                    name:'[name].[ext]?[hash]'
                }
            }
        ]
    },
    devServer:{
        historyApiFallback:true,
        noInfo:true
    },
    devtool:'#eval-source-map'
}

//生产环境，运行npm run build则执行这里
//...