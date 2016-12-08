var request = require('request')
var dataUrl = require("../dataUrl")

exports.question = function(req,res){
    res.render('find/question',{
    	title:'多答-提问',
    	tab:'find',
        userId:1,
        answererImage:'../img/exprt-avator.png',
        answererName:'张校长',
        worth:50,
        priceHalf:15,
        priceAll:30
    })
}