var request = require('request')
var dataUrl = require("../dataUrl")

exports.ask = function(req,res){
    res.render('find/ask',{
    	title:'多答-发现',
    	tab:'find',
    	question:[{
    		userId:1,
            answererImage:'../img/exprt-avator.png',
            answererName:'张校长',
            answererBrife:'某某大学的校长。。。。。。',
            helpNum:12,
            answererIncome:212,
            questionerImage:'http://wenwen.soso.com/p/20161030/20161030141349-583191339.jpg',
            questionerName:'抓猫的兔子',
            questiontime:'10月20号',
            questionContent:'刘老师一般女生的衣服该怎么搭配才不显得臃肿呢都呢',
            questionWorth:123,
            questionAdd:4,
            questionExpire:2,
            questionStatus:2,
            answerType:0,
            audioUrl:'',
            audioSecond:20,
            answerContent:'地球为什么是圆的？地球为什么是圆的？地球为什么是圆的？地球为什么是圆的？',
    	}],
        questionAddList:[]
    })
}
