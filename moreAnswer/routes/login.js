var request = require('request')
var dataUrl = require("./dataUrl")
var url_login=dataUrl.login

//登录
request(url_login, function (error, response, body) {
    if(!error && response.statusCode == 200){
       result = JSON.parse(body)  
    } else {
      console.log('error: 数据获取失败,状态码为：'+ response.statusCode)
    }
  }
)
