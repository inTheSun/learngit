"use strict";

process.env.DEBUG = process.env.DEBUG || "koa-grace-error:*";

module.exports = {
    // vhost配置
    vhost: {
        "demo": "demo",
        "47.98.191.220": "swan",
        "localhost": "swan",
        "127.0.0.1": "swan",
        // "mrsswan.cn":"swan",
        // "www.mrsswan.cn":"swan"
    },

    // router配置
    router: {
        prefix: {
            test: "/test"
        }
    },

    // proxy配置
    proxy: {
        // 超时配置
        timeout: 15000
    },

    // controller中请求各类数据前缀和域名的键值对
    api: {
        github_api: "https://api.github.com/",
        github: "https://github.com/"
    },

    // mock server配置
    mock: {
        prefix: "/__MOCK__/"
    },

    // 站点相关的配置
    site: {
        env: "production",
        port: 3000,
        hostname: "production"
    },

    // 通用参数，以模板参数的形式传递给模板引擎
    constant: {
        cdn: "",
        domain: {
            demo: "http://127.0.0.1:80",
            swan: "http://47.98.191.220:80"
        },
        token: ""
    },

    // 路径相关的配置
    path: {
        // project
        project: "./app/",
        // 当直接访问域名时的默认路由
        default_path: {
            demo: "/home/index",
            swan: "/home/index"
        },
        // 如果设置jump为false，则当直接访问域名时不重定向到default_path
        default_jump: {
            demo: false,
            swan: false
        }
    },

    // mongo配置
    mongo: {
        options: {
            // mongoose 配置
        },
        api: {
            blog: "mongodb://localhost:27017/blog"
        }
    },

    // 模板引擎配置，默认：swiger
    template: {
        iblog: "nunjucks",
        swan: "nunjucks",
    },

    // 上传文件配置
    xload: {
        path: "files/",
        upload: {
            encoding: "utf-8",
            maxFieldsSize: 2 * 1024 * 1024,
            maxFields: 1000,
            keepExtensions: true
        },
        download: {}
    },

    // csrf配置
    csrf: {
        // 需要进行xsrf防护的模块
        module: []
    },

    // session配置
    session: {}
};
