var request = require('request')
var dataUrl = require("../dataUrl")

exports.questionAdd = function(req,res){
    res.render('find/questionAdd',{
    	title:'多答-追问',
    	tab:'find',
        userId:1,
        answererImage:'../img/exprt-avator.png',
        answererName:'张校长'
    })
}