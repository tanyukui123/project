var request = require('request')
var dataUrl = require("./dataUrl")
var url_exprtlist= dataUrl.exprtlist
var url_newtList= dataUrl.newList
var url_hotList= dataUrl.hotList
var url_login=dataUrl.login

//推荐专家
request(url_exprtlist, function (error, response, body) {
    if(!error && response.statusCode == 200){
       result = JSON.parse(body)     
       exprts_list = JSON.parse(result.data)
    } else {
      console.log('error: 数据获取失败,状态码为：'+ response.statusCode)
    }
  }
)
//最新回答
request(url_newtList, function (error, response, body) {
    if(!error && response.statusCode == 200){
       result = JSON.parse(body)     
       new_list = result.data
    } else {
      console.log('error: 数据获取失败,状态码为：'+ response.statusCode)
    }
  }
)
//最热回答
request(url_hotList, function (error, response, body) {
    if(!error && response.statusCode == 200){
       result = JSON.parse(body)     
       hot_list = result.data
    } else {
      console.log('error: 数据获取失败,状态码为：'+ response.statusCode)
    }
  }
)

exports.exprtlist = function(req, res){
  res.render('index',{
    	title:'多答-首页',
    	tab:'home',
    	//exprtList:exprts_list.hotUserList
    	exprtList:[ {
    	     	image: 'http://wenwen.soso.com/p/20161030/20161030141349-583191339.jpg',
                name: '黑夜里的萤火虫',
                id: 1 
            },{ 
	       	    image: 'http://cdn.duitang.com/uploads/item/201608/22/20160822233035_HfCuJ.jpeg',
	            name: '王思聪',
		        id: 2 
		    },{
    	     	image: 'http://wenwen.soso.com/p/20161030/20161030141349-583191339.jpg',
                name: '黑夜里的萤火虫',
                id: 3 
            },{ 
	       	    image: 'http://cdn.duitang.com/uploads/item/201608/22/20160822233035_HfCuJ.jpeg',
	            name: '王思聪',
		        id: 4 
		    }, {
    	     	image: 'http://wenwen.soso.com/p/20161030/20161030141349-583191339.jpg',
                name: '黑夜里的萤火虫',
                id: 5 
            },{ 
	       	    image: 'http://cdn.duitang.com/uploads/item/201608/22/20160822233035_HfCuJ.jpeg',
	            name: '王思聪',
		        id: 6 
		    },{ 
              image: 'http://cdn.duitang.com/uploads/item/201608/22/20160822233035_HfCuJ.jpeg',
              name: '王思聪2',
            id: 7 
        },{ 
              image: 'http://cdn.duitang.com/uploads/item/201608/22/20160822233035_HfCuJ.jpeg',
              name: '王思聪3',
            id: 8 
        }],
      newList:new_list,
      hotList:hot_list
  })
}
