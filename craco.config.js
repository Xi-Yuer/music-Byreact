const path = require('path')
const resolve = dir => path.resolve(__dirname,dir)
module.exports = {
    webpack : {
        alias: {
            "@":resolve("src"),
            "components":resolve("src/components")
        },
        "proxy":{
            "/api":{
               "target":"http://123.207.32.32:9001",
               "changeOrigin": true,
               "pathRewrite": {
                "^/api": ""
            }
             }
         }
    }
    
}