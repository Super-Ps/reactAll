const path = require('path');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, '../src/index.js'),
    mode:'development',
    
    /*输出到dist目录，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    /*src目录下面的以.js结尾的文件，要使用babel解析*/
/*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }]
    },

    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, '../dist'), 
        compress: true,  // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot:true, // 热更新
        historyApiFallback:true, // 解决启动后刷新404

        proxy: { // 配置服务代理
            '/api': {
                 target: 'http://localhost:8000',
                 pathRewrite: {'^/api' : ''},  //可转换
                 changeOrigin:true
            }
        },


        port: 8000 // 端口
    },

    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers') 
        }
    },
    
 

    devtool: 'inline-source-map'


};

