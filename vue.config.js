const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
require('events').EventEmitter.defaultMaxListeners = 0
module.exports = {
    publicPath: "./",
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    devServer: {
        proxy: {
            '/api/login/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/nl/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/verifycode/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/stalk/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/stalkm/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/gdata/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/weather/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/fixapi/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/user/': {
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true,
            },
            '/api/zhizhou/': {
                // target: 'http://47.105.112.81:18009',//接口域名  服务器
                //  target: 'http://ht.ruijingrs.cn',//接口域名  服务器
                target: 'http://124.193.105.38:20021', //接口域名  服务器
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api/zhizhou/': '/api/grid/' //需要rewrite重写
                // }
            },
            '/tile/': {
                // target: 'http://39.106.153.48',
                // target: 'http://ht.ruijingrs.cn',
                target: 'http://grid.cnwfire.com/', //接口域名  服务器
                changeOrigin: true
            },
        }
    }
}