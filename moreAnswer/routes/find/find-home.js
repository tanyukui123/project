var request = require('request')
var dataUrl = require("../dataUrl")
var url_categoryList= dataUrl.categoryList
var url_answerList= dataUrl.answerList
var url_questionList= dataUrl.questionList

//主题分类
request(url_categoryList, function (error, response, body) {
    if(!error && response.statusCode == 200){
       result = JSON.parse(body)     
       categoryList = result.data
    } else {
      console.log('error: 数据获取失败,状态码为：'+ response.statusCode)
    }
  }
)
//精选答人
request(url_answerList, function (error, response, body) {
    if(!error && response.statusCode == 200){
       result = JSON.parse(body)        
       answerList = result.data 
    } else {
      console.log('error: 数据获取失败,状态码为：'+ response.statusCode)
    }
  }
)
//精选回答
request(url_questionList, function (error, response, body) {
    if(!error && response.statusCode == 200){
       result = JSON.parse(body) 
       questionList = result.data
    } else {
      console.log('error: 数据获取失败,状态码为：'+ response.statusCode)
    }
  }
)

exports.findList = function(req,res){
    res.render('find/find-home',{
    	title:'多答-发现',
    	tab:'find',
        typeList:categoryList,
    	// typeList:[{
    	// 	categoryImage:'http://wenwen.soso.com/p/20161030/20161030141349-583191339.jpg',
    	// 	categoryName:'国外旅游'
    	// },{
    	// 	categoryImage:'../img/bg-type.png',
    	// 	categoryName:'国外旅游'
    	// },{
    	// 	categoryImage:'../img/bg-type.png',
    	// 	categoryName:'国外旅游'
    	// },{
    	// 	categoryImage:'../img/bg-type.png',
    	// 	categoryName:'国外旅游'
    	// },{
    	// 	categoryImage:'../img/bg-type.png',
    	// 	categoryName:'国外旅游'
    	// },{
    	// 	categoryImage:'../img/bg-type.png',
    	// 	categoryName:'国外旅游'
    	// },{
    	// 	categoryImage:'../img/bg-type.png',
    	// 	categoryName:'国外旅游'
    	// },{
    	// 	categoryImage:'../img/bg-type.png',
    	// 	categoryName:'国外旅游'
    	// }],
        answerList:answerList,
    	// answerList:[{
     //        userImage:'../img/exprt-avator.png',
     //        userNickname:'小丸子',
     //        userBrief:'小丸子是一个动画人物小丸子是一个动画人物',
     //        userAnswerNum:2,
     //        userAccount:1003
    	// },{
     //        userImage:'../img/exprt-avator.png',
     //        userNickname:'小丸子',
     //        userBrief:'小丸子是一个动画人物小丸子是一个动画人物',
     //        userAnswerNum:2,
     //        userAccount:1003
    	// },{
     //        userImage:'../img/exprt-avator.png',
     //        userNickname:'小丸子',
     //        userBrief:'小丸子是一个动画人物小丸子是一个动画人物',
     //        userAnswerNum:2,
     //        userAccount:1003
    	// }],
        questionList:questionList
    	// hotList:[{
    	// 	questionContent:'地球为什么是圆的？',
    	// 	answerType:1,
    	// 	audioSecond:0,
    	// 	toUserId:17,
    	// 	questionStatus:2,
    	// 	questionPersonNum:1,
    	// 	answerContent:'dfsag',
    	// 	toUserName:null,
    	// 	toUserBrief:null,
    	// 	toUserImage:null,
    	// 	questionAmount:2,
    	// 	questionListen:0,
    	// 	questionLevel:0
    	// },{
    	// 	questionContent:'地球为什么是圆的？',
    	// 	answerType:1,
    	// 	audioSecond:0,
    	// 	toUserId:17,
    	// 	questionStatus:2,
    	// 	questionPersonNum:1,
    	// 	answerContent:'dfsag',
    	// 	toUserName:null,
    	// 	toUserBrief:null,
    	// 	toUserImage:null,
    	// 	questionAmount:2,
    	// 	questionListen:0,
    	// 	questionLevel:0
    	// }]
    })
}
