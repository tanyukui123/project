exports.serachlist = function(req,res){
	res.render('index-serach',{
    	title:'多答-搜索',
    	userNum:20,
    	userList:[{
    		userImage:'../img/exprt-avator.png',
    		userName:'张晓华',
    		personNum:23,
    		money:234
    	},{
    		userImage:'../img/exprt-avator.png',
    		userName:'小花',
    		personNum:23,
    		money:234
    	},{
    		userImage:'../img/exprt-avator.png',
    		userName:'校长',
    		personNum:23,
    		money:234
    	}],
    	auestionNum:12,
    	questionList:[{
            status:0,
            thesame:3,
            questionListen:5,
            questionContent:'您好，刘老师之前在衣服配色方面，我有些疑问，若是红佩兰，或者是黄配绿...'
    	},{
            status:0,
            thesame:3,
            questionListen:5,
            questionContent:'您好，刘老师之前在衣服配色方面，我有些疑问，若是红佩兰，或者是黄配绿...'
    	},{
            status:1,
            thesame:3,
            questionListen:5,
            questionContent:'您好，刘老师之前在衣服配色方面，我有些疑问，若是红佩兰，或者是黄配绿...'
    	}]
  })
}